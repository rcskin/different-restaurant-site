// app/menus/page.js
import React from 'react';

export default function MenusPage() {
  return (
    <section className="py-16 bg-gray-100 text-black text-center px-4 md:px-16 lg:px-32">
      <h1 className="text-5xl font-bold font-caveat mb-10">Our Menus</h1>
      
      {/* Tapas Menu Section */}
      <div className="mb-10">
        <h2 className="text-4xl font-bold font-caveat mb-4">Tapas Menu</h2>
        <p className="text-xl mb-4">
          Our Tapas Menu is perfect for daytime or evening dining, offering a variety of small plates designed for sharing (we recommend 2-3 per person). While the tapas menu highlights local favorites, our chefs also create a unique daily specials menu, bringing creative, globally-inspired flavors each day. 
          We cater to different dietary needs, but please call ahead to let us know about any allergies or restrictions so we can modify dishes or recommend options.
        </p>
        <p><em>New Menu Coming Soon!</em></p>
        {/* <a 
          href="/images/menus/tapas-menu.jpg" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 hover:underline text-lg"
        >
          View Tapas Menu
        </a> */}
      </div>

      {/* Drinks Menu Section */}
      <div className="mb-10">
        <h2 className="text-4xl font-bold font-caveat mb-4">Drinks Menu</h2>
        <p className="text-xl mb-4">
          Our Drinks Menu offers a selection of our signature drinks, including classic cocktails that are available anytime. For a more extensive wine list and seasonal drink options, please visit us at the restaurant.
        </p>
        <a 
          href="/images/menus/drinks-menu.jpg" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 hover:underline text-lg"
        >
          View Drinks Menu
        </a>
      </div>

      {/* Breakfast Menu Section */}
      <div className="mb-10">
        <h2 className="text-4xl font-bold font-caveat mb-4">Weekend Breakfast Menu</h2>
        <p className="text-xl mb-4">
          Available Friday through Sunday mornings, our Breakfast Menu is ideal for starting your weekend with a delicious breakfast or brunch. Featuring local favorites, this menu has something for everyone to enjoy.
        </p>
        <a 
          href="/images/menus/breakfast-menu.jpg" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 hover:underline text-lg"
        >
          View Breakfast Menu
        </a>
      </div>
    </section>
  );
}
