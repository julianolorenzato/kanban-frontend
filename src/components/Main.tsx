import { useEffect, useState } from "react";
import { LIST_CARDS } from "../graphql/queries";
import { LargeCard } from "./LargeCard";
import { useQuery } from "@apollo/client";
import { Pagination } from "./Pagination";
import { Filters } from "./Filters";

export function Main() {
  const [search, setSearch] = useState<string>("");
  const [place, setPlace] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [pageSize, setPageSize] = useState<4 | 6 | 8>(4);
  const [cards, setCards] = useState<any[]>([]);
  const [priority, setPriority] = useState<string | undefined>(undefined);

  const { data, refetch } = useQuery(LIST_CARDS, {
    variables: { page, pageSize, place, search, priority },
  });

  useEffect(() => {
    if (data && data.cards) {
      setCards(data.cards);
    }
  }, [data]);

  return (
    <div className="p-2 grow flex flex-col items-center pt-8 gap-4">
      <Filters
        place={place}
        setPlace={setPlace}
        search={search}
        setSearch={setSearch}
        priority={priority}
        setPriority={setPriority}
        page={page}
        setPage={setPage}
        pageSize={pageSize}
        refetch={refetch}
      />

      <ul className="w-full px-4 grid grid-cols-2 gap-2 overflow-y-scroll">
        {cards.map((card, i) => (
          <LargeCard key={i} {...card} />
        ))}
      </ul>

      <Pagination
        page={page}
        pageSize={pageSize}
        setPage={setPage}
        setPageSize={setPageSize}
      />
    </div>
  );
}
