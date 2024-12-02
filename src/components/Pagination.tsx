import { CaretLeft, CaretRight } from "@phosphor-icons/react";

interface PaginationProps {
  setPage: (s: (s: number) => number) => void;
  setPageSize: (s: 4 | 6 | 8) => void;
  page: number;
  pageSize: number;
}

export function Pagination({
  setPage,
  setPageSize,
  page,
  pageSize,
}: PaginationProps) {
  async function handleIncrementPage(_e: React.MouseEvent) {
    setPage((s) => s + 1);
  }

  async function handleDecrementPage(_e: React.MouseEvent) {
    setPage((s) => (s > 0 ? s - 1 : s));
  }

  async function handlePageSizeChange(size: 4 | 6 | 8) {
    setPageSize(size);
  }

  return (
    <div className="w-full text-lg max-w-xs sm:max-w-xl flex justify-between">
      <div className="flex gap-2 items-center">
        <span className="text-sm">Página:</span>
        <button onClick={handleDecrementPage} className="btn">
          <CaretLeft />
        </button>
        <div>{page + 1}</div>
        <button onClick={handleIncrementPage} className="btn">
          <CaretRight />
        </button>
      </div>

      <div className="flex gap-2 items-center">
        <span className="text-sm">Tamanho da página:</span>
        <button
          onClick={() => handlePageSizeChange(4)}
          className={pageSize == 4 ? "checked-btn" : "btn"}
        >
          4
        </button>
        <button
          onClick={() => handlePageSizeChange(6)}
          className={pageSize == 6 ? "checked-btn" : "btn"}
        >
          6
        </button>
        <button
          onClick={() => handlePageSizeChange(8)}
          className={pageSize == 8 ? "checked-btn" : "btn"}
        >
          8
        </button>
      </div>
    </div>
  );
}
