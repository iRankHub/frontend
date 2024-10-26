import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/tables/data-table-column-header";
import { TeamRanking } from "@/lib/grpc/proto/debate_management/debate_pb";

export const columns: ColumnDef<TeamRanking.AsObject>[] = [
  {
    accessorKey: "teamId",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Place" />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full pr-5 text-center">
          <span className="max-w-[200px] truncate font-medium">
            {row.index + 4}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "teamName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Names" />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full pr-5 text-center">
          <span className="max-w-[200px] truncate font-medium">
            {row.getValue("teamName")}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "schoolNamesList",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Schools"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      const extractSchoolName = (schoolNameRaw: unknown): string => {
        if (Array.isArray(schoolNameRaw) && schoolNameRaw.length > 0) {
          // Take the first element of the array
          const firstSchool = schoolNameRaw[0];
          if (typeof firstSchool === 'string') {
            // Remove the curly braces and quotes
            return firstSchool.replace(/^{"|"}$/g, '').replace(/\\"/g, '');
          }
        }
        return 'School name unavailable';
      };
      
      const SchoolNameCell = ({ row }: { row: any }) => {
        const schoolName = extractSchoolName(row.getValue("schoolNamesList"));
      
        return (
          <div className="w-full pr-5 text-center">
            <span className="text-sm">{schoolName}</span>
          </div>
        );
      };
      return <SchoolNameCell row={row} />;
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableHiding: false,
  },
  {
    accessorKey: "totalPoints",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Points"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full pr-5 text-center">
          <span className="text-sm">{row.getValue("totalPoints")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "wins",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Wins"
        className="justify-center text-xs"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full pr-5 text-center">
          <span className="text-sm">{row.getValue("wins")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "averageRank",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Rank"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full pr-5 text-center">
          <span className="text-sm">
            {/* if its a float, convert to an int */}
            {parseInt(String(row.getValue("averageRank")))}
          </span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
];
