export function Footer() {
  return (
    <footer className="border-t border-gray-100 px-6 py-8">
      <p className="text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} myapp. All rights reserved.
      </p>
    </footer>
  );
}
