import { useState } from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Board } from "./pages/Board";
import { SearchCard } from "./pages/SearchCard";
import { Page, PageContext } from "./contexts/Page";

function App() {
  const [page, setPage] = useState<Page>("board");

  const elements = {
    board: <Board />,
    searchCard: <SearchCard />,
  };

  return (
    <PageContext.Provider value={{ page, setPage }}>
      <Header />
      <div className="h-[calc(100%-3rem)] flex flex-col sm:flex-row grow">
        <Sidebar />
        {elements[page]}
      </div>
    </PageContext.Provider>
  );
}

export default App;
