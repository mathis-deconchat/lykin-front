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
  BigFloat: any;
  Cursor: any;
  Date: any;
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

/** All input for the create `SpendingCategory` mutation. */
export type CreateSpendingCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `SpendingCategory` to be created by this mutation. */
  spendingCategory: SpendingCategoryInput;
};

/** The output of our create `SpendingCategory` mutation. */
export type CreateSpendingCategoryPayload = {
  __typename?: 'CreateSpendingCategoryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `SpendingCategory` that was created by this mutation. */
  spendingCategory?: Maybe<SpendingCategory>;
  /** An edge for our `SpendingCategory`. May be used by Relay 1. */
  spendingCategoryEdge?: Maybe<SpendingCategoriesEdge>;
};


/** The output of our create `SpendingCategory` mutation. */
export type CreateSpendingCategoryPayloadSpendingCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<SpendingCategoriesOrderBy>>;
};

/** All input for the create `Spending` mutation. */
export type CreateSpendingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Spending` to be created by this mutation. */
  spending: SpendingInput;
};

/** The output of our create `Spending` mutation. */
export type CreateSpendingPayload = {
  __typename?: 'CreateSpendingPayload';
  /** Reads a single `SpendingCategory` that is related to this `Spending`. */
  category?: Maybe<SpendingCategory>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Spending` that was created by this mutation. */
  spending?: Maybe<Spending>;
  /** An edge for our `Spending`. May be used by Relay 1. */
  spendingEdge?: Maybe<SpendingsEdge>;
};


/** The output of our create `Spending` mutation. */
export type CreateSpendingPayloadSpendingEdgeArgs = {
  orderBy?: InputMaybe<Array<SpendingsOrderBy>>;
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

/** All input for the create `Users2Spending` mutation. */
export type CreateUsers2SpendingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Users2Spending` to be created by this mutation. */
  users2Spending: Users2SpendingInput;
};

/** The output of our create `Users2Spending` mutation. */
export type CreateUsers2SpendingPayload = {
  __typename?: 'CreateUsers2SpendingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Spending` that is related to this `Users2Spending`. */
  spending?: Maybe<Spending>;
  /** Reads a single `User` that is related to this `Users2Spending`. */
  user?: Maybe<User>;
  /** The `Users2Spending` that was created by this mutation. */
  users2Spending?: Maybe<Users2Spending>;
  /** An edge for our `Users2Spending`. May be used by Relay 1. */
  users2SpendingEdge?: Maybe<Users2SpendingsEdge>;
};


/** The output of our create `Users2Spending` mutation. */
export type CreateUsers2SpendingPayloadUsers2SpendingEdgeArgs = {
  orderBy?: InputMaybe<Array<Users2SpendingsOrderBy>>;
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

/** All input for the `deleteSpendingByNodeId` mutation. */
export type DeleteSpendingByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Spending` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteSpendingCategoryByNodeId` mutation. */
export type DeleteSpendingCategoryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `SpendingCategory` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteSpendingCategory` mutation. */
export type DeleteSpendingCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** The output of our delete `SpendingCategory` mutation. */
export type DeleteSpendingCategoryPayload = {
  __typename?: 'DeleteSpendingCategoryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedSpendingCategoryNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `SpendingCategory` that was deleted by this mutation. */
  spendingCategory?: Maybe<SpendingCategory>;
  /** An edge for our `SpendingCategory`. May be used by Relay 1. */
  spendingCategoryEdge?: Maybe<SpendingCategoriesEdge>;
};


/** The output of our delete `SpendingCategory` mutation. */
export type DeleteSpendingCategoryPayloadSpendingCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<SpendingCategoriesOrderBy>>;
};

/** All input for the `deleteSpending` mutation. */
export type DeleteSpendingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** The output of our delete `Spending` mutation. */
export type DeleteSpendingPayload = {
  __typename?: 'DeleteSpendingPayload';
  /** Reads a single `SpendingCategory` that is related to this `Spending`. */
  category?: Maybe<SpendingCategory>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedSpendingNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Spending` that was deleted by this mutation. */
  spending?: Maybe<Spending>;
  /** An edge for our `Spending`. May be used by Relay 1. */
  spendingEdge?: Maybe<SpendingsEdge>;
};


