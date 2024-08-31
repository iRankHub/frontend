import { TournamentFormat } from "@/lib/grpc/proto/tournament_management/tournament_pb";
import { create } from "zustand";

interface FormatsStore {
    formats: TournamentFormat.AsObject[];
    setFormats: (formats: TournamentFormat.AsObject[]) => void;
    updateFormat: (formatId: number, newFormat: TournamentFormat.AsObject) => void;
    addSingleFormat: (format: TournamentFormat.AsObject) => void;
    deleteFormat: (formatId: number) => void;
}

export const useFormatsStore = create<FormatsStore>((set) => ({
    formats: [],
    setFormats: (formats: TournamentFormat.AsObject[]) => set({ formats }),
    updateFormat: (formatId: number, newFormat: TournamentFormat.AsObject) => {
        set((state: FormatsStore) => {
            const newFormats = state.formats.map((format) => {
                if (format.formatId === formatId) {
                    return { ...format,  ...newFormat };
                }
                return format;
            });
            return { formats: newFormats };
        });
    },
    addSingleFormat: (format: TournamentFormat.AsObject) => {
        set((state: FormatsStore) => {
            const newFormats = [...state.formats, format];
            return { formats: newFormats };
        });
    },
    deleteFormat: (formatId: number) => {
        set((state: FormatsStore) => {
            const newFormats = state.formats.filter((format) => format.formatId !== formatId);
            return { formats: newFormats };
        });
    },
}));