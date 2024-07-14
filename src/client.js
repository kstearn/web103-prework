import { createClient } from "@supabase/supabase-js";

const URL = "https://cffujenmlozlgkuwryxj.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmZnVqZW5tbG96bGdrdXdyeXhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg5OTUyMzIsImV4cCI6MjAzNDU3MTIzMn0.7beLyTyeu5qTBoALzVCJkRVb_3zrhmv-EhN6hH-2Aq0";

export const supabase = createClient(URL, API_KEY);