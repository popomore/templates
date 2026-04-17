import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "../components/DataTable";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const columnHelper = createColumnHelper<User>();

const columns = [
  columnHelper.accessor("id", { header: "ID" }),
  columnHelper.accessor("name", { header: "Name" }),
  columnHelper.accessor("email", { header: "Email" }),
  columnHelper.accessor("role", { header: "Role" }),
];

const data: User[] = [
  { id: 1, name: "Alice", email: "alice@example.com", role: "Admin" },
  { id: 2, name: "Bob", email: "bob@example.com", role: "User" },
  { id: 3, name: "Charlie", email: "charlie@example.com", role: "User" },
];

export function UsersPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Users</h1>
      <DataTable data={data} columns={columns} />
    </div>
  );
}
