export function Hero() {
  return (
    <section className="flex flex-col items-center px-6 py-24 text-center">
      <h1 className="max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl">
        Build something amazing
      </h1>
      <p className="mt-6 max-w-xl text-lg text-gray-600">
        A modern landing page template with React, Vite, and Tailwind CSS. Ready to deploy.
      </p>
      <div className="mt-10 flex gap-4">
        <a
          href="#features"
          className="rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
        >
          Get Started
        </a>
        <a
          href="https://github.com"
          className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
