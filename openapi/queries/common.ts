// generated with @7nohe/openapi-react-query-codegen@1.6.0 

import { UseQueryResult } from "@tanstack/react-query";
import { PetService, StoreService, UserService } from "../requests/services.gen";
export type PetServiceFindPetsByStatusDefaultResponse = Awaited<ReturnType<typeof PetService.findPetsByStatus>>;
export type PetServiceFindPetsByStatusQueryResult<TData = PetServiceFindPetsByStatusDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePetServiceFindPetsByStatusKey = "PetServiceFindPetsByStatus";
export const UsePetServiceFindPetsByStatusKeyFn = ({ status }: {
  status?: "available" | "pending" | "sold";
} = {}, queryKey?: Array<unknown>) => [usePetServiceFindPetsByStatusKey, ...(queryKey ?? [{ status }])];
export type PetServiceFindPetsByTagsDefaultResponse = Awaited<ReturnType<typeof PetService.findPetsByTags>>;
export type PetServiceFindPetsByTagsQueryResult<TData = PetServiceFindPetsByTagsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePetServiceFindPetsByTagsKey = "PetServiceFindPetsByTags";
export const UsePetServiceFindPetsByTagsKeyFn = ({ tags }: {
  tags?: string[];
} = {}, queryKey?: Array<unknown>) => [usePetServiceFindPetsByTagsKey, ...(queryKey ?? [{ tags }])];
export type PetServiceGetPetByIdDefaultResponse = Awaited<ReturnType<typeof PetService.getPetById>>;
export type PetServiceGetPetByIdQueryResult<TData = PetServiceGetPetByIdDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePetServiceGetPetByIdKey = "PetServiceGetPetById";
export const UsePetServiceGetPetByIdKeyFn = ({ petId }: {
  petId: number;
}, queryKey?: Array<unknown>) => [usePetServiceGetPetByIdKey, ...(queryKey ?? [{ petId }])];
export type StoreServiceGetInventoryDefaultResponse = Awaited<ReturnType<typeof StoreService.getInventory>>;
export type StoreServiceGetInventoryQueryResult<TData = StoreServiceGetInventoryDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useStoreServiceGetInventoryKey = "StoreServiceGetInventory";
export const UseStoreServiceGetInventoryKeyFn = (queryKey?: Array<unknown>) => [useStoreServiceGetInventoryKey, ...(queryKey ?? [])];
export type StoreServiceGetOrderByIdDefaultResponse = Awaited<ReturnType<typeof StoreService.getOrderById>>;
export type StoreServiceGetOrderByIdQueryResult<TData = StoreServiceGetOrderByIdDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useStoreServiceGetOrderByIdKey = "StoreServiceGetOrderById";
export const UseStoreServiceGetOrderByIdKeyFn = ({ orderId }: {
  orderId: number;
}, queryKey?: Array<unknown>) => [useStoreServiceGetOrderByIdKey, ...(queryKey ?? [{ orderId }])];
export type UserServiceLoginUserDefaultResponse = Awaited<ReturnType<typeof UserService.loginUser>>;
export type UserServiceLoginUserQueryResult<TData = UserServiceLoginUserDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useUserServiceLoginUserKey = "UserServiceLoginUser";
export const UseUserServiceLoginUserKeyFn = ({ password, username }: {
  password?: string;
  username?: string;
} = {}, queryKey?: Array<unknown>) => [useUserServiceLoginUserKey, ...(queryKey ?? [{ password, username }])];
export type UserServiceLogoutUserDefaultResponse = Awaited<ReturnType<typeof UserService.logoutUser>>;
export type UserServiceLogoutUserQueryResult<TData = UserServiceLogoutUserDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useUserServiceLogoutUserKey = "UserServiceLogoutUser";
export const UseUserServiceLogoutUserKeyFn = (queryKey?: Array<unknown>) => [useUserServiceLogoutUserKey, ...(queryKey ?? [])];
export type UserServiceGetUserByNameDefaultResponse = Awaited<ReturnType<typeof UserService.getUserByName>>;
export type UserServiceGetUserByNameQueryResult<TData = UserServiceGetUserByNameDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useUserServiceGetUserByNameKey = "UserServiceGetUserByName";
export const UseUserServiceGetUserByNameKeyFn = ({ username }: {
  username: string;
}, queryKey?: Array<unknown>) => [useUserServiceGetUserByNameKey, ...(queryKey ?? [{ username }])];
export type PetServiceAddPetMutationResult = Awaited<ReturnType<typeof PetService.addPet>>;
export type PetServiceUpdatePetWithFormMutationResult = Awaited<ReturnType<typeof PetService.updatePetWithForm>>;
export type PetServiceUploadFileMutationResult = Awaited<ReturnType<typeof PetService.uploadFile>>;
export type StoreServicePlaceOrderMutationResult = Awaited<ReturnType<typeof StoreService.placeOrder>>;
export type UserServiceCreateUserMutationResult = Awaited<ReturnType<typeof UserService.createUser>>;
export type UserServiceCreateUsersWithListInputMutationResult = Awaited<ReturnType<typeof UserService.createUsersWithListInput>>;
export type PetServiceUpdatePetMutationResult = Awaited<ReturnType<typeof PetService.updatePet>>;
export type UserServiceUpdateUserMutationResult = Awaited<ReturnType<typeof UserService.updateUser>>;
export type PetServiceDeletePetMutationResult = Awaited<ReturnType<typeof PetService.deletePet>>;
export type StoreServiceDeleteOrderMutationResult = Awaited<ReturnType<typeof StoreService.deleteOrder>>;
export type UserServiceDeleteUserMutationResult = Awaited<ReturnType<typeof UserService.deleteUser>>;
