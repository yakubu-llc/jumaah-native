// generated with @7nohe/openapi-react-query-codegen@1.6.0 

import { InfiniteData, UseInfiniteQueryOptions, useInfiniteQuery } from "@tanstack/react-query";
import { AccountService, JumaahService, MusalahService } from "../requests/services.gen";
import * as Common from "./common";
/**
* Get all accounts
* Get all accounts.
* @param data The data for the request.
* @param data.cursor
* @param data.limit
* @returns GetAllAccountOutputBody OK
* @throws ApiError
*/
export const useAccountServiceGetAllAccountsInfinite = <TData = InfiniteData<Common.AccountServiceGetAllAccountsDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ limit }: {
  limit?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({ queryKey: Common.UseAccountServiceGetAllAccountsKeyFn({ limit }, queryKey), queryFn: ({ pageParam }) => AccountService.getAllAccounts({ cursor: pageParam as number, limit }) as TData, initialPageParam: 1, getNextPageParam: response => (response as { nextCursor: number }).nextCursor, ...options });
/**
* Get all jumaahs
* Get all jumaahs.
* @param data The data for the request.
* @param data.cursor
* @param data.limit
* @returns GetAllJumaahOutputBody OK
* @throws ApiError
*/
export const useJumaahServiceGetAllJumaahsInfinite = <TData = InfiniteData<Common.JumaahServiceGetAllJumaahsDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ limit }: {
  limit?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({ queryKey: Common.UseJumaahServiceGetAllJumaahsKeyFn({ limit }, queryKey), queryFn: ({ pageParam }) => JumaahService.getAllJumaahs({ cursor: pageParam as number, limit }) as TData, initialPageParam: 1, getNextPageParam: response => (response as { nextCursor: number }).nextCursor, ...options });
/**
* Get attendees
* Get attendees.
* @param data The data for the request.
* @param data.id
* @param data.cursor
* @param data.limit
* @returns GetAttendeesResponseBody OK
* @throws ApiError
*/
export const useJumaahServiceGetAttendeesInfinite = <TData = InfiniteData<Common.JumaahServiceGetAttendeesDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id, limit }: {
  id: number;
  limit?: number;
}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({ queryKey: Common.UseJumaahServiceGetAttendeesKeyFn({ id, limit }, queryKey), queryFn: ({ pageParam }) => JumaahService.getAttendees({ cursor: pageParam as number, id, limit }) as TData, initialPageParam: 1, getNextPageParam: response => (response as { nextCursor: number }).nextCursor, ...options });
/**
* Get all musalahs
* Get all musalahs.
* @param data The data for the request.
* @param data.cursor
* @param data.limit
* @returns GetAllMusalahOutputBody OK
* @throws ApiError
*/
export const useMusalahServiceGetAllMusalahsInfinite = <TData = InfiniteData<Common.MusalahServiceGetAllMusalahsDefaultResponse>, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ limit }: {
  limit?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useInfiniteQuery({ queryKey: Common.UseMusalahServiceGetAllMusalahsKeyFn({ limit }, queryKey), queryFn: ({ pageParam }) => MusalahService.getAllMusalahs({ cursor: pageParam as number, limit }) as TData, initialPageParam: 1, getNextPageParam: response => (response as { nextCursor: number }).nextCursor, ...options });
