'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Globe } from 'lucide-react';
import { useLanguageStore } from '@/lib/stores/language-store';
import { SupportedLanguage } from '@/lib/types';
import { cn } from '@/lib/utils';

const languages = [
  {
    code: 'cs' as SupportedLanguage,
    name: 'Čeština',
    nativeName: 'Čeština',
    flag: '🇨🇿'
  },
  {
    code: 'en' as SupportedLanguage,
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸'
  },
  {
    code: 'uk' as SupportedLanguage,
    name: 'Українська',
    nativeName: 'Українська',
    flag: '🇺🇦'
  }
];

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage, setLanguage } = useLanguageStore();

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  const handleLanguageChange = (languageCode: SupportedLanguage) => {
    setLanguage(languageCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300',
          'text-foreground/80 hover:text-primary hover:bg-muted/50',
          'border border-transparent hover:border-border/50',
          isOpen && 'bg-muted/50 border-border/50 text-primary'
        )}
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium hidden sm:inline">
          {currentLang.flag} {currentLang.nativeName}
        </span>
        <span className="text-sm font-medium sm:hidden">
          {currentLang.flag}
        </span>
        <ChevronDown 
          className={cn(
            'w-4 h-4 transition-transform duration-300',
            isOpen && 'rotate-180'
          )} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for mobile */}
            <div
              className="fixed inset-0 z-10 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown */}
            <motion.div
              className="absolute top-full right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-xl shadow-primary/10 z-20"
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <div className="py-2">
                {languages.map((language, index) => (
                  <motion.button
                    key={language.code}
                    onClick={() => handleLanguageChange(language.code)}
                    className={cn(
                      'w-full flex items-center space-x-3 px-4 py-3 text-left transition-colors duration-200',
                      'hover:bg-muted/50 hover:text-primary',
                      currentLanguage === language.code 
                        ? 'bg-primary/10 text-primary font-medium' 
                        : 'text-foreground/80'
                    )}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <span className="text-lg">{language.flag}</span>
                    <div className="flex-1">
                      <div className="font-medium">{language.nativeName}</div>
                      <div className="text-xs text-muted-foreground">{language.name}</div>
                    </div>
                    {currentLanguage === language.code && (
                      <motion.div
                        className="w-2 h-2 bg-primary rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}