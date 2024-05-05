
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://rxlwmnbpeouvmanvclbl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4bHdtbmJwZW91dm1hbnZjbGJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM4MTUxNTUsImV4cCI6MjAyOTM5MTE1NX0.buVfjxUIeqZscmEh3coPobTc5ha617TVjghNEjFm70Y'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;