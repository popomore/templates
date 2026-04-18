const features = [
  {
    title: "Fast",
    description: "Built with Vite for instant hot module replacement and optimized builds.",
  },
  {
    title: "Modern",
    description: "React 19, TypeScript, and Tailwind CSS 4 for a modern developer experience.",
  },
  {
    title: "Deployable",
    description: "Ready to deploy to Cloudflare Pages with zero configuration.",
  },
];

export function Features() {
  return (
    <section id="features" className="border-t border-gray-100 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold">Features</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
