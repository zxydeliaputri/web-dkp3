import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cwwhqqvhqkkmdnheqkdw.supabase.co/";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3d2hxcXZocWtrbWRuaGVxa2R3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjIxODA0MzUsImV4cCI6MTk3Nzc1NjQzNX0.9gZQedl_67eWuxsPeUFMGdSgM6T9DkoGyLU5dDeuF6E";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
