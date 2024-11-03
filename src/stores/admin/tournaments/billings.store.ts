import { ListRegistrationItem } from "@/lib/grpc/proto/tournament_management/tournament_pb";
import { create } from "zustand";

interface RegistrationsStore {
    registrations: ListRegistrationItem.AsObject[];
    setRegistrations: (registrations: ListRegistrationItem.AsObject[]) => void;
    tournament_id: number | null;
    setTournament_id: (id: number) => void;
    updateRegistration: (registrationId: number, updateData: Partial<ListRegistrationItem.AsObject>) => void;
    // updateRegistrationsStatus: (registrationID: number, newStatus: string) => void;
    // deleteRegistration: (registrationID: number) => void;
}

export const useRegistrationStore = create<RegistrationsStore>((set) => ({
    registrations: [],
    tournament_id: null,
    setRegistrations: (registrations: ListRegistrationItem.AsObject[]) => 
        set({ registrations }),
    setTournament_id: (id: number) => 
        set({ tournament_id: id }),
    updateRegistration: (registrationId: number, updateData: Partial<ListRegistrationItem.AsObject>) =>
        set((state) => ({
            registrations: state.registrations.map((registration) =>
                registration.registrationId === registrationId
                    ? { ...registration, ...updateData }
                    : registration
            ),
        })),
}));