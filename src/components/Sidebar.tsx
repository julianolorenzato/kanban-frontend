import { usePageContext } from "../contexts/Page";

export function Sidebar() {
  const { page, setPage } = usePageContext();

  return (
    <aside className="bg-pink-400 w-48 p-4">
      <ul className="flex flex-col gap-2">
        <li
          onClick={() => setPage("board")}
          className={page == "board" ? "checked-btn" : "btn"}
        >
          Board
        </li>
        <li
          onClick={() => setPage("searchCard")}
          className={page == "searchCard" ? "checked-btn" : "btn"}
        >
          Search Card
        </li>
      </ul>
    </aside>
  );
}
