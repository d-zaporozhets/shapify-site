import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: { read: () => true },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: { description: 'e.g. "faq", "partner/eva", "index" for homepage' },
    },
    {
      name: 'seoTitle',
      type: 'text',
      localized: true,
    },
    {
      name: 'seoDescription',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [

        // 1. Rich Text — for eula, privacy, terms
        {
          slug: 'richTextBlock',
          labels: { singular: 'Rich Text', plural: 'Rich Text Blocks' },
          fields: [
            { name: 'content', type: 'richText', localized: true },
          ],
        },

        // 2. Hero Text — h1 + subtitle + CTA buttons
        {
          slug: 'heroTextBlock',
          labels: { singular: 'Hero Text', plural: 'Hero Text Blocks' },
          fields: [
            { name: 'heading', type: 'text', localized: true },
            { name: 'subtext', type: 'textarea', localized: true },
            {
              name: 'buttons',
              type: 'array',
              fields: [
                { name: 'label', type: 'text', localized: true },
                { name: 'url', type: 'text' },
                {
                  name: 'style',
                  type: 'select',
                  options: ['primary', 'secondary', 'dotted'],
                  defaultValue: 'primary',
                },
              ],
            },
          ],
        },

        // 3. Slider
        {
          slug: 'sliderBlock',
          labels: { singular: 'Slider', plural: 'Sliders' },
          fields: [
            { name: 'heading', type: 'text', localized: true },
            {
              name: 'slides',
              type: 'array',
              fields: [
                { name: 'image', type: 'upload', relationTo: 'media' },
                { name: 'imageAlt', type: 'text', localized: true },
                { name: 'text', type: 'text', localized: true },
                {
                  name: 'textColor',
                  type: 'select',
                  options: ['white', 'orange', 'dark'],
                  defaultValue: 'white',
                },
              ],
            },
          ],
        },

        // 4. Text Section — heading + richtext
        {
          slug: 'textSectionBlock',
          labels: { singular: 'Text Section', plural: 'Text Sections' },
          fields: [
            {
              name: 'headingLevel',
              type: 'select',
              options: ['h1', 'h2', 'h3'],
              defaultValue: 'h2',
            },
            { name: 'heading', type: 'text', localized: true },
            { name: 'subtext', type: 'text', localized: true },
            { name: 'content', type: 'richText', localized: true },
            {
              name: 'alignment',
              type: 'select',
              options: ['left', 'center'],
              defaultValue: 'left',
            },
          ],
        },

        // 5. Two Columns
        {
          slug: 'twoColumnBlock',
          labels: { singular: 'Two Columns', plural: 'Two Column Blocks' },
          fields: [
            {
              name: 'variant',
              type: 'select',
              options: [
                { label: 'Text only', value: 'text' },
                { label: 'With icons and colored background', value: 'icon-colored' },
                { label: 'With image', value: 'with-image' },
              ],
              defaultValue: 'text',
            },
            {
              name: 'columns',
              type: 'array',
              minRows: 2,
              maxRows: 2,
              fields: [
                { name: 'heading', type: 'text', localized: true },
                { name: 'icon', type: 'upload', relationTo: 'media' },
                { name: 'image', type: 'upload', relationTo: 'media' },
                { name: 'content', type: 'richText', localized: true },
              ],
            },
          ],
        },

        // 6. Video embed
        {
          slug: 'videoBlock',
          labels: { singular: 'Video', plural: 'Videos' },
          fields: [
            { name: 'embedUrl', type: 'text', required: true },
            { name: 'caption', type: 'text', localized: true },
          ],
        },

        // 7. Steps
        {
          slug: 'stepsBlock',
          labels: { singular: 'Steps', plural: 'Steps Blocks' },
          fields: [
            { name: 'heading', type: 'text', localized: true },
            { name: 'subtext', type: 'text', localized: true },
            {
              name: 'steps',
              type: 'array',
              fields: [
                { name: 'stepLabel', type: 'text', localized: true },
                { name: 'content', type: 'richText', localized: true },
                { name: 'image', type: 'upload', relationTo: 'media' },
                { name: 'videoUrl', type: 'text' },
              ],
            },
          ],
        },

        // 8. FAQ accordion
        {
          slug: 'faqBlock',
          labels: { singular: 'FAQ', plural: 'FAQ Blocks' },
          fields: [
            { name: 'heading', type: 'text', localized: true },
            {
              name: 'sections',
              type: 'array',
              fields: [
                { name: 'sectionTitle', type: 'text', localized: true },
                {
                  name: 'questions',
                  type: 'array',
                  fields: [
                    { name: 'question', type: 'text', localized: true, required: true },
                    { name: 'answer', type: 'richText', localized: true, required: true },
                  ],
                },
              ],
            },
          ],
        },

        // 9. Specs — with diagram or grid variant
        {
          slug: 'specsBlock',
          labels: { singular: 'Specs', plural: 'Specs Blocks' },
          fields: [
            { name: 'heading', type: 'text', localized: true },
            { name: 'subtext', type: 'text', localized: true },
            {
              name: 'variant',
              type: 'select',
              options: [
                { label: 'Grid with icons', value: 'grid' },
                { label: 'Diagram with labels', value: 'diagram' },
              ],
              defaultValue: 'grid',
            },
            { name: 'diagramImage', type: 'upload', relationTo: 'media' },
            {
              name: 'specs',
              type: 'array',
              fields: [
                { name: 'icon', type: 'upload', relationTo: 'media' },
                { name: 'label', type: 'text', localized: true },
                { name: 'value', type: 'text', localized: true },
              ],
            },
          ],
        },

        // 10. Gallery — grid of images
        {
          slug: 'galleryBlock',
          labels: { singular: 'Gallery', plural: 'Galleries' },
          fields: [
            { name: 'heading', type: 'text', localized: true },
            { name: 'subtext', type: 'text', localized: true },
            {
              name: 'images',
              type: 'array',
              fields: [
                { name: 'image', type: 'upload', relationTo: 'media' },
                { name: 'alt', type: 'text', localized: true },
                { name: 'url', type: 'text' },
              ],
            },
          ],
        },

        // 11. Category Grid — Parents/Graduation/Wedding etc
        {
          slug: 'categoryGridBlock',
          labels: { singular: 'Category Grid', plural: 'Category Grids' },
          fields: [
            { name: 'heading', type: 'text', localized: true },
            { name: 'subtext', type: 'text', localized: true },
            {
              name: 'categories',
              type: 'array',
              fields: [
                { name: 'label', type: 'text', localized: true },
                { name: 'image', type: 'upload', relationTo: 'media' },
                { name: 'url', type: 'text' },
              ],
            },
          ],
        },

        // 12. Testimonials — quotes with author
        {
          slug: 'testimonialsBlock',
          labels: { singular: 'Testimonials', plural: 'Testimonials Blocks' },
          fields: [
            { name: 'heading', type: 'text', localized: true },
            {
              name: 'testimonials',
              type: 'array',
              fields: [
                { name: 'quote', type: 'textarea', localized: true, required: true },
                { name: 'author', type: 'text', localized: true },
                { name: 'company', type: 'text', localized: true },
              ],
            },
          ],
        },

        // 13. Pricing Block
        {
          slug: 'pricingBlock',
          labels: { singular: 'Pricing', plural: 'Pricing Blocks' },
          fields: [
            { name: 'heading', type: 'text', localized: true },
            { name: 'subtext', type: 'text', localized: true },
            {
              name: 'plans',
              type: 'array',
              fields: [
                { name: 'name', type: 'text', localized: true },
                { name: 'price', type: 'text', localized: true },
                { name: 'priceNote', type: 'text', localized: true },
                { name: 'description', type: 'richText', localized: true },
                { name: 'highlighted', type: 'checkbox', defaultValue: false },
              ],
            },
          ],
        },

        // 14. Logos — "As seen in"
        {
          slug: 'logosBlock',
          labels: { singular: 'Logos / As Seen In', plural: 'Logos Blocks' },
          fields: [
            { name: 'heading', type: 'text', localized: true },
            {
              name: 'logos',
              type: 'array',
              fields: [
                { name: 'image', type: 'upload', relationTo: 'media' },
                { name: 'alt', type: 'text' },
                { name: 'url', type: 'text' },
              ],
            },
          ],
        },

        // 15. Download Block — system requirements + download button
        {
          slug: 'downloadBlock',
          labels: { singular: 'Download', plural: 'Download Blocks' },
          fields: [
            { name: 'heading', type: 'text', localized: true },
            { name: 'requirementsHeading', type: 'text', localized: true },
            { name: 'requirements', type: 'richText', localized: true },
            { name: 'downloadHeading', type: 'text', localized: true },
            { name: 'version', type: 'text' },
            { name: 'updatedDate', type: 'text', localized: true },
            { name: 'language', type: 'text', localized: true },
            { name: 'downloadUrl', type: 'text' },
            { name: 'buttonLabel', type: 'text', localized: true },
            { name: 'platformImage', type: 'upload', relationTo: 'media' },
          ],
        },

        // 16. CTA Block
        {
          slug: 'ctaBlock',
          labels: { singular: 'CTA', plural: 'CTA Blocks' },
          fields: [
            { name: 'heading', type: 'text', localized: true },
            { name: 'text', type: 'textarea', localized: true },
            {
              name: 'buttons',
              type: 'array',
              fields: [
                { name: 'label', type: 'text', localized: true },
                { name: 'url', type: 'text' },
                {
                  name: 'style',
                  type: 'select',
                  options: ['primary', 'secondary'],
                  defaultValue: 'primary',
                },
              ],
            },
            {
              name: 'variant',
              type: 'select',
              options: [
                { label: 'Light', value: 'light' },
                { label: 'Dark', value: 'dark' },
              ],
              defaultValue: 'light',
            },
          ],
        },

        // 17. Embed Grid — Sketchfab iframes
        {
          slug: 'embedGridBlock',
          labels: { singular: 'Embed Grid', plural: 'Embed Grids' },
          fields: [
            { name: 'heading', type: 'text', localized: true },
            { name: 'subtext', type: 'text', localized: true },
            {
              name: 'embeds',
              type: 'array',
              fields: [
                { name: 'embedUrl', type: 'text', required: true },
                { name: 'title', type: 'text', localized: true },
              ],
            },
          ],
        },

        // 18. Raw HTML — for legal pages (eula, privacy, terms)
        {
          slug: 'rawHtmlBlock',
          labels: { singular: 'Raw HTML', plural: 'Raw HTML Blocks' },
          fields: [
            {
              name: 'html',
              type: 'textarea',
              localized: true,
              admin: {
                description: 'Paste raw HTML content here. Use for legal pages and other content with complex formatting.',
                rows: 20,
              },
            },
          ],
        },

      ],
    },
  ],
}