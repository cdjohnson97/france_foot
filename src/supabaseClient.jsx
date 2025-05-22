import { createClient } from "@supabase/supabase-js";


const supabaseUrl = "https://gosycxotlobagaibadhr.supabase.co";

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdvc3ljeG90bG9iYWdhaWJhZGhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE2ODYzMTUsImV4cCI6MjAzNzI2MjMxNX0.k0KWfm2e16WJnFQw6SR3k0RM9RjxOxpuZDkWY_d-5cg";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);