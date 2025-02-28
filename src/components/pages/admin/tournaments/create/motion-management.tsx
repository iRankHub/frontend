import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Eye, Plus, Trash } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export interface Motion {
  text: string;
  info_slide: string;
  round_number: number;
}

export interface Motions {
  preliminary_motions: Motion[];
  elimination_motions: Motion[];
}

export type MotionManagementMode = 'edit' | 'view';

interface MotionManagementProps {
  preliminaryRounds: number;
  eliminationRounds: number;
  motions: Motions;
  setMotions?: React.Dispatch<React.SetStateAction<Motions>>;
  disabled?: boolean;
  mode?: MotionManagementMode;
}

type MotionType = 'preliminary' | 'elimination';

const MotionManagement: React.FC<MotionManagementProps> = ({
  preliminaryRounds,
  eliminationRounds,
  motions,
  setMotions,
  disabled = false,
  mode = 'edit', // Default to edit mode for backward compatibility
}) => {
  const [activeTab, setActiveTab] = useState<MotionType>('preliminary');
  const [open, setOpen] = useState(false);

  const isViewOnly = mode === 'view';

  // Ensure setMotions is available in edit mode
  if (mode === 'edit' && !setMotions) {
    console.warn('MotionManagement: setMotions is required in edit mode');
  }

  const handleAddMotion = (type: MotionType) => {
    if (isViewOnly || !setMotions) return;

    const maxRounds = type === 'preliminary' ? preliminaryRounds : eliminationRounds;
    const currentMotions = motions[`${type}_motions`];

    if (currentMotions.length >= maxRounds) {
      return; // Do not allow adding more motions than rounds
    }

    const newMotion: Motion = {
      text: "",
      info_slide: "",
      round_number: currentMotions.length + 1
    };

    setMotions(prev => ({
      ...prev,
      [`${type}_motions`]: [...prev[`${type}_motions`], newMotion]
    }));
  };

  const handleRemoveMotion = (type: MotionType, index: number) => {
    if (isViewOnly || !setMotions) return;

    setMotions(prev => ({
      ...prev,
      [`${type}_motions`]: prev[`${type}_motions`].filter((_, i) => i !== index)
        .map((motion, i) => ({ ...motion, round_number: i + 1 }))
    }));
  };

  const handleMotionChange = (type: MotionType, index: number, field: keyof Motion, value: string | number) => {
    if (isViewOnly || !setMotions) return;

    setMotions(prev => ({
      ...prev,
      [`${type}_motions`]: prev[`${type}_motions`].map((motion, i) =>
        i === index ? { ...motion, [field]: value } : motion
      )
    }));
  };

  // View mode rendering - simple, clean cards for viewing motions
  const renderViewMotions = (type: MotionType) => {
    const currentMotions = motions[`${type}_motions`];

    if (currentMotions.length === 0) {
      return (
        <div className="p-6 text-center text-muted-foreground">
          No motions have been added for this round type.
        </div>
      );
    }

    return (
      <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
        {currentMotions.map((motion, index) => (
          <Card key={`${type}-motion-view-${index}`} className="border">
            <CardHeader className="py-3 px-4 bg-muted/40 flex flex-row justify-between items-center">
              <h4 className="font-medium">Round {motion.round_number}</h4>
            </CardHeader>
            <CardContent className="p-4 space-y-3">
              <div>
                <h5 className="text-sm font-medium text-muted-foreground mb-1">Motion</h5>
                <p className="text-foreground">{motion.text || "No motion set"}</p>
              </div>
              {motion.info_slide && (
                <div>
                  <h5 className="text-sm font-medium text-muted-foreground mb-1">Description</h5>
                  <p className="text-foreground text-sm">{motion.info_slide}</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  // Edit mode rendering - form inputs for editing motions
  const renderEditMotions = (type: MotionType) => {
    const maxRounds = type === 'preliminary' ? preliminaryRounds : eliminationRounds;
    const currentMotions = motions[`${type}_motions`];
    const isMaxMotionsReached = currentMotions.length >= maxRounds;

    return (
      <div className="space-y-4">
        <div className="max-h-[60vh] overflow-y-auto pr-4 space-y-4">
          {currentMotions.map((motion, index) => (
            <div
              key={`${type}-motion-edit-${index}`}
              className="flex gap-4 items-start bg-background p-4 rounded-lg border"
            >
              <div className="flex-1 space-y-2">
                <Input
                  placeholder="Enter motion"
                  value={motion.text}
                  onChange={(e) => handleMotionChange(type, index, "text", e.target.value)}
                  className="w-full disabled:opacity-100"
                  disabled={disabled}
                />
                <Textarea
                  placeholder="Describe the motion"
                  value={motion.info_slide}
                  onChange={(e) => handleMotionChange(type, index, "info_slide", e.target.value)}
                  className="w-full h-20 disabled:opacity-100"
                  disabled={disabled}
                />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-24 text-sm text-muted-foreground text-center">
                  Round {motion.round_number}
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveMotion(type, index)}
                  disabled={disabled}
                >
                  <Trash className="w-4 h-4 text-destructive" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <Button
          type="button"
          variant="outline"
          onClick={() => handleAddMotion(type)}
          className="w-full mt-4"
          disabled={isMaxMotionsReached || disabled}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Motion
        </Button>
      </div>
    );
  };

  // Decide which rendering function to use based on mode
  const renderMotions = isViewOnly ? renderViewMotions : renderEditMotions;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          type="button"
          className={cn(
            "w-full",
            isViewOnly && "bg-background hover:bg-background/80"
          )}
        >
          {isViewOnly ? (
            <>
              <Eye className="w-4 h-4 mr-2" />
              View Motions
            </>
          ) : (
            <>
              Manage Motions
            </>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>
            {isViewOnly ? "Tournament Motions" : "Manage Tournament Motions"}
          </DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="preliminary" className="w-full" onValueChange={(value) => setActiveTab(value as MotionType)}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="preliminary">Preliminary Rounds</TabsTrigger>
            <TabsTrigger value="elimination">Elimination Rounds</TabsTrigger>
          </TabsList>
          <TabsContent value="preliminary" className="mt-4">
            {renderMotions("preliminary")}
          </TabsContent>
          <TabsContent value="elimination" className="mt-4">
            {renderMotions("elimination")}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default MotionManagement;
