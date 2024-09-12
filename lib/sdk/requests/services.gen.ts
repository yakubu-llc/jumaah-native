// This file is auto-generated by @hey-api/openapi-ts

import type { CancelablePromise } from './core/CancelablePromise';
import { OpenAPI } from './core/OpenAPI';
import { request as __request } from './core/request';
import type {
  GetAllAccountsData,
  GetAllAccountsResponse,
  CreateAccountData,
  CreateAccountResponse,
  GetAccountByUserIdData,
  GetAccountByUserIdResponse,
  DeleteAccountData,
  DeleteAccountResponse,
  GetAccountByIdData,
  GetAccountByIdResponse,
  UpdateAccountData,
  UpdateAccountResponse,
  HealthCheckResponse,
  GetAllJumaahsData,
  GetAllJumaahsResponse,
  CreateJumaahData,
  CreateJumaahResponse,
  CreateAttendeeData,
  CreateAttendeeResponse,
  DeleteJumaahData,
  DeleteJumaahResponse,
  GetJumaahByIdData,
  GetJumaahByIdResponse,
  UpdateJumaahData,
  UpdateJumaahResponse,
  GetAttendeesData,
  GetAttendeesResponse,
  GetAttendeeCountData,
  GetAttendeeCountResponse,
  DeleteAttendeeData,
  DeleteAttendeeResponse,
  GetAttendeeData,
  GetAttendeeResponse,
  UpdateAttendeeData,
  UpdateAttendeeResponse,
  GetAllMusalahsData,
  GetAllMusalahsResponse,
  CreateMusalahData,
  CreateMusalahResponse,
  DeleteMusalahData,
  DeleteMusalahResponse,
  GetMusalahByIdData,
  GetMusalahByIdResponse,
  UpdateMusalahData,
  UpdateMusalahResponse,
} from './types.gen';

export class AccountService {
  /**
   * Get all accounts
   * Get all accounts.
   * @param data The data for the request.
   * @param data.cursor
   * @param data.limit
   * @returns GetAllAccountOutputBody OK
   * @throws ApiError
   */
  public static getAllAccounts(
    data: GetAllAccountsData = {}
  ): CancelablePromise<GetAllAccountsResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/account',
      query: {
        cursor: data.cursor,
        limit: data.limit,
      },
      errors: {
        default: 'Error',
      },
    });
  }

  /**
   * Create a account
   * Create a account.
   * @param data The data for the request.
   * @param data.requestBody
   * @returns SingleAccountResponseBody OK
   * @throws ApiError
   */
  public static createAccount(data: CreateAccountData): CancelablePromise<CreateAccountResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/account',
      body: data.requestBody,
      mediaType: 'application/json',
      errors: {
        default: 'Error',
      },
    });
  }

  /**
   * Get account by user ID
   * Get account by user ID.
   * @param data The data for the request.
   * @param data.userId
   * @returns SingleAccountResponseBody OK
   * @throws ApiError
   */
  public static getAccountByUserId(
    data: GetAccountByUserIdData
  ): CancelablePromise<GetAccountByUserIdResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/account/user/{userId}',
      path: {
        userId: data.userId,
      },
      errors: {
        default: 'Error',
      },
    });
  }

  /**
   * Delete a account
   * Delete a account.
   * @param data The data for the request.
   * @param data.id
   * @returns MessageResponse OK
   * @throws ApiError
   */
  public static deleteAccount(data: DeleteAccountData): CancelablePromise<DeleteAccountResponse> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/account/{id}',
      path: {
        id: data.id,
      },
      errors: {
        default: 'Error',
      },
    });
  }

  /**
   * Get account by ID
   * Get account by ID.
   * @param data The data for the request.
   * @param data.id
   * @returns SingleAccountResponseBody OK
   * @throws ApiError
   */
  public static getAccountById(
    data: GetAccountByIdData
  ): CancelablePromise<GetAccountByIdResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/account/{id}',
      path: {
        id: data.id,
      },
      errors: {
        default: 'Error',
      },
    });
  }

  /**
   * Update a account
   * Update a account.
   * @param data The data for the request.
   * @param data.id
   * @param data.requestBody
   * @returns SingleAccountResponseBody OK
   * @throws ApiError
   */
  public static updateAccount(data: UpdateAccountData): CancelablePromise<UpdateAccountResponse> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/account/{id}',
      path: {
        id: data.id,
      },
      body: data.requestBody,
      mediaType: 'application/json',
      errors: {
        default: 'Error',
      },
    });
  }
}

