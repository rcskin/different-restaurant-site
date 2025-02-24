export default {
    name: 'event',
    type: 'document',
    title: 'Event',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Event Title',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Event Image',
        options: { hotspot: true },
      },
      {
        name: 'date',
        type: 'datetime',
        title: 'Event Date',
      },
    ],
  };
  