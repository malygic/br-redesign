import { ContactFormData, QuoteFormData } from './types';

// Contact Form Validation
export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: ValidationError[] = [];

  // Name validation
  if (!data.name || data.name.trim().length < 2) {
    errors.push({
      field: 'name',
      message: 'Jméno musí obsahovat alespoň 2 znaky'
    });
  }

  // Email validation
  if (!data.email || !isValidEmail(data.email)) {
    errors.push({
      field: 'email',
      message: 'Zadejte platnou emailovou adresu'
    });
  }

  // Phone validation (optional)
  if (data.phone && !isValidPhone(data.phone)) {
    errors.push({
      field: 'phone',
      message: 'Zadejte platné telefonní číslo'
    });
  }

  // Message validation
  if (!data.message || data.message.trim().length < 10) {
    errors.push({
      field: 'message',
      message: 'Zpráva musí obsahovat alespoň 10 znaků'
    });
  }

  // Meeting validation
  if (data.scheduleMeeting) {
    if (!data.meetingDate) {
      errors.push({
        field: 'meetingDate',
        message: 'Vyberte datum schůzky'
      });
    }

    if (!data.meetingTime) {
      errors.push({
        field: 'meetingTime',
        message: 'Vyberte čas schůzky'
      });
    }

    // Validate meeting time is within working hours (9:00-18:00)
    if (data.meetingTime) {
      const [hours] = data.meetingTime.split(':').map(Number);
      if (hours < 9 || hours >= 18) {
        errors.push({
          field: 'meetingTime',
          message: 'Schůzky jsou možné pouze v pracovní době (9:00-18:00)'
        });
      }
    }

    // Validate meeting date is not in the past
    if (data.meetingDate) {
      const selectedDate = new Date(data.meetingDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        errors.push({
          field: 'meetingDate',
          message: 'Datum schůzky nemůže být v minulosti'
        });
      }
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

export function validateQuoteForm(data: QuoteFormData): ValidationResult {
  // First validate as contact form
  const contactValidation = validateContactForm(data);
  const errors = [...contactValidation.errors];

  // Additional quote-specific validations
  if (!data.projectType || data.projectType.trim().length === 0) {
    errors.push({
      field: 'projectType',
      message: 'Vyberte typ projektu'
    });
  }

  // Validate calculator data exists and has meaningful values
  if (!data.calculatorData || data.calculatorData.totals.totalPrice <= 0) {
    errors.push({
      field: 'calculatorData',
      message: 'Použijte kalkulátor pro výpočet ceny před odesláním poptávky'
    });
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

// Helper functions
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone: string): boolean {
  const phoneRegex = /^(\+420\s?)?[0-9]{3}\s?[0-9]{3}\s?[0-9]{3}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

// Calculator validation
export function validateCalculatorState(state: unknown): boolean {
  if (!state || typeof state !== 'object') return false;
  
  const calculatorState = state as Record<string, unknown>;
  const webDev = calculatorState.webDevelopment as Record<string, unknown> | undefined;
  const marketing = calculatorState.marketing as Record<string, unknown> | undefined;
  
  // At least one service must be selected
  if (!webDev?.enabled && !marketing?.enabled) {
    return false;
  }

  // If web development is enabled, page count must be > 0
  if (webDev?.enabled && typeof webDev.pageCount === 'number' && webDev.pageCount <= 0) {
    return false;
  }

  // If multilingual is enabled, language count must be > 1
  if (webDev?.multilingual && typeof webDev.languageCount === 'number' && webDev.languageCount <= 1) {
    return false;
  }

  return true;
}

// Sanitize input data
export function sanitizeString(input: string): string {
  return input
    .trim()
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
    .replace(/[<>]/g, '') // Remove < and > characters
    .substring(0, 1000); // Limit length
}

export function sanitizeContactForm(data: ContactFormData): ContactFormData {
  return {
    ...data,
    name: sanitizeString(data.name),
    email: sanitizeString(data.email),
    phone: data.phone ? sanitizeString(data.phone) : undefined,
    company: data.company ? sanitizeString(data.company) : undefined,
    message: sanitizeString(data.message),
    inspirationLink: data.inspirationLink ? sanitizeString(data.inspirationLink) : undefined,
  };
}