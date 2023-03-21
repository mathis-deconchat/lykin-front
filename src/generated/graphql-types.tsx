import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A floating point number that requires more precision than IEEE 754 binary 64 */
  BigFloat: any;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /** The day, does not include a time. */
  Date: any;
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: any;
};

/** A filter to be used against BigFloat fields. All fields are combined with a logical ‘and.’ */
export type BigFloatFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['BigFloat']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['BigFloat']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['BigFloat']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['BigFloat']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['BigFloat']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['BigFloat']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['BigFloat']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['BigFloat']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['BigFloat']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['BigFloat']>>;
};

/** A filter to be used against Boolean fields. All fields are combined with a logical ‘and.’ */
export type BooleanFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Boolean']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Boolean']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Boolean']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Boolean']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Boolean']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Boolean']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Boolean']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** All input for the create `FlywaySchemaHistory` mutation. */
export type CreateFlywaySchemaHistoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `FlywaySchemaHistory` to be created by this mutation. */
  flywaySchemaHistory: FlywaySchemaHistoryInput;
};

/** The output of our create `FlywaySchemaHistory` mutation. */
export type CreateFlywaySchemaHistoryPayload = {
  __typename?: 'CreateFlywaySchemaHistoryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `FlywaySchemaHistory` that was created by this mutation. */
  flywaySchemaHistory?: Maybe<FlywaySchemaHistory>;
  /** An edge for our `FlywaySchemaHistory`. May be used by Relay 1. */
  flywaySchemaHistoryEdge?: Maybe<FlywaySchemaHistoriesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `FlywaySchemaHistory` mutation. */
export type CreateFlywaySchemaHistoryPayloadFlywaySchemaHistoryEdgeArgs = {
  orderBy?: InputMaybe<Array<FlywaySchemaHistoriesOrderBy>>;
};

/** All input for the create `OperationCategory` mutation. */
export type CreateOperationCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `OperationCategory` to be created by this mutation. */
  operationCategory: OperationCategoryInput;
};

/** The output of our create `OperationCategory` mutation. */
export type CreateOperationCategoryPayload = {
  __typename?: 'CreateOperationCategoryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `OperationCategory` that was created by this mutation. */
  operationCategory?: Maybe<OperationCategory>;
  /** An edge for our `OperationCategory`. May be used by Relay 1. */
  operationCategoryEdge?: Maybe<OperationCategoriesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `OperationCategory` mutation. */
export type CreateOperationCategoryPayloadOperationCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<OperationCategoriesOrderBy>>;
};

/** All input for the create `Operation` mutation. */
export type CreateOperationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Operation` to be created by this mutation. */
  operation: OperationInput;
};

/** The output of our create `Operation` mutation. */
export type CreateOperationPayload = {
  __typename?: 'CreateOperationPayload';
  /** Reads a single `OperationCategory` that is related to this `Operation`. */
  category?: Maybe<OperationCategory>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Operation` that was created by this mutation. */
  operation?: Maybe<Operation>;
  /** An edge for our `Operation`. May be used by Relay 1. */
  operationEdge?: Maybe<OperationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Operation` mutation. */
export type CreateOperationPayloadOperationEdgeArgs = {
  orderBy?: InputMaybe<Array<OperationsOrderBy>>;
};

/** All input for the create `User` mutation. */
export type CreateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `User` to be created by this mutation. */
  user: UserInput;
};

/** The output of our create `User` mutation. */
export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was created by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our create `User` mutation. */
export type CreateUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** All input for the create `Users2Operation` mutation. */
export type CreateUsers2OperationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Users2Operation` to be created by this mutation. */
  users2Operation: Users2OperationInput;
};

/** The output of our create `Users2Operation` mutation. */
export type CreateUsers2OperationPayload = {
  __typename?: 'CreateUsers2OperationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Operation` that is related to this `Users2Operation`. */
  operation?: Maybe<Operation>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Users2Operation`. */
  user?: Maybe<User>;
  /** The `Users2Operation` that was created by this mutation. */
  users2Operation?: Maybe<Users2Operation>;
  /** An edge for our `Users2Operation`. May be used by Relay 1. */
  users2OperationEdge?: Maybe<Users2OperationsEdge>;
};


/** The output of our create `Users2Operation` mutation. */
export type CreateUsers2OperationPayloadUsers2OperationEdgeArgs = {
  orderBy?: InputMaybe<Array<Users2OperationsOrderBy>>;
};

/** A filter to be used against Date fields. All fields are combined with a logical ‘and.’ */
export type DateFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Date']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Date']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Date']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Date']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Date']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Date']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Date']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Date']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Date']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Date']>>;
};

/** A filter to be used against Datetime fields. All fields are combined with a logical ‘and.’ */
export type DatetimeFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Datetime']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Datetime']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Datetime']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Datetime']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Datetime']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Datetime']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Datetime']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Datetime']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Datetime']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Datetime']>>;
};

/** All input for the `deleteFlywaySchemaHistoryByNodeId` mutation. */
export type DeleteFlywaySchemaHistoryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `FlywaySchemaHistory` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteFlywaySchemaHistory` mutation. */
export type DeleteFlywaySchemaHistoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  installedRank: Scalars['Int'];
};

