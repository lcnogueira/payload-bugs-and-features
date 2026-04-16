import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'createdAt', 'updatedAt'],
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Tab 1',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          label: 'Tab 2',
          fields: [
            {
              name: 'types',
              type: 'relationship',
              relationTo: 'types',
              hasMany: true,
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
