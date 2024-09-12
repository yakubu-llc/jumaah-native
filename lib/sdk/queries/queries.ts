// generated with @7nohe/openapi-react-query-codegen@1.6.0 

import { UseMutationOptions, UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query";
import { AccountService, HealthService, JumaahService, MusalahService } from "../requests/services.gen";
import { CreateAccountParams, CreateAttendeeParams, CreateJumaahParams, CreateMusalahParams, UpdateAccountParams, UpdateAttendeeParams, UpdateJumaahParams, UpdateMusalahParams } from "../requests/types.gen";
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
export const useAccountServiceGetAllAccounts = <TData = Common.AccountServiceGetAllAccountsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ cursor, limit }: {
  cursor?: number;
  limit?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAccountServiceGetAllAccountsKeyFn({ cursor, limit }, queryKey), queryFn: () => AccountService.getAllAccounts({ cursor, limit }) as TData, ...options });
/**
* Get account by user ID
* Get account by user ID.
* @param data The data for the request.
* @param data.userId
* @returns SingleAccountResponseBody OK
* @throws ApiError
*/
export const useAccountServiceGetAccountByUserId = <TData = Common.AccountServiceGetAccountByUserIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ userId }: {
  userId: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAccountServiceGetAccountByUserIdKeyFn({ userId }, queryKey), queryFn: () => AccountService.getAccountByUserId({ userId }) as TData, ...options });
/**
* Get account by ID
* Get account by ID.
* @param data The data for the request.
* @param data.id
* @returns SingleAccountResponseBody OK
* @throws ApiError
*/
export const useAccountServiceGetAccountById = <TData = Common.AccountServiceGetAccountByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAccountServiceGetAccountByIdKeyFn({ id }, queryKey), queryFn: () => AccountService.getAccountById({ id }) as TData, ...options });
/**
* Health check
* Health check.
* @returns HealthCheckOutputBody OK
* @throws ApiError
*/
export const useHealthServiceHealthCheck = <TData = Common.HealthServiceHealthCheckDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseHealthServiceHealthCheckKeyFn(queryKey), queryFn: () => HealthService.healthCheck() as TData, ...options });
/**
* Get all jumaahs
* Get all jumaahs.
* @param data The data for the request.
* @param data.cursor
* @param data.limit
* @returns GetAllJumaahOutputBody OK
* @throws ApiError
*/
export const useJumaahServiceGetAllJumaahs = <TData = Common.JumaahServiceGetAllJumaahsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ cursor, limit }: {
  cursor?: number;
  limit?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseJumaahServiceGetAllJumaahsKeyFn({ cursor, limit }, queryKey), queryFn: () => JumaahService.getAllJumaahs({ cursor, limit }) as TData, ...options });
/**
* Get jumaah by ID
* Get jumaah by ID.
* @param data The data for the request.
* @param data.id
* @returns SingleJumaahResponseBody OK
* @throws ApiError
*/
export const useJumaahServiceGetJumaahById = <TData = Common.JumaahServiceGetJumaahByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseJumaahServiceGetJumaahByIdKeyFn({ id }, queryKey), queryFn: () => JumaahService.getJumaahById({ id }) as TData, ...options });
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
export const useJumaahServiceGetAttendees = <TData = Common.JumaahServiceGetAttendeesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ cursor, id, limit }: {
  cursor?: number;
  id: number;
  limit?: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseJumaahServiceGetAttendeesKeyFn({ cursor, id, limit }, queryKey), queryFn: () => JumaahService.getAttendees({ cursor, id, limit }) as TData, ...options });
/**
* Get attendee count
* Get attendee count.
* @param data The data for the request.
* @param data.id
* @returns GetAttendeeCountResponseBody OK
* @throws ApiError
*/
export const useJumaahServiceGetAttendeeCount = <TData = Common.JumaahServiceGetAttendeeCountDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseJumaahServiceGetAttendeeCountKeyFn({ id }, queryKey), queryFn: () => JumaahService.getAttendeeCount({ id }) as TData, ...options });
/**
* Get attendee
* Get attendee.
* @param data The data for the request.
* @param data.id
* @param data.accountId
* @returns GetAttendeeResponseBody OK
* @throws ApiError
*/
export const useJumaahServiceGetAttendee = <TData = Common.JumaahServiceGetAttendeeDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ accountId, id }: {
  accountId: number;
  id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseJumaahServiceGetAttendeeKeyFn({ accountId, id }, queryKey), queryFn: () => JumaahService.getAttendee({ accountId, id }) as TData, ...options });
/**
* Get all musalahs
* Get all musalahs.
* @param data The data for the request.
* @param data.cursor
* @param data.limit
* @returns GetAllMusalahOutputBody OK
* @throws ApiError
*/
export const useMusalahServiceGetAllMusalahs = <TData = Common.MusalahServiceGetAllMusalahsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ cursor, limit }: {
  cursor?: number;
  limit?: number;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseMusalahServiceGetAllMusalahsKeyFn({ cursor, limit }, queryKey), queryFn: () => MusalahService.getAllMusalahs({ cursor, limit }) as TData, ...options });
