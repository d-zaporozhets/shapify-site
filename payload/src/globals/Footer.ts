import type { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: { read: () => true },
  fields: [
    { name: 'contactEmail', type: 'email', localized: true },
    { name: 'contactPhone', type: 'text', localized: true },
    { name: 'address', type: 'textarea', localized: true },
    {
      name: 'socialLinks',
      type: 'array',
      fields: [
        {
          name: 'platform',
          type: 'select',
          options: ['facebook', 'instagram', 'twitter', 'youtube', 'linkedin'],
        },
        { name: 'url', type: 'text', required: true },
      ],
    },
  ],
}
