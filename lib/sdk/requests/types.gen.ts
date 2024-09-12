// This file is auto-generated by @hey-api/openapi-ts

export type Account = {
    createdAt: string;
    deletedAt: string | null;
    id: number;
    name: string;
    updatedAt: string | null;
};

export type Attendee = {
    accountId: number;
    createdAt: string;
    delayedETA: string | null;
    deletedAt: string | null;
    jumaahId: number;
    updatedAt: string | null;
};

export type CreateAccountParams = {
    /**
     * A URL to the JSON Schema for this object.
     */
    readonly $schema?: string;
    name: string;
};

export type CreateAttendeeParams = {
    /**
     * A URL to the JSON Schema for this object.
     */
    readonly $schema?: string;
    accountId: number;
    delayedETA: string | null;
    jumaahId: number;
};

export type CreateAttendeeResponseBody = {
    /**
     * A URL to the JSON Schema for this object.
     */
    readonly $schema?: string;
    attendee: Attendee;
    message: string;
};

export type CreateJumaahParams = {
    /**
     * A URL to the JSON Schema for this object.
     */
    readonly $schema?: string;
    accountId: number;
    beginsAt: string;
    musalahId: number;
    name: string;
    status: 'suggested' | 'scheduled';
};

export type status = 'suggested' | 'scheduled';

export type CreateMusalahParams = {
    /**
     * A URL to the JSON Schema for this object.
     */
    readonly $schema?: string;
    name: string;
};

export type ErrorDetail = {
    /**
     * Where the error occurred, e.g. 'body.items[3].tags' or 'path.thing-id'
     */
    location?: string;
    /**
     * Error message text
     */
    message?: string;
    /**
     * The value at the given location
     */
    value?: unknown;
};

export type ErrorModel = {
    /**
     * A URL to the JSON Schema for this object.
     */
    readonly $schema?: string;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     */
    detail?: string;
    /**
     * Optional list of individual error details
     */
    errors?: Array<ErrorDetail> | null;
    /**
     * A URI reference that identifies the specific occurrence of the problem.
     */
    instance?: string;
    /**
     * HTTP status code
     */
    status?: number;
    /**
     * A short, human-readable summary of the problem type. This value should not change between occurrences of the error.
     */
    title?: string;
    /**
     * A URI reference to human-readable documentation for the error.
     */
    type?: string;
};

export type GetAllAccountOutputBody = {
    /**
     * A URL to the JSON Schema for this object.
     */
    readonly $schema?: string;
    accounts: Array<Account> | null;
    cursor: number | null;
    hasMore: boolean;
    message: string;
};

export type GetAllJumaahOutputBody = {
    /**
     * A URL to the JSON Schema for this object.
     */
    readonly $schema?: string;
    cursor: number | null;
    hasMore: boolean;
    jumaahs: Array<Jumaah> | null;
    message: string;
};

export type GetAllMusalahOutputBody = {
    /**
     * A URL to the JSON Schema for this object.
     */
    readonly $schema?: string;
    cursor: number | null;
    hasMore: boolean;
    message: string;
    musalahs: Array<Musalah> | null;
};

export type GetAttendeeCountResponseBody = {
    /**
     * A URL to the JSON Schema for this object.
     */
    readonly $schema?: string;
    attendee_count: number;
    message: string;
};

export type GetAttendeeResponseBody = {
    /**
     * A URL to the JSON Schema for this object.
     */
    readonly $schema?: string;
    attendee: Attendee;
    message: string;
};

export type GetAttendeesResponseBody = {
    /**
     * A URL to the JSON Schema for this object.
     */
    readonly $schema?: string;
    attendees: Array<Attendee> | null;
    cursor: number | null;
    hasMore: boolean;
    message: string;
};

export type HealthCheckOutputBody = {
    /**
     * A URL to the JSON Schema for this object.
     */
    readonly $schema?: string;
    message: string;
};

export type Jumaah = {
    accountId: number;
    beginsAt: string;
    createdAt: string;
    deletedAt: string | null;
    id: number;
    musalahId: number;
    name: string;
    status: string;
    updatedAt: string | null;
};

export type MessageResponse = {
    /**
     * A URL to the JSON Schema for this object.
     */
    readonly $schema?: string;
    message: string;
};

export type Musalah = {
    createdAt: string;
    deletedAt: string | null;
    id: number;
    name: string;
    updatedAt: string | null;
};

export type SingleAccountResponseBody = {
    /**
     * A URL to the JSON Schema for this object.
     */
    readonly $schema?: string;
    account: Account;
    message: string;
};

export type SingleJumaahResponseBody = {
    /**
     * A URL to the JSON Schema for this object.
     */
    readonly $schema?: string;
    jumaah: Jumaah;
    message: string;
};

