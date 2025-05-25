import React from "react";
import Progress from "components/progress";
import Card from "components/card";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

// Nurse data with image paths as provided
const nurseTableData = [
  {
    name: ["Nurse Anjali Sharma", "https://static.vecteezy.com/system/resources/previews/043/510/063/large_2x/nurse-avatar-profile-icon-vector.jpg"],
    experience: "5 yrs",
    rating: 85,
  },
  {
    name: ["Nurse Meena Patel", "https://static.vecteezy.com/system/resources/previews/043/510/063/large_2x/nurse-avatar-profile-icon-vector.jpg"],
    experience: "3 yrs",
    rating: 75,
  },
  {
    name: ["Nurse Rakesh Kumar", "https://static.vecteezy.com/system/resources/previews/043/510/063/large_2x/nurse-avatar-profile-icon-vector.jpg"],
    experience: "7 yrs",
    rating: 90,
  },
  {
    name: ["Nurse Kavita Joshi", "https://static.vecteezy.com/system/resources/previews/043/510/063/large_2x/nurse-avatar-profile-icon-vector.jpg"],
    experience: "2 yrs",
    rating: 65,
  },
  {
    name: ["Nurse Arjun Roy", "https://static.vecteezy.com/system/resources/previews/043/510/063/large_2x/nurse-avatar-profile-icon-vector.jpg"],
    experience: "6 yrs",
    rating: 82,
  },
];

const columnHelper = createColumnHelper();

function CheckTable() {
  const [sorting, setSorting] = React.useState([]);
  const [data] = React.useState(() => [...nurseTableData]);

  const columns = [
    columnHelper.accessor("name", {
      id: "name",
      header: () => (
        <span className="text-sm font-semibold text-gray-600 dark:text-white">Name</span>
      ),
      cell: (info) => (
        <div className="flex items-center gap-3">
          <img
            src={info.getValue()[1]}
            alt={info.getValue()[0]}
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="text-sm font-medium text-gray-800 dark:text-white">
            {info.getValue()[0]}
          </span>
        </div>
      ),
    }),
    columnHelper.accessor("experience", {
      id: "experience",
      header: () => (
        <span className="text-sm font-semibold text-gray-600 dark:text-white">Experience</span>
      ),
      cell: (info) => (
        <span className="text-sm text-gray-700 dark:text-white">
          {info.getValue()}
        </span>
      ),
    }),
    columnHelper.accessor("rating", {
      id: "rating",
      header: () => (
        <span className="text-sm font-semibold text-gray-600 dark:text-white">Rating</span>
      ),
      cell: (info) => (
        <div className="w-[80px]">
          <Progress width="w-20" value={info.getValue()} />
        </div>
      ),
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <Card extra="w-full overflow-auto px-6">
      <header className="flex items-center justify-between py-4">
        <h2 className="text-xl font-bold text-navy-700 dark:text-white">Nurse Details</h2>
        <button className="rounded bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600 dark:bg-white/10 dark:text-white dark:hover:bg-white/20">
          See all
        </button>
      </header>

      <table className="w-full text-left">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border-b border-gray-200 dark:border-white/20">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  className="cursor-pointer px-4 py-2 text-xs font-bold uppercase text-gray-500 dark:text-white"
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="border-b border-gray-100 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5"
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-3 text-sm">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

export default CheckTable;
