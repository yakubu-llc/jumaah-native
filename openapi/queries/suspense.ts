// generated with @7nohe/openapi-react-query-codegen@1.6.0 

import { UseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { PetService, StoreService, UserService } from "../requests/services.gen";
import * as Common from "./common";
/**
* Finds Pets by status
* Multiple status values can be provided with comma separated strings
* @param data The data for the request.
* @param data.status Status values that need to be considered for filter
* @returns Pet successful operation
* @throws ApiError
*/
export const usePetServiceFindPetsByStatusSuspense = <TData = Common.PetServiceFindPetsByStatusDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ status }: {
  status?: "available" | "pending" | "sold";
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePetServiceFindPetsByStatusKeyFn({ status }, queryKey), queryFn: () => PetService.findPetsByStatus({ status }) as TData, ...options });
/**
* Finds Pets by tags
* Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
* @param data The data for the request.
* @param data.tags Tags to filter by
* @returns Pet successful operation
* @throws ApiError
*/
export const usePetServiceFindPetsByTagsSuspense = <TData = Common.PetServiceFindPetsByTagsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ tags }: {
  tags?: string[];
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePetServiceFindPetsByTagsKeyFn({ tags }, queryKey), queryFn: () => PetService.findPetsByTags({ tags }) as TData, ...options });
/**
* Find pet by ID
* Returns a single pet
* @param data The data for the request.
* @param data.petId ID of pet to return
* @returns Pet successful operation
* @throws ApiError
*/
export const usePetServiceGetPetByIdSuspense = <TData = Common.PetServiceGetPetByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ petId }: {
  petId: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UsePetServiceGetPetByIdKeyFn({ petId }, queryKey), queryFn: () => PetService.getPetById({ petId }) as TData, ...options });
/**
* Returns pet inventories by status
* Returns a map of status codes to quantities
* @returns number successful operation
* @throws ApiError
*/
export const useStoreServiceGetInventorySuspense = <TData = Common.StoreServiceGetInventoryDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseStoreServiceGetInventoryKeyFn(queryKey), queryFn: () => StoreService.getInventory() as TData, ...options });
/**
* Find purchase order by ID
* For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
* @param data The data for the request.
* @param data.orderId ID of order that needs to be fetched
* @returns Order successful operation
* @throws ApiError
*/
export const useStoreServiceGetOrderByIdSuspense = <TData = Common.StoreServiceGetOrderByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ orderId }: {
  orderId: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseStoreServiceGetOrderByIdKeyFn({ orderId }, queryKey), queryFn: () => StoreService.getOrderById({ orderId }) as TData, ...options });
/**
* Logs user into the system
* @param data The data for the request.
* @param data.username The user name for login
* @param data.password The password for login in clear text
* @returns string successful operation
* @throws ApiError
*/
export const useUserServiceLoginUserSuspense = <TData = Common.UserServiceLoginUserDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ password, username }: {
  password?: string;
  username?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseUserServiceLoginUserKeyFn({ password, username }, queryKey), queryFn: () => UserService.loginUser({ password, username }) as TData, ...options });
/**
* Logs out current logged in user session
* @returns unknown successful operation
* @throws ApiError
*/
export const useUserServiceLogoutUserSuspense = <TData = Common.UserServiceLogoutUserDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseUserServiceLogoutUserKeyFn(queryKey), queryFn: () => UserService.logoutUser() as TData, ...options });
/**
* Get user by user name
* @param data The data for the request.
* @param data.username The name that needs to be fetched. Use user1 for testing.
* @returns User successful operation
* @throws ApiError
*/
export const useUserServiceGetUserByNameSuspense = <TData = Common.UserServiceGetUserByNameDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ username }: {
  username: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseUserServiceGetUserByNameKeyFn({ username }, queryKey), queryFn: () => UserService.getUserByName({ username }) as TData, ...options });
