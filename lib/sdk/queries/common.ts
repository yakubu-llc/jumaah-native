// generated with @7nohe/openapi-react-query-codegen@1.6.0 

import { UseQueryResult } from "@tanstack/react-query";
import { AccountService, HealthService, JumaahService, MusalahService } from "../requests/services.gen";
export type AccountServiceGetAllAccountsDefaultResponse = Awaited<ReturnType<typeof AccountService.getAllAccounts>>;
export type AccountServiceGetAllAccountsQueryResult<TData = AccountServiceGetAllAccountsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useAccountServiceGetAllAccountsKey = "AccountServiceGetAllAccounts";
export const UseAccountServiceGetAllAccountsKeyFn = ({ cursor, limit }: {
  cursor?: number;
  limit?: number;
} = {}, queryKey?: Array<unknown>) => [useAccountServiceGetAllAccountsKey, ...(queryKey ?? [{ cursor, limit }])];
export type AccountServiceGetAccountByUserIdDefaultResponse = Awaited<ReturnType<typeof AccountService.getAccountByUserId>>;
export type AccountServiceGetAccountByUserIdQueryResult<TData = AccountServiceGetAccountByUserIdDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useAccountServiceGetAccountByUserIdKey = "AccountServiceGetAccountByUserId";
export const UseAccountServiceGetAccountByUserIdKeyFn = ({ userId }: {
  userId: string;
}, queryKey?: Array<unknown>) => [useAccountServiceGetAccountByUserIdKey, ...(queryKey ?? [{ userId }])];
export type AccountServiceGetAccountByIdDefaultResponse = Awaited<ReturnType<typeof AccountService.getAccountById>>;
export type AccountServiceGetAccountByIdQueryResult<TData = AccountServiceGetAccountByIdDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useAccountServiceGetAccountByIdKey = "AccountServiceGetAccountById";
export const UseAccountServiceGetAccountByIdKeyFn = ({ id }: {
  id: number;
}, queryKey?: Array<unknown>) => [useAccountServiceGetAccountByIdKey, ...(queryKey ?? [{ id }])];
export type HealthServiceHealthCheckDefaultResponse = Awaited<ReturnType<typeof HealthService.healthCheck>>;
export type HealthServiceHealthCheckQueryResult<TData = HealthServiceHealthCheckDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useHealthServiceHealthCheckKey = "HealthServiceHealthCheck";
export const UseHealthServiceHealthCheckKeyFn = (queryKey?: Array<unknown>) => [useHealthServiceHealthCheckKey, ...(queryKey ?? [])];
export type JumaahServiceGetAllJumaahsDefaultResponse = Awaited<ReturnType<typeof JumaahService.getAllJumaahs>>;
export type JumaahServiceGetAllJumaahsQueryResult<TData = JumaahServiceGetAllJumaahsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useJumaahServiceGetAllJumaahsKey = "JumaahServiceGetAllJumaahs";
export const UseJumaahServiceGetAllJumaahsKeyFn = ({ cursor, limit }: {
  cursor?: number;
  limit?: number;
} = {}, queryKey?: Array<unknown>) => [useJumaahServiceGetAllJumaahsKey, ...(queryKey ?? [{ cursor, limit }])];
export type JumaahServiceGetJumaahByIdDefaultResponse = Awaited<ReturnType<typeof JumaahService.getJumaahById>>;
export type JumaahServiceGetJumaahByIdQueryResult<TData = JumaahServiceGetJumaahByIdDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useJumaahServiceGetJumaahByIdKey = "JumaahServiceGetJumaahById";
export const UseJumaahServiceGetJumaahByIdKeyFn = ({ id }: {
  id: number;
}, queryKey?: Array<unknown>) => [useJumaahServiceGetJumaahByIdKey, ...(queryKey ?? [{ id }])];
export type JumaahServiceGetAttendeesDefaultResponse = Awaited<ReturnType<typeof JumaahService.getAttendees>>;
export type JumaahServiceGetAttendeesQueryResult<TData = JumaahServiceGetAttendeesDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useJumaahServiceGetAttendeesKey = "JumaahServiceGetAttendees";
export const UseJumaahServiceGetAttendeesKeyFn = ({ cursor, id, limit }: {
  cursor?: number;
  id: number;
  limit?: number;
}, queryKey?: Array<unknown>) => [useJumaahServiceGetAttendeesKey, ...(queryKey ?? [{ cursor, id, limit }])];
export type JumaahServiceGetAttendeeCountDefaultResponse = Awaited<ReturnType<typeof JumaahService.getAttendeeCount>>;
export type JumaahServiceGetAttendeeCountQueryResult<TData = JumaahServiceGetAttendeeCountDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useJumaahServiceGetAttendeeCountKey = "JumaahServiceGetAttendeeCount";
export const UseJumaahServiceGetAttendeeCountKeyFn = ({ id }: {
  id: number;
}, queryKey?: Array<unknown>) => [useJumaahServiceGetAttendeeCountKey, ...(queryKey ?? [{ id }])];
export type JumaahServiceGetAttendeeDefaultResponse = Awaited<ReturnType<typeof JumaahService.getAttendee>>;
export type JumaahServiceGetAttendeeQueryResult<TData = JumaahServiceGetAttendeeDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useJumaahServiceGetAttendeeKey = "JumaahServiceGetAttendee";
export const UseJumaahServiceGetAttendeeKeyFn = ({ accountId, id }: {
  accountId: number;
  id: number;
}, queryKey?: Array<unknown>) => [useJumaahServiceGetAttendeeKey, ...(queryKey ?? [{ accountId, id }])];
export type MusalahServiceGetAllMusalahsDefaultResponse = Awaited<ReturnType<typeof MusalahService.getAllMusalahs>>;
export type MusalahServiceGetAllMusalahsQueryResult<TData = MusalahServiceGetAllMusalahsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useMusalahServiceGetAllMusalahsKey = "MusalahServiceGetAllMusalahs";
export const UseMusalahServiceGetAllMusalahsKeyFn = ({ cursor, limit }: {
  cursor?: number;
  limit?: number;
} = {}, queryKey?: Array<unknown>) => [useMusalahServiceGetAllMusalahsKey, ...(queryKey ?? [{ cursor, limit }])];
export type MusalahServiceGetMusalahByIdDefaultResponse = Awaited<ReturnType<typeof MusalahService.getMusalahById>>;
export type MusalahServiceGetMusalahByIdQueryResult<TData = MusalahServiceGetMusalahByIdDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useMusalahServiceGetMusalahByIdKey = "MusalahServiceGetMusalahById";
export const UseMusalahServiceGetMusalahByIdKeyFn = ({ id }: {
  id: number;
}, queryKey?: Array<unknown>) => [useMusalahServiceGetMusalahByIdKey, ...(queryKey ?? [{ id }])];
export type AccountServiceCreateAccountMutationResult = Awaited<ReturnType<typeof AccountService.createAccount>>;
export type JumaahServiceCreateJumaahMutationResult = Awaited<ReturnType<typeof JumaahService.createJumaah>>;
export type JumaahServiceCreateAttendeeMutationResult = Awaited<ReturnType<typeof JumaahService.createAttendee>>;
export type MusalahServiceCreateMusalahMutationResult = Awaited<ReturnType<typeof MusalahService.createMusalah>>;
export type AccountServiceUpdateAccountMutationResult = Awaited<ReturnType<typeof AccountService.updateAccount>>;
export type JumaahServiceUpdateJumaahMutationResult = Awaited<ReturnType<typeof JumaahService.updateJumaah>>;
export type JumaahServiceUpdateAttendeeMutationResult = Awaited<ReturnType<typeof JumaahService.updateAttendee>>;
export type MusalahServiceUpdateMusalahMutationResult = Awaited<ReturnType<typeof MusalahService.updateMusalah>>;
export type AccountServiceDeleteAccountMutationResult = Awaited<ReturnType<typeof AccountService.deleteAccount>>;
export type JumaahServiceDeleteJumaahMutationResult = Awaited<ReturnType<typeof JumaahService.deleteJumaah>>;
export type JumaahServiceDeleteAttendeeMutationResult = Awaited<ReturnType<typeof JumaahService.deleteAttendee>>;
export type MusalahServiceDeleteMusalahMutationResult = Awaited<ReturnType<typeof MusalahService.deleteMusalah>>;
