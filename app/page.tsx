export default function Home() { /* all comments are mine */
  return (
    <div className="min-h-screen">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold tracking-tight text-white">
            Tailwind CSS Tutorial
          </h1>
          <span className="text-sm text-gray-400 uppercase tracking-wide">
            UI Guide
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="space-y-4">
          <span className="inline-block text-sm text-blue-400 uppercase tracking-widest">
            Tutorial
          </span>

          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">
            How to Use{" "}
            <span className="text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.4)]">
              Tailwind CSS
            </span>
          </h2>

          {/* Author */}
          <p className="text-sm text-gray-400 italic">
            by: Gian Edward Sambas
          </p>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
            Tailwind CSS is a utility-first framework that helps you build modern,
            responsive interfaces efficiently. This tutorial breaks down its
            core concepts step-by-step, making it easier to understand and apply
            in real projects.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 py-20 space-y-24">

        {/* What is Tailwind */}
        <section className="space-y-6">
          <h3 className="text-3xl font-semibold text-white">
            What is Tailwind CSS?
          </h3>

          <div className="bg-neutral-900/60 border border-white/10 rounded-xl p-8">
            <p className="text-gray-300 leading-relaxed max-w-3xl text-lg">
              Tailwind CSS is a utility-first CSS framework that provides
              low-level classes for spacing, color, typography, and layout.
              Instead of writing large CSS files, you build designs by combining
              small, reusable utility classes directly in your markup.
            </p>
          </div>
        </section>

        {/* Installation */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <span className="text-sm px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400">
              Step 1
            </span>
            <h3 className="text-3xl font-semibold text-white">
              Installation
            </h3>
          </div>

          <div className="bg-neutral-900/60 border border-white/10 rounded-xl p-8 space-y-5">
            <p className="text-gray-300 text-lg">
              To start using Tailwind CSS, you can install it using npm.
              This setup is commonly used with modern frameworks like Next.js.
            </p>

            <pre className="font-mono text-sm md:text-base bg-black border border-white/10 p-5 rounded-lg text-gray-200 overflow-x-auto">
{`npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`}
            </pre>
          </div>
        </section>

        {/* Utility Classes */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <span className="text-sm px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400">
              Step 2
            </span>
            <h3 className="text-3xl font-semibold text-white">
              Utility Classes
            </h3>
          </div>

          <p className="text-gray-300 max-w-3xl text-lg">
            Utility classes are the core idea behind Tailwind CSS. Each class
            applies a single style, such as margin, padding, color, or font size.
            By combining them, you can create fully customized designs.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="px-6 py-2.5 text-base rounded-full border border-white/20 text-gray-200
                               hover:bg-white hover:text-black transition">
              Default Button
            </button>
            <button className="px-6 py-2.5 text-base rounded-full bg-blue-500 text-black
                               hover:bg-blue-400 transition shadow-md">
              Primary Button
            </button>
          </div>
        </section>

        {/* Responsive Design */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <span className="text-sm px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400">
              Step 3
            </span>
            <h3 className="text-3xl font-semibold text-white">
              Responsive Design
            </h3>
          </div>

          <p className="text-gray-300 max-w-3xl text-lg">
            Tailwind makes responsive design simple by using prefixes such as
            <code> sm:</code>, <code> md:</code>, and <code> lg:</code>.
            These prefixes apply styles only at certain screen sizes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Mobile", "Tablet", "Desktop"].map((item) => (
              <div
                key={item}
                className="bg-neutral-900/60 border border-white/10 rounded-xl p-6
                           text-center hover:-translate-y-1 hover:shadow-lg transition"
              >
                <h4 className="text-lg font-semibold text-white mb-1">
                  {item}
                </h4>
                <p className="text-sm text-gray-400">
                  Screen-based layout example
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Tailwind */}
<section className="space-y-10">
  <div className="space-y-3">
    <h3 className="text-3xl font-semibold text-white">
      Why Use Tailwind CSS?
    </h3>
    <p className="text-gray-400 max-w-3xl text-lg">
      Tailwind CSS is popular among developers because it focuses on productivity,
      consistency, and scalability when building modern user interfaces.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Card 1 */}
    <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6
                    hover:-translate-y-1 hover:shadow-xl transition">
      <h4 className="text-lg font-semibold text-white mb-2">
        🚀 Faster Development
      </h4>
      <p className="text-gray-400 text-base leading-relaxed">
        Utility classes eliminate the need to constantly switch between HTML and CSS,
        allowing you to build layouts much faster.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6
                    hover:-translate-y-1 hover:shadow-xl transition">
      <h4 className="text-lg font-semibold text-white mb-2">
        🎨 Consistent Design
      </h4>
      <p className="text-gray-400 text-base leading-relaxed">
        Tailwind enforces consistent spacing, colors, and typography, helping teams
        maintain a unified design system.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6
                    hover:-translate-y-1 hover:shadow-xl transition">
      <h4 className="text-lg font-semibold text-white mb-2">
        📱 Built-in Responsiveness
      </h4>
      <p className="text-gray-400 text-base leading-relaxed">
        Responsive utilities like <code>md:</code> and <code>lg:</code> make it easy
        to adapt layouts for different screen sizes.
      </p>
    </div>

    {/* Card 4 */}
    <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6
                    hover:-translate-y-1 hover:shadow-xl transition">
      <h4 className="text-lg font-semibold text-white mb-2">
        ⚙️ Framework Friendly
      </h4>
      <p className="text-gray-400 text-base leading-relaxed">
        Tailwind integrates seamlessly with frameworks like Next.js, React, and Vue,
        making it ideal for modern web development.
      </p>
    </div>
  </div>
</section>


      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-500">
          Built with Next.js and Tailwind CSS · Tutorial Blog Project
        </div>
      </footer>

    </div>
  );
}
