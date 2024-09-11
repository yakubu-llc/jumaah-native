// generated with @7nohe/openapi-react-query-codegen@1.6.0 

import { type QueryClient } from "@tanstack/react-query";
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
export const prefetchUsePetServiceFindPetsByStatus = (queryClient: QueryClient, { status }: {
  status?: "available" | "pending" | "sold";
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UsePetServiceFindPetsByStatusKeyFn({ status }), queryFn: () => PetService.findPetsByStatus({ status }) });
/**
* Finds Pets by tags
* Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
* @param data The data for the request.
* @param data.tags Tags to filter by
* @returns Pet successful operation
* @throws ApiError
*/
export const prefetchUsePetServiceFindPetsByTags = (queryClient: QueryClient, { tags }: {
  tags?: string[];
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UsePetServiceFindPetsByTagsKeyFn({ tags }), queryFn: () => PetService.findPetsByTags({ tags }) });
/**
* Find pet by ID
* Returns a single pet
* @param data The data for the request.
* @param data.petId ID of pet to return
* @returns Pet successful operation
* @throws ApiError
*/
export const prefetchUsePetServiceGetPetById = (queryClient: QueryClient, { petId }: {
  petId: number;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePetServiceGetPetByIdKeyFn({ petId }), queryFn: () => PetService.getPetById({ petId }) });
/**
* Returns pet inventories by status
* Returns a map of status codes to quantities
* @returns number successful operation
* @throws ApiError
*/
export const prefetchUseStoreServiceGetInventory = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseStoreServiceGetInventoryKeyFn(), queryFn: () => StoreService.getInventory() });
/**
* Find purchase order by ID
* For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
* @param data The data for the request.
* @param data.orderId ID of order that needs to be fetched
* @returns Order successful operation
* @throws ApiError
*/
export const prefetchUseStoreServiceGetOrderById = (queryClient: QueryClient, { orderId }: {
  orderId: number;
}) => queryClient.prefetchQuery({ queryKey: Common.UseStoreServiceGetOrderByIdKeyFn({ orderId }), queryFn: () => StoreService.getOrderById({ orderId }) });
/**
* Logs user into the system
* @param data The data for the request.
* @param data.username The user name for login
* @param data.password The password for login in clear text
* @returns string successful operation
* @throws ApiError
*/
export const prefetchUseUserServiceLoginUser = (queryClient: QueryClient, { password, username }: {
  password?: string;
  username?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseUserServiceLoginUserKeyFn({ password, username }), queryFn: () => UserService.loginUser({ password, username }) });
/**
* Logs out current logged in user session
* @returns unknown successful operation
* @throws ApiError
*/
export const prefetchUseUserServiceLogoutUser = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseUserServiceLogoutUserKeyFn(), queryFn: () => UserService.logoutUser() });
/**
* Get user by user name
* @param data The data for the request.
* @param data.username The name that needs to be fetched. Use user1 for testing.
* @returns User successful operation
* @throws ApiError
*/
export const prefetchUseUserServiceGetUserByName = (queryClient: QueryClient, { username }: {
  username: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseUserServiceGetUserByNameKeyFn({ username }), queryFn: () => UserService.getUserByName({ username }) });