export type SingleMusalahResponseBody = {
    /**
     * A URL to the JSON Schema for this object.
     */
    readonly $schema?: string;
    message: string;
    musalah: Musalah;
};

export type UpdateAccountParams = {
    /**
     * A URL to the JSON Schema for this object.
     */
    readonly $schema?: string;
    name: string;
};

export type UpdateAttendeeParams = {
    /**
     * A URL to the JSON Schema for this object.
     */
    readonly $schema?: string;
    accountId: number;
    delayedETA: string | null;
    jumaahId: number;
};

export type UpdateAttendeeResponseBody = {
    /**
     * A URL to the JSON Schema for this object.
     */
    readonly $schema?: string;
    attendee: Attendee;
    message: string;
};

export type UpdateJumaahParams = {
    /**
     * A URL to the JSON Schema for this object.
     */
    readonly $schema?: string;
    begins_at: string;
    musalah_id: number;
    name: string;
    status: 'suggested' | 'scheduled';
};

export type UpdateMusalahParams = {
    /**
     * A URL to the JSON Schema for this object.
     */
    readonly $schema?: string;
    name: string;
};

export type GetAllAccountsData = {
    cursor?: number;
    limit?: number;
};

export type GetAllAccountsResponse = GetAllAccountOutputBody;

export type CreateAccountData = {
    requestBody: CreateAccountParams;
};

export type CreateAccountResponse = SingleAccountResponseBody;

export type DeleteAccountData = {
    id: number;
};

export type DeleteAccountResponse = MessageResponse;

export type GetAccountByIdData = {
    id: number;
};

export type GetAccountByIdResponse = SingleAccountResponseBody;

export type UpdateAccountData = {
    id: number;
    requestBody: UpdateAccountParams;
};

export type UpdateAccountResponse = SingleAccountResponseBody;

export type HealthCheckResponse = HealthCheckOutputBody;

export type GetAllJumaahsData = {
    cursor?: number;
    limit?: number;
};

export type GetAllJumaahsResponse = GetAllJumaahOutputBody;

export type CreateJumaahData = {
    requestBody: CreateJumaahParams;
};

export type CreateJumaahResponse = SingleJumaahResponseBody;

export type CreateAttendeeData = {
    requestBody: CreateAttendeeParams;
};

export type CreateAttendeeResponse = CreateAttendeeResponseBody;

export type DeleteJumaahData = {
    id: number;
};

export type DeleteJumaahResponse = MessageResponse;

export type GetJumaahByIdData = {
    id: number;
};

export type GetJumaahByIdResponse = SingleJumaahResponseBody;

export type UpdateJumaahData = {
    id: number;
    requestBody: UpdateJumaahParams;
};

export type UpdateJumaahResponse = SingleJumaahResponseBody;

export type GetAttendeesData = {
    cursor?: number;
    id: number;
    limit?: number;
};

export type GetAttendeesResponse = GetAttendeesResponseBody;

export type GetAttendeeCountData = {
    id: number;
};

export type GetAttendeeCountResponse = GetAttendeeCountResponseBody;

export type DeleteAttendeeData = {
    accountId?: number;
    id: number;
};

export type DeleteAttendeeResponse = MessageResponse;

export type GetAttendeeData = {
    accountId: number;
    id: number;
};

export type GetAttendeeResponse = GetAttendeeResponseBody;

export type UpdateAttendeeData = {
    accountId?: number;
    id: number;
    requestBody: UpdateAttendeeParams;
};

export type UpdateAttendeeResponse = UpdateAttendeeResponseBody;

export type GetAllMusalahsData = {
    cursor?: number;
    limit?: number;
};

export type GetAllMusalahsResponse = GetAllMusalahOutputBody;

export type CreateMusalahData = {
    requestBody: CreateMusalahParams;
};

export type CreateMusalahResponse = SingleMusalahResponseBody;

export type DeleteMusalahData = {
    id: number;
};

export type DeleteMusalahResponse = MessageResponse;

export type GetMusalahByIdData = {
    id: number;
};

export type GetMusalahByIdResponse = SingleMusalahResponseBody;

export type UpdateMusalahData = {
    id: number;
    requestBody: UpdateMusalahParams;
};

export type UpdateMusalahResponse = SingleMusalahResponseBody;

