// app/contact/page.js
import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Contact Header */}
      <header className="bg-[#242021] text-white py-12">
        <h1 className="text-center text-4xl font-bold font-caveat">Contact Us</h1>
        <p className="mt-4 text-center max-w-2xl mx-auto text-lg font-light px-6">
          For table bookings, please call us. For special events like Christmas parties, birthdays, or large events, feel free to get in touch with us directly.
        </p>
      </header>

      {/* Contact Information */}
      <section className="container mx-auto py-12 flex flex-col items-center space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Address</h2>
          <p className="text-xl font-light">Ashlyns House, 83 Fourth Ave, Frinton-On-Sea, CO13 9EB, UK</p>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Phone Number</h2>
          <p className="text-xl font-light">
            Call us at <a href="tel:+4401255851212" className="text-black hover:text-yellow-300 focus:text-yellow-300"
            >+44 01255 851212</a> to book a table.
          </p>
        </div>

        {/* Google Maps */}
        <div className="w-full h-96">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2465.4514908338224!2d1.2437162000000002!3d51.8344497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d96dec9bf950dd%3A0xc1f4da968f673550!2sDifferent%20Restaurant!5e0!3m2!1sen!2suk!4v1730225708015!5m2!1sen!2suk"
    width="100%"
    height="100%"
    className="rounded-lg shadow-lg border-0"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

      </section>
    </div>
  );
}
