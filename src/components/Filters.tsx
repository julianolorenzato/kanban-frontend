import { MagnifyingGlass, X } from "@phosphor-icons/react";
import { FormEvent } from "react";

interface FiltersProps {
  place: string;
  setPlace: (s: string) => void;
  search: string;
  setSearch: (s: string) => void;
  priority: string | undefined;
  setPriority: (s: string | undefined) => void;
  page: number;
  setPage: (s: number) => void;
  pageSize: 4 | 6 | 8;
  refetch: (s: any) => Promise<any>;
}

export function Filters({
  place,
  setPlace,
  search,
  setSearch,
  priority,
  setPriority,
  page,
  setPage,
  pageSize,
  refetch,
}: FiltersProps) {
  async function handleReset(_e: React.MouseEvent) {
    setPage(0);
    setPlace("");
    setSearch("");
    setPriority(undefined)

    await refetch({ page, pageSize, search, place, priority });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setPage(0);
    await refetch({ page, pageSize, search, place });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xs sm:max-w-3xl w-full flex gap-4 items-center"
    >
      <button onClick={handleReset}>
        <X />
      </button>

      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Pesquisar..."
        className="p-2 w-full text-black  rounded shadow-md bg-slate-100"
      />

      <input
        type="search"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
        placeholder="Pesquisar Local..."
        className="p-2 w-full text-black  rounded shadow-md bg-slate-100"
      />

      <select
        className="p-2.5 w-32 bg-zinc-900 rounded"
        onChange={(e) => setPriority(e.target.value)}
        value={priority}
      >
        <option value={undefined}>-</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </form>
  );
}
