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
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'relatedUser1',
      type: 'relationship',
      relationTo: 'users',
      admin: {
        appearance: 'drawer',
      },
      filterOptions: ({ siblingData }) => {
        const sibling = siblingData as { relatedUser2?: string }
        if (sibling?.relatedUser2) {
          return { id: { not_equals: sibling.relatedUser2 } }
        }
        return true
      },
    },
    {
      name: 'relatedUser2',
      type: 'relationship',
      relationTo: 'users',
      admin: {
        appearance: 'drawer',
      },
      filterOptions: ({ siblingData }) => {
        const sibling = siblingData as { relatedUser1?: string }
        if (sibling?.relatedUser1) {
          return { id: { not_equals: sibling.relatedUser1 } }
        }
        return true
      },
    },
  ],
}
