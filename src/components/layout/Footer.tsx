'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock
} from 'lucide-react';
import { useLanguageStore } from '@/lib/stores/language-store';

export function Footer() {
  const { currentLanguage } = useLanguageStore();

  const footerContent = {
    cs: {
      company: {
        title: 'Business Ranker',
        description: 'Moderní digitální agentura specializující se na tvorbu webových stránek, SEO, online marketing a grafický design. Pomáháme firmám růst v online světě.',
      },
      contact: {
        title: 'Kontakt',
        items: [
          { icon: Mail, text: 'info@businessranker.cz', href: 'mailto:info@businessranker.cz' },
          { icon: Phone, text: '+420 123 456 789', href: 'tel:+420123456789' },
          { icon: MapPin, text: 'Praha, Česká republika' },
          { icon: Clock, text: 'Po-Pá: 9:00-18:00, So-Ne: dle domluvy' },
        ]
      },
      services: {
        title: 'Služby',
        items: [
          { text: 'Digitální strategie', href: '/sluzby/digitalni-strategie' },
          { text: 'Grafický design', href: '/sluzby/graficky-design' },
          { text: 'Tvorba webů', href: '/sluzby/tvorba-webu' },
          { text: 'SEO & Copywriting', href: '/sluzby/seo-copywriting' },
          { text: 'Online marketing', href: '/sluzby/online-marketing' },
          { text: 'Emailing', href: '/sluzby/emailing' },
        ]
      },
      company_links: {
        title: 'Společnost',
        items: [
          { text: 'O nás', href: '/o-nas' },
          { text: 'Blog', href: '/blog' },
          { text: 'Cenník', href: '/cenik' },
          { text: 'Kontakt', href: '/kontakt' },
        ]
      },
      legal: {
        copyright: '© 2024 Business Ranker. Všechna práva vyhrazena.',
        owner: 'Alexej Litvinec, IČO: 08487090',
        links: [
          { text: 'Ochrana osobních údajů', href: '/ochrana-udaju' },
          { text: 'Obchodní podmínky', href: '/obchodni-podminky' },
        ]
      }
    },
    en: {
      company: {
        title: 'Business Ranker',
        description: 'Modern digital agency specializing in website development, SEO, online marketing and graphic design. We help businesses grow in the online world.',
      },
      contact: {
        title: 'Contact',
        items: [
          { icon: Mail, text: 'info@businessranker.cz', href: 'mailto:info@businessranker.cz' },
          { icon: Phone, text: '+420 123 456 789', href: 'tel:+420123456789' },
          { icon: MapPin, text: 'Prague, Czech Republic' },
          { icon: Clock, text: 'Mon-Fri: 9:00-18:00, Sat-Sun: by appointment' },
        ]
      },
      services: {
        title: 'Services',
        items: [
          { text: 'Digital Strategy', href: '/sluzby/digitalni-strategie' },
          { text: 'Graphic Design', href: '/sluzby/graficky-design' },
          { text: 'Web Development', href: '/sluzby/tvorba-webu' },
          { text: 'SEO & Copywriting', href: '/sluzby/seo-copywriting' },
          { text: 'Online Marketing', href: '/sluzby/online-marketing' },
          { text: 'Email Marketing', href: '/sluzby/emailing' },
        ]
      },
      company_links: {
        title: 'Company',
        items: [
          { text: 'About', href: '/o-nas' },
          { text: 'Blog', href: '/blog' },
          { text: 'Pricing', href: '/cenik' },
          { text: 'Contact', href: '/kontakt' },
        ]
      },
      legal: {
        copyright: '© 2024 Business Ranker. All rights reserved.',
        owner: 'Alexej Litvinec, Business ID: 08487090',
        links: [
          { text: 'Privacy Policy', href: '/ochrana-udaju' },
          { text: 'Terms of Service', href: '/obchodni-podminky' },
        ]
      }
    },
    uk: {
      company: {
        title: 'Business Ranker',
        description: 'Сучасне цифрове агентство, що спеціалізується на розробці веб-сайтів, SEO, онлайн маркетингу та графічному дизайні. Ми допомагаємо бізнесу рости в онлайн світі.',
      },
      contact: {
        title: 'Контакт',
        items: [
          { icon: Mail, text: 'info@businessranker.cz', href: 'mailto:info@businessranker.cz' },
          { icon: Phone, text: '+420 123 456 789', href: 'tel:+420123456789' },
          { icon: MapPin, text: 'Прага, Чеська Республіка' },
          { icon: Clock, text: 'Пн-Пт: 9:00-18:00, Сб-Нд: за домовленістю' },
        ]
      },
      services: {
        title: 'Послуги',
        items: [
          { text: 'Цифрова стратегія', href: '/sluzby/digitalni-strategie' },
          { text: 'Графічний дизайн', href: '/sluzby/graficky-design' },
          { text: 'Розробка веб-сайтів', href: '/sluzby/tvorba-webu' },
          { text: 'SEO та копірайтинг', href: '/sluzby/seo-copywriting' },
          { text: 'Онлайн маркетинг', href: '/sluzby/online-marketing' },
          { text: 'Email маркетинг', href: '/sluzby/emailing' },
        ]
      },
      company_links: {
        title: 'Компанія',
        items: [
          { text: 'Про нас', href: '/o-nas' },
          { text: 'Блог', href: '/blog' },
          { text: 'Ціни', href: '/cenik' },
          { text: 'Контакт', href: '/kontakt' },
        ]
      },
      legal: {
        copyright: '© 2024 Business Ranker. Всі права захищені.',
        owner: 'Олексій Литвинець, ІД: 08487090',
        links: [
          { text: 'Політика конфіденційності', href: '/ochrana-udaju' },
          { text: 'Умови використання', href: '/obchodni-podminky' },
        ]
      }
    }
  };

  const content = footerContent[currentLanguage];

  const socialLinks = [
    { 
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ), 
      href: 'https://facebook.com/businessranker', 
      label: 'Facebook' 
    },
    { 
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.024-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-12.013C24.007 5.367 18.641.001 12.017.001z"/>
        </svg>
      ), 
      href: 'https://instagram.com/businessranker', 
      label: 'Instagram' 
    },
    { 
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ), 
      href: 'https://linkedin.com/company/businessranker', 
      label: 'LinkedIn' 
    },
    { 
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ), 
      href: 'https://youtube.com/@businessranker', 
      label: 'YouTube' 
    },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-4 group">
                <div className="relative w-8 h-8">
                  <Image
                    src="/images/logo-icon-app.svg"
                    alt="Business Ranker"
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <span className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                  {content.company.title}
                </span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {content.company.description}
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-muted/50 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">{content.contact.title}</h3>
              <ul className="space-y-3">
                {content.contact.items.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                      >
                        <item.icon className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-sm">{item.text}</span>
                      </a>
                    ) : (
                      <div className="flex items-center space-x-3 text-muted-foreground">
                        <item.icon className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm">{item.text}</span>
                      </div>
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">{content.services.title}</h3>
              <ul className="space-y-2">
                {content.services.items.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm block py-1"
                    >
                      {item.text}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">{content.company_links.title}</h3>
              <ul className="space-y-2">
                {content.company_links.items.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm block py-1"
                    >
                      {item.text}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                {content.legal.copyright}
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                {content.legal.owner}
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {content.legal.links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}