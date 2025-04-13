-- Create a table to store your documents
create table movies_embeddings (
  id bigserial primary key,
  content text, -- corresponds to the "text chunk"
  embedding vector(1536) -- 1536 works for OpenAI embeddings
);

-- Create a function to search for movies
create or replace function match_movies (
  query_embedding vector(1536),
  match_threshold float,
  match_count int
)
returns table (
  id bigint,
  content text,
  similarity float
)
language sql stable
as $$
  select
    movies_embeddings.id,
    movies_embeddings.content,
    1 - (movies_embeddings.embedding <=> query_embedding) as similarity
  from movies_embeddings
  where 1 - (movies_embeddings.embedding <=> query_embedding) > match_threshold
  order by similarity desc
  limit match_count;
$$;
