export interface Avatar {
  id: string
  name: string
  description: string
  systemPrompt: string
  image: string // base64 or URL
  temperature: number
  webAccess: boolean
  createdAt: string
}

export interface Message {
  id: string
  avatarId: string
  sender: 'user' | 'ai'
  content: string
  attachments?: Attachment[]
  timestamp: string
}

export interface Attachment {
  type: 'image' | 'text' | 'other'
  url: string
  name: string
}

export interface Settings {
  temperature: number
  webAccess: boolean
}