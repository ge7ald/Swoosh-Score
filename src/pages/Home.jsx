import Nav from "../components/nav";
import Shop from "../components/Shop-Comp";
import Hero from "../components/Hero";
import Jerseys from "../components/jerseysCard";
import "../App.css";

function Home() {
  return (
    <div className="min-h-screen bg-background text-text">
      <Nav />
        

      <main className="pt-28 sm:pt-32 px-4 sm:px-10 pb-24">
        <Hero />
        {/*
        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
        

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-surface p-5 text-center">
                <p className="text-sm text-text-muted">Authentic kits</p>
                <p className="mt-2 font-semibold">Official team editions</p>
              </div>
              <div className="rounded-3xl bg-surface p-5 text-center">
                <p className="text-sm text-text-muted">Premium fabric</p>
                <p className="mt-2 font-semibold">Stay cool on game day</p>
              </div>
              <div className="rounded-3xl bg-surface p-5 text-center">
                <p className="text-sm text-text-muted">Fast delivery</p>
                <p className="mt-2 font-semibold">Ships worldwide</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-gradient-to-br from-primary/15 to-accent p-8 shadow-[0_30px_80px_rgba(239,68,68,0.12)]">
            <div className="flex items-center justify-between text-sm font-semibold text-text-muted mb-6">
              <span>Featured Jersey</span>
              <span className="rounded-full bg-surface/80 px-3 py-1">
                Limited Edition
              </span>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-lg">
              <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-primary/10 blur-2xl" />
              <div className="relative z-10 flex flex-col gap-6">
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.25em] text-primary font-bold">
                    2026 Classic
                  </p>
                  <h2 className="text-3xl font-black">
                    World Cup Replica Jersey
                  </h2>
                </div>
                <p className="text-text-muted leading-7">
                  Lightweight performance fabric, authentic crest detail, and a
                  dynamic home kit design crafted for fans.
                </p>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-4xl font-black">$119</p>
                    <p className="text-sm text-text-muted">
                      Free returns in 30 days
                    </p>
                  </div>
                  <button className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-surface hover:bg-primary-hover transition">
                    <i className="bx bx-cart"></i>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div> 
        </section> */}

        <section id="products" className="mt-20" data-testid="home-products">
          <div className="flex flex-col gap-4 mb-8">
            <div>
              <div>
              <span className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">
                Top Picks
              </span>
              </div>
              
              <h2 className="text-3xl font-black mt-3">Jerseys you'll love</h2>
              
            </div>
            <p className="max-w-xl text-text-muted">
              Browse our most popular jerseys, built with authentic details and
              trusted by fans worldwide.
            </p>
            <Jerseys />
          </div>
          <Shop />
        </section>
      </main>
    </div>
  );
}

export default Home;