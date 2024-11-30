import { createContext, useContext } from "react";

export type Page = "board" | "searchCard";

interface IPageContext {
  page: Page;
  setPage: (p: Page) => void;
}

export const PageContext = createContext<IPageContext | undefined>(undefined);

export const usePageContext = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePageContext must be used within a PageProvider");
  }
  return context;
};
