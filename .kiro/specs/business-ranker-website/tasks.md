# Implementation Plan

- [ ] 1. Setup project foundation and core configuration
  - Install and configure required dependencies (Framer Motion, Zustand, Google Fonts)
  - Update layout.tsx with Outfit font and proper metadata structure
  - Create utility functions for className merging and validation
  - Set up TypeScript interfaces for content structure and calculator state
  - Create data directory structure for JSON content files
  - Set up environment variables configuration for deployment
  - _Requirements: 12.4, 15.4, 15.5_

- [ ] 2. Create core layout components and navigation system
  - [ ] 2.1 Implement Header component with sticky navigation
    - Create Header component with logo, navigation menu, and CTA button
    - Implement sticky behavior with backdrop blur effect on scroll
    - Add mobile hamburger menu with slide-out navigation
    - _Requirements: 10.1, 10.2, 10.4_

  - [ ] 2.2 Build MegaMenu component for services navigation
    - Create expandable mega menu for services with icons and descriptions
    - Implement hover states and smooth animations
    - Ensure responsive behavior and accessibility
    - _Requirements: 2.2, 7.5_

  - [ ] 2.3 Create LanguageSwitcher component
    - Build dropdown component for language selection
    - Implement Zustand store for global language state
    - Add language persistence with localStorage
    - _Requirements: 5.1, 5.2, 5.3, 5.4_

  - [ ] 2.4 Implement Footer component
    - Create comprehensive footer with contact info and service links
    - Structure three-column layout with proper responsive behavior
    - Add social media links and legal information
    - _Requirements: 10.3, 10.5_

- [ ] 3. Build homepage sections with animations and professional photography
  - [ ] 3.1 Create Hero section with gradient effects and workspace imagery
    - Implement hero section with gradient text and CTA buttons
    - Add workspace-with-logo-on-tablet.jpg as primary hero image
    - Include project mockups (real estate mobile, barbershop desktop) in showcase
    - Create staggered entrance animations using Framer Motion
    - _Requirements: 1.1, 1.2, 10.1, 10.2_

  - [ ] 3.2 Build ServiceCard component and services grid
    - Create reusable ServiceCard component with hover animations
    - Implement 3x2 grid layout with responsive behavior
    - Add micro-interactions with scale and shadow effects
    - Include service icons and descriptions from homepage.json
    - _Requirements: 1.3, 2.1, 2.3, 7.5_

  - [ ] 3.3 Implement About Us section with team collaboration imagery
    - Create split layout with team-collaboration-at-desk.jpg image
    - Add proper typography hierarchy and spacing
    - Implement responsive stacked layout for mobile
    - Include company description and values content
    - _Requirements: 1.4, 7.3, 10.1_

  - [ ] 3.4 Build Why Choose Us section with mixed layouts
    - Create different card types (Image Left, Image Right, Text Only, CTA)
    - Use mockup images (mac-cropped.webp, iphones-mockub.webp) from content
    - Implement varied layouts for visual interest
    - Add consistent spacing and responsive behavior
    - _Requirements: 1.4, 7.3, 10.1_

  - [ ] 3.5 Create Process Steps timeline
    - Build horizontal timeline with numbered steps
    - Implement progressive reveal animations on scroll
    - Add responsive vertical layout for mobile
    - Include 6-step process from homepage.json content
    - _Requirements: 1.2, 7.5_

  - [ ] 3.6 Implement TestimonialCard component and carousel
    - Create testimonial cards with client photos and quotes
    - Build carousel functionality with navigation controls
    - Add auto-play with pause on hover
    - Include all 9 testimonials from homepage.json
    - _Requirements: 8.1, 8.2, 8.3, 8.4_