/**
* Get musalah by ID
* Get musalah by ID.
* @param data The data for the request.
* @param data.id
* @returns SingleMusalahResponseBody OK
* @throws ApiError
*/
export const useMusalahServiceGetMusalahById = <TData = Common.MusalahServiceGetMusalahByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseMusalahServiceGetMusalahByIdKeyFn({ id }, queryKey), queryFn: () => MusalahService.getMusalahById({ id }) as TData, ...options });
/**
* Create a account
* Create a account.
* @param data The data for the request.
* @param data.requestBody
* @returns SingleAccountResponseBody OK
* @throws ApiError
*/
export const useAccountServiceCreateAccount = <TData = Common.AccountServiceCreateAccountMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: CreateAccountParams;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: CreateAccountParams;
}, TContext>({ mutationFn: ({ requestBody }) => AccountService.createAccount({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* Create a jumaah
* Create a jumaah.
* @param data The data for the request.
* @param data.requestBody
* @returns SingleJumaahResponseBody OK
* @throws ApiError
*/
export const useJumaahServiceCreateJumaah = <TData = Common.JumaahServiceCreateJumaahMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: CreateJumaahParams;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: CreateJumaahParams;
}, TContext>({ mutationFn: ({ requestBody }) => JumaahService.createJumaah({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* Create attendee
* Create attendee.
* @param data The data for the request.
* @param data.requestBody
* @returns CreateAttendeeResponseBody OK
* @throws ApiError
*/
export const useJumaahServiceCreateAttendee = <TData = Common.JumaahServiceCreateAttendeeMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: CreateAttendeeParams;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: CreateAttendeeParams;
}, TContext>({ mutationFn: ({ requestBody }) => JumaahService.createAttendee({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* Create a musalah
* Create a musalah.
* @param data The data for the request.
* @param data.requestBody
* @returns SingleMusalahResponseBody OK
* @throws ApiError
*/
export const useMusalahServiceCreateMusalah = <TData = Common.MusalahServiceCreateMusalahMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: CreateMusalahParams;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: CreateMusalahParams;
}, TContext>({ mutationFn: ({ requestBody }) => MusalahService.createMusalah({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* Update a account
* Update a account.
* @param data The data for the request.
* @param data.id
* @param data.requestBody
* @returns SingleAccountResponseBody OK
* @throws ApiError
*/
export const useAccountServiceUpdateAccount = <TData = Common.AccountServiceUpdateAccountMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: number;
  requestBody: UpdateAccountParams;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: number;
  requestBody: UpdateAccountParams;
}, TContext>({ mutationFn: ({ id, requestBody }) => AccountService.updateAccount({ id, requestBody }) as unknown as Promise<TData>, ...options });
/**
* Update a jumaah
* Update a jumaah.
* @param data The data for the request.
* @param data.id
* @param data.requestBody
* @returns SingleJumaahResponseBody OK
* @throws ApiError
*/
export const useJumaahServiceUpdateJumaah = <TData = Common.JumaahServiceUpdateJumaahMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: number;
  requestBody: UpdateJumaahParams;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: number;
  requestBody: UpdateJumaahParams;
}, TContext>({ mutationFn: ({ id, requestBody }) => JumaahService.updateJumaah({ id, requestBody }) as unknown as Promise<TData>, ...options });
/**
* Update attendee
* Update attendee.
* @param data The data for the request.
* @param data.id
* @param data.requestBody
* @param data.accountId
* @returns UpdateAttendeeResponseBody OK
* @throws ApiError
*/
export const useJumaahServiceUpdateAttendee = <TData = Common.JumaahServiceUpdateAttendeeMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  accountId?: number;
  id: number;
  requestBody: UpdateAttendeeParams;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  accountId?: number;
  id: number;
  requestBody: UpdateAttendeeParams;
}, TContext>({ mutationFn: ({ accountId, id, requestBody }) => JumaahService.updateAttendee({ accountId, id, requestBody }) as unknown as Promise<TData>, ...options });
/**
* Update a musalah
* Update a musalah.
* @param data The data for the request.
* @param data.id
* @param data.requestBody
* @returns SingleMusalahResponseBody OK
* @throws ApiError
*/
export const useMusalahServiceUpdateMusalah = <TData = Common.MusalahServiceUpdateMusalahMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: number;
  requestBody: UpdateMusalahParams;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: number;
  requestBody: UpdateMusalahParams;
}, TContext>({ mutationFn: ({ id, requestBody }) => MusalahService.updateMusalah({ id, requestBody }) as unknown as Promise<TData>, ...options });
/**
* Delete a account
* Delete a account.
* @param data The data for the request.
* @param data.id
* @returns MessageResponse OK
* @throws ApiError
*/
export const useAccountServiceDeleteAccount = <TData = Common.AccountServiceDeleteAccountMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: number;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: number;
}, TContext>({ mutationFn: ({ id }) => AccountService.deleteAccount({ id }) as unknown as Promise<TData>, ...options });
/**
* Delete a jumaah
* Delete a jumaah.
* @param data The data for the request.
* @param data.id
* @returns MessageResponse OK
* @throws ApiError
*/
export const useJumaahServiceDeleteJumaah = <TData = Common.JumaahServiceDeleteJumaahMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: number;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: number;
}, TContext>({ mutationFn: ({ id }) => JumaahService.deleteJumaah({ id }) as unknown as Promise<TData>, ...options });
/**
* Delete attendee
* Delete attendee.
* @param data The data for the request.
* @param data.id
* @param data.accountId
* @returns MessageResponse OK
* @throws ApiError
*/
export const useJumaahServiceDeleteAttendee = <TData = Common.JumaahServiceDeleteAttendeeMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  accountId?: number;
  id: number;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  accountId?: number;
  id: number;
}, TContext>({ mutationFn: ({ accountId, id }) => JumaahService.deleteAttendee({ accountId, id }) as unknown as Promise<TData>, ...options });
/**
* Delete a musalah
* Delete a musalah.
* @param data The data for the request.
* @param data.id
* @returns MessageResponse OK
* @throws ApiError
*/
export const useMusalahServiceDeleteMusalah = <TData = Common.MusalahServiceDeleteMusalahMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: number;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: number;
}, TContext>({ mutationFn: ({ id }) => MusalahService.deleteMusalah({ id }) as unknown as Promise<TData>, ...options });
