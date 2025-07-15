// Environment variables configuration and validation

export const env = {
  // Sanity CMS
  NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  SANITY_API_TOKEN: process.env.SANITY_API_TOKEN || '',
  
  // Email Service
  RESEND_API_KEY: process.env.RESEND_API_KEY || '',
  
  // Google Calendar API
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || '',
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || '',
  GOOGLE_REFRESH_TOKEN: process.env.GOOGLE_REFRESH_TOKEN || '',
  
  // Company
  COMPANY_EMAIL: process.env.COMPANY_EMAIL || 'info@businessranker.cz',
  
  // Site
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://businessranker.cz',
  
  // Environment
  NODE_ENV: process.env.NODE_ENV || 'development',
  
  // Computed values
  get isDevelopment() {
    return this.NODE_ENV === 'development';
  },
  
  get isProduction() {
    return this.NODE_ENV === 'production';
  }
};

// Validation function for required environment variables
export function validateEnv(): { isValid: boolean; missingVars: string[] } {
  const requiredVars = [
    'NEXT_PUBLIC_SANITY_PROJECT_ID',
    'SANITY_API_TOKEN',
    'RESEND_API_KEY',
    'GOOGLE_CLIENT_ID',
    'GOOGLE_CLIENT_SECRET',
    'GOOGLE_REFRESH_TOKEN'
  ];
  
  const missingVars = requiredVars.filter(varName => {
    const value = process.env[varName];
    return !value || value.trim() === '';
  });
  
  return {
    isValid: missingVars.length === 0,
    missingVars
  };
}

// Helper to check if we're in development mode
export const isDev = env.isDevelopment;
export const isProd = env.isProduction;