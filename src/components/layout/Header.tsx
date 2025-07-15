'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useUIStore } from '@/lib/stores/ui-store';
import { useLanguageStore } from '@/lib/stores/language-store';
import { cn } from '@/lib/utils';
import { MegaMenu } from './MegaMenu';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isMobileMenuOpen, toggleMobileMenu, setMobileMenuOpen } = useUIStore();
  const { currentLanguage } = useLanguageStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('[data-mobile-menu]')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen, setMobileMenuOpen]);

  const navigationItems = [
    { 
      label: currentLanguage === 'cs' ? 'Domů' : currentLanguage === 'en' ? 'Home' : 'Головна', 
      href: '/' 
    },
    { 
      label: currentLanguage === 'cs' ? 'Služby' : currentLanguage === 'en' ? 'Services' : 'Послуги', 
      href: '/sluzby',
      hasMegaMenu: true
    },
    { 
      label: currentLanguage === 'cs' ? 'O nás' : currentLanguage === 'en' ? 'About' : 'Про нас', 
      href: '/o-nas' 
    },
    { 
      label: currentLanguage === 'cs' ? 'Blog' : currentLanguage === 'en' ? 'Blog' : 'Блог', 
      href: '/blog' 
    },
    { 
      label: currentLanguage === 'cs' ? 'Kontakt' : currentLanguage === 'en' ? 'Contact' : 'Контакт', 
      href: '/kontakt' 
    },
  ];

  const ctaText = currentLanguage === 'cs' ? 'Získat nabídku' : currentLanguage === 'en' ? 'Get Quote' : 'Отримати пропозицію';

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled 
            ? 'bg-background/80 backdrop-blur-lg border-b border-border/50' 
            : 'bg-transparent'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-2 group"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="relative w-8 h-8 lg:w-10 lg:h-10">
                <Image
                  src="/images/logo-icon-app.svg"
                  alt="Business Ranker"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                  priority
                />
              </div>
              <span className="font-bold text-lg lg:text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                Business Ranker
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.href} className="relative group">
                  <Link
                    href={item.href}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium relative py-2"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
                  </Link>
                  {item.hasMegaMenu && <MegaMenu />}
                </div>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <LanguageSwitcher />
              <Link
                href="/cenik"
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-2.5 rounded-lg font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
              >
                {ctaText}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors duration-300"
              data-mobile-menu
              aria-label="Toggle mobile menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              className="fixed top-16 right-0 w-80 max-w-[90vw] bg-card border-l border-border z-50 lg:hidden"
              data-mobile-menu
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="p-6 space-y-6 h-[calc(100vh-4rem)] overflow-y-auto">
                {/* Mobile Navigation */}
                <nav className="space-y-4">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="block text-foreground hover:text-primary transition-colors duration-300 font-medium py-3 border-b border-border/50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile Actions */}
                <div className="space-y-4 pt-4 border-t border-border/50">
                  <LanguageSwitcher />
                  <Link
                    href="/cenik"
                    className="block w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-3 rounded-lg font-medium text-center hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {ctaText}
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}