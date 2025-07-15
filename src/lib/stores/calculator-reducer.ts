import { CalculatorState, CalculatorAction } from '../types';

// Initial state for the calculator
export const initialCalculatorState: CalculatorState = {
  webDevelopment: {
    enabled: false,
    pageCount: 1,
    multilingual: false,
    languageCount: 1,
    additionalFeatures: [],
  },
  marketing: {
    enabled: false,
    services: [],
  },
  totals: {
    webPrice: 0,
    multilingualPrice: 0,
    featuresPrice: 0,
    marketingPrice: 0,
    totalPrice: 0,
  },
};

// Feature prices configuration
export const FEATURE_PRICES = {
  webDevelopment: {
    basePage: 10000,
    additionalPage: 3500,
    multilingualPerPage: 1000,
    features: {
      'advanced-animations': 2000,
      'payment-gateway': 1000,
      'interactive-calculator': 1000,
      'booking-forms': 1000,
      'online-chat': 1000,
    },
  },
  marketing: {
    'google-my-business': 1000,
    'monthly-seo-copy': 5000,
    'social-media-management': 5000,
    'ppc-campaign-setup': 3000,
  },
};

// Calculator logic functions
function calculateWebPrice(state: CalculatorState): number {
  if (!state.webDevelopment.enabled) return 0;
  
  const { pageCount } = state.webDevelopment;
  
  if (pageCount <= 0) return 0;
  if (pageCount === 1) return FEATURE_PRICES.webDevelopment.basePage;
  
  return FEATURE_PRICES.webDevelopment.basePage + 
         (pageCount - 1) * FEATURE_PRICES.webDevelopment.additionalPage;
}

function calculateMultilingualPrice(state: CalculatorState): number {
  if (!state.webDevelopment.enabled || !state.webDevelopment.multilingual) return 0;
  
  const { pageCount, languageCount } = state.webDevelopment;
  const additionalLanguages = languageCount > 1 ? languageCount - 1 : 0;
  
  return pageCount * additionalLanguages * FEATURE_PRICES.webDevelopment.multilingualPerPage;
}

function calculateFeaturesPrice(state: CalculatorState): number {
  if (!state.webDevelopment.enabled) return 0;
  
  return state.webDevelopment.additionalFeatures.reduce((total, feature) => {
    const price = FEATURE_PRICES.webDevelopment.features[feature as keyof typeof FEATURE_PRICES.webDevelopment.features];
    return total + (price || 0);
  }, 0);
}

function calculateMarketingPrice(state: CalculatorState): number {
  if (!state.marketing.enabled) return 0;
  
  return state.marketing.services.reduce((total, service) => {
    const price = FEATURE_PRICES.marketing[service as keyof typeof FEATURE_PRICES.marketing];
    return total + (price || 0);
  }, 0);
}

function calculateTotals(state: CalculatorState): CalculatorState['totals'] {
  const webPrice = calculateWebPrice(state);
  const multilingualPrice = calculateMultilingualPrice(state);
  const featuresPrice = calculateFeaturesPrice(state);
  const marketingPrice = calculateMarketingPrice(state);
  const totalPrice = webPrice + multilingualPrice + featuresPrice + marketingPrice;
  
  return {
    webPrice,
    multilingualPrice,
    featuresPrice,
    marketingPrice,
    totalPrice,
  };
}

// Reducer function
export function calculatorReducer(state: CalculatorState, action: CalculatorAction): CalculatorState {
  let newState: CalculatorState;
  
  switch (action.type) {
    case 'TOGGLE_WEB_DEVELOPMENT':
      newState = {
        ...state,
        webDevelopment: {
          ...state.webDevelopment,
          enabled: !state.webDevelopment.enabled,
        },
      };
      break;
      
    case 'SET_PAGE_COUNT':
      newState = {
        ...state,
        webDevelopment: {
          ...state.webDevelopment,
          pageCount: Math.max(1, action.payload),
        },
      };
      break;
      
    case 'TOGGLE_MULTILINGUAL':
      newState = {
        ...state,
        webDevelopment: {
          ...state.webDevelopment,
          multilingual: !state.webDevelopment.multilingual,
          languageCount: !state.webDevelopment.multilingual ? 2 : 1,
        },
      };
      break;
      
    case 'SET_LANGUAGE_COUNT':
      newState = {
        ...state,
        webDevelopment: {
          ...state.webDevelopment,
          languageCount: Math.max(1, action.payload),
        },
      };
      break;
      
    case 'TOGGLE_ADDITIONAL_FEATURE':
      const features = state.webDevelopment.additionalFeatures;
      const featureExists = features.includes(action.payload);
      
      newState = {
        ...state,
        webDevelopment: {
          ...state.webDevelopment,
          additionalFeatures: featureExists
            ? features.filter(f => f !== action.payload)
            : [...features, action.payload],
        },
      };
      break;
      
    case 'TOGGLE_MARKETING':
      newState = {
        ...state,
        marketing: {
          ...state.marketing,
          enabled: !state.marketing.enabled,
        },
      };
      break;
      
    case 'TOGGLE_MARKETING_SERVICE':
      const services = state.marketing.services;
      const serviceExists = services.includes(action.payload);
      
      newState = {
        ...state,
        marketing: {
          ...state.marketing,
          services: serviceExists
            ? services.filter(s => s !== action.payload)
            : [...services, action.payload],
        },
      };
      break;
      
    case 'CALCULATE_TOTALS':
      newState = {
        ...state,
        totals: calculateTotals(state),
      };
      break;
      
    case 'RESET_CALCULATOR':
      newState = initialCalculatorState;
      break;
      
    default:
      return state;
  }
  
  // Always recalculate totals after any change
  newState.totals = calculateTotals(newState);
  
  return newState;
}