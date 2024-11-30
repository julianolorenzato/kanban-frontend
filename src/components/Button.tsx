import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export function Button({ children }: ButtonProps) {
  return (
    <button className=" text-slate-100 px-2 py-1 rounded border border-transparent hover:border-slate-100">
      {children}
    </button>
  );
}
