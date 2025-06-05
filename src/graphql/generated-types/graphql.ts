import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Continent = {
  __typename?: 'Continent';
  code: Scalars['ID']['output'];
  countries: Array<Country>;
  name: Scalars['String']['output'];
};

export type ContinentFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
};

export type Country = {
  __typename?: 'Country';
  awsRegion: Scalars['String']['output'];
  capital?: Maybe<Scalars['String']['output']>;
  code: Scalars['ID']['output'];
  continent: Continent;
  currencies: Array<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  emoji: Scalars['String']['output'];
  emojiU: Scalars['String']['output'];
  languages: Array<Language>;
  name: Scalars['String']['output'];
  native: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  phones: Array<Scalars['String']['output']>;
  states: Array<State>;
  subdivisions: Array<Subdivision>;
};

export type CountryNameArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type CountryFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
  continent?: InputMaybe<StringQueryOperatorInput>;
  currency?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
};

export type Language = {
  __typename?: 'Language';
  code: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  native: Scalars['String']['output'];
  rtl: Scalars['Boolean']['output'];
};

export type LanguageFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  trackCountryView?: Maybe<TrackingResponse>;
};

export type MutationTrackCountryViewArgs = {
  action: Scalars['String']['input'];
  countryCode: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  _dummy?: Maybe<Scalars['String']['output']>;
  continent?: Maybe<Continent>;
  continents: Array<Continent>;
  countries: Array<Country>;
  country?: Maybe<Country>;
  language?: Maybe<Language>;
  languages: Array<Language>;
};

export type QueryContinentArgs = {
  code: Scalars['ID']['input'];
};

export type QueryContinentsArgs = {
  filter?: InputMaybe<ContinentFilterInput>;
};

export type QueryCountriesArgs = {
  filter?: InputMaybe<CountryFilterInput>;
};

export type QueryCountryArgs = {
  code: Scalars['ID']['input'];
};

export type QueryLanguageArgs = {
  code: Scalars['ID']['input'];
};

export type QueryLanguagesArgs = {
  filter?: InputMaybe<LanguageFilterInput>;
};

export type State = {
  __typename?: 'State';
  code?: Maybe<Scalars['String']['output']>;
  country: Country;
  name: Scalars['String']['output'];
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<Scalars['String']['input']>>;
  regex?: InputMaybe<Scalars['String']['input']>;
};

