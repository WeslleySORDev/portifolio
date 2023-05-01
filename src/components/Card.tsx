import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Card({ children }: Props) {
  return <article className="min-h-fit bg-bg-cards rounded-md shadow-[2px_2px_2px_1px_rgba(0,_0,_0,_0.2)]">{children}</article>;
}