- [ ] 4. Create pricing packages and interactive calculator
  - [ ] 4.1 Build pricing packages section
    - Create three pricing tiers: Basic (10,000 Kč), Advanced (13,500 Kč), Premium (41,500 Kč)
    - Implement feature lists for each package with checkmarks
    - Add "Calculate Price" buttons linking to calculator
    - Include package descriptions and pricing notes
    - _Requirements: 11.1, 11.2_

  - [ ] 4.2 Create calculator state management with useReducer
    - Implement complex state logic based on calculator.md analysis
    - Create actions for service selection and parameter changes
    - Add real-time calculation updates with conditional logic
    - Handle web_checkbox and marketing_checkbox state
    - _Requirements: 11.3, 11.4_

  - [ ] 4.3 Build calculator UI components with conditional display
    - Create service selection checkboxes (tvorba webu, marketing)
    - Implement conditional sections based on selections
    - Add page count input and multilingual checkbox
    - Include additional functionality options (advanced animations, payment gateway, interactive calculator, booking forms, online chat)
    - _Requirements: 11.3, 11.4_

  - [ ] 4.4 Implement detailed calculation logic from calculator.md
    - Code web pages formula: (pageCount > 0) * (pageCount == 1 ? 10000 : (10000 + (pageCount - 1) * 3500))
    - Implement multilingual formula: pageCount * ((languageCount > 1 ? languageCount - 1 : 0) * 1000)
    - Add marketing services pricing (Google My Business: 1000, social media: 5000, etc.)
    - Create itemized breakdown display with animated totals
    - _Requirements: 11.4, 11.5_

  - [ ] 4.5 Create quote request form integration
    - Build contact form that appears when quote is requested and total > 0
    - Pre-fill form with detailed calculator breakdown
    - Include inspiration link field and project info textarea
    - Add meeting scheduling option with date/time picker
    - _Requirements: 11.5, 4.3, 4.4_

- [ ] 5. Build contact forms and meeting scheduling
  - [ ] 5.1 Create base ContactForm component
    - Build reusable form component with validation
    - Implement different modes (contact, quote)
    - Add loading states and error handling
    - _Requirements: 4.1, 4.2_

  - [ ] 5.2 Add meeting scheduling functionality
    - Create date/time picker for meeting scheduling
    - Implement working hours validation (9:00-18:00)
    - Add conditional display based on checkbox selection
    - _Requirements: 4.3, 4.4_

  - [ ] 5.3 Implement API routes for form processing
    - Create contact form API route with email sending
    - Build quote request API route with calculator data
    - Implement meeting scheduling API with Google Calendar integration
    - _Requirements: 4.1, 4.2, 4.4, 4.5_

- [ ] 6. Create additional pages and routing with professional content
  - [ ] 6.1 Build service detail pages
    - Create individual service pages with detailed information
    - Implement consistent layout and navigation
    - Add service-specific content from JSON files (digitalni-strategie.json, graficky-design.json, etc.)
    - Include FAQ sections specific to each service
    - _Requirements: 2.3, 2.4, 2.5, 13.2, 13.3_

  - [ ] 6.2 Create comprehensive about page with team and technology
    - [ ] 6.2.1 Build team section with professional portraits
      - Add Alex (web design & web development) with alex-portrait-professional.jpg
      - Add Anastasia (marketing & SEO copywriting) with anastasia-portrait-professional.jpg
      - Include "Our team" heading with "Online marketing is child's play with us!" subheading
      - _Requirements: 12.1, 12.2, 12.3_

    - [ ] 6.2.2 Create technology showcase section
      - Display technology badges: HTML5, CSS3, JavaScript, PHP, WordPress, Figma, Google, YouTube, Facebook, Instagram
      - Add "Modern technologies and pragmatic approach" section
      - Include description about combining deep knowledge with practical experience
      - Use team collaboration images (meeting-conference-table.jpg, team-discussion-sofa-casual.jpg)
      - _Requirements: 12.1, 12.4, 12.5_

    - [ ] 6.2.3 Implement business growth and values sections
      - Add "Helping your business grow in the online world" section
      - Include team-walking-in-hallway.jpg for dynamic partnership symbolism
      - Add company values and personal approach content
      - _Requirements: 12.5, 10.1_

  - [ ] 6.3 Implement contact page with comprehensive information
    - Create dedicated contact page with form and company information
    - Add detailed contact info: Alexej Litvinec, IČO: 08487090, phone numbers, email, address
    - Include working hours: Po-Pá: 9:00-18:00, So-Ne: dle domluvy
    - Add meeting scheduling functionality
    - _Requirements: 4.1, 4.2, 14.5_

- [ ] 7. Create comprehensive FAQ sections and blog functionality
  - [ ] 7.1 Build reusable FAQAccordion component
    - Create accordion component with smooth expand/collapse animations
    - Implement proper ARIA attributes for accessibility
    - Add consistent styling with dark theme and gradient accents
    - Support different FAQ content variants (general, pricing, services)
    - _Requirements: 13.1, 13.4_

  - [ ] 7.2 Implement FAQ content for different pages
    - Add general FAQ with collaboration process, cooperation types, content creation questions
    - Create pricing-specific FAQ covering package customization, timeline, final pricing, quality guarantees
    - Build services FAQ addressing individual service selection, support, progress updates
    - Include contact CTA for additional questions
    - _Requirements: 13.1, 13.2, 13.3, 13.5_

  - [ ] 7.3 Set up Sanity.io CMS integration for blog
    - Configure Sanity client and schema definitions
    - Create blog post, author, and category schemas as specified in PROJECT_KICKOFF.md
    - Set up content fetching utilities with proper error handling
    - _Requirements: 6.1, 6.4_

  - [ ] 7.4 Build BlogPostCard component and blog pages
    - Create blog post preview cards with images and excerpts
    - Implement responsive grid layout for blog listing
    - Add publication date and author information
    - Create individual blog post pages with rich content
    - _Requirements: 6.1, 6.4_

  - [ ] 7.5 Implement blog filtering and navigation
    - Build blog index page with category filtering
    - Implement client-side filtering for immediate response
    - Add search functionality and proper navigation
    - _Requirements: 6.1, 6.2, 6.3_

