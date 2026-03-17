import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users.js'
import { Media } from './collections/Media.js'
import { Posts } from './collections/Posts.js'
import { Pages } from './collections/Pages.js'
import { Header } from './globals/Header.js'
import { Footer } from './globals/Footer.js'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Posts, Pages],
  globals: [Header, Footer],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL || '',
    },
  }),
  localization: {
    locales: ['en', 'ru', 'de', 'fr', 'es', 'it', 'nl', 'ja', 'zh'],
    defaultLocale: 'en',
    fallback: true,
  },
  sharp,
  plugins: [],
})
