// generated with @7nohe/openapi-react-query-codegen@1.6.0 

import { UseMutationOptions, UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query";
import { PetService, StoreService, UserService } from "../requests/services.gen";
import { Order, Pet, User } from "../requests/types.gen";
import * as Common from "./common";
/**
* Finds Pets by status
* Multiple status values can be provided with comma separated strings
* @param data The data for the request.
* @param data.status Status values that need to be considered for filter
* @returns Pet successful operation
* @throws ApiError
*/
export const usePetServiceFindPetsByStatus = <TData = Common.PetServiceFindPetsByStatusDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ status }: {
  status?: "available" | "pending" | "sold";
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePetServiceFindPetsByStatusKeyFn({ status }, queryKey), queryFn: () => PetService.findPetsByStatus({ status }) as TData, ...options });
/**
* Finds Pets by tags
* Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
* @param data The data for the request.
* @param data.tags Tags to filter by
* @returns Pet successful operation
* @throws ApiError
*/
export const usePetServiceFindPetsByTags = <TData = Common.PetServiceFindPetsByTagsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ tags }: {
  tags?: string[];
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePetServiceFindPetsByTagsKeyFn({ tags }, queryKey), queryFn: () => PetService.findPetsByTags({ tags }) as TData, ...options });
/**
* Find pet by ID
* Returns a single pet
* @param data The data for the request.
* @param data.petId ID of pet to return
* @returns Pet successful operation
* @throws ApiError
*/
export const usePetServiceGetPetById = <TData = Common.PetServiceGetPetByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ petId }: {
  petId: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePetServiceGetPetByIdKeyFn({ petId }, queryKey), queryFn: () => PetService.getPetById({ petId }) as TData, ...options });
/**
* Returns pet inventories by status
* Returns a map of status codes to quantities
* @returns number successful operation
* @throws ApiError
*/
export const useStoreServiceGetInventory = <TData = Common.StoreServiceGetInventoryDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseStoreServiceGetInventoryKeyFn(queryKey), queryFn: () => StoreService.getInventory() as TData, ...options });
/**
* Find purchase order by ID
* For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
* @param data The data for the request.
* @param data.orderId ID of order that needs to be fetched
* @returns Order successful operation
* @throws ApiError
*/
export const useStoreServiceGetOrderById = <TData = Common.StoreServiceGetOrderByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ orderId }: {
  orderId: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseStoreServiceGetOrderByIdKeyFn({ orderId }, queryKey), queryFn: () => StoreService.getOrderById({ orderId }) as TData, ...options });
/**
* Logs user into the system
* @param data The data for the request.
* @param data.username The user name for login
* @param data.password The password for login in clear text
* @returns string successful operation
* @throws ApiError
*/
export const useUserServiceLoginUser = <TData = Common.UserServiceLoginUserDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ password, username }: {
  password?: string;
  username?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseUserServiceLoginUserKeyFn({ password, username }, queryKey), queryFn: () => UserService.loginUser({ password, username }) as TData, ...options });
/**
* Logs out current logged in user session
* @returns unknown successful operation
* @throws ApiError
*/
export const useUserServiceLogoutUser = <TData = Common.UserServiceLogoutUserDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseUserServiceLogoutUserKeyFn(queryKey), queryFn: () => UserService.logoutUser() as TData, ...options });
/**
* Get user by user name
* @param data The data for the request.
* @param data.username The name that needs to be fetched. Use user1 for testing.
* @returns User successful operation
* @throws ApiError
*/
export const useUserServiceGetUserByName = <TData = Common.UserServiceGetUserByNameDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ username }: {
  username: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseUserServiceGetUserByNameKeyFn({ username }, queryKey), queryFn: () => UserService.getUserByName({ username }) as TData, ...options });