export class HealthService {
  /**
   * Health check
   * Health check.
   * @returns HealthCheckOutputBody OK
   * @throws ApiError
   */
  public static healthCheck(): CancelablePromise<HealthCheckResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/health',
      errors: {
        default: 'Error',
      },
    });
  }
}

export class JumaahService {
  /**
   * Get all jumaahs
   * Get all jumaahs.
   * @param data The data for the request.
   * @param data.cursor
   * @param data.limit
   * @returns GetAllJumaahOutputBody OK
   * @throws ApiError
   */
  public static getAllJumaahs(
    data: GetAllJumaahsData = {}
  ): CancelablePromise<GetAllJumaahsResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/jumaah',
      query: {
        cursor: data.cursor,
        limit: data.limit,
      },
      errors: {
        default: 'Error',
      },
    });
  }

  /**
   * Create a jumaah
   * Create a jumaah.
   * @param data The data for the request.
   * @param data.requestBody
   * @returns SingleJumaahResponseBody OK
   * @throws ApiError
   */
  public static createJumaah(data: CreateJumaahData): CancelablePromise<CreateJumaahResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/jumaah',
      body: data.requestBody,
      mediaType: 'application/json',
      errors: {
        default: 'Error',
      },
    });
  }

  /**
   * Create attendee
   * Create attendee.
   * @param data The data for the request.
   * @param data.requestBody
   * @returns CreateAttendeeResponseBody OK
   * @throws ApiError
   */
  public static createAttendee(
    data: CreateAttendeeData
  ): CancelablePromise<CreateAttendeeResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/jumaah/attendees',
      body: data.requestBody,
      mediaType: 'application/json',
      errors: {
        default: 'Error',
      },
    });
  }

  /**
   * Delete a jumaah
   * Delete a jumaah.
   * @param data The data for the request.
   * @param data.id
   * @returns MessageResponse OK
   * @throws ApiError
   */
  public static deleteJumaah(data: DeleteJumaahData): CancelablePromise<DeleteJumaahResponse> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/jumaah/{id}',
      path: {
        id: data.id,
      },
      errors: {
        default: 'Error',
      },
    });
  }

  /**
   * Get jumaah by ID
   * Get jumaah by ID.
   * @param data The data for the request.
   * @param data.id
   * @returns SingleJumaahResponseBody OK
   * @throws ApiError
   */
  public static getJumaahById(data: GetJumaahByIdData): CancelablePromise<GetJumaahByIdResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/jumaah/{id}',
      path: {
        id: data.id,
      },
      errors: {
        default: 'Error',
      },
    });
  }

  /**
   * Update a jumaah
   * Update a jumaah.
   * @param data The data for the request.
   * @param data.id
   * @param data.requestBody
   * @returns SingleJumaahResponseBody OK
   * @throws ApiError
   */
  public static updateJumaah(data: UpdateJumaahData): CancelablePromise<UpdateJumaahResponse> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/jumaah/{id}',
      path: {
        id: data.id,
      },
      body: data.requestBody,
      mediaType: 'application/json',
      errors: {
        default: 'Error',
      },
    });
  }

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
  public static getAttendees(data: GetAttendeesData): CancelablePromise<GetAttendeesResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/jumaah/{id}/attendees',
      path: {
        id: data.id,
      },
      query: {
        cursor: data.cursor,
        limit: data.limit,
      },
      errors: {
        default: 'Error',
      },
    });
  }

  /**
   * Get attendee count
   * Get attendee count.
   * @param data The data for the request.
   * @param data.id
   * @returns GetAttendeeCountResponseBody OK
   * @throws ApiError
   */
  public static getAttendeeCount(
    data: GetAttendeeCountData
  ): CancelablePromise<GetAttendeeCountResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/jumaah/{id}/attendees/count',
      path: {
        id: data.id,
      },
      errors: {
        default: 'Error',
      },
    });
  }

  /**
   * Delete attendee
   * Delete attendee.
   * @param data The data for the request.
   * @param data.id
   * @param data.accountId
   * @returns MessageResponse OK
   * @throws ApiError
   */
  public static deleteAttendee(
    data: DeleteAttendeeData
  ): CancelablePromise<DeleteAttendeeResponse> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/jumaah/{id}/attendees/{account_id}',
      path: {
        id: data.id,
      },
      query: {
        account_id: data.accountId,
      },
      errors: {
        default: 'Error',
      },
    });
  }

  /**
   * Get attendee
   * Get attendee.
   * @param data The data for the request.
   * @param data.id
   * @param data.accountId
   * @returns GetAttendeeResponseBody OK
   * @throws ApiError
   */
  public static getAttendee(data: GetAttendeeData): CancelablePromise<GetAttendeeResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/jumaah/{id}/attendees/{account_id}',
      path: {
        id: data.id,
        account_id: data.accountId,
      },
      errors: {
        default: 'Error',
      },
    });
  }

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
  public static updateAttendee(
    data: UpdateAttendeeData
  ): CancelablePromise<UpdateAttendeeResponse> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/jumaah/{id}/attendees/{account_id}',
      path: {
        id: data.id,
      },
      query: {
        account_id: data.accountId,
      },
      body: data.requestBody,
      mediaType: 'application/json',
      errors: {
        default: 'Error',
      },
    });
  }
}

