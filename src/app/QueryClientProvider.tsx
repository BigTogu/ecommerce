"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { JSX, ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

export default function ReactQueryProvider({ children }: Readonly<Props>): JSX.Element {
  const [queryClient] = useState(() => new QueryClient());

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
