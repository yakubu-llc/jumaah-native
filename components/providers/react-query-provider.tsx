import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ComponentPropsWithoutRef, FC } from "react";
import { OpenAPI as OpenAPIConfig } from '@/lib/sdk/requests/core/OpenAPI';

export interface ReactQueryProviderProps
  extends Omit<ComponentPropsWithoutRef<typeof QueryClientProvider>, 'client'> {
  bearerToken?: string
}

export const ReactQueryProvider: FC<ReactQueryProviderProps> = ({
  children,
  bearerToken,
}) => {
  const queryClient = new QueryClient();

  OpenAPIConfig.BASE = process.env.EXPO_PUBLIC_BACKEND_API_URL!;
  OpenAPIConfig.HEADERS = {
    'Authorization': `Bearer ${bearerToken}`,
  };

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};
