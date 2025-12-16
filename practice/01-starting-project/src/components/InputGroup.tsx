import { ReactNode } from "react";

export default function InputGroup({ children }: { children: ReactNode }) {
  return <div className="input-group">{children}</div>;
}
