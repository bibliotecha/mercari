var config = {};

config.api_url =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_API_URL_PRODUCTION
    : process.env.REACT_APP_API_URL_DEVELOPMENT;
