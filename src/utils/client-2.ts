import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_2_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_2_ANON_KEY;

if (!supabaseUrl) {
    throw new Error("Missing env.NEXT_PUBLIC_SUPABASE_2_URL");
}

if (!supabaseAnonKey) {
    throw new Error("Missing env.NEXT_PUBLIC_SUPABASE_2_ANON_KEY");
}

export const supabaseMootasi = createClient(supabaseUrl, supabaseAnonKey);

export const createClientComponentClient = () => {
    return createClient(supabaseUrl, supabaseAnonKey);
};
