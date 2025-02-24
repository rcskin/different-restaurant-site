import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Set up the Sanity client
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Load from .env.local
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Load from .env.local
  apiVersion: '2023-11-27', // Keep consistent across the app! 
  useCdn: false, // Cached for production // `true` if you want to use the cached version for public queries
});

// Image Helper to generate image URLs
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
