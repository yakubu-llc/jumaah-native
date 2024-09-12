import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ComponentPropsWithoutRef, FC } from "react";

export interface ReactQueryProviderProps
  extends Omit<ComponentPropsWithoutRef<typeof QueryClientProvider>, 'client'> {
}

export const ReactQueryProvider: FC<ReactQueryProviderProps> = ({
  children,
}) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};
