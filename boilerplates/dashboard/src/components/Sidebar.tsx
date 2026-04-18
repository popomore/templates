import { Link } from "@tanstack/react-router";

const navItems = [
  { to: "/", label: "Dashboard" },
  { to: "/users", label: "Users" },
] as const;

export function Sidebar() {
  return (
    <aside className="w-60 border-r border-gray-200 bg-white">
      <div className="p-4 text-lg font-semibold">myapp</div>
      <nav className="space-y-1 px-2">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="block rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 [&.active]:bg-gray-100 [&.active]:font-medium"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
