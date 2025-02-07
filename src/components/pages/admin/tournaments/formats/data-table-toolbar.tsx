import { DataTableFacetedFilter } from "@/components/tables/data-table-faceted-filter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useMemo, useState } from "react";
import { useUserStore } from "@/stores/auth/auth.store";
import { createTournamentFormatSchema } from "@/lib/validations/admin/tournaments/create-tournament-format.schema";
import { z } from "zod";
import { createTournamentFormat } from "@/core/tournament/formats";
import { useFormatsStore } from "@/stores/admin/tournaments/formats.store";
import { TournamentFormat } from "@/lib/grpc/proto/tournament_management/tournament_pb";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  searchTerm: string;
  isLoading: boolean;
}

type TournamentFormatInput = z.infer<typeof createTournamentFormatSchema>;

export function DataTableToolbar<TData>({
  table,
  searchTerm,
  isLoading,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const { toast } = useToast();
  const [loading, setLoading] = useState<boolean>(false);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const { user } = useUserStore((state) => state);
  const { addSingleFormat } = useFormatsStore((state) => state);
  const [inputValue, setInputValue] = useState(searchTerm);

  const form = useForm<TournamentFormatInput>({
    resolver: zodResolver(createTournamentFormatSchema),
    defaultValues: {
      description: "",
      format_name: "",
    },
  });

  useEffect(() => {
    setInputValue(searchTerm);
  }, [searchTerm]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    window.dispatchEvent(new CustomEvent('search-change', { detail: newValue }));
  };

  const handleClearSearch = () => {
    setInputValue('');
    window.dispatchEvent(new CustomEvent('search-change', { detail: '' }));
  };

  const handleResetAll = () => {
    table.resetColumnFilters();
    window.dispatchEvent(new CustomEvent('reset-table'));
  };

  const createFormat = async (data: TournamentFormatInput) => {
    if (!user) return;

    if (!isNaN(Number(data.format_name))) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Format name can't only be numbers",
        action: <ToastAction altText="Close" className="bg-primary text-white">Close</ToastAction>,
      });
      return;
    }

    if (isNaN(Number(data.speakers_per_team))) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Speakers per team must be a number",
        action: <ToastAction altText="Close" className="bg-primary text-white">Close</ToastAction>,
      });
      return;
    }

    const options = {
      token: user.token,
      format_name: data.format_name,
      description: data.description,
      speakers_per_team: Number(data.speakers_per_team),
    };

    setLoading(true);
    try {
      const res = await createTournamentFormat({ ...options });
      form.reset();
      addSingleFormat(res.format as TournamentFormat.AsObject);
      setDialogOpen(false);
      toast({
        variant: "success",
        title: "Success",
        description: "Tournament format created successfully",
        action: <ToastAction altText="Close" className="bg-primary text-white">Close</ToastAction>,
      });
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: err.message,
        action: <ToastAction altText="Close" className="bg-primary text-white">Close</ToastAction>,
      });
    } finally {
      setLoading(false);
    }
  };

  const speakersOptions = useMemo(() => {
    const column = table.getColumn("speakersPerTeam");
    if (!column) return [];

    return Array.from(
      new Set(
        table
          .getFilteredRowModel()
          .rows.map((row) => row.getValue("speakersPerTeam"))
      )
    )
      .filter((value) => typeof value === "number")
      .sort((a, b) => (a as number) - (b as number))
      .map((value) => ({
        label: String(value) + " speakers",
        value: value as number,
      }));
  }, [table]);

  return (
    <div className="w-full bg-brown p-4 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:space-x-4 flex-1">
        <div className="relative w-full md:w-80">
          <Input
            placeholder="Search format..."
            value={inputValue}
            onChange={handleInputChange}
            className={cn("h-9 pr-8", isLoading && "opacity-50")}
            disabled={isLoading}
          />
          {inputValue && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearSearch}
              className="absolute right-0 top-0 h-9 px-2 text-white hover:bg-transparent"
              disabled={isLoading}
            >
              <Cross2Icon className="h-4 w-4" />
              <span className="sr-only">Clear search</span>
            </Button>
          )}
        </div>

        <div className="flex items-center space-x-2">
          {table.getColumn("speakersPerTeam") && (
            <DataTableFacetedFilter
              column={table.getColumn("speakersPerTeam")}
              title="speakers"
              options={speakersOptions}
            />
          )}
          {(isFiltered || inputValue) && (
            <Button
              variant="ghost"
              onClick={handleResetAll}
              className="h-9 px-3 text-white hover:bg-white/10"
              disabled={isLoading}
            >
              Reset
              <Cross2Icon className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger asChild>
          <Button
            type="button"
            data-onboarding-id="add-format-button"
            className="w-full md:w-auto text-background dark:text-foreground dark:hover:text-background gap-2 text-sm font-medium h-9 hover:bg-white hover:text-foreground group"
          >
            <Icons.add className="w-4 h-4 text-white group-hover:text-foreground" />
            Add New Format
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Create Tournament Format</DialogTitle>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={(...args) => void form.handleSubmit(createFormat)(...args)} className="space-y-4">
              <FormField
                control={form.control}
                name="format_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Format Name
                      <span className="text-primary"> *</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Eg. World Schools Debate" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Description
                      <span className="text-primary"> *</span>
                    </FormLabel>
                    <FormControl>
                      <Textarea placeholder="Type your message here." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="speakers_per_team"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Speakers per team
                      <span className="text-primary"> *</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="3 speakers"
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter>
                <Button
                  type="submit"
                  className="w-full sm:w-auto"
                  disabled={loading}
                >
                  {loading && (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Create Format
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
