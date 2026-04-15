import type { CollectionConfig } from 'payload'

export const Types: CollectionConfig = {
  slug: 'types',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
  ],
}
