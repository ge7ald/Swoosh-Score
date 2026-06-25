import Nav from "../components/nav"
const clubs = [
  { name: "Manchester United", img: "./src/assets/image/man-utd-home.jpg" },
  { name: "Arsenal", img: "/images/arsenal.jpg" },
  { name: "Chelsea", img: "/images/man-utd-home.jpg" },
  { name: "Real Madrid", img: "/images/real-madrid.jpg" }
];
const countries = [
  { name: "Argentina", img: "./src/assets/image/man-utd-home.jpg" },
  { name: "Nigeria", img: "/images/arsenal.jpg" },
  { name: "Brazil", img: "/images/man-utd-home.jpg" },
  { name: "Portugal", img: "/images/real-madrid.jpg" }
]

const category = [
  { name: "Retro", img: "./src/assets/image/man-utd-home.jpg" },
  { name: "Home", img: "/images/arsenal.jpg" },
  { name: "Away", img: "/images/man-utd-home.jpg" },
  { name: "26/27", img: "/images/real-madrid.jpg" }
]

function Club( {club} ) {

   return (
  <div className="relative rounded-3xl overflow-hidden h-28">
    <img
      src={club.img}
      alt={club.name}
      className="absolute inset-0 w-full h-full object-cover brightness-50"
    />

    <div className="absolute inset-0 bg-black/30" />

    <p className="relative z-10 h-full flex items-center justify-center text-white font-bold text-lg">
      {club.name}
    </p>
  </div>
);}

function Categories( {category} ) {

   return (
  <div className="relative rounded-3xl overflow-hidden h-28">
    <img
      src={category.img}
      alt={category.name}
      className="absolute inset-0 w-full h-full object-cover brightness-50"
    />

    <div className="absolute inset-0 bg-black/30" />

    <p className="relative z-10 h-full flex items-center justify-center text-white font-bold text-lg">
      {category.name}
    </p>
  </div>
);
}
function Countries( {country} ) {

   return (
  <div className="relative rounded-3xl overflow-hidden h-28">
    <img
      src={country.img}
      alt={country.name}
      className="absolute inset-0 w-full h-full object-cover brightness-50"
    />

    <div className="absolute inset-0 bg-black/30" />

    <p className="relative z-10 h-full flex items-center justify-center text-white font-bold text-lg">
      {country.name}
    </p>
  </div>
);

}

function Shop() {
    return (   
    <div className="min-h-screen bg-background text-text">
      <Nav />
        

      <main className="pt-28 sm:pt-32 px-4 sm:px-10 pb-24">
       
        
        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center mt-10">
            <h1 className="text-3xl sm:text-6xl font-black leading-[1.05] tracking-[-0.04em]">Clubs</h1>
        
         <div className="mt-1 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {clubs.map((club) => (
                 <Club club={club}/>
            ))}
          </div>

         
        </section> 
       
        
        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center mt-10">
            <h1 className="text-3xl sm:text-6xl font-black leading-[1.05] tracking-[-0.04em]">Country</h1>
        
         
            <div className="mt-1 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {countries.map(country => (
                    <Countries country={country}/>
                ))}
          </div>

         
        </section> 
       
        
        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center mt-10">
            <h1 className="text-3xl sm:text-6xl font-black leading-[1.05] tracking-[-0.04em]">Category</h1>
        
         
            
               <div className="mt-1 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {category.map(category => (
                <Categories category={category} />
              ))}
              </div>
            
         

         
        </section> 

       
      </main>
    </div>
  );
}


export default Shop;