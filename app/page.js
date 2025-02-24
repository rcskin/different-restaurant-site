// app/page.js
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
       {/* Hero Section */}
       <section className="flex items-center justify-center h-[45vh] bg-[#242021]">
        <Image
          src="/images/differentLogo.jpg"  
          alt="Restaurant Logo"
          width={500}              
          height={500}             
          className="object-contain" //Tailwind class to fit the image nicely
        />
      </section>

      {/* Parallax Image Section */}
      <section className="h-screen bg-parallax md:bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/images/food3.jpg')" }}>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white text-black text-center px-4 md:px-16 lg:px-32">
        <h2 className="text-4xl font-bold font-caveat mb-6">About Our Restaurant</h2>
        <p className="text-2xl mb-6">Welcome to our family-run restaurant, where the heart of what we do lies in creating an inviting space where both our guests and staff are treated like part of the family. </p>
        <p className="text-2xl mb-6">Specializing in contemporary Mediterranean, our tapas-style dishes are crafted with fresh, locally sourced produce, meat, and fish, making them perfect for sharing among friends and loved ones. Our kitchen is led by four incredible chefs—Daryl, Rob, John, and Nick—who bring their expertise to create a menu filled with exciting and unique specials. These daily specials offer a tapas-style twist on global cuisines, from British to Indian and Thai. </p>
        <p className="text-2xl mb-6">We also host monthly events, including live music nights that bring even more energy to our space. As proud supporters of the Frinton Summer Theatre, we love bringing the community together over great food, music, and culture. </p>
      </section>

      {/* Second Parallax Image Section */}
      <section className="h-screen bg-parallax md:bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/images/food2.jpg')" }}>
      </section>

      {/* Menu Info Section */}
      <section className="py-16 bg-white text-black text-center px-4 md:px-16 lg:px-32">
      <h2 className="text-4xl font-bold font-caveat mb-6">Our Menus</h2>
      <p className="text-2xl mb-6">
        Our menus offer a diverse selection of Mediterranean-inspired dishes, carefully crafted for every occasion. From our vibrant Tapas Menu to our refreshing selection of cocktails and wines, we have something to please every palate. On weekends, join us for breakfast to enjoy a delicious start to your day with local favorites and brunch specialties.
      </p>
      <Link href="/menus" passHref>
        <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 text-2xl font-caveat">
          View Menus
        </button>
      </Link>
    </section>

    {/* Third Parallax Image Section */}
    <section className="h-screen bg-parallax md:bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/images/food4.jpeg')" }}>
      </section>

    {/* Events Info Section */}
    <section className="py-16 bg-black text-white text-center px-4 md:px-16 lg:px-32">
      <h2 className="text-4xl font-bold font-caveat mb-6">Our Events</h2>
      <p className="text-2xl mb-6">
      At our restaurant, we’re passionate about creating experiences that bring people together in exciting and memorable ways. From live music nights paired with themed menus to our enchanting holiday celebrations with Santa, each event is designed to make your time with us truly special.</p>

<p className="text-2xl mb-6">Join us for our famous Paella Nights or Blind Taste Events where the rich flavors and aromas of our chefs' dishes fill the air, adding a pinch of fun and intrigue to your evening. Our events are all about sharing unique moments, good food, and unforgettable memories.
      </p>
      <Link href="/events" passHref>
        <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 text-2xl font-caveat">
          View Events
        </button>
      </Link>
    </section>

    {/* Last Parallax Image Section */}
    <section className="h-screen bg-parallax md:bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/images/exterior1.jpeg')" }}>
      </section>

      
    </>
  );
}
