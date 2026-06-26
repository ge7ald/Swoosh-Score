import { useState } from "react";
import Nav from "../components/nav";

function CartItems({ item, CheckIfInCart, numOfCartItems, totalPrice, onToggleRemove }) {
    
   const newOrder = () => {
      const phone = "2347012763719";

    const message = item.map((jersey) => 
`*i wan buy*

Jersey: ${jersey.name}
Price: ${jersey.price}
Quantity: ${jersey.quantity}

Image:
${{/*window.location.origin*/}} ${jersey.image}




Total: ${totalPrice}
`
    ) 


    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
   }

   
 
  return (
    <div className="min-h-screen bg-background text-text ">
      <Nav numOfCartItems={numOfCartItems} />

      <main className="pt-28 sm:pt-32 px-4 sm:px-10 pb-24">
        <h1>Cart</h1>

        <ul className="flex flex-col gap-10">
          {item.map((jersey) => (
            <Cart
              key={jersey.id}
              jersey={jersey}
              CheckIfInCart={CheckIfInCart}
              onToggleRemove={onToggleRemove}
            />
          ))}
        </ul>
      </main>
      {totalPrice > 0 && 
      <button className="fixed bottom-30 left-1/2 -translate-x-1/2 bg-accent w-[90%] text-center py-4 rounded-3xl text-lg font-semibold" onClick={newOrder}>
        Buy <span className="text-primary text-lg">₦{totalPrice.toLocaleString()}</span>
      </button>}
    </div>
  );
}

function Cart({ jersey, onToggleRemove }) {
    
  return (
    <li>
      <article className="grid grid-cols-[120px_1fr_auto] grid-rows-[120px] items-center gap-4 rounded-4xl">
        <img
          src={jersey.image}
          alt={jersey.name}
          className="w-full h-full object-cover rounded-lg"
        />

        <div className="flex flex-col justify-between gap-10">
          <div>
            <h2 className="font-semibold text-[1.2rem] text-text">
              {jersey.team}
            </h2>

            <p className="text-text-muted">
              ₦{Number(jersey.price).toLocaleString()}
            </p>
          </div>

          <div className="flex justify-end items-start gap-3">
            <button type="button" className="text-red-500" onClick={() => onToggleRemove(jersey.id)}>
              Remove
            </button>
            {/* 
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="border border-primary px-2 rounded"
              >
                -
              </button>

              <span className="font-bold">{jersey.quantities}</span>

              <button
                type="button"
                className="bg-primary px-2 rounded"
                
              >
                +
              </button>
            </div>
            */}
          </div>
        </div>
      </article>
    </li>
  );
}

export default CartItems;