/** The output of our delete `FlywaySchemaHistory` mutation. */
export type DeleteFlywaySchemaHistoryPayload = {
  __typename?: 'DeleteFlywaySchemaHistoryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedFlywaySchemaHistoryNodeId?: Maybe<Scalars['ID']>;
  /** The `FlywaySchemaHistory` that was deleted by this mutation. */
  flywaySchemaHistory?: Maybe<FlywaySchemaHistory>;
  /** An edge for our `FlywaySchemaHistory`. May be used by Relay 1. */
  flywaySchemaHistoryEdge?: Maybe<FlywaySchemaHistoriesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `FlywaySchemaHistory` mutation. */
export type DeleteFlywaySchemaHistoryPayloadFlywaySchemaHistoryEdgeArgs = {
  orderBy?: InputMaybe<Array<FlywaySchemaHistoriesOrderBy>>;
};

/** All input for the `deleteOperationByNodeId` mutation. */
export type DeleteOperationByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Operation` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteOperationCategoryByNodeId` mutation. */
export type DeleteOperationCategoryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `OperationCategory` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteOperationCategory` mutation. */
export type DeleteOperationCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** The output of our delete `OperationCategory` mutation. */
export type DeleteOperationCategoryPayload = {
  __typename?: 'DeleteOperationCategoryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedOperationCategoryNodeId?: Maybe<Scalars['ID']>;
  /** The `OperationCategory` that was deleted by this mutation. */
  operationCategory?: Maybe<OperationCategory>;
  /** An edge for our `OperationCategory`. May be used by Relay 1. */
  operationCategoryEdge?: Maybe<OperationCategoriesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `OperationCategory` mutation. */
export type DeleteOperationCategoryPayloadOperationCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<OperationCategoriesOrderBy>>;
};

/** All input for the `deleteOperation` mutation. */
export type DeleteOperationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** The output of our delete `Operation` mutation. */
export type DeleteOperationPayload = {
  __typename?: 'DeleteOperationPayload';
  /** Reads a single `OperationCategory` that is related to this `Operation`. */
  category?: Maybe<OperationCategory>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedOperationNodeId?: Maybe<Scalars['ID']>;
  /** The `Operation` that was deleted by this mutation. */
  operation?: Maybe<Operation>;
  /** An edge for our `Operation`. May be used by Relay 1. */
  operationEdge?: Maybe<OperationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Operation` mutation. */
export type DeleteOperationPayloadOperationEdgeArgs = {
  orderBy?: InputMaybe<Array<OperationsOrderBy>>;
};

/** All input for the `deleteUserByNodeId` mutation. */
export type DeleteUserByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `User` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteUser` mutation. */
export type DeleteUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** The output of our delete `User` mutation. */
export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedUserNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was deleted by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our delete `User` mutation. */
export type DeleteUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** All input for the `deleteUsers2OperationByNodeId` mutation. */
export type DeleteUsers2OperationByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Users2Operation` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteUsers2Operation` mutation. */
export type DeleteUsers2OperationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** The output of our delete `Users2Operation` mutation. */
export type DeleteUsers2OperationPayload = {
  __typename?: 'DeleteUsers2OperationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedUsers2OperationNodeId?: Maybe<Scalars['ID']>;
  /** Reads a single `Operation` that is related to this `Users2Operation`. */
  operation?: Maybe<Operation>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Users2Operation`. */
  user?: Maybe<User>;
  /** The `Users2Operation` that was deleted by this mutation. */
  users2Operation?: Maybe<Users2Operation>;
  /** An edge for our `Users2Operation`. May be used by Relay 1. */
  users2OperationEdge?: Maybe<Users2OperationsEdge>;
};


/** The output of our delete `Users2Operation` mutation. */
export type DeleteUsers2OperationPayloadUsers2OperationEdgeArgs = {
  orderBy?: InputMaybe<Array<Users2OperationsOrderBy>>;
};

