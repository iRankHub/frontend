import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { columns } from "./columns";
import { DataTable } from "@/components/tables/data-table";
import { billings } from "@/components/tables/data/tasks";

function Billings() {
  // const { user } = useUserStore((state) => state);

  // useEffect(() => {
  //   if (!user) return;

  // }, [user]);
  return (
    <div className="w-full rounded-md overflow-hidden border border-muted">
      <div className="flex items-center justify-between flex-wrap gap-3 p-5 py-4 bg-brown">
        <form action="#" className="flex items-center gap-3">
          <Input
            type="search"
            placeholder="Search name or ID..."
            className="w-64 h-8"
          />
          <Button
            type="button"
            className="border border-dashed border-white text-white gap-2 text-sm font-medium h-8 hover:bg-white hover:text-foreground group"
          >
            <Icons.addCircle className="text-white w-3.5 h-3.5 group-hover:text-foreground" />
            Teams
            <span className="sr-only">Teams</span>
          </Button>
          <Button
            type="button"
            variant={"default"}
            className="border border-dashed border-white gap-2 h-8 font-medium hover:bg-white hover:text-foreground group text-sm items-center"
          >
            <Icons.addCircle className="text-white w-3.5 h-3.5 group-hover:text-foreground" />
            Status
            <span className="sr-only">Status</span>
          </Button>
        </form>
      </div>
      <div className="w-full bg-background p-8 px-5">
        <DataTable data={billings} columns={columns} />
      </div>
    </div>
  );
}

export default Billings;