export type $OpenApiTs = {
    '/account': {
        get: {
            req: GetAllAccountsData;
            res: {
                /**
                 * OK
                 */
                200: GetAllAccountOutputBody;
                /**
                 * Error
                 */
                default: ErrorModel;
            };
        };
        post: {
            req: CreateAccountData;
            res: {
                /**
                 * OK
                 */
                200: SingleAccountResponseBody;
                /**
                 * Error
                 */
                default: ErrorModel;
            };
        };
    };
    '/account/{id}': {
        delete: {
            req: DeleteAccountData;
            res: {
                /**
                 * OK
                 */
                200: MessageResponse;
                /**
                 * Error
                 */
                default: ErrorModel;
            };
        };
        get: {
            req: GetAccountByIdData;
            res: {
                /**
                 * OK
                 */
                200: SingleAccountResponseBody;
                /**
                 * Error
                 */
                default: ErrorModel;
            };
        };
        put: {
            req: UpdateAccountData;
            res: {
                /**
                 * OK
                 */
                200: SingleAccountResponseBody;
                /**
                 * Error
                 */
                default: ErrorModel;
            };
        };
    };
    '/health': {
        get: {
            res: {
                /**
                 * OK
                 */
                200: HealthCheckOutputBody;
                /**
                 * Error
                 */
                default: ErrorModel;
            };
        };
    };
    '/jumaah': {
        get: {
            req: GetAllJumaahsData;
            res: {
                /**
                 * OK
                 */
                200: GetAllJumaahOutputBody;
                /**
                 * Error
                 */
                default: ErrorModel;
            };
        };
        post: {
            req: CreateJumaahData;
            res: {
                /**
                 * OK
                 */
                200: SingleJumaahResponseBody;
                /**
                 * Error
                 */
                default: ErrorModel;
            };
        };
    };
    '/jumaah/attendees': {
        post: {
            req: CreateAttendeeData;
            res: {
                /**
                 * OK
                 */
                200: CreateAttendeeResponseBody;
                /**
                 * Error
                 */
                default: ErrorModel;
            };
        };
    };
    '/jumaah/{id}': {
        delete: {
            req: DeleteJumaahData;
            res: {
                /**
                 * OK
                 */
                200: MessageResponse;
                /**
                 * Error
                 */
                default: ErrorModel;
            };
        };
        get: {
            req: GetJumaahByIdData;
            res: {
                /**
                 * OK
                 */
                200: SingleJumaahResponseBody;
                /**
                 * Error
                 */
                default: ErrorModel;
            };
        };
        put: {
            req: UpdateJumaahData;
            res: {
                /**
                 * OK
                 */
                200: SingleJumaahResponseBody;
                /**
                 * Error
                 */
                default: ErrorModel;
            };
        };
    };
    '/jumaah/{id}/attendees': {
        get: {
            req: GetAttendeesData;
            res: {
                /**
                 * OK
                 */
                200: GetAttendeesResponseBody;
                /**
                 * Error
                 */
                default: ErrorModel;
            };
        };
    };
    '/jumaah/{id}/attendees/count': {
        get: {
            req: GetAttendeeCountData;
            res: {
                /**
                 * OK
                 */
                200: GetAttendeeCountResponseBody;
                /**
                 * Error
                 */
                default: ErrorModel;
            };
        };
    };
    '/jumaah/{id}/attendees/{account_id}': {
        delete: {
            req: DeleteAttendeeData;
            res: {
                /**
                 * OK
                 */
                200: MessageResponse;
                /**
                 * Error
                 */
                default: ErrorModel;
            };
        };
        get: {
            req: GetAttendeeData;
            res: {
                /**
                 * OK
                 */
                200: GetAttendeeResponseBody;
                /**
                 * Error
                 */
                default: ErrorModel;
            };
        };
        put: {
            req: UpdateAttendeeData;
            res: {
                /**
                 * OK
                 */
                200: UpdateAttendeeResponseBody;
                /**
                 * Error
                 */
                default: ErrorModel;
            };
        };
    };
    '/musalah': {
        get: {
            req: GetAllMusalahsData;
            res: {
                /**
                 * OK
                 */
                200: GetAllMusalahOutputBody;
                /**
                 * Error
                 */
                default: ErrorModel;
            };
        };
        post: {
            req: CreateMusalahData;
            res: {
                /**
                 * OK
                 */
                200: SingleMusalahResponseBody;
                /**
                 * Error
                 */
                default: ErrorModel;
            };
        };
    };
    '/musalah/{id}': {
        delete: {
            req: DeleteMusalahData;
            res: {
                /**
                 * OK
                 */
                200: MessageResponse;
                /**
                 * Error
                 */
                default: ErrorModel;
            };
        };
        get: {
            req: GetMusalahByIdData;
            res: {
                /**
                 * OK
                 */
                200: SingleMusalahResponseBody;
                /**
                 * Error
                 */
                default: ErrorModel;
            };
        };
        put: {
            req: UpdateMusalahData;
            res: {
                /**
                 * OK
                 */
                200: SingleMusalahResponseBody;
                /**
                 * Error
                 */
                default: ErrorModel;
            };
        };
    };
};