/**
* Add a new pet to the store
* Add a new pet to the store
* @param data The data for the request.
* @param data.requestBody Create a new pet in the store
* @returns Pet Successful operation
* @throws ApiError
*/
export const usePetServiceAddPet = <TData = Common.PetServiceAddPetMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: Pet;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: Pet;
}, TContext>({ mutationFn: ({ requestBody }) => PetService.addPet({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* Updates a pet in the store with form data
* @param data The data for the request.
* @param data.petId ID of pet that needs to be updated
* @param data.name Name of pet that needs to be updated
* @param data.status Status of pet that needs to be updated
* @throws ApiError
*/
export const usePetServiceUpdatePetWithForm = <TData = Common.PetServiceUpdatePetWithFormMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  name?: string;
  petId: number;
  status?: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  name?: string;
  petId: number;
  status?: string;
}, TContext>({ mutationFn: ({ name, petId, status }) => PetService.updatePetWithForm({ name, petId, status }) as unknown as Promise<TData>, ...options });
/**
* uploads an image
* @param data The data for the request.
* @param data.petId ID of pet to update
* @param data.additionalMetadata Additional Metadata
* @param data.requestBody
* @returns ApiResponse successful operation
* @throws ApiError
*/
export const usePetServiceUploadFile = <TData = Common.PetServiceUploadFileMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  additionalMetadata?: string;
  petId: number;
  requestBody?: Blob | File;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  additionalMetadata?: string;
  petId: number;
  requestBody?: Blob | File;
}, TContext>({ mutationFn: ({ additionalMetadata, petId, requestBody }) => PetService.uploadFile({ additionalMetadata, petId, requestBody }) as unknown as Promise<TData>, ...options });
/**
* Place an order for a pet
* Place a new order in the store
* @param data The data for the request.
* @param data.requestBody
* @returns Order successful operation
* @throws ApiError
*/
export const useStoreServicePlaceOrder = <TData = Common.StoreServicePlaceOrderMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: Order;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: Order;
}, TContext>({ mutationFn: ({ requestBody }) => StoreService.placeOrder({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* Create user
* This can only be done by the logged in user.
* @param data The data for the request.
* @param data.requestBody Created user object
* @returns User successful operation
* @throws ApiError
*/
export const useUserServiceCreateUser = <TData = Common.UserServiceCreateUserMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: User;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: User;
}, TContext>({ mutationFn: ({ requestBody }) => UserService.createUser({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* Creates list of users with given input array
* Creates list of users with given input array
* @param data The data for the request.
* @param data.requestBody
* @returns User Successful operation
* @returns unknown successful operation
* @throws ApiError
*/
export const useUserServiceCreateUsersWithListInput = <TData = Common.UserServiceCreateUsersWithListInputMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: User[];
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: User[];
}, TContext>({ mutationFn: ({ requestBody }) => UserService.createUsersWithListInput({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* Update an existing pet
* Update an existing pet by Id
* @param data The data for the request.
* @param data.requestBody Update an existent pet in the store
* @returns Pet Successful operation
* @throws ApiError
*/
export const usePetServiceUpdatePet = <TData = Common.PetServiceUpdatePetMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: Pet;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: Pet;
}, TContext>({ mutationFn: ({ requestBody }) => PetService.updatePet({ requestBody }) as unknown as Promise<TData>, ...options });
/**
* Update user
* This can only be done by the logged in user.
* @param data The data for the request.
* @param data.username name that needs to be updated
* @param data.requestBody Update an existent user in the store
* @returns unknown successful operation
* @throws ApiError
*/
export const useUserServiceUpdateUser = <TData = Common.UserServiceUpdateUserMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody?: User;
  username: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody?: User;
  username: string;
}, TContext>({ mutationFn: ({ requestBody, username }) => UserService.updateUser({ requestBody, username }) as unknown as Promise<TData>, ...options });
/**
* Deletes a pet
* @param data The data for the request.
* @param data.petId Pet id to delete
* @param data.apiKey
* @throws ApiError
*/
export const usePetServiceDeletePet = <TData = Common.PetServiceDeletePetMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  apiKey?: string;
  petId: number;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  apiKey?: string;
  petId: number;
}, TContext>({ mutationFn: ({ apiKey, petId }) => PetService.deletePet({ apiKey, petId }) as unknown as Promise<TData>, ...options });
/**
* Delete purchase order by ID
* For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
* @param data The data for the request.
* @param data.orderId ID of the order that needs to be deleted
* @throws ApiError
*/
export const useStoreServiceDeleteOrder = <TData = Common.StoreServiceDeleteOrderMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  orderId: number;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  orderId: number;
}, TContext>({ mutationFn: ({ orderId }) => StoreService.deleteOrder({ orderId }) as unknown as Promise<TData>, ...options });
/**
* Delete user
* This can only be done by the logged in user.
* @param data The data for the request.
* @param data.username The name that needs to be deleted
* @throws ApiError
*/
export const useUserServiceDeleteUser = <TData = Common.UserServiceDeleteUserMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  username: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  username: string;
}, TContext>({ mutationFn: ({ username }) => UserService.deleteUser({ username }) as unknown as Promise<TData>, ...options });
