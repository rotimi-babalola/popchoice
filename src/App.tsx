import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import MoviePreferenceForm from "./components/MoviePreferenceForm";

import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-gray-200 p-4">
        <MoviePreferenceForm />
      </div>
    </QueryClientProvider>
  );
}

export default App;