export type Subdivision = {
  __typename?: 'Subdivision';
  code: Scalars['ID']['output'];
  emoji?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type TrackingResponse = {
  __typename?: 'TrackingResponse';
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type TrackCountryViewMutationVariables = Exact<{
  countryCode: Scalars['String']['input'];
  action: Scalars['String']['input'];
}>;

export type TrackCountryViewMutation = {
  __typename?: 'Mutation';
  trackCountryView?: {
    __typename?: 'TrackingResponse';
    success: boolean;
    message?: string | null;
  } | null;
};

export type GetCountriesQueryVariables = Exact<{ [key: string]: never }>;

export type GetCountriesQuery = {
  __typename?: 'Query';
  countries: Array<{
    __typename?: 'Country';
    code: string;
    name: string;
    emoji: string;
    capital?: string | null;
    currency?: string | null;
    continent: { __typename?: 'Continent'; name: string };
  }>;
};

export type GetCountriesWithFilterQueryVariables = Exact<{
  filter?: InputMaybe<CountryFilterInput>;
}>;

export type GetCountriesWithFilterQuery = {
  __typename?: 'Query';
  countries: Array<{
    __typename?: 'Country';
    code: string;
    name: string;
    emoji: string;
    capital?: string | null;
    currency?: string | null;
    continent: { __typename?: 'Continent'; name: string };
  }>;
};

export type GetCountryDetailsQueryVariables = Exact<{
  code: Scalars['ID']['input'];
}>;

export type GetCountryDetailsQuery = {
  __typename?: 'Query';
  country?: {
    __typename?: 'Country';
    code: string;
    phone: string;
    languages: Array<{ __typename?: 'Language'; name: string; code: string }>;
    states: Array<{ __typename?: 'State'; name: string; code?: string | null }>;
  } | null;
};

export type GetCountryByCodeQueryVariables = Exact<{
  code: Scalars['ID']['input'];
}>;

export type GetCountryByCodeQuery = {
  __typename?: 'Query';
  country?: {
    __typename?: 'Country';
    code: string;
    name: string;
    emoji: string;
    capital?: string | null;
    currency?: string | null;
    phone: string;
    native: string;
    continent: { __typename?: 'Continent'; name: string; code: string };
    languages: Array<{ __typename?: 'Language'; name: string; code: string }>;
    states: Array<{ __typename?: 'State'; name: string; code?: string | null }>;
  } | null;
};

export type GetContinentsQueryVariables = Exact<{ [key: string]: never }>;

export type GetContinentsQuery = {
  __typename?: 'Query';
  continents: Array<{
    __typename?: 'Continent';
    code: string;
    name: string;
    countries: Array<{ __typename?: 'Country'; code: string; name: string }>;
  }>;
};

export const TrackCountryViewDocument = gql`
  mutation TrackCountryView($countryCode: String!, $action: String!) {
    trackCountryView(countryCode: $countryCode, action: $action) {
      success
      message
    }
  }
`;
export type TrackCountryViewMutationFn = Apollo.MutationFunction<
  TrackCountryViewMutation,
  TrackCountryViewMutationVariables
>;

/**
 * __useTrackCountryViewMutation__
 *
 * To run a mutation, you first call `useTrackCountryViewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTrackCountryViewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [trackCountryViewMutation, { data, loading, error }] = useTrackCountryViewMutation({
 *   variables: {
 *      countryCode: // value for 'countryCode'
 *      action: // value for 'action'
 *   },
 * });
 */
export function useTrackCountryViewMutation(
  baseOptions?: Apollo.MutationHookOptions<
    TrackCountryViewMutation,
    TrackCountryViewMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    TrackCountryViewMutation,
    TrackCountryViewMutationVariables
  >(TrackCountryViewDocument, options);
}
export type TrackCountryViewMutationHookResult = ReturnType<
  typeof useTrackCountryViewMutation
>;
export type TrackCountryViewMutationResult =
  Apollo.MutationResult<TrackCountryViewMutation>;
export type TrackCountryViewMutationOptions = Apollo.BaseMutationOptions<
  TrackCountryViewMutation,
  TrackCountryViewMutationVariables
>;
export const GetCountriesDocument = gql`
  query GetCountries {
    countries {
      code
      name
      emoji
      capital
      currency
      continent {
        name
      }
    }
  }
`;

/**
 * __useGetCountriesQuery__
 *
 * To run a query within a React component, call `useGetCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCountriesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCountriesQuery,
    GetCountriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCountriesQuery, GetCountriesQueryVariables>(
    GetCountriesDocument,
    options,
  );
}
export function useGetCountriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCountriesQuery,
    GetCountriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCountriesQuery, GetCountriesQueryVariables>(
    GetCountriesDocument,
    options,
  );
}
export function useGetCountriesSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetCountriesQuery,
        GetCountriesQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetCountriesQuery, GetCountriesQueryVariables>(
    GetCountriesDocument,
    options,
  );
}
export type GetCountriesQueryHookResult = ReturnType<
  typeof useGetCountriesQuery
>;
export type GetCountriesLazyQueryHookResult = ReturnType<
  typeof useGetCountriesLazyQuery
>;
export type GetCountriesSuspenseQueryHookResult = ReturnType<
  typeof useGetCountriesSuspenseQuery
>;
export type GetCountriesQueryResult = Apollo.QueryResult<
  GetCountriesQuery,
  GetCountriesQueryVariables
>;
export const GetCountriesWithFilterDocument = gql`
  query GetCountriesWithFilter($filter: CountryFilterInput) {
    countries(filter: $filter) {
      code
      name
      emoji
      capital
      currency
      continent {
        name
      }
    }
  }
`;

/**
 * __useGetCountriesWithFilterQuery__
 *
 * To run a query within a React component, call `useGetCountriesWithFilterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountriesWithFilterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountriesWithFilterQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetCountriesWithFilterQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCountriesWithFilterQuery,
    GetCountriesWithFilterQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetCountriesWithFilterQuery,
    GetCountriesWithFilterQueryVariables
  >(GetCountriesWithFilterDocument, options);
}
export function useGetCountriesWithFilterLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCountriesWithFilterQuery,
    GetCountriesWithFilterQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetCountriesWithFilterQuery,
    GetCountriesWithFilterQueryVariables
  >(GetCountriesWithFilterDocument, options);
}
export function useGetCountriesWithFilterSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetCountriesWithFilterQuery,
        GetCountriesWithFilterQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetCountriesWithFilterQuery,
    GetCountriesWithFilterQueryVariables
  >(GetCountriesWithFilterDocument, options);
}
export type GetCountriesWithFilterQueryHookResult = ReturnType<
  typeof useGetCountriesWithFilterQuery
>;
export type GetCountriesWithFilterLazyQueryHookResult = ReturnType<
  typeof useGetCountriesWithFilterLazyQuery
>;
export type GetCountriesWithFilterSuspenseQueryHookResult = ReturnType<
  typeof useGetCountriesWithFilterSuspenseQuery
>;
export type GetCountriesWithFilterQueryResult = Apollo.QueryResult<
  GetCountriesWithFilterQuery,
  GetCountriesWithFilterQueryVariables
>;
export const GetCountryDetailsDocument = gql`
  query GetCountryDetails($code: ID!) {
    country(code: $code) {
      code
      languages {
        name
        code
      }
      phone
      states {
        name
        code
      }
    }
  }
`;

/**
 * __useGetCountryDetailsQuery__
 *
 * To run a query within a React component, call `useGetCountryDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountryDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountryDetailsQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useGetCountryDetailsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCountryDetailsQuery,
    GetCountryDetailsQueryVariables
  > &
    (
      | { variables: GetCountryDetailsQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetCountryDetailsQuery,
    GetCountryDetailsQueryVariables
  >(GetCountryDetailsDocument, options);
}
export function useGetCountryDetailsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCountryDetailsQuery,
    GetCountryDetailsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetCountryDetailsQuery,
    GetCountryDetailsQueryVariables
  >(GetCountryDetailsDocument, options);
}
export function useGetCountryDetailsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetCountryDetailsQuery,
        GetCountryDetailsQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetCountryDetailsQuery,
    GetCountryDetailsQueryVariables
  >(GetCountryDetailsDocument, options);
}
export type GetCountryDetailsQueryHookResult = ReturnType<
  typeof useGetCountryDetailsQuery
>;
export type GetCountryDetailsLazyQueryHookResult = ReturnType<
  typeof useGetCountryDetailsLazyQuery
>;
export type GetCountryDetailsSuspenseQueryHookResult = ReturnType<
  typeof useGetCountryDetailsSuspenseQuery
>;
export type GetCountryDetailsQueryResult = Apollo.QueryResult<
  GetCountryDetailsQuery,
  GetCountryDetailsQueryVariables
>;
export const GetCountryByCodeDocument = gql`
  query GetCountryByCode($code: ID!) {
    country(code: $code) {
      code
      name
      emoji
      capital
      currency
      phone
      native
      continent {
        name
        code
      }
      languages {
        name
        code
      }
      states {
        name
        code
      }
    }
  }
`;

/**
 * __useGetCountryByCodeQuery__
 *
 * To run a query within a React component, call `useGetCountryByCodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountryByCodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountryByCodeQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useGetCountryByCodeQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCountryByCodeQuery,
    GetCountryByCodeQueryVariables
  > &
    (
      | { variables: GetCountryByCodeQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCountryByCodeQuery, GetCountryByCodeQueryVariables>(
    GetCountryByCodeDocument,
    options,
  );
}
export function useGetCountryByCodeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCountryByCodeQuery,
    GetCountryByCodeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetCountryByCodeQuery,
    GetCountryByCodeQueryVariables
  >(GetCountryByCodeDocument, options);
}
export function useGetCountryByCodeSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetCountryByCodeQuery,
        GetCountryByCodeQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetCountryByCodeQuery,
    GetCountryByCodeQueryVariables
  >(GetCountryByCodeDocument, options);
}
export type GetCountryByCodeQueryHookResult = ReturnType<
  typeof useGetCountryByCodeQuery
>;
export type GetCountryByCodeLazyQueryHookResult = ReturnType<
  typeof useGetCountryByCodeLazyQuery
>;
export type GetCountryByCodeSuspenseQueryHookResult = ReturnType<
  typeof useGetCountryByCodeSuspenseQuery
>;
export type GetCountryByCodeQueryResult = Apollo.QueryResult<
  GetCountryByCodeQuery,
  GetCountryByCodeQueryVariables
>;
export const GetContinentsDocument = gql`
  query GetContinents {
    continents {
      code
      name
      countries {
        code
        name
      }
    }
  }
`;

/**
 * __useGetContinentsQuery__
 *
 * To run a query within a React component, call `useGetContinentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContinentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContinentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetContinentsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetContinentsQuery,
    GetContinentsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetContinentsQuery, GetContinentsQueryVariables>(
    GetContinentsDocument,
    options,
  );
}
export function useGetContinentsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetContinentsQuery,
    GetContinentsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetContinentsQuery, GetContinentsQueryVariables>(
    GetContinentsDocument,
    options,
  );
}
export function useGetContinentsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetContinentsQuery,
        GetContinentsQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetContinentsQuery,
    GetContinentsQueryVariables
  >(GetContinentsDocument, options);
}
export type GetContinentsQueryHookResult = ReturnType<
  typeof useGetContinentsQuery
>;
export type GetContinentsLazyQueryHookResult = ReturnType<
  typeof useGetContinentsLazyQuery
>;
export type GetContinentsSuspenseQueryHookResult = ReturnType<
  typeof useGetContinentsSuspenseQuery
>;
export type GetContinentsQueryResult = Apollo.QueryResult<
  GetContinentsQuery,
  GetContinentsQueryVariables
>;
