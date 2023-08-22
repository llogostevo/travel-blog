export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      blogposts: {
        Row: {
          category: string
          content: string
          date: string
          id: number
          image: string | null
          title: string
        }
        Insert: {
          category: string
          content: string
          date: string
          id?: number
          image?: string | null
          title: string
        }
        Update: {
          category?: string
          content?: string
          date?: string
          id?: number
          image?: string | null
          title?: string
        }
        Relationships: []
      }
      comments: {
        Row: {
          comment: string
          comment_id: number
          entrydate: string
          post_id: number | null
          username: string
        }
        Insert: {
          comment: string
          comment_id?: number
          entrydate: string
          post_id?: number | null
          username: string
        }
        Update: {
          comment?: string
          comment_id?: number
          entrydate?: string
          post_id?: number | null
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "comments_post_id_fkey"
            columns: ["post_id"]
            referencedRelation: "blogposts"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
