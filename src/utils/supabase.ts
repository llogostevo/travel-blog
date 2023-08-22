import { createClient, SupabaseClient } from '@supabase/supabase-js'

// @ts-ignore
const supabaseUrl: string  = process.env.NEXT_PUBLIC_SUPABASE_URL;
// @ts-ignore
const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase: SupabaseClient = createClient(supabaseUrl!, supabaseKey);