/** The output of our delete `Spending` mutation. */
export type DeleteSpendingPayloadSpendingEdgeArgs = {
  orderBy?: InputMaybe<Array<SpendingsOrderBy>>;
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

/** All input for the `deleteUsers2SpendingByNodeId` mutation. */
export type DeleteUsers2SpendingByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Users2Spending` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteUsers2Spending` mutation. */
export type DeleteUsers2SpendingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** The output of our delete `Users2Spending` mutation. */
export type DeleteUsers2SpendingPayload = {
  __typename?: 'DeleteUsers2SpendingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedUsers2SpendingNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Spending` that is related to this `Users2Spending`. */
  spending?: Maybe<Spending>;
  /** Reads a single `User` that is related to this `Users2Spending`. */
  user?: Maybe<User>;
  /** The `Users2Spending` that was deleted by this mutation. */
  users2Spending?: Maybe<Users2Spending>;
  /** An edge for our `Users2Spending`. May be used by Relay 1. */
  users2SpendingEdge?: Maybe<Users2SpendingsEdge>;
};


/** The output of our delete `Users2Spending` mutation. */
export type DeleteUsers2SpendingPayloadUsers2SpendingEdgeArgs = {
  orderBy?: InputMaybe<Array<Users2SpendingsOrderBy>>;
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
  /** Creates a single `Spending`. */
  createSpending?: Maybe<CreateSpendingPayload>;
  /** Creates a single `SpendingCategory`. */
  createSpendingCategory?: Maybe<CreateSpendingCategoryPayload>;
  /** Creates a single `User`. */
  createUser?: Maybe<CreateUserPayload>;
  /** Creates a single `Users2Spending`. */
  createUsers2Spending?: Maybe<CreateUsers2SpendingPayload>;
  /** Deletes a single `FlywaySchemaHistory` using a unique key. */
  deleteFlywaySchemaHistory?: Maybe<DeleteFlywaySchemaHistoryPayload>;
  /** Deletes a single `FlywaySchemaHistory` using its globally unique id. */
  deleteFlywaySchemaHistoryByNodeId?: Maybe<DeleteFlywaySchemaHistoryPayload>;
  /** Deletes a single `Spending` using a unique key. */
  deleteSpending?: Maybe<DeleteSpendingPayload>;
  /** Deletes a single `Spending` using its globally unique id. */
  deleteSpendingByNodeId?: Maybe<DeleteSpendingPayload>;
  /** Deletes a single `SpendingCategory` using a unique key. */
  deleteSpendingCategory?: Maybe<DeleteSpendingCategoryPayload>;
  /** Deletes a single `SpendingCategory` using its globally unique id. */
  deleteSpendingCategoryByNodeId?: Maybe<DeleteSpendingCategoryPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUser?: Maybe<DeleteUserPayload>;
  /** Deletes a single `User` using its globally unique id. */
  deleteUserByNodeId?: Maybe<DeleteUserPayload>;
  /** Deletes a single `Users2Spending` using a unique key. */
  deleteUsers2Spending?: Maybe<DeleteUsers2SpendingPayload>;
  /** Deletes a single `Users2Spending` using its globally unique id. */
  deleteUsers2SpendingByNodeId?: Maybe<DeleteUsers2SpendingPayload>;
  /** Updates a single `FlywaySchemaHistory` using a unique key and a patch. */
  updateFlywaySchemaHistory?: Maybe<UpdateFlywaySchemaHistoryPayload>;
  /** Updates a single `FlywaySchemaHistory` using its globally unique id and a patch. */
  updateFlywaySchemaHistoryByNodeId?: Maybe<UpdateFlywaySchemaHistoryPayload>;
  /** Updates a single `Spending` using a unique key and a patch. */
  updateSpending?: Maybe<UpdateSpendingPayload>;
  /** Updates a single `Spending` using its globally unique id and a patch. */
  updateSpendingByNodeId?: Maybe<UpdateSpendingPayload>;
  /** Updates a single `SpendingCategory` using a unique key and a patch. */
  updateSpendingCategory?: Maybe<UpdateSpendingCategoryPayload>;
  /** Updates a single `SpendingCategory` using its globally unique id and a patch. */
  updateSpendingCategoryByNodeId?: Maybe<UpdateSpendingCategoryPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Updates a single `User` using its globally unique id and a patch. */
  updateUserByNodeId?: Maybe<UpdateUserPayload>;
  /** Updates a single `Users2Spending` using a unique key and a patch. */
  updateUsers2Spending?: Maybe<UpdateUsers2SpendingPayload>;
  /** Updates a single `Users2Spending` using its globally unique id and a patch. */
  updateUsers2SpendingByNodeId?: Maybe<UpdateUsers2SpendingPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateFlywaySchemaHistoryArgs = {
  input: CreateFlywaySchemaHistoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateSpendingArgs = {
  input: CreateSpendingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateSpendingCategoryArgs = {
  input: CreateSpendingCategoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUsers2SpendingArgs = {
  input: CreateUsers2SpendingInput;
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
export type MutationDeleteSpendingArgs = {
  input: DeleteSpendingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSpendingByNodeIdArgs = {
  input: DeleteSpendingByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSpendingCategoryArgs = {
  input: DeleteSpendingCategoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSpendingCategoryByNodeIdArgs = {
  input: DeleteSpendingCategoryByNodeIdInput;
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
export type MutationDeleteUsers2SpendingArgs = {
  input: DeleteUsers2SpendingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUsers2SpendingByNodeIdArgs = {
  input: DeleteUsers2SpendingByNodeIdInput;
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
export type MutationUpdateSpendingArgs = {
  input: UpdateSpendingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSpendingByNodeIdArgs = {
  input: UpdateSpendingByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSpendingCategoryArgs = {
  input: UpdateSpendingCategoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSpendingCategoryByNodeIdArgs = {
  input: UpdateSpendingCategoryByNodeIdInput;
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
export type MutationUpdateUsers2SpendingArgs = {
  input: UpdateUsers2SpendingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUsers2SpendingByNodeIdArgs = {
  input: UpdateUsers2SpendingByNodeIdInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

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
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  spending?: Maybe<Spending>;
  /** Reads a single `Spending` using its globally unique `ID`. */
  spendingByNodeId?: Maybe<Spending>;
  /** Reads and enables pagination through a set of `SpendingCategory`. */
  spendingCategories?: Maybe<SpendingCategoriesConnection>;
  spendingCategory?: Maybe<SpendingCategory>;
  /** Reads a single `SpendingCategory` using its globally unique `ID`. */
  spendingCategoryByNodeId?: Maybe<SpendingCategory>;
  /** Reads and enables pagination through a set of `Spending`. */
  spendings?: Maybe<SpendingsConnection>;
  user?: Maybe<User>;
  /** Reads a single `User` using its globally unique `ID`. */
  userByNodeId?: Maybe<User>;
  /** Reads and enables pagination through a set of `User`. */
  users?: Maybe<UsersConnection>;
  users2Spending?: Maybe<Users2Spending>;
  /** Reads a single `Users2Spending` using its globally unique `ID`. */
  users2SpendingByNodeId?: Maybe<Users2Spending>;
  /** Reads and enables pagination through a set of `Users2Spending`. */
  users2Spendings?: Maybe<Users2SpendingsConnection>;
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
export type QuerySpendingArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySpendingByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySpendingCategoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<SpendingCategoryCondition>;
  filter?: InputMaybe<SpendingCategoryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SpendingCategoriesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QuerySpendingCategoryArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySpendingCategoryByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySpendingsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<SpendingCondition>;
  filter?: InputMaybe<SpendingFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SpendingsOrderBy>>;
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
export type QueryUsers2SpendingArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUsers2SpendingByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUsers2SpendingsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<Users2SpendingCondition>;
  filter?: InputMaybe<Users2SpendingFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Users2SpendingsOrderBy>>;
};

export type Spending = Node & {
  __typename?: 'Spending';
  amount: Scalars['BigFloat'];
  /** Reads a single `SpendingCategory` that is related to this `Spending`. */
  category?: Maybe<SpendingCategory>;
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
  /** Reads and enables pagination through a set of `Users2Spending`. */
  users2Spendings: Users2SpendingsConnection;
  /** Reads and enables pagination through a set of `User`. */
  usersByUsers2SpendingSpendingIdAndUserId: SpendingUsersByUsers2SpendingSpendingIdAndUserIdManyToManyConnection;
};


export type SpendingUsers2SpendingsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<Users2SpendingCondition>;
  filter?: InputMaybe<Users2SpendingFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Users2SpendingsOrderBy>>;
};


export type SpendingUsersByUsers2SpendingSpendingIdAndUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<UserCondition>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** A connection to a list of `SpendingCategory` values. */
export type SpendingCategoriesConnection = {
  __typename?: 'SpendingCategoriesConnection';
  /** A list of edges which contains the `SpendingCategory` and cursor to aid in pagination. */
  edges: Array<SpendingCategoriesEdge>;
  /** A list of `SpendingCategory` objects. */
  nodes: Array<Maybe<SpendingCategory>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `SpendingCategory` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `SpendingCategory` edge in the connection. */
export type SpendingCategoriesEdge = {
  __typename?: 'SpendingCategoriesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `SpendingCategory` at the end of the edge. */
  node?: Maybe<SpendingCategory>;
};

/** Methods to use when ordering `SpendingCategory`. */
export enum SpendingCategoriesOrderBy {
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

export type SpendingCategory = Node & {
  __typename?: 'SpendingCategory';
  createdAt: Scalars['Datetime'];
  deletedAt?: Maybe<Scalars['Datetime']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `Spending`. */
  spendingsByCategoryId: SpendingsConnection;
  updatedAt: Scalars['Datetime'];
};


export type SpendingCategorySpendingsByCategoryIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<SpendingCondition>;
  filter?: InputMaybe<SpendingFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SpendingsOrderBy>>;
};

/**
 * A condition to be used against `SpendingCategory` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type SpendingCategoryCondition = {
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

/** A filter to be used against `SpendingCategory` object types. All fields are combined with a logical ‘and.’ */
export type SpendingCategoryFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<SpendingCategoryFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `deletedAt` field. */
  deletedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<IntFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<SpendingCategoryFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<SpendingCategoryFilter>>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
};

/** An input for mutations affecting `SpendingCategory` */
export type SpendingCategoryInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  deletedAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** Represents an update to a `SpendingCategory`. Fields that are set will be updated. */
export type SpendingCategoryPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  deletedAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/**
 * A condition to be used against `Spending` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type SpendingCondition = {
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

/** A filter to be used against `Spending` object types. All fields are combined with a logical ‘and.’ */
export type SpendingFilter = {
  /** Filter by the object’s `amount` field. */
  amount?: InputMaybe<BigFloatFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<SpendingFilter>>;
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
  not?: InputMaybe<SpendingFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<SpendingFilter>>;
  /** Filter by the object’s `s3Key` field. */
  s3Key?: InputMaybe<StringFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
};

/** An input for mutations affecting `Spending` */
export type SpendingInput = {
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

/** Represents an update to a `Spending`. Fields that are set will be updated. */
export type SpendingPatch = {
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

/** A connection to a list of `User` values, with data from `Users2Spending`. */
export type SpendingUsersByUsers2SpendingSpendingIdAndUserIdManyToManyConnection = {
  __typename?: 'SpendingUsersByUsers2SpendingSpendingIdAndUserIdManyToManyConnection';
  /** A list of edges which contains the `User`, info from the `Users2Spending`, and the cursor to aid in pagination. */
  edges: Array<SpendingUsersByUsers2SpendingSpendingIdAndUserIdManyToManyEdge>;
  /** A list of `User` objects. */
  nodes: Array<Maybe<User>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `User` edge in the connection, with data from `Users2Spending`. */
export type SpendingUsersByUsers2SpendingSpendingIdAndUserIdManyToManyEdge = {
  __typename?: 'SpendingUsersByUsers2SpendingSpendingIdAndUserIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `User` at the end of the edge. */
  node?: Maybe<User>;
  /** Reads and enables pagination through a set of `Users2Spending`. */
  users2Spendings: Users2SpendingsConnection;
};


/** A `User` edge in the connection, with data from `Users2Spending`. */
export type SpendingUsersByUsers2SpendingSpendingIdAndUserIdManyToManyEdgeUsers2SpendingsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<Users2SpendingCondition>;
  filter?: InputMaybe<Users2SpendingFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Users2SpendingsOrderBy>>;
};

/** A connection to a list of `Spending` values. */
export type SpendingsConnection = {
  __typename?: 'SpendingsConnection';
  /** A list of edges which contains the `Spending` and cursor to aid in pagination. */
  edges: Array<SpendingsEdge>;
  /** A list of `Spending` objects. */
  nodes: Array<Maybe<Spending>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Spending` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Spending` edge in the connection. */
export type SpendingsEdge = {
  __typename?: 'SpendingsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Spending` at the end of the edge. */
  node?: Maybe<Spending>;
};

/** Methods to use when ordering `Spending`. */
export enum SpendingsOrderBy {
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

/** All input for the `updateSpendingByNodeId` mutation. */
export type UpdateSpendingByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Spending` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Spending` being updated. */
  patch: SpendingPatch;
};

/** All input for the `updateSpendingCategoryByNodeId` mutation. */
export type UpdateSpendingCategoryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `SpendingCategory` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `SpendingCategory` being updated. */
  patch: SpendingCategoryPatch;
};

/** All input for the `updateSpendingCategory` mutation. */
export type UpdateSpendingCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `SpendingCategory` being updated. */
  patch: SpendingCategoryPatch;
};

/** The output of our update `SpendingCategory` mutation. */
export type UpdateSpendingCategoryPayload = {
  __typename?: 'UpdateSpendingCategoryPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `SpendingCategory` that was updated by this mutation. */
  spendingCategory?: Maybe<SpendingCategory>;
  /** An edge for our `SpendingCategory`. May be used by Relay 1. */
  spendingCategoryEdge?: Maybe<SpendingCategoriesEdge>;
};


/** The output of our update `SpendingCategory` mutation. */
export type UpdateSpendingCategoryPayloadSpendingCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<SpendingCategoriesOrderBy>>;
};

/** All input for the `updateSpending` mutation. */
export type UpdateSpendingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `Spending` being updated. */
  patch: SpendingPatch;
};

/** The output of our update `Spending` mutation. */
export type UpdateSpendingPayload = {
  __typename?: 'UpdateSpendingPayload';
  /** Reads a single `SpendingCategory` that is related to this `Spending`. */
  category?: Maybe<SpendingCategory>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Spending` that was updated by this mutation. */
  spending?: Maybe<Spending>;
  /** An edge for our `Spending`. May be used by Relay 1. */
  spendingEdge?: Maybe<SpendingsEdge>;
};


/** The output of our update `Spending` mutation. */
export type UpdateSpendingPayloadSpendingEdgeArgs = {
  orderBy?: InputMaybe<Array<SpendingsOrderBy>>;
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

/** All input for the `updateUsers2SpendingByNodeId` mutation. */
export type UpdateUsers2SpendingByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Users2Spending` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Users2Spending` being updated. */
  patch: Users2SpendingPatch;
};

/** All input for the `updateUsers2Spending` mutation. */
export type UpdateUsers2SpendingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `Users2Spending` being updated. */
  patch: Users2SpendingPatch;
};

/** The output of our update `Users2Spending` mutation. */
export type UpdateUsers2SpendingPayload = {
  __typename?: 'UpdateUsers2SpendingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Spending` that is related to this `Users2Spending`. */
  spending?: Maybe<Spending>;
  /** Reads a single `User` that is related to this `Users2Spending`. */
  user?: Maybe<User>;
  /** The `Users2Spending` that was updated by this mutation. */
  users2Spending?: Maybe<Users2Spending>;
  /** An edge for our `Users2Spending`. May be used by Relay 1. */
  users2SpendingEdge?: Maybe<Users2SpendingsEdge>;
};


/** The output of our update `Users2Spending` mutation. */
export type UpdateUsers2SpendingPayloadUsers2SpendingEdgeArgs = {
  orderBy?: InputMaybe<Array<Users2SpendingsOrderBy>>;
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
  /** Reads and enables pagination through a set of `Spending`. */
  spendingsByUsers2SpendingUserIdAndSpendingId: UserSpendingsByUsers2SpendingUserIdAndSpendingIdManyToManyConnection;
  updatedAt: Scalars['Datetime'];
  /** Reads and enables pagination through a set of `Users2Spending`. */
  users2Spendings: Users2SpendingsConnection;
};


export type UserSpendingsByUsers2SpendingUserIdAndSpendingIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<SpendingCondition>;
  filter?: InputMaybe<SpendingFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SpendingsOrderBy>>;
};


export type UserUsers2SpendingsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<Users2SpendingCondition>;
  filter?: InputMaybe<Users2SpendingFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Users2SpendingsOrderBy>>;
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

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  deletedAt?: InputMaybe<Scalars['Datetime']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** A connection to a list of `Spending` values, with data from `Users2Spending`. */
export type UserSpendingsByUsers2SpendingUserIdAndSpendingIdManyToManyConnection = {
  __typename?: 'UserSpendingsByUsers2SpendingUserIdAndSpendingIdManyToManyConnection';
  /** A list of edges which contains the `Spending`, info from the `Users2Spending`, and the cursor to aid in pagination. */
  edges: Array<UserSpendingsByUsers2SpendingUserIdAndSpendingIdManyToManyEdge>;
  /** A list of `Spending` objects. */
  nodes: Array<Maybe<Spending>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Spending` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Spending` edge in the connection, with data from `Users2Spending`. */
export type UserSpendingsByUsers2SpendingUserIdAndSpendingIdManyToManyEdge = {
  __typename?: 'UserSpendingsByUsers2SpendingUserIdAndSpendingIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Spending` at the end of the edge. */
  node?: Maybe<Spending>;
  /** Reads and enables pagination through a set of `Users2Spending`. */
  users2Spendings: Users2SpendingsConnection;
};


/** A `Spending` edge in the connection, with data from `Users2Spending`. */
export type UserSpendingsByUsers2SpendingUserIdAndSpendingIdManyToManyEdgeUsers2SpendingsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<Users2SpendingCondition>;
  filter?: InputMaybe<Users2SpendingFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<Users2SpendingsOrderBy>>;
};

export type Users2Spending = Node & {
  __typename?: 'Users2Spending';
  createdAt: Scalars['Datetime'];
  deletedAt?: Maybe<Scalars['Datetime']>;
  id: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Spending` that is related to this `Users2Spending`. */
  spending?: Maybe<Spending>;
  spendingId: Scalars['Int'];
  updatedAt: Scalars['Datetime'];
  /** Reads a single `User` that is related to this `Users2Spending`. */
  user?: Maybe<User>;
  userId: Scalars['Int'];
};

/**
 * A condition to be used against `Users2Spending` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type Users2SpendingCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `deletedAt` field. */
  deletedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `spendingId` field. */
  spendingId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['Int']>;
};

/** A filter to be used against `Users2Spending` object types. All fields are combined with a logical ‘and.’ */
export type Users2SpendingFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<Users2SpendingFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `deletedAt` field. */
  deletedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<IntFilter>;
  /** Negates the expression. */
  not?: InputMaybe<Users2SpendingFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<Users2SpendingFilter>>;
  /** Filter by the object’s `spendingId` field. */
  spendingId?: InputMaybe<IntFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<IntFilter>;
};

/** An input for mutations affecting `Users2Spending` */
export type Users2SpendingInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  deletedAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['Int']>;
  spendingId: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  userId: Scalars['Int'];
};

/** Represents an update to a `Users2Spending`. Fields that are set will be updated. */
export type Users2SpendingPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  deletedAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['Int']>;
  spendingId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of `Users2Spending` values. */
export type Users2SpendingsConnection = {
  __typename?: 'Users2SpendingsConnection';
  /** A list of edges which contains the `Users2Spending` and cursor to aid in pagination. */
  edges: Array<Users2SpendingsEdge>;
  /** A list of `Users2Spending` objects. */
  nodes: Array<Maybe<Users2Spending>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Users2Spending` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Users2Spending` edge in the connection. */
export type Users2SpendingsEdge = {
  __typename?: 'Users2SpendingsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Users2Spending` at the end of the edge. */
  node?: Maybe<Users2Spending>;
};

/** Methods to use when ordering `Users2Spending`. */
export enum Users2SpendingsOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  DeletedAtAsc = 'DELETED_AT_ASC',
  DeletedAtDesc = 'DELETED_AT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SpendingIdAsc = 'SPENDING_ID_ASC',
  SpendingIdDesc = 'SPENDING_ID_DESC',
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

export type GetAllSpendingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSpendingsQuery = { __typename?: 'Query', spendings?: { __typename?: 'SpendingsConnection', nodes: Array<{ __typename?: 'Spending', createdAt: any, id: number, categoryId?: number | null } | null> } | null };

export type CreateSpendingMutationVariables = Exact<{
  input: CreateSpendingInput;
}>;


export type CreateSpendingMutation = { __typename?: 'Mutation', createSpending?: { __typename?: 'CreateSpendingPayload', clientMutationId?: string | null } | null };


export const GetAllSpendingsDocument = gql`
    query getAllSpendings {
  spendings {
    nodes {
      createdAt
      id
      categoryId
    }
  }
}
    `;

/**
 * __useGetAllSpendingsQuery__
 *
 * To run a query within a React component, call `useGetAllSpendingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllSpendingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllSpendingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllSpendingsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllSpendingsQuery, GetAllSpendingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllSpendingsQuery, GetAllSpendingsQueryVariables>(GetAllSpendingsDocument, options);
      }
export function useGetAllSpendingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllSpendingsQuery, GetAllSpendingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllSpendingsQuery, GetAllSpendingsQueryVariables>(GetAllSpendingsDocument, options);
        }
export type GetAllSpendingsQueryHookResult = ReturnType<typeof useGetAllSpendingsQuery>;
export type GetAllSpendingsLazyQueryHookResult = ReturnType<typeof useGetAllSpendingsLazyQuery>;
export type GetAllSpendingsQueryResult = Apollo.QueryResult<GetAllSpendingsQuery, GetAllSpendingsQueryVariables>;
export const CreateSpendingDocument = gql`
    mutation createSpending($input: CreateSpendingInput!) {
  createSpending(input: $input) {
    clientMutationId
  }
}
    `;
export type CreateSpendingMutationFn = Apollo.MutationFunction<CreateSpendingMutation, CreateSpendingMutationVariables>;

/**
 * __useCreateSpendingMutation__
 *
 * To run a mutation, you first call `useCreateSpendingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSpendingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSpendingMutation, { data, loading, error }] = useCreateSpendingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSpendingMutation(baseOptions?: Apollo.MutationHookOptions<CreateSpendingMutation, CreateSpendingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSpendingMutation, CreateSpendingMutationVariables>(CreateSpendingDocument, options);
      }
export type CreateSpendingMutationHookResult = ReturnType<typeof useCreateSpendingMutation>;
export type CreateSpendingMutationResult = Apollo.MutationResult<CreateSpendingMutation>;
export type CreateSpendingMutationOptions = Apollo.BaseMutationOptions<CreateSpendingMutation, CreateSpendingMutationVariables>;