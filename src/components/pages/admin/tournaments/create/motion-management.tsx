import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash } from "lucide-react";

export interface Motion {
  text: string;
  info_slide: string;
  round_number: number;
}

export interface Motions {
  preliminary_motions: Motion[];
  elimination_motions: Motion[];
}

interface MotionManagementProps {
  preliminaryRounds: number;
  eliminationRounds: number;
  motions: Motions;
  setMotions: React.Dispatch<React.SetStateAction<Motions>>;
  disabled?: boolean;
}

type MotionType = 'preliminary' | 'elimination';

const MotionManagement: React.FC<MotionManagementProps> = ({
  preliminaryRounds,
  eliminationRounds,
  motions,
  setMotions,
  disabled,
}) => {
  const [activeTab, setActiveTab] = useState<MotionType>('preliminary');

  const handleAddMotion = (type: MotionType) => {
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
    setMotions(prev => ({
      ...prev,
      [`${type}_motions`]: prev[`${type}_motions`].filter((_, i) => i !== index)
        .map((motion, i) => ({ ...motion, round_number: i + 1 }))
    }));
  };

  const handleMotionChange = (type: MotionType, index: number, field: keyof Motion, value: string | number) => {
    setMotions(prev => ({
      ...prev,
      [`${type}_motions`]: prev[`${type}_motions`].map((motion, i) =>
        i === index ? { ...motion, [field]: value } : motion
      )
    }));
  };

  const renderMotionInputs = (type: MotionType) => {
    const maxRounds = type === 'preliminary' ? preliminaryRounds : eliminationRounds;
    const currentMotions = motions[`${type}_motions`];
    const isMaxMotionsReached = currentMotions.length >= maxRounds;

    return (
      <div className="space-y-4">
        <div className="max-h-[60vh] overflow-y-auto pr-4 space-y-4">
          {currentMotions.map((motion, index) => (
            <div
              key={`${type}-motion-${index}`}
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

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" type="button" className="w-full">
          Manage Motions
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Manage Tournament Motions</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="preliminary" className="w-full" onValueChange={(value) => setActiveTab(value as MotionType)}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="preliminary">Preliminary Rounds</TabsTrigger>
            <TabsTrigger value="elimination">Elimination Rounds</TabsTrigger>
          </TabsList>
          <TabsContent value="preliminary" className="mt-4">
            {renderMotionInputs("preliminary")}
          </TabsContent>
          <TabsContent value="elimination" className="mt-4">
            {renderMotionInputs("elimination")}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default MotionManagement;
