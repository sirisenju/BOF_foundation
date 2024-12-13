
import bycrypt from "bcryptjs";
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kpsyrcixuacboagrfmjd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtwc3lyY2l4dWFjYm9hZ3JmbWpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM0MDY5MjYsImV4cCI6MjA0ODk4MjkyNn0.VAje39AgFMiUzBe0mW3U3PINcFzitVUfJzaVyG9OYJg'; // Replace with your Supabase anon key

const supabase = createClient(supabaseUrl, supabaseAnonKey);


async function createAdminUser() {
  const email = 'amrohore4real@gmail.com';
  const plainPassword = 'emuesiri12';
  const role = 'admin';

  const salt = bycrypt.genSaltSync(10);
  const hashedPassword = bycrypt.hashSync(plainPassword, salt);

  const { data, error } = await supabase.from('users').insert([
    {
      email,
      password: hashedPassword,
      role,
    },
  ]);

  if (error) {
    console.error('Error creating admin user:', error);
  } else {
    console.log('Admin user created successfully:', data);
  }
}

createAdminUser();
