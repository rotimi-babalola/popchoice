import { createClient } from "@supabase/supabase-js";

interface IFindNearestMatch {
  embeddings: number[];
}

interface MatchData {
  content: string;
  id: number;
  similarity: number;
}

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const findNearestMatch = async ({ embeddings }: IFindNearestMatch) => {
  try {
    const { data } = await supabase.rpc("match_movies", {
      query_embedding: embeddings,
      match_threshold: 0.5,
      match_count: 4,
    });

    // Manage multiple returned matches
    return (data as MatchData[]).map((obj) => obj.content).join("\n");
  } catch (error) {
    console.error("Error fetching nearest match:", error);
  }
};