export class MusalahService {
  /**
   * Get all musalahs
   * Get all musalahs.
   * @param data The data for the request.
   * @param data.cursor
   * @param data.limit
   * @returns GetAllMusalahOutputBody OK
   * @throws ApiError
   */
  public static getAllMusalahs(
    data: GetAllMusalahsData = {}
  ): CancelablePromise<GetAllMusalahsResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/musalah',
      query: {
        cursor: data.cursor,
        limit: data.limit,
      },
      errors: {
        default: 'Error',
      },
    });
  }

  /**
   * Create a musalah
   * Create a musalah.
   * @param data The data for the request.
   * @param data.requestBody
   * @returns SingleMusalahResponseBody OK
   * @throws ApiError
   */
  public static createMusalah(data: CreateMusalahData): CancelablePromise<CreateMusalahResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/musalah',
      body: data.requestBody,
      mediaType: 'application/json',
      errors: {
        default: 'Error',
      },
    });
  }

  /**
   * Delete a musalah
   * Delete a musalah.
   * @param data The data for the request.
   * @param data.id
   * @returns MessageResponse OK
   * @throws ApiError
   */
  public static deleteMusalah(data: DeleteMusalahData): CancelablePromise<DeleteMusalahResponse> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/musalah/{id}',
      path: {
        id: data.id,
      },
      errors: {
        default: 'Error',
      },
    });
  }

  /**
   * Get musalah by ID
   * Get musalah by ID.
   * @param data The data for the request.
   * @param data.id
   * @returns SingleMusalahResponseBody OK
   * @throws ApiError
   */
  public static getMusalahById(
    data: GetMusalahByIdData
  ): CancelablePromise<GetMusalahByIdResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/musalah/{id}',
      path: {
        id: data.id,
      },
      errors: {
        default: 'Error',
      },
    });
  }

  /**
   * Update a musalah
   * Update a musalah.
   * @param data The data for the request.
   * @param data.id
   * @param data.requestBody
   * @returns SingleMusalahResponseBody OK
   * @throws ApiError
   */
  public static updateMusalah(data: UpdateMusalahData): CancelablePromise<UpdateMusalahResponse> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/musalah/{id}',
      path: {
        id: data.id,
      },
      body: data.requestBody,
      mediaType: 'application/json',
      errors: {
        default: 'Error',
      },
    });
  }
}