/** A connection to a list of `FlywaySchemaHistory` values. */
export type FlywaySchemaHistoriesConnection = {
  __typename?: 'FlywaySchemaHistoriesConnection';
  /** A list of edges which contains the `FlywaySchemaHistory` and cursor to aid in pagination. */
  edges: Array<FlywaySchemaHistoriesEdge>;
  /** A list of `FlywaySchemaHistory` objects. */
  nodes: Array<Maybe<FlywaySchemaHistory>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `FlywaySchemaHistory` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `FlywaySchemaHistory` edge in the connection. */
export type FlywaySchemaHistoriesEdge = {
  __typename?: 'FlywaySchemaHistoriesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `FlywaySchemaHistory` at the end of the edge. */
  node?: Maybe<FlywaySchemaHistory>;
};

/** Methods to use when ordering `FlywaySchemaHistory`. */
export enum FlywaySchemaHistoriesOrderBy {
  ChecksumAsc = 'CHECKSUM_ASC',
  ChecksumDesc = 'CHECKSUM_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  ExecutionTimeAsc = 'EXECUTION_TIME_ASC',
  ExecutionTimeDesc = 'EXECUTION_TIME_DESC',
  InstalledByAsc = 'INSTALLED_BY_ASC',
  InstalledByDesc = 'INSTALLED_BY_DESC',
  InstalledOnAsc = 'INSTALLED_ON_ASC',
  InstalledOnDesc = 'INSTALLED_ON_DESC',
  InstalledRankAsc = 'INSTALLED_RANK_ASC',
  InstalledRankDesc = 'INSTALLED_RANK_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ScriptAsc = 'SCRIPT_ASC',
  ScriptDesc = 'SCRIPT_DESC',
  SuccessAsc = 'SUCCESS_ASC',
  SuccessDesc = 'SUCCESS_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  VersionAsc = 'VERSION_ASC',
  VersionDesc = 'VERSION_DESC'
}

export type FlywaySchemaHistory = Node & {
  __typename?: 'FlywaySchemaHistory';
  checksum?: Maybe<Scalars['Int']>;
  description: Scalars['String'];
  executionTime: Scalars['Int'];
  installedBy: Scalars['String'];
  installedOn: Scalars['Datetime'];
  installedRank: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  script: Scalars['String'];
  success: Scalars['Boolean'];
  type: Scalars['String'];
  version?: Maybe<Scalars['String']>;
};

/**
 * A condition to be used against `FlywaySchemaHistory` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type FlywaySchemaHistoryCondition = {
  /** Checks for equality with the object’s `checksum` field. */
  checksum?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `executionTime` field. */
  executionTime?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `installedBy` field. */
  installedBy?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `installedOn` field. */
  installedOn?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `installedRank` field. */
  installedRank?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `script` field. */
  script?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `success` field. */
  success?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `version` field. */
  version?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `FlywaySchemaHistory` object types. All fields are combined with a logical ‘and.’ */
export type FlywaySchemaHistoryFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<FlywaySchemaHistoryFilter>>;
  /** Filter by the object’s `checksum` field. */
  checksum?: InputMaybe<IntFilter>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Filter by the object’s `executionTime` field. */
  executionTime?: InputMaybe<IntFilter>;
  /** Filter by the object’s `installedBy` field. */
  installedBy?: InputMaybe<StringFilter>;
  /** Filter by the object’s `installedOn` field. */
  installedOn?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `installedRank` field. */
  installedRank?: InputMaybe<IntFilter>;
  /** Negates the expression. */
  not?: InputMaybe<FlywaySchemaHistoryFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<FlywaySchemaHistoryFilter>>;
  /** Filter by the object’s `script` field. */
  script?: InputMaybe<StringFilter>;
  /** Filter by the object’s `success` field. */
  success?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `type` field. */
  type?: InputMaybe<StringFilter>;
  /** Filter by the object’s `version` field. */
  version?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `FlywaySchemaHistory` */
export type FlywaySchemaHistoryInput = {
  checksum?: InputMaybe<Scalars['Int']>;
  description: Scalars['String'];
  executionTime: Scalars['Int'];
  installedBy: Scalars['String'];
  installedOn?: InputMaybe<Scalars['Datetime']>;
  installedRank: Scalars['Int'];
  script: Scalars['String'];
  success: Scalars['Boolean'];
  type: Scalars['String'];
  version?: InputMaybe<Scalars['String']>;
};

/** Represents an update to a `FlywaySchemaHistory`. Fields that are set will be updated. */
export type FlywaySchemaHistoryPatch = {
  checksum?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  executionTime?: InputMaybe<Scalars['Int']>;
  installedBy?: InputMaybe<Scalars['String']>;
  installedOn?: InputMaybe<Scalars['Datetime']>;
  installedRank?: InputMaybe<Scalars['Int']>;
  script?: InputMaybe<Scalars['String']>;
  success?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against Int fields. All fields are combined with a logical ‘and.’ */
export type IntFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Int']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Int']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Int']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Int']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Int']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Int']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Int']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Int']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Int']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `FlywaySchemaHistory`. */
  createFlywaySchemaHistory?: Maybe<CreateFlywaySchemaHistoryPayload>;
  /** Creates a single `Operation`. */
  createOperation?: Maybe<CreateOperationPayload>;
  /** Creates a single `OperationCategory`. */
  createOperationCategory?: Maybe<CreateOperationCategoryPayload>;
  /** Creates a single `User`. */
  createUser?: Maybe<CreateUserPayload>;
  /** Creates a single `Users2Operation`. */
  createUsers2Operation?: Maybe<CreateUsers2OperationPayload>;
  /** Deletes a single `FlywaySchemaHistory` using a unique key. */
  deleteFlywaySchemaHistory?: Maybe<DeleteFlywaySchemaHistoryPayload>;
  /** Deletes a single `FlywaySchemaHistory` using its globally unique id. */
  deleteFlywaySchemaHistoryByNodeId?: Maybe<DeleteFlywaySchemaHistoryPayload>;
  /** Deletes a single `Operation` using a unique key. */
  deleteOperation?: Maybe<DeleteOperationPayload>;
  /** Deletes a single `Operation` using its globally unique id. */
  deleteOperationByNodeId?: Maybe<DeleteOperationPayload>;
  /** Deletes a single `OperationCategory` using a unique key. */
  deleteOperationCategory?: Maybe<DeleteOperationCategoryPayload>;
  /** Deletes a single `OperationCategory` using its globally unique id. */
  deleteOperationCategoryByNodeId?: Maybe<DeleteOperationCategoryPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUser?: Maybe<DeleteUserPayload>;
  /** Deletes a single `User` using its globally unique id. */
  deleteUserByNodeId?: Maybe<DeleteUserPayload>;
  /** Deletes a single `Users2Operation` using a unique key. */
  deleteUsers2Operation?: Maybe<DeleteUsers2OperationPayload>;
  /** Deletes a single `Users2Operation` using its globally unique id. */
  deleteUsers2OperationByNodeId?: Maybe<DeleteUsers2OperationPayload>;
  /** Updates a single `FlywaySchemaHistory` using a unique key and a patch. */
  updateFlywaySchemaHistory?: Maybe<UpdateFlywaySchemaHistoryPayload>;
  /** Updates a single `FlywaySchemaHistory` using its globally unique id and a patch. */
  updateFlywaySchemaHistoryByNodeId?: Maybe<UpdateFlywaySchemaHistoryPayload>;
  /** Updates a single `Operation` using a unique key and a patch. */
  updateOperation?: Maybe<UpdateOperationPayload>;
  /** Updates a single `Operation` using its globally unique id and a patch. */
  updateOperationByNodeId?: Maybe<UpdateOperationPayload>;
  /** Updates a single `OperationCategory` using a unique key and a patch. */
  updateOperationCategory?: Maybe<UpdateOperationCategoryPayload>;
  /** Updates a single `OperationCategory` using its globally unique id and a patch. */
  updateOperationCategoryByNodeId?: Maybe<UpdateOperationCategoryPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Updates a single `User` using its globally unique id and a patch. */
  updateUserByNodeId?: Maybe<UpdateUserPayload>;
  /** Updates a single `Users2Operation` using a unique key and a patch. */
  updateUsers2Operation?: Maybe<UpdateUsers2OperationPayload>;
  /** Updates a single `Users2Operation` using its globally unique id and a patch. */
  updateUsers2OperationByNodeId?: Maybe<UpdateUsers2OperationPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateFlywaySchemaHistoryArgs = {
  input: CreateFlywaySchemaHistoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateOperationArgs = {
  input: CreateOperationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateOperationCategoryArgs = {
  input: CreateOperationCategoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUsers2OperationArgs = {
  input: CreateUsers2OperationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFlywaySchemaHistoryArgs = {
  input: DeleteFlywaySchemaHistoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFlywaySchemaHistoryByNodeIdArgs = {
  input: DeleteFlywaySchemaHistoryByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOperationArgs = {
  input: DeleteOperationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOperationByNodeIdArgs = {
  input: DeleteOperationByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOperationCategoryArgs = {
  input: DeleteOperationCategoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOperationCategoryByNodeIdArgs = {
  input: DeleteOperationCategoryByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByNodeIdArgs = {
  input: DeleteUserByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUsers2OperationArgs = {
  input: DeleteUsers2OperationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUsers2OperationByNodeIdArgs = {
  input: DeleteUsers2OperationByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFlywaySchemaHistoryArgs = {
  input: UpdateFlywaySchemaHistoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFlywaySchemaHistoryByNodeIdArgs = {
  input: UpdateFlywaySchemaHistoryByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOperationArgs = {
  input: UpdateOperationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOperationByNodeIdArgs = {
  input: UpdateOperationByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOperationCategoryArgs = {
  input: UpdateOperationCategoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOperationCategoryByNodeIdArgs = {
  input: UpdateOperationCategoryByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByNodeIdArgs = {
  input: UpdateUserByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUsers2OperationArgs = {
  input: UpdateUsers2OperationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUsers2OperationByNodeIdArgs = {
  input: UpdateUsers2OperationByNodeIdInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

export type Operation = Node & {
  __typename?: 'Operation';
  amount: Scalars['BigFloat'];
  /** Reads a single `OperationCategory` that is related to this `Operation`. */
  category?: Maybe<OperationCategory>;
  categoryId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['Datetime'];
  date: Scalars['Date'];
  deletedAt?: Maybe<Scalars['Datetime']>;
  description: Scalars['String'];
  id: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  s3Key?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Datetime'];
  /** Reads and enables pagination through a set of `Users2Operation`. */
  users2Operations: Users2OperationsConnection;
  /** Reads and enables pagination through a set of `User`. */
  usersByUsers2OperationOperationIdAndUserId: OperationUsersByUsers2OperationOperationIdAndUserIdManyToManyConnection;
};


export type OperationUsers2OperationsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<Users2OperationCondition>;
  filter?: InputMaybe<Users2OperationFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Users2OperationsOrderBy>>;
};


export type OperationUsersByUsers2OperationOperationIdAndUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<UserCondition>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** A connection to a list of `OperationCategory` values. */
export type OperationCategoriesConnection = {
  __typename?: 'OperationCategoriesConnection';
  /** A list of edges which contains the `OperationCategory` and cursor to aid in pagination. */
  edges: Array<OperationCategoriesEdge>;
  /** A list of `OperationCategory` objects. */
  nodes: Array<Maybe<OperationCategory>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `OperationCategory` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `OperationCategory` edge in the connection. */
export type OperationCategoriesEdge = {
  __typename?: 'OperationCategoriesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `OperationCategory` at the end of the edge. */
  node?: Maybe<OperationCategory>;
};

/** Methods to use when ordering `OperationCategory`. */
export enum OperationCategoriesOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  DeletedAtAsc = 'DELETED_AT_ASC',
  DeletedAtDesc = 'DELETED_AT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

export type OperationCategory = Node & {
  __typename?: 'OperationCategory';
  createdAt: Scalars['Datetime'];
  deletedAt?: Maybe<Scalars['Datetime']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `Operation`. */
  operationsByCategoryId: OperationsConnection;
  updatedAt: Scalars['Datetime'];
};


export type OperationCategoryOperationsByCategoryIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<OperationCondition>;
  filter?: InputMaybe<OperationFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OperationsOrderBy>>;
};

/**
 * A condition to be used against `OperationCategory` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type OperationCategoryCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `deletedAt` field. */
  deletedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** A filter to be used against `OperationCategory` object types. All fields are combined with a logical ‘and.’ */
export type OperationCategoryFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<OperationCategoryFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `deletedAt` field. */
  deletedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<IntFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<OperationCategoryFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<OperationCategoryFilter>>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
};

/** An input for mutations affecting `OperationCategory` */
export type OperationCategoryInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  deletedAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** Represents an update to a `OperationCategory`. Fields that are set will be updated. */
export type OperationCategoryPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  deletedAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/**
 * A condition to be used against `Operation` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type OperationCondition = {
  /** Checks for equality with the object’s `amount` field. */
  amount?: InputMaybe<Scalars['BigFloat']>;
  /** Checks for equality with the object’s `categoryId` field. */
  categoryId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `date` field. */
  date?: InputMaybe<Scalars['Date']>;
  /** Checks for equality with the object’s `deletedAt` field. */
  deletedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `s3Key` field. */
  s3Key?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** A filter to be used against `Operation` object types. All fields are combined with a logical ‘and.’ */
export type OperationFilter = {
  /** Filter by the object’s `amount` field. */
  amount?: InputMaybe<BigFloatFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<OperationFilter>>;
  /** Filter by the object’s `categoryId` field. */
  categoryId?: InputMaybe<IntFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `date` field. */
  date?: InputMaybe<DateFilter>;
  /** Filter by the object’s `deletedAt` field. */
  deletedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<IntFilter>;
  /** Negates the expression. */
  not?: InputMaybe<OperationFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<OperationFilter>>;
  /** Filter by the object’s `s3Key` field. */
  s3Key?: InputMaybe<StringFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
};

/** An input for mutations affecting `Operation` */
export type OperationInput = {
  amount: Scalars['BigFloat'];
  categoryId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  date: Scalars['Date'];
  deletedAt?: InputMaybe<Scalars['Datetime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  s3Key?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** Represents an update to a `Operation`. Fields that are set will be updated. */
export type OperationPatch = {
  amount?: InputMaybe<Scalars['BigFloat']>;
  categoryId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  date?: InputMaybe<Scalars['Date']>;
  deletedAt?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  s3Key?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** A connection to a list of `User` values, with data from `Users2Operation`. */
export type OperationUsersByUsers2OperationOperationIdAndUserIdManyToManyConnection = {
  __typename?: 'OperationUsersByUsers2OperationOperationIdAndUserIdManyToManyConnection';
  /** A list of edges which contains the `User`, info from the `Users2Operation`, and the cursor to aid in pagination. */
  edges: Array<OperationUsersByUsers2OperationOperationIdAndUserIdManyToManyEdge>;
  /** A list of `User` objects. */
  nodes: Array<Maybe<User>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `User` edge in the connection, with data from `Users2Operation`. */
export type OperationUsersByUsers2OperationOperationIdAndUserIdManyToManyEdge = {
  __typename?: 'OperationUsersByUsers2OperationOperationIdAndUserIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `User` at the end of the edge. */
  node?: Maybe<User>;
  /** Reads and enables pagination through a set of `Users2Operation`. */
  users2Operations: Users2OperationsConnection;
};


/** A `User` edge in the connection, with data from `Users2Operation`. */
export type OperationUsersByUsers2OperationOperationIdAndUserIdManyToManyEdgeUsers2OperationsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<Users2OperationCondition>;
  filter?: InputMaybe<Users2OperationFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Users2OperationsOrderBy>>;
};

/** A connection to a list of `Operation` values. */
export type OperationsConnection = {
  __typename?: 'OperationsConnection';
  /** A list of edges which contains the `Operation` and cursor to aid in pagination. */
  edges: Array<OperationsEdge>;
  /** A list of `Operation` objects. */
  nodes: Array<Maybe<Operation>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Operation` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Operation` edge in the connection. */
export type OperationsEdge = {
  __typename?: 'OperationsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Operation` at the end of the edge. */
  node?: Maybe<Operation>;
};

/** Methods to use when ordering `Operation`. */
export enum OperationsOrderBy {
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  CategoryIdAsc = 'CATEGORY_ID_ASC',
  CategoryIdDesc = 'CATEGORY_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  DeletedAtAsc = 'DELETED_AT_ASC',
  DeletedAtDesc = 'DELETED_AT_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  S3KeyAsc = 'S3_KEY_ASC',
  S3KeyDesc = 'S3_KEY_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  /** Reads and enables pagination through a set of `FlywaySchemaHistory`. */
  flywaySchemaHistories?: Maybe<FlywaySchemaHistoriesConnection>;
  flywaySchemaHistory?: Maybe<FlywaySchemaHistory>;
  /** Reads a single `FlywaySchemaHistory` using its globally unique `ID`. */
  flywaySchemaHistoryByNodeId?: Maybe<FlywaySchemaHistory>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  operation?: Maybe<Operation>;
  /** Reads a single `Operation` using its globally unique `ID`. */
  operationByNodeId?: Maybe<Operation>;
  /** Reads and enables pagination through a set of `OperationCategory`. */
  operationCategories?: Maybe<OperationCategoriesConnection>;
  operationCategory?: Maybe<OperationCategory>;
  /** Reads a single `OperationCategory` using its globally unique `ID`. */
  operationCategoryByNodeId?: Maybe<OperationCategory>;
  /** Reads and enables pagination through a set of `Operation`. */
  operations?: Maybe<OperationsConnection>;
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  user?: Maybe<User>;
  /** Reads a single `User` using its globally unique `ID`. */
  userByNodeId?: Maybe<User>;
  /** Reads and enables pagination through a set of `User`. */
  users?: Maybe<UsersConnection>;
  users2Operation?: Maybe<Users2Operation>;
  /** Reads a single `Users2Operation` using its globally unique `ID`. */
  users2OperationByNodeId?: Maybe<Users2Operation>;
  /** Reads and enables pagination through a set of `Users2Operation`. */
  users2Operations?: Maybe<Users2OperationsConnection>;
};


/** The root query type which gives access points into the data universe. */
export type QueryFlywaySchemaHistoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<FlywaySchemaHistoryCondition>;
  filter?: InputMaybe<FlywaySchemaHistoryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FlywaySchemaHistoriesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryFlywaySchemaHistoryArgs = {
  installedRank: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFlywaySchemaHistoryByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOperationArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOperationByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOperationCategoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<OperationCategoryCondition>;
  filter?: InputMaybe<OperationCategoryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OperationCategoriesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryOperationCategoryArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOperationCategoryByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOperationsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<OperationCondition>;
  filter?: InputMaybe<OperationFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OperationsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryUserArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<UserCondition>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryUsers2OperationArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUsers2OperationByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUsers2OperationsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<Users2OperationCondition>;
  filter?: InputMaybe<Users2OperationFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Users2OperationsOrderBy>>;
};

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export type StringFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['String']>;
  /** Not equal to the specified value, treating null like an ordinary value (case-insensitive). */
  distinctFromInsensitive?: InputMaybe<Scalars['String']>;
  /** Ends with the specified string (case-sensitive). */
  endsWith?: InputMaybe<Scalars['String']>;
  /** Ends with the specified string (case-insensitive). */
  endsWithInsensitive?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value (case-insensitive). */
  equalToInsensitive?: InputMaybe<Scalars['String']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['String']>;
  /** Greater than the specified value (case-insensitive). */
  greaterThanInsensitive?: InputMaybe<Scalars['String']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['String']>;
  /** Greater than or equal to the specified value (case-insensitive). */
  greaterThanOrEqualToInsensitive?: InputMaybe<Scalars['String']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Included in the specified list (case-insensitive). */
  inInsensitive?: InputMaybe<Array<Scalars['String']>>;
  /** Contains the specified string (case-sensitive). */
  includes?: InputMaybe<Scalars['String']>;
  /** Contains the specified string (case-insensitive). */
  includesInsensitive?: InputMaybe<Scalars['String']>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['String']>;
  /** Less than the specified value (case-insensitive). */
  lessThanInsensitive?: InputMaybe<Scalars['String']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['String']>;
  /** Less than or equal to the specified value (case-insensitive). */
  lessThanOrEqualToInsensitive?: InputMaybe<Scalars['String']>;
  /** Matches the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  like?: InputMaybe<Scalars['String']>;
  /** Matches the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  likeInsensitive?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value (case-insensitive). */
  notDistinctFromInsensitive?: InputMaybe<Scalars['String']>;
  /** Does not end with the specified string (case-sensitive). */
  notEndsWith?: InputMaybe<Scalars['String']>;
  /** Does not end with the specified string (case-insensitive). */
  notEndsWithInsensitive?: InputMaybe<Scalars['String']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['String']>;
  /** Not equal to the specified value (case-insensitive). */
  notEqualToInsensitive?: InputMaybe<Scalars['String']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['String']>>;
  /** Not included in the specified list (case-insensitive). */
  notInInsensitive?: InputMaybe<Array<Scalars['String']>>;
  /** Does not contain the specified string (case-sensitive). */
  notIncludes?: InputMaybe<Scalars['String']>;
  /** Does not contain the specified string (case-insensitive). */
  notIncludesInsensitive?: InputMaybe<Scalars['String']>;
  /** Does not match the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLike?: InputMaybe<Scalars['String']>;
  /** Does not match the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLikeInsensitive?: InputMaybe<Scalars['String']>;
  /** Does not start with the specified string (case-sensitive). */
  notStartsWith?: InputMaybe<Scalars['String']>;
  /** Does not start with the specified string (case-insensitive). */
  notStartsWithInsensitive?: InputMaybe<Scalars['String']>;
  /** Starts with the specified string (case-sensitive). */
  startsWith?: InputMaybe<Scalars['String']>;
  /** Starts with the specified string (case-insensitive). */
  startsWithInsensitive?: InputMaybe<Scalars['String']>;
};

/** All input for the `updateFlywaySchemaHistoryByNodeId` mutation. */
export type UpdateFlywaySchemaHistoryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `FlywaySchemaHistory` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `FlywaySchemaHistory` being updated. */
  patch: FlywaySchemaHistoryPatch;
};

/** All input for the `updateFlywaySchemaHistory` mutation. */
export type UpdateFlywaySchemaHistoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  installedRank: Scalars['Int'];
  /** An object where the defined keys will be set on the `FlywaySchemaHistory` being updated. */
  patch: FlywaySchemaHistoryPatch;
};

/** The output of our update `FlywaySchemaHistory` mutation. */
export type UpdateFlywaySchemaHistoryPayload = {
  __typename?: 'UpdateFlywaySchemaHistoryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `FlywaySchemaHistory` that was updated by this mutation. */
  flywaySchemaHistory?: Maybe<FlywaySchemaHistory>;
  /** An edge for our `FlywaySchemaHistory`. May be used by Relay 1. */
  flywaySchemaHistoryEdge?: Maybe<FlywaySchemaHistoriesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `FlywaySchemaHistory` mutation. */
export type UpdateFlywaySchemaHistoryPayloadFlywaySchemaHistoryEdgeArgs = {
  orderBy?: InputMaybe<Array<FlywaySchemaHistoriesOrderBy>>;
};

/** All input for the `updateOperationByNodeId` mutation. */
export type UpdateOperationByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Operation` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Operation` being updated. */
  patch: OperationPatch;
};

/** All input for the `updateOperationCategoryByNodeId` mutation. */
export type UpdateOperationCategoryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `OperationCategory` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `OperationCategory` being updated. */
  patch: OperationCategoryPatch;
};

/** All input for the `updateOperationCategory` mutation. */
export type UpdateOperationCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `OperationCategory` being updated. */
  patch: OperationCategoryPatch;
};

/** The output of our update `OperationCategory` mutation. */
export type UpdateOperationCategoryPayload = {
  __typename?: 'UpdateOperationCategoryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `OperationCategory` that was updated by this mutation. */
  operationCategory?: Maybe<OperationCategory>;
  /** An edge for our `OperationCategory`. May be used by Relay 1. */
  operationCategoryEdge?: Maybe<OperationCategoriesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `OperationCategory` mutation. */
export type UpdateOperationCategoryPayloadOperationCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<OperationCategoriesOrderBy>>;
};

/** All input for the `updateOperation` mutation. */
export type UpdateOperationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `Operation` being updated. */
  patch: OperationPatch;
};

/** The output of our update `Operation` mutation. */
export type UpdateOperationPayload = {
  __typename?: 'UpdateOperationPayload';
  /** Reads a single `OperationCategory` that is related to this `Operation`. */
  category?: Maybe<OperationCategory>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Operation` that was updated by this mutation. */
  operation?: Maybe<Operation>;
  /** An edge for our `Operation`. May be used by Relay 1. */
  operationEdge?: Maybe<OperationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Operation` mutation. */
export type UpdateOperationPayloadOperationEdgeArgs = {
  orderBy?: InputMaybe<Array<OperationsOrderBy>>;
};

/** All input for the `updateUserByNodeId` mutation. */
export type UpdateUserByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `User` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `User` being updated. */
  patch: UserPatch;
};

/** All input for the `updateUser` mutation. */
export type UpdateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `User` being updated. */
  patch: UserPatch;
};

/** The output of our update `User` mutation. */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was updated by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our update `User` mutation. */
export type UpdateUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** All input for the `updateUsers2OperationByNodeId` mutation. */
export type UpdateUsers2OperationByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Users2Operation` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Users2Operation` being updated. */
  patch: Users2OperationPatch;
};

/** All input for the `updateUsers2Operation` mutation. */
export type UpdateUsers2OperationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `Users2Operation` being updated. */
  patch: Users2OperationPatch;
};

/** The output of our update `Users2Operation` mutation. */
export type UpdateUsers2OperationPayload = {
  __typename?: 'UpdateUsers2OperationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Operation` that is related to this `Users2Operation`. */
  operation?: Maybe<Operation>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Users2Operation`. */
  user?: Maybe<User>;
  /** The `Users2Operation` that was updated by this mutation. */
  users2Operation?: Maybe<Users2Operation>;
  /** An edge for our `Users2Operation`. May be used by Relay 1. */
  users2OperationEdge?: Maybe<Users2OperationsEdge>;
};


/** The output of our update `Users2Operation` mutation. */
export type UpdateUsers2OperationPayloadUsers2OperationEdgeArgs = {
  orderBy?: InputMaybe<Array<Users2OperationsOrderBy>>;
};

export type User = Node & {
  __typename?: 'User';
  createdAt: Scalars['Datetime'];
  deletedAt?: Maybe<Scalars['Datetime']>;
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `Operation`. */
  operationsByUsers2OperationUserIdAndOperationId: UserOperationsByUsers2OperationUserIdAndOperationIdManyToManyConnection;
  updatedAt: Scalars['Datetime'];
  /** Reads and enables pagination through a set of `Users2Operation`. */
  users2Operations: Users2OperationsConnection;
};


export type UserOperationsByUsers2OperationUserIdAndOperationIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<OperationCondition>;
  filter?: InputMaybe<OperationFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OperationsOrderBy>>;
};


export type UserUsers2OperationsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<Users2OperationCondition>;
  filter?: InputMaybe<Users2OperationFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Users2OperationsOrderBy>>;
};

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `deletedAt` field. */
  deletedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `email` field. */
  email?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** A filter to be used against `User` object types. All fields are combined with a logical ‘and.’ */
export type UserFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<UserFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `deletedAt` field. */
  deletedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `email` field. */
  email?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<IntFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<UserFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<UserFilter>>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
};

/** An input for mutations affecting `User` */
export type UserInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  deletedAt?: InputMaybe<Scalars['Datetime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** A connection to a list of `Operation` values, with data from `Users2Operation`. */
export type UserOperationsByUsers2OperationUserIdAndOperationIdManyToManyConnection = {
  __typename?: 'UserOperationsByUsers2OperationUserIdAndOperationIdManyToManyConnection';
  /** A list of edges which contains the `Operation`, info from the `Users2Operation`, and the cursor to aid in pagination. */
  edges: Array<UserOperationsByUsers2OperationUserIdAndOperationIdManyToManyEdge>;
  /** A list of `Operation` objects. */
  nodes: Array<Maybe<Operation>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Operation` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Operation` edge in the connection, with data from `Users2Operation`. */
export type UserOperationsByUsers2OperationUserIdAndOperationIdManyToManyEdge = {
  __typename?: 'UserOperationsByUsers2OperationUserIdAndOperationIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Operation` at the end of the edge. */
  node?: Maybe<Operation>;
  /** Reads and enables pagination through a set of `Users2Operation`. */
  users2Operations: Users2OperationsConnection;
};


/** A `Operation` edge in the connection, with data from `Users2Operation`. */
export type UserOperationsByUsers2OperationUserIdAndOperationIdManyToManyEdgeUsers2OperationsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<Users2OperationCondition>;
  filter?: InputMaybe<Users2OperationFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Users2OperationsOrderBy>>;
};

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  deletedAt?: InputMaybe<Scalars['Datetime']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

export type Users2Operation = Node & {
  __typename?: 'Users2Operation';
  createdAt: Scalars['Datetime'];
  deletedAt?: Maybe<Scalars['Datetime']>;
  id: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Operation` that is related to this `Users2Operation`. */
  operation?: Maybe<Operation>;
  operationId: Scalars['Int'];
  updatedAt: Scalars['Datetime'];
  /** Reads a single `User` that is related to this `Users2Operation`. */
  user?: Maybe<User>;
  userId: Scalars['Int'];
};

/**
 * A condition to be used against `Users2Operation` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type Users2OperationCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `deletedAt` field. */
  deletedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `operationId` field. */
  operationId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['Int']>;
};

/** A filter to be used against `Users2Operation` object types. All fields are combined with a logical ‘and.’ */
export type Users2OperationFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<Users2OperationFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `deletedAt` field. */
  deletedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<IntFilter>;
  /** Negates the expression. */
  not?: InputMaybe<Users2OperationFilter>;
  /** Filter by the object’s `operationId` field. */
  operationId?: InputMaybe<IntFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<Users2OperationFilter>>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<IntFilter>;
};

/** An input for mutations affecting `Users2Operation` */
export type Users2OperationInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  deletedAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['Int']>;
  operationId: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  userId: Scalars['Int'];
};

/** Represents an update to a `Users2Operation`. Fields that are set will be updated. */
export type Users2OperationPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  deletedAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['Int']>;
  operationId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of `Users2Operation` values. */
export type Users2OperationsConnection = {
  __typename?: 'Users2OperationsConnection';
  /** A list of edges which contains the `Users2Operation` and cursor to aid in pagination. */
  edges: Array<Users2OperationsEdge>;
  /** A list of `Users2Operation` objects. */
  nodes: Array<Maybe<Users2Operation>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Users2Operation` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Users2Operation` edge in the connection. */
export type Users2OperationsEdge = {
  __typename?: 'Users2OperationsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Users2Operation` at the end of the edge. */
  node?: Maybe<Users2Operation>;
};

/** Methods to use when ordering `Users2Operation`. */
export enum Users2OperationsOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  DeletedAtAsc = 'DELETED_AT_ASC',
  DeletedAtDesc = 'DELETED_AT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  OperationIdAsc = 'OPERATION_ID_ASC',
  OperationIdDesc = 'OPERATION_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

/** A connection to a list of `User` values. */
export type UsersConnection = {
  __typename?: 'UsersConnection';
  /** A list of edges which contains the `User` and cursor to aid in pagination. */
  edges: Array<UsersEdge>;
  /** A list of `User` objects. */
  nodes: Array<Maybe<User>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `User` edge in the connection. */
export type UsersEdge = {
  __typename?: 'UsersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `User` at the end of the edge. */
  node?: Maybe<User>;
};

/** Methods to use when ordering `User`. */
export enum UsersOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  DeletedAtAsc = 'DELETED_AT_ASC',
  DeletedAtDesc = 'DELETED_AT_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

export type MyMutationMutationVariables = Exact<{
  input: CreateOperationCategoryInput;
}>;


export type MyMutationMutation = { __typename?: 'Mutation', createOperationCategory?: { __typename?: 'CreateOperationCategoryPayload', operationCategory?: { __typename?: 'OperationCategory', name: string, id: number } | null } | null };

export type CreateOperationMutationVariables = Exact<{
  input: CreateOperationInput;
}>;


export type CreateOperationMutation = { __typename?: 'Mutation', createOperation?: { __typename?: 'CreateOperationPayload', operation?: { __typename?: 'Operation', id: number } | null } | null };


export const MyMutationDocument = gql`
    mutation MyMutation($input: CreateOperationCategoryInput!) {
  createOperationCategory(input: $input) {
    operationCategory {
      name
      id
    }
  }
}
    `;
export type MyMutationMutationFn = Apollo.MutationFunction<MyMutationMutation, MyMutationMutationVariables>;

/**
 * __useMyMutationMutation__
 *
 * To run a mutation, you first call `useMyMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMyMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [myMutationMutation, { data, loading, error }] = useMyMutationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMyMutationMutation(baseOptions?: Apollo.MutationHookOptions<MyMutationMutation, MyMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MyMutationMutation, MyMutationMutationVariables>(MyMutationDocument, options);
      }
export type MyMutationMutationHookResult = ReturnType<typeof useMyMutationMutation>;
export type MyMutationMutationResult = Apollo.MutationResult<MyMutationMutation>;
export type MyMutationMutationOptions = Apollo.BaseMutationOptions<MyMutationMutation, MyMutationMutationVariables>;
export const CreateOperationDocument = gql`
    mutation CreateOperation($input: CreateOperationInput!) {
  createOperation(input: $input) {
    operation {
      id
    }
  }
}
    `;
export type CreateOperationMutationFn = Apollo.MutationFunction<CreateOperationMutation, CreateOperationMutationVariables>;

/**
 * __useCreateOperationMutation__
 *
 * To run a mutation, you first call `useCreateOperationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOperationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOperationMutation, { data, loading, error }] = useCreateOperationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOperationMutation(baseOptions?: Apollo.MutationHookOptions<CreateOperationMutation, CreateOperationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOperationMutation, CreateOperationMutationVariables>(CreateOperationDocument, options);
      }
export type CreateOperationMutationHookResult = ReturnType<typeof useCreateOperationMutation>;
export type CreateOperationMutationResult = Apollo.MutationResult<CreateOperationMutation>;
export type CreateOperationMutationOptions = Apollo.BaseMutationOptions<CreateOperationMutation, CreateOperationMutationVariables>;