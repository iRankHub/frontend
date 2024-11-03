import { columns } from "./columns";
import { DataTable } from "@/components/tables/data-table";
import { useRegistrationStore } from "@/stores/admin/tournaments/billings.store";
import { DataTableToolbar } from "./data-table-toolbar";

function Billings() {
  const {registrations} = useRegistrationStore((state) => state)
  return (
    <div className="w-full rounded-md overflow-hidden border border-muted">
      <DataTable
        data={registrations}
        columns={columns}
        DataTableToolbar={DataTableToolbar}
      />
    </div>
  );
}

export default Billings;
