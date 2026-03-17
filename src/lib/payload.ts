const PAYLOAD_URL = 'http://localhost:3000'

export interface PayloadPost {
  id: string
  title: string
  slug: string
  date: string
  author?: string
  description?: string
  content?: any
}

export interface PayloadResponse<T> {
  docs: T[]
  totalDocs: number
  totalPages: number
  page: number
  hasNextPage: boolean
  hasPrevPage: boolean
}

export async function getAllPosts(): Promise<PayloadPost[]> {
  const res = await fetch(
    `${PAYLOAD_URL}/api/posts?limit=1000&sort=-date&depth=0`,
    { headers: { 'Content-Type': 'application/json' } }
  )
  if (!res.ok) throw new Error(`Failed to fetch posts: ${res.status}`)
  const data: PayloadResponse<PayloadPost> = await res.json()
  return data.docs
}

export async function getPostBySlug(slug: string): Promise<PayloadPost | null> {
  const res = await fetch(
    `${PAYLOAD_URL}/api/posts?where[slug][equals]=${slug}&limit=1&depth=0`,
    { headers: { 'Content-Type': 'application/json' } }
  )
  if (!res.ok) return null
  const data: PayloadResponse<PayloadPost> = await res.json()
  return data.docs[0] || null
}

export async function getPostsPaginated(page: number, limit = 6): Promise<PayloadResponse<PayloadPost>> {
  const res = await fetch(
    `${PAYLOAD_URL}/api/posts?limit=${limit}&page=${page}&sort=-date&depth=0`,
    { headers: { 'Content-Type': 'application/json' } }
  )
  if (!res.ok) throw new Error(`Failed to fetch posts: ${res.status}`)
  return res.json()
}
export async function getHeader() {
  const res = await fetch(`${PAYLOAD_URL}/api/globals/header?depth=0`, {
    headers: { 'Content-Type': 'application/json' }
  })
  if (!res.ok) return null
  return res.json()
}

export async function getFooter() {
  const res = await fetch(`${PAYLOAD_URL}/api/globals/footer?depth=0`, {
    headers: { 'Content-Type': 'application/json' }
  })
  if (!res.ok) return null
  return res.json()
}

export interface PageBlock {
  blockType: string
  [key: string]: any
}

export interface PayloadPage {
  id: string
  title: string
  slug: string
  meta?: {
    title?: string
    description?: string
  }
  layout: PageBlock[]
}

export async function getAllPages(): Promise<PayloadPage[]> {
  const res = await fetch(
    `${PAYLOAD_URL}/api/pages?limit=1000&depth=0`,
    { headers: { 'Content-Type': 'application/json' } }
  )
  if (!res.ok) throw new Error(`Failed to fetch pages: ${res.status}`)
  const data: PayloadResponse<PayloadPage> = await res.json()
  return data.docs
}

export async function getPageBySlug(slug: string): Promise<PayloadPage | null> {
  const res = await fetch(
    `${PAYLOAD_URL}/api/pages?where[slug][equals]=${slug}&limit=1&depth=2`,
    { headers: { 'Content-Type': 'application/json' } }
  )
  if (!res.ok) return null
  const data: PayloadResponse<PayloadPage> = await res.json()
  return data.docs[0] || null
}
