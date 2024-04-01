import { ReactNode } from "react";

export default function ContentLayout({ children }: { children: ReactNode }) {
  return <div className="max-w-[90rem] mx-auto">{children}</div>;
}
