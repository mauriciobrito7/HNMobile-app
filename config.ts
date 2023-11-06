interface IEnvVariables {
  [key: string]: unknown;
}

const getEnvVariables = (): IEnvVariables => {
  const EXPO_PUBLIC_API_URL = 
    process.env.EXPO_PUBLIC_API_URL || 'https://hn.algolia.com/api/v1/';
  
  const envVariables = {
    API_URL: EXPO_PUBLIC_API_URL,
  };

  return envVariables;
};

export const config = { ...getEnvVariables() };
