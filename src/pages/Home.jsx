import Nav from "../components/nav";
import Shop from "../components/Shop-Comp";
import Hero from "../components/Hero";
import Jerseys from "../components/jerseysCard";
import "../App.css";
import { useState } from "react";

function Home( {cartItem, numOfCartItems, updateCart} ) {

  return (
    <div className="min-h-screen bg-background text-text">
      <Nav numOfCartItems={numOfCartItems} />
        

      <main className="pt-28 sm:pt-32 px-4 sm:px-10 pb-24">
        <Hero />
       

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
            <Jerseys cartItem={cartItem} updateCart={updateCart}/>
          </div>
          <Shop />
        </section>
      </main>
    </div>
  );
}

export default Home;