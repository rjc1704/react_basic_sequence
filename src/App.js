import { BrowserRouter, Routes, Route } from "react-router-dom";
import Company from "./pages/Company";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { getNowPlaying } from "./api";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
