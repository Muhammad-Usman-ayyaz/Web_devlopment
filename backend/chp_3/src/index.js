import "dotenv/config";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

async function testConnection() {
  const { data, error } = await supabase.from("your_table").select("*");

  if (error) {
    console.error("Connection error:", error.message);
  } else {
    console.log("Data:", data);
  }
}

testConnection();