- [ ] 8. Add multilingual support and internationalization
  - [ ] 8.1 Configure Next.js i18n routing
    - Set up Next.js internationalization configuration
    - Create language-specific routing structure
    - Implement language detection and fallbacks
    - _Requirements: 5.1, 5.4, 5.5_

  - [ ] 8.2 Create translation system
    - Build translation utilities and content structure
    - Implement language-specific content loading
    - Add translation for all static text elements
    - _Requirements: 5.3, 5.4, 5.5_

  - [ ] 8.3 Update all components for multilingual support
    - Modify existing components to use translation system
    - Ensure proper language switching functionality
    - Test all pages in different languages
    - _Requirements: 5.2, 5.3, 5.4_

- [ ] 9. Implement SEO optimization and performance
  - [ ] 9.1 Add SEO metadata and structured data
    - Create dynamic metadata generation for all pages
    - Implement Open Graph and Twitter Card tags
    - Add JSON-LD structured data for better search visibility
    - _Requirements: 9.1, 9.3_

  - [ ] 9.2 Create sitemap and robots.txt
    - Generate dynamic sitemap.xml with all pages
    - Create robots.txt with proper crawling instructions
    - Implement automatic sitemap updates
    - _Requirements: 9.2, 9.3_

  - [ ] 9.3 Optimize images and performance
    - Implement Next.js Image optimization for all images
    - Add lazy loading and responsive image sizing
    - Optimize bundle size and implement code splitting
    - _Requirements: 9.4, 9.5_

- [ ] 10. Final integration and comprehensive testing
  - [ ] 10.1 Integrate all components into complete pages
    - Assemble homepage with all sections and proper spacing
    - Connect all navigation and routing functionality
    - Ensure consistent styling and animations throughout
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_

  - [ ] 10.2 Test all interactive functionality according to TESTING_PLAN.md
    - Verify pricing calculator calculations and form submissions
    - Test contact forms and meeting scheduling with Google Calendar integration
    - Validate multilingual switching and content display
    - Test blog functionality with category filtering
    - _Requirements: 11.3, 11.4, 11.5, 4.1-4.5, 5.1-5.5, 6.2, 6.3_

  - [ ] 10.3 Perform cross-browser and responsive testing
    - Test on Chrome (latest), Firefox (latest), Safari (latest)
    - Verify responsive design on Desktop (1920px), Laptop (1440px), Tablet (768px), Mobile (375px)
    - Test mega menu functionality on all devices
    - Ensure animations are smooth and non-disruptive
    - _Requirements: 15.2, 15.3_

  - [ ] 10.4 Conduct accessibility and performance testing
    - Test keyboard navigation (tab, enter, space) for full site operability
    - Verify screen reader compatibility and ARIA attributes
    - Validate color contrast ratios according to visualIdentity.json
    - Achieve Lighthouse scores: Performance >95, Accessibility >98, Best Practices >100, SEO >100
    - _Requirements: 15.1, 15.3_

  - [ ] 10.5 Prepare for deployment with environment setup
    - Configure all required environment variables: NEXT_PUBLIC_SANITY_PROJECT_ID, SANITY_API_TOKEN, RESEND_API_KEY, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN, COMPANY_EMAIL
    - Set up domain configuration for businessranker.cz and www.businessranker.cz
    - Test build process locally with npm run build
    - Verify sitemap.xml and robots.txt accessibility
    - Test social media meta tags with Facebook Debugger
    - _Requirements: 15.4, 15.5_

  - [ ] 10.6 Final polish and optimization
    - Fine-tune animations and micro-interactions
    - Optimize loading performance and Core Web Vitals
    - Add final touches to visual design and spacing
    - Conduct final testing of all user stories from TESTING_PLAN.md
    - _Requirements: 1.2, 1.3, 7.5, 15.1_