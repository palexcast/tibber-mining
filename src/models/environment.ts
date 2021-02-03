export type EnvironmentType = {
  TIBBER_API_KEY: string;
  TIBBER_GQL_URL: string;
  TIBBER_FEED_URL: string;
};

export const Environment = (): EnvironmentType => ({
  TIBBER_API_KEY: process.env.TIBBER_API_KEY ?? '',
  TIBBER_GQL_URL: process.env.TIBBER_GQL_URL ?? '',
  TIBBER_FEED_URL: process.env.TIBBER_FEED_URL ?? '',
});
