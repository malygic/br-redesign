'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Target, 
  Palette, 
  Code, 
  Search, 
  Megaphone, 
  Mail,
  ArrowRight
} from 'lucide-react';
import { useLanguageStore } from '@/lib/stores/language-store';

const serviceIcons = {
  'digital-strategy': Target,
  'web-design': Palette,
  'web-development': Code,
  'seo-copywriting': Search,
  'online-marketing': Megaphone,
  'emailing': Mail,
};

export function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage } = useLanguageStore();

  const services = [
    {
      id: 'digital-strategy',
      title: currentLanguage === 'cs' ? 'Digitální strategie' : currentLanguage === 'en' ? 'Digital Strategy' : 'Цифрова стратегія',
      description: currentLanguage === 'cs' ? 'Komplexní analýza a strategie pro váš online růst' : currentLanguage === 'en' ? 'Comprehensive analysis and strategy for your online growth' : 'Комплексний аналіз та стратегія для вашого онлайн зростання',
      href: '/sluzby/digitalni-strategie'
    },
    {
      id: 'web-design',
      title: currentLanguage === 'cs' ? 'Grafický design' : currentLanguage === 'en' ? 'Graphic Design' : 'Графічний дизайн',
      description: currentLanguage === 'cs' ? 'Moderní a funkční design pro vaši značku' : currentLanguage === 'en' ? 'Modern and functional design for your brand' : 'Сучасний та функціональний дизайн для вашого бренду',
      href: '/sluzby/graficky-design'
    },
    {
      id: 'web-development',
      title: currentLanguage === 'cs' ? 'Tvorba webů' : currentLanguage === 'en' ? 'Web Development' : 'Розробка веб-сайтів',
      description: currentLanguage === 'cs' ? 'Responzivní webové stránky postavené na moderních technologiích' : currentLanguage === 'en' ? 'Responsive websites built on modern technologies' : 'Адаптивні веб-сайти на сучасних технологіях',
      href: '/sluzby/tvorba-webu'
    },
    {
      id: 'seo-copywriting',
      title: currentLanguage === 'cs' ? 'SEO & Copywriting' : currentLanguage === 'en' ? 'SEO & Copywriting' : 'SEO та копірайтинг',
      description: currentLanguage === 'cs' ? 'Optimalizace pro vyhledávače a kvalitní obsah' : currentLanguage === 'en' ? 'Search engine optimization and quality content' : 'Оптимізація для пошукових систем та якісний контент',
      href: '/sluzby/seo-copywriting'
    },
    {
      id: 'online-marketing',
      title: currentLanguage === 'cs' ? 'Online marketing' : currentLanguage === 'en' ? 'Online Marketing' : 'Онлайн маркетинг',
      description: currentLanguage === 'cs' ? 'PPC kampaně, sociální sítě a email marketing' : currentLanguage === 'en' ? 'PPC campaigns, social media and email marketing' : 'PPC кампанії, соціальні мережі та email маркетинг',
      href: '/sluzby/online-marketing'
    },
    {
      id: 'emailing',
      title: currentLanguage === 'cs' ? 'Emailing' : currentLanguage === 'en' ? 'Email Marketing' : 'Email маркетинг',
      description: currentLanguage === 'cs' ? 'Efektivní email kampaně pro vaše zákazníky' : currentLanguage === 'en' ? 'Effective email campaigns for your customers' : 'Ефективні email кампанії для ваших клієнтів',
      href: '/sluzby/emailing'
    },
  ];

  const viewAllText = currentLanguage === 'cs' ? 'Zobrazit všechny služby' : currentLanguage === 'en' ? 'View all services' : 'Переглянути всі послуги';

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[800px] max-w-[90vw]"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <div className="bg-card border border-border rounded-xl shadow-2xl shadow-primary/10 p-6">
              {/* Services Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {services.map((service, index) => {
                  const IconComponent = serviceIcons[service.id as keyof typeof serviceIcons];
                  
                  return (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={service.href}
                        className="group block p-4 rounded-lg hover:bg-muted/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                              {service.title}
                            </h3>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* View All Services Link */}
              <motion.div
                className="pt-4 border-t border-border/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="/sluzby"
                  className="group flex items-center justify-center space-x-2 text-primary hover:text-secondary transition-colors duration-300 font-medium"
                >
                  <span>{viewAllText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}