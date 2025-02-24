'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { client, urlFor } from '../../sanity';

const query = `*[_type == "event" && !(_id in path("drafts.**"))] | order(date desc)`;

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch initial events
    client.fetch(query).then(setEvents);

    // Listen for real-time updates
    const subscription = client.listen(query).subscribe((update) => {
      console.log('Real-time update:', update); // Log real-time changes
      client.fetch(query).then(setEvents);
    });

    // Clean up subscription
    return () => subscription.unsubscribe();
  }, []);

  // Filter upcoming and past events
  const currentDate = new Date();
  const upcomingEvents = events.filter(
    (event) => event.date && new Date(event.date) > currentDate
  );
  const pastEvents = events.filter(
    (event) => event.date && new Date(event.date) <= currentDate
  );

  // Debug logs
  console.log("All Events:", events);
  console.log("Upcoming Events:", upcomingEvents);
  console.log("Past Events:", pastEvents);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-[#242021] text-white py-12">
        <h1 className="text-center text-4xl font-bold font-caveat">Upcoming & Past Events</h1>
      </header>

      {/* Upcoming Events */}
      <section className="container mx-auto py-12">
        <h2 className="text-4xl font-bold font-caveat text-center text-gray-800 mb-8">Upcoming Events</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {upcomingEvents.map((event) => {
            console.log("Rendering Upcoming Event:", event); // Debug log
            return (
              <div key={event._id} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                {event.image ? (
                  <Image
                    src={urlFor(event.image).url()}
                    alt={event.title || "No title available"}
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                ) : (
                  <div className="placeholder-image">No Image Available</div>
                )}
                <p className="mt-4 text-center font-caveat text-xl text-gray-700">
                  {event.title || "Untitled Event"}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Past Events */}
      <section className="container mx-auto py-12 bg-white">
        <h2 className="text-4xl font-bold font-caveat text-center text-gray-800 mb-8">Past Events</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {pastEvents.map((event) => {
            console.log("Rendering Past Event:", event); // Debug log
            return (
              <div key={event._id} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                {event.image ? (
                  <Image
                    src={urlFor(event.image).url()}
                    alt={event.title || "No title available"}
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                ) : (
                  <div className="placeholder-image">No Image Available</div>
                )}
                <p className="mt-4 text-center font-caveat text-xl text-gray-700">
                  {event.title || "Untitled Event"}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
