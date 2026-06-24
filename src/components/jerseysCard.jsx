import jerseys from "./jerseys.json";

function Jerseys() {
  return (
    <div className="flex gap-6 overflow-x-auto pb-4">
      {jerseys.map((jersey) => (
        <JerseysCard key={jersey.id} jersey={jersey} />
      ))}
    </div>
  );
}

function JerseysCard({ jersey }) {
  return (
    <div className="relative flex-shrink-0 w-80 overflow-hidden rounded-[2rem] bg-white p-8 shadow-lg">
      <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-primary/10 blur-2xl" />

      <div className="relative flex flex-col gap-6 ">
        <div className="w-full ">
          <img
            src={jersey.image}
            alt={jersey.name}
            className="w-full h-56 object-cover rounded-[2rem]"
          />
        </div>
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-bold">
            {jersey.team}
          </p>

          <h2 className="text-xl font-black">{jersey.name}</h2>
        </div>

        <div className="flex items-center justify-between gap-4">
          <p className="text-3xl font-black">₦{Number(jersey.price).toLocaleString()}</p>

          <button className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-surface">
            <i className="bx bx-cart" />
            <p className="hidden md:block">Add to Cart</p>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Jerseys;
