// generated with @7nohe/openapi-react-query-codegen@1.6.0 

import { type QueryClient } from "@tanstack/react-query";
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
export const prefetchUseAccountServiceGetAllAccounts = (queryClient: QueryClient, { cursor, limit }: {
  cursor?: number;
  limit?: number;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseAccountServiceGetAllAccountsKeyFn({ cursor, limit }), queryFn: () => AccountService.getAllAccounts({ cursor, limit }) });
/**
* Get account by user ID
* Get account by user ID.
* @param data The data for the request.
* @param data.userId
* @returns SingleAccountResponseBody OK
* @throws ApiError
*/
export const prefetchUseAccountServiceGetAccountByUserId = (queryClient: QueryClient, { userId }: {
  userId: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseAccountServiceGetAccountByUserIdKeyFn({ userId }), queryFn: () => AccountService.getAccountByUserId({ userId }) });
/**
* Get account by ID
* Get account by ID.
* @param data The data for the request.
* @param data.id
* @returns SingleAccountResponseBody OK
* @throws ApiError
*/
export const prefetchUseAccountServiceGetAccountById = (queryClient: QueryClient, { id }: {
  id: number;
}) => queryClient.prefetchQuery({ queryKey: Common.UseAccountServiceGetAccountByIdKeyFn({ id }), queryFn: () => AccountService.getAccountById({ id }) });
/**
* Health check
* Health check.
* @returns HealthCheckOutputBody OK
* @throws ApiError
*/
export const prefetchUseHealthServiceHealthCheck = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseHealthServiceHealthCheckKeyFn(), queryFn: () => HealthService.healthCheck() });
/**
* Get all jumaahs
* Get all jumaahs.
* @param data The data for the request.
* @param data.cursor
* @param data.limit
* @returns GetAllJumaahOutputBody OK
* @throws ApiError
*/
export const prefetchUseJumaahServiceGetAllJumaahs = (queryClient: QueryClient, { cursor, limit }: {
  cursor?: number;
  limit?: number;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseJumaahServiceGetAllJumaahsKeyFn({ cursor, limit }), queryFn: () => JumaahService.getAllJumaahs({ cursor, limit }) });
/**
* Get jumaah by ID
* Get jumaah by ID.
* @param data The data for the request.
* @param data.id
* @returns SingleJumaahResponseBody OK
* @throws ApiError
*/
export const prefetchUseJumaahServiceGetJumaahById = (queryClient: QueryClient, { id }: {
  id: number;
}) => queryClient.prefetchQuery({ queryKey: Common.UseJumaahServiceGetJumaahByIdKeyFn({ id }), queryFn: () => JumaahService.getJumaahById({ id }) });
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
export const prefetchUseJumaahServiceGetAttendees = (queryClient: QueryClient, { cursor, id, limit }: {
  cursor?: number;
  id: number;
  limit?: number;
}) => queryClient.prefetchQuery({ queryKey: Common.UseJumaahServiceGetAttendeesKeyFn({ cursor, id, limit }), queryFn: () => JumaahService.getAttendees({ cursor, id, limit }) });
/**
* Get attendee count
* Get attendee count.
* @param data The data for the request.
* @param data.id
* @returns GetAttendeeCountResponseBody OK
* @throws ApiError
*/
export const prefetchUseJumaahServiceGetAttendeeCount = (queryClient: QueryClient, { id }: {
  id: number;
}) => queryClient.prefetchQuery({ queryKey: Common.UseJumaahServiceGetAttendeeCountKeyFn({ id }), queryFn: () => JumaahService.getAttendeeCount({ id }) });
/**
* Get attendee
* Get attendee.
* @param data The data for the request.
* @param data.id
* @param data.accountId
* @returns GetAttendeeResponseBody OK
* @throws ApiError
*/
export const prefetchUseJumaahServiceGetAttendee = (queryClient: QueryClient, { accountId, id }: {
  accountId: number;
  id: number;
}) => queryClient.prefetchQuery({ queryKey: Common.UseJumaahServiceGetAttendeeKeyFn({ accountId, id }), queryFn: () => JumaahService.getAttendee({ accountId, id }) });
/**
* Get all musalahs
* Get all musalahs.
* @param data The data for the request.
* @param data.cursor
* @param data.limit
* @returns GetAllMusalahOutputBody OK
* @throws ApiError
*/
export const prefetchUseMusalahServiceGetAllMusalahs = (queryClient: QueryClient, { cursor, limit }: {
  cursor?: number;
  limit?: number;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseMusalahServiceGetAllMusalahsKeyFn({ cursor, limit }), queryFn: () => MusalahService.getAllMusalahs({ cursor, limit }) });
/**
* Get musalah by ID
* Get musalah by ID.
* @param data The data for the request.
* @param data.id
* @returns SingleMusalahResponseBody OK
* @throws ApiError
*/
export const prefetchUseMusalahServiceGetMusalahById = (queryClient: QueryClient, { id }: {
  id: number;
}) => queryClient.prefetchQuery({ queryKey: Common.UseMusalahServiceGetMusalahByIdKeyFn({ id }), queryFn: () => MusalahService.getMusalahById({ id }) });
