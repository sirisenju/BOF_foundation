import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kpsyrcixuacboagrfmjd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtwc3lyY2l4dWFjYm9hZ3JmbWpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM0MDY5MjYsImV4cCI6MjA0ODk4MjkyNn0.VAje39AgFMiUzBe0mW3U3PINcFzitVUfJzaVyG9OYJg'; // Replace with your Supabase anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
