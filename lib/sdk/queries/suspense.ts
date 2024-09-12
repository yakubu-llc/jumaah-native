// generated with @7nohe/openapi-react-query-codegen@1.6.0 

import { UseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { AccountService, HealthService, JumaahService, MusalahService } from "../requests/services.gen";
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
export const useAccountServiceGetAllAccountsSuspense = <TData = Common.AccountServiceGetAllAccountsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ cursor, limit }: {
  cursor?: number;
  limit?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAccountServiceGetAllAccountsKeyFn({ cursor, limit }, queryKey), queryFn: () => AccountService.getAllAccounts({ cursor, limit }) as TData, ...options });
/**
* Get account by user ID
* Get account by user ID.
* @param data The data for the request.
* @param data.userId
* @returns SingleAccountResponseBody OK
* @throws ApiError
*/
export const useAccountServiceGetAccountByUserIdSuspense = <TData = Common.AccountServiceGetAccountByUserIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ userId }: {
  userId: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAccountServiceGetAccountByUserIdKeyFn({ userId }, queryKey), queryFn: () => AccountService.getAccountByUserId({ userId }) as TData, ...options });
/**
* Get account by ID
* Get account by ID.
* @param data The data for the request.
* @param data.id
* @returns SingleAccountResponseBody OK
* @throws ApiError
*/
export const useAccountServiceGetAccountByIdSuspense = <TData = Common.AccountServiceGetAccountByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAccountServiceGetAccountByIdKeyFn({ id }, queryKey), queryFn: () => AccountService.getAccountById({ id }) as TData, ...options });
/**
* Health check
* Health check.
* @returns HealthCheckOutputBody OK
* @throws ApiError
*/
export const useHealthServiceHealthCheckSuspense = <TData = Common.HealthServiceHealthCheckDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseHealthServiceHealthCheckKeyFn(queryKey), queryFn: () => HealthService.healthCheck() as TData, ...options });
/**
* Get all jumaahs
* Get all jumaahs.
* @param data The data for the request.
* @param data.cursor
* @param data.limit
* @returns GetAllJumaahOutputBody OK
* @throws ApiError
*/
export const useJumaahServiceGetAllJumaahsSuspense = <TData = Common.JumaahServiceGetAllJumaahsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ cursor, limit }: {
  cursor?: number;
  limit?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseJumaahServiceGetAllJumaahsKeyFn({ cursor, limit }, queryKey), queryFn: () => JumaahService.getAllJumaahs({ cursor, limit }) as TData, ...options });
/**
* Get jumaah by ID
* Get jumaah by ID.
* @param data The data for the request.
* @param data.id
* @returns SingleJumaahResponseBody OK
* @throws ApiError
*/
export const useJumaahServiceGetJumaahByIdSuspense = <TData = Common.JumaahServiceGetJumaahByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseJumaahServiceGetJumaahByIdKeyFn({ id }, queryKey), queryFn: () => JumaahService.getJumaahById({ id }) as TData, ...options });
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
export const useJumaahServiceGetAttendeesSuspense = <TData = Common.JumaahServiceGetAttendeesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ cursor, id, limit }: {
  cursor?: number;
  id: number;
  limit?: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseJumaahServiceGetAttendeesKeyFn({ cursor, id, limit }, queryKey), queryFn: () => JumaahService.getAttendees({ cursor, id, limit }) as TData, ...options });
/**
* Get attendee count
* Get attendee count.
* @param data The data for the request.
* @param data.id
* @returns GetAttendeeCountResponseBody OK
* @throws ApiError
*/
export const useJumaahServiceGetAttendeeCountSuspense = <TData = Common.JumaahServiceGetAttendeeCountDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseJumaahServiceGetAttendeeCountKeyFn({ id }, queryKey), queryFn: () => JumaahService.getAttendeeCount({ id }) as TData, ...options });
/**
* Get attendee
* Get attendee.
* @param data The data for the request.
* @param data.id
* @param data.accountId
* @returns GetAttendeeResponseBody OK
* @throws ApiError
*/
export const useJumaahServiceGetAttendeeSuspense = <TData = Common.JumaahServiceGetAttendeeDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ accountId, id }: {
  accountId: number;
  id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseJumaahServiceGetAttendeeKeyFn({ accountId, id }, queryKey), queryFn: () => JumaahService.getAttendee({ accountId, id }) as TData, ...options });
/**
* Get all musalahs
* Get all musalahs.
* @param data The data for the request.
* @param data.cursor
* @param data.limit
* @returns GetAllMusalahOutputBody OK
* @throws ApiError
*/
export const useMusalahServiceGetAllMusalahsSuspense = <TData = Common.MusalahServiceGetAllMusalahsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ cursor, limit }: {
  cursor?: number;
  limit?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseMusalahServiceGetAllMusalahsKeyFn({ cursor, limit }, queryKey), queryFn: () => MusalahService.getAllMusalahs({ cursor, limit }) as TData, ...options });
/**
* Get musalah by ID
* Get musalah by ID.
* @param data The data for the request.
* @param data.id
* @returns SingleMusalahResponseBody OK
* @throws ApiError
*/
export const useMusalahServiceGetMusalahByIdSuspense = <TData = Common.MusalahServiceGetMusalahByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseMusalahServiceGetMusalahByIdKeyFn({ id }, queryKey), queryFn: () => MusalahService.getMusalahById({ id }) as TData, ...options });
