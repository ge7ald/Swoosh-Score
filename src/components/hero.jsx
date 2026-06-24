


function Hero() {
  return (
    <>
      <div className="max-w-xl">
        <span className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-semibold mb-6">
          New drop • Authentic jerseys
        </span>

        <h1 className="text-5xl sm:text-6xl font-black leading-[1.05] tracking-[-0.04em]">
          Score the latest jersey styles for every fan.
        </h1>

        <p className="mt-6 text-text-muted text-lg leading-8">
          Shop premium basketball and football jerseys with stadium-ready fit,
          bold colors, and fast shipping.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
          <a
            href="#products"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-surface shadow-lg shadow-primary/20 hover:bg-primary-hover transition"
          >
            Shop Jerseys
          </a>

          <a
            href="#featured"
            className="inline-flex items-center justify-center rounded-full border border-border px-8 py-4 text-sm font-semibold text-text hover:bg-surface transition"
          >
            Explore Collections
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;