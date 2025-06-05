import { gql } from '@apollo/client';

// Minimal data for initial load
export const GET_COUNTRIES = gql`
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

// Countries with filter support
export const GET_COUNTRIES_WITH_FILTER = gql`
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

// Detailed data to be loaded on demand
export const GET_COUNTRY_DETAILS = gql`
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

export const GET_COUNTRY_BY_CODE = gql`
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

export const GET_CONTINENTS = gql`
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
