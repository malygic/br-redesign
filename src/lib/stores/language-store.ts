import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { SupportedLanguage } from '../types';

interface LanguageStore {
  currentLanguage: SupportedLanguage;
  setLanguage: (language: SupportedLanguage) => void;
}

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => ({
      currentLanguage: 'cs',
      setLanguage: (language: SupportedLanguage) => {
        set({ currentLanguage: language });
        
        // Update document language attribute
        if (typeof document !== 'undefined') {
          document.documentElement.lang = language;
        }
        
        // Update URL if needed (for client-side routing)
        if (typeof window !== 'undefined') {
          const currentPath = window.location.pathname;
          const pathWithoutLang = currentPath.replace(/^\/(cs|en|uk)/, '');
          const newPath = language === 'cs' ? pathWithoutLang || '/' : `/${language}${pathWithoutLang}`;
          
          // Only update if path actually changed
          if (newPath !== currentPath) {
            window.history.replaceState({}, '', newPath);
          }
        }
      },
    }),
    {
      name: 'language-storage',
      partialize: (state) => ({ currentLanguage: state.currentLanguage }),
    }
  )
);