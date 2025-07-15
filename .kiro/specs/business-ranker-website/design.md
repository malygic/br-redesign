# Design Document

## Overview

The Business Ranker website design follows a "Technological Dark Mode" concept, built on a dark background with vibrant color accents and gradients. The design emphasizes modern, professional aesthetics with smooth animations and interactive elements to create a "WOW effect" that demonstrates the agency's technical expertise.

The architecture leverages Next.js 15 with App Router, Tailwind CSS for styling, Shadcn/ui components (heavily customized), and Framer Motion for animations. The design system is based on the visual identity defined in `visualIdentity.json` with a focus on generous spacing, premium feel, and technological sophistication.

## Architecture

### Frontend Architecture
- **Framework**: Next.js 15 with App Router for optimal performance and SEO
- **Styling**: Tailwind CSS with custom design tokens matching visual identity
- **Components**: Shadcn/ui as base, heavily customized for unique brand expression
- **Animations**: Framer Motion for page transitions, scroll reveals, and micro-interactions
- **State Management**: 
  - Local UI state: React.useState for simple component states
  - Complex isolated state: React.useReducer for pricing calculator
  - Global state: Zustand for language selection and mobile menu state

### Backend Architecture
- **API Routes**: Next.js API Routes deployed as Vercel Serverless Functions
- **Email Service**: Resend for contact forms and quote requests
- **Calendar Integration**: Google Calendar API with OAuth 2.0 for meeting scheduling
- **CMS**: Sanity.io for blog content management
- **Hosting**: Vercel for optimal Next.js performance and global CDN

### File Structure
```
src/
├── app/
│   ├── (pages)/
│   │   ├── o-nas/
│   │   ├── sluzby/
│   │   ├── cenik/
│   │   ├── blog/
│   │   └── kontakt/
│   ├── api/
│   │   ├── contact/
│   │   ├── quote/
│   │   └── schedule-meeting/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/ (shadcn components)
│   ├── layout/
│   ├── sections/
│   └── forms/
├── lib/
│   ├── utils.ts
│   ├── validations.ts
│   └── api-clients.ts
└── data/
    └── content/ (JSON content files)
```

## Components and Interfaces

### Photography and Visual Assets Strategy

Based on the Photography Plan, visual assets will be strategically placed throughout the website:

#### Hero Section Images
- **workspace-with-logo-on-tablet.jpg**: Primary hero image showcasing digital focus
- **mockup-real-estate-mobile.png** & **mockup-barbershop-desktop.png**: Portfolio showcases in hero carousel

#### Team Section Images
- **alex-portrait-professional.jpg**: Professional portrait for Alex's profile
- **anastasia-portrait-professional.jpg**: Professional portrait for Anastasia's profile
- **team-collaboration-at-desk.jpg**: Dynamic team collaboration image

#### About Page Images
- **meeting-conference-table.jpg**: Professional client interaction for "Our Approach" section
- **team-discussion-sofa-casual.jpg**: Casual team environment for "Our Values"
- **team-walking-in-hallway.jpg**: Dynamic partnership symbolism

#### Brand Assets
- **logo-full-white.png**: Main logo for header and footer (dark theme optimized)
- **logo-icon-app.png**: Favicon and social media icon

### Core Layout Components

#### Header Component
- **Purpose**: Main navigation with sticky behavior and backdrop blur
- **Features**: 
  - Logo with home link
  - Mega menu for services with icons and descriptions
  - Language switcher dropdown
  - CTA button with gradient styling
  - Mobile hamburger menu with slide-out navigation
- **Animations**: Smooth backdrop blur on scroll, hover effects on menu items
- **Responsive**: Collapsible mobile menu, adjusted spacing for different screen sizes

#### Footer Component
- **Purpose**: Comprehensive site footer with contact information and links
- **Structure**: 
  - Company description and logo
  - Three-column layout: Contact, Services, Legal Information
  - Social media links
  - Legal text and copyright
- **Styling**: Dark background with subtle borders, proper spacing hierarchy

### Content Sections

#### Hero Section
- **Design**: Full-screen hero with gradient text overlay
- **Elements**:
  - Large heading with gradient text effect
  - Descriptive paragraph with proper typography
  - Two CTA buttons (primary gradient, secondary outline)
  - Showcase images with subtle animations
- **Animations**: Staggered entrance animations, floating image effects

#### Services Grid
- **Layout**: 3x2 grid on desktop, single column on mobile
- **Card Design**:
  - Service icon with gradient background
  - Title and description with proper hierarchy
  - Hover effects with scale and shadow changes
  - CTA button with smooth transitions
- **Interactions**: Hover animations, click feedback

#### About Us Section
- **Layout**: Split layout with image and content
- **Features**:
  - Company image with rounded corners and shadow
  - Structured content with subheading, heading, and paragraph
  - CTA button linking to detailed about page
- **Responsive**: Stacked layout on mobile devices

#### Why Choose Us Section
- **Design**: Mixed layout with different card types
- **Card Types**:
  - Image Left: Content with left-aligned image
  - Image Right: Content with right-aligned image
  - Text Only: Pure content cards
  - Call to Action: Highlighted contact information
- **Styling**: Consistent spacing, varied layouts for visual interest

#### Process Steps
- **Layout**: Horizontal timeline on desktop, vertical on mobile
- **Elements**:
  - Numbered steps with gradient backgrounds
  - Step titles and descriptions
  - Connecting lines between steps
- **Animations**: Progressive reveal on scroll

#### Testimonials Carousel
- **Design**: Card-based testimonial display
- **Features**:
  - Client photo, name, and company
  - Quote text with proper typography
  - Navigation dots or arrows
  - Auto-play with pause on hover
- **Responsive**: Single card on mobile, multiple on desktop

### Interactive Components

#### Pricing Packages Section
- **Design**: Three-tier pricing structure with feature comparison
- **Packages**:
  - **Basic (10,000 Kč)**: Single-page website with essential features
    - Features: Single-page web, competitor analysis, wireframing + web design, SEO copywriting, responsive development, CMS, domain & hosting registration, security
  - **Advanced (13,500 Kč)**: Multi-page website with extended functionality
    - Features: Everything from Basic + 2-10 page web, multilingual support, complex booking forms, online chat + chatbot, basic analytics integration, basic SEO optimization, basic animations
  - **Premium (41,500 Kč)**: Enterprise-level website with comprehensive features
    - Features: Everything from Advanced + 10+ page web, corporate identity creation, e-shop functionality, social media management, comprehensive online marketing, comprehensive SEO, advanced animations
- **Styling**: Cards with gradient borders, feature lists with checkmarks, prominent pricing display

#### Pricing Calculator
- **Architecture**: Multi-step form with real-time calculations based on calculator.md logic
- **State Management**: useReducer for complex calculation logic
- **Features**:
  - Service selection checkboxes (web development, marketing)
  - Conditional field display based on selections
  - Real-time price updates with animations
  - Quote request form integration
- **Detailed Calculations**:
  - **Web Pages**: `(pageCount > 0) * (pageCount == 1 ? 10000 : (10000 + (pageCount - 1) * 3500))`
  - **Multilingual**: `pageCount * ((languageCount > 1 ? languageCount - 1 : 0) * 1000)`
  - **Additional Features**: Sum of selected options (advanced animations: 2000, payment gateway, interactive calculator, booking forms, online chat: 1000 each)
  - **Marketing Services**: Sum of selected options (Google My Business: 1000, monthly SEO copy, social media management: 5000, PPC campaign setup)
- **UI Components**: 
  - Calculation summary with itemized breakdown
  - Real-time total updates with smooth number animations
  - Quote request button that reveals contact form when total > 0

#### Technology Showcase Section
- **Purpose**: Display technical expertise and modern approach
- **Layout**: Grid or badge-style display of technologies
- **Technologies**: HTML5, CSS3, JavaScript, PHP, WordPress, Figma, Google, YouTube, Facebook, Instagram
- **Content**: "Modern technologies and pragmatic approach" heading with description about combining deep knowledge with practical experience
- **Styling**: Technology badges with hover effects, consistent with brand colors

#### Team Section
- **Design**: Professional team presentation with photos and roles
- **Members**:
  - **Alex**: Web design & web development (alex-portrait-professional.jpg)
  - **Anastasia**: Marketing & SEO copywriting (anastasia-portrait-professional.jpg)
- **Layout**: Side-by-side cards with professional portraits
- **Content**: "Our team" heading with "Online marketing is child's play with us!" subheading
- **Styling**: Rounded portrait images, role descriptions, consistent card styling

#### FAQ Accordion
- **Design**: Expandable accordion with smooth animations
- **Content Variants**:
  - **General FAQ**: Service collaboration, long-term cooperation, content creation, campaign measurement
  - **Pricing FAQ**: Package customization, project timeline, final pricing, quality guarantees
  - **Services FAQ**: Individual service selection, support after completion, progress updates
- **Interactions**: Smooth expand/collapse animations, proper ARIA attributes for accessibility
- **Styling**: Consistent with dark theme, gradient accents for active states

#### Contact Forms
- **Variants**: Standard contact, quote request, meeting scheduling
- **Validation**: Client-side validation with error states
- **Features**:
  - Form fields with floating labels
  - Conditional meeting scheduling fields
  - Success/error state handling
  - Loading states during submission
- **Integration**: API routes for email sending and calendar creation

#### Language Switcher
- **Design**: Dropdown with flag icons and language names
- **Functionality**: Updates URL and content based on selection
- **State**: Global state management with Zustand
- **Persistence**: Language preference stored in localStorage

## Data Models

### Content Structure
```typescript
interface PageContent {
  metadata: {
    title: string;
    description: string;
    favicon_url?: string;
  };
  sections: {
    [sectionName: string]: SectionContent;
  };
}

interface ServiceCard {
  title: string;
  description: string;
  button: {
    text: string;
    url: string;
  };
}

interface TestimonialCard {
  name: string;
  company: string;
  quote: string;
  image: {
    src: string;
    alt: string;
  };
}
```

### Calculator State
```typescript
interface CalculatorState {
  webDevelopment: {
    enabled: boolean;
    pageCount: number;
    multilingual: boolean;
    languageCount: number;
    additionalFeatures: string[];
  };
  marketing: {
    enabled: boolean;
    services: string[];
  };
  totals: {
    webPrice: number;
    multilingualPrice: number;
    featuresPrice: number;
    marketingPrice: number;
    totalPrice: number;
  };
}
```

### Blog Schema (Sanity.io)
```typescript
interface BlogPost {
  title: string;
  slug: string;
  author: {
    name: string;
    image?: string;
  };
  mainImage?: string;
  categories: Category[];
  publishedAt: string;
  body: PortableTextBlock[];
  metaDescription?: string;
}

interface Category {
  title: string;
  description?: string;
}
```

## Error Handling

### Client-Side Error Handling
- **Form Validation**: Real-time validation with clear error messages
- **API Errors**: User-friendly error messages for failed requests
- **Loading States**: Proper loading indicators during async operations
- **Fallback UI**: Error boundaries for component failures

### Server-Side Error Handling
- **API Routes**: Proper HTTP status codes and error responses
- **Email Failures**: Retry logic and fallback notifications
- **Calendar API**: Graceful handling of Google Calendar API failures
- **Rate Limiting**: Protection against spam and abuse

### Error Recovery
- **Retry Mechanisms**: Automatic retry for transient failures
- **User Feedback**: Clear communication about errors and next steps
- **Logging**: Comprehensive error logging for debugging
- **Monitoring**: Error tracking and alerting systems

## Testing Strategy

### Unit Testing
- **Components**: Test component rendering and interactions
- **Utilities**: Test calculation logic and helper functions
- **Validation**: Test form validation rules
- **API Routes**: Test server-side logic and error handling

### Integration Testing
- **Form Flows**: Test complete form submission processes
- **Calculator Logic**: Test complex calculation scenarios
- **API Integration**: Test external service integrations
- **Navigation**: Test routing and page transitions

### End-to-End Testing
- **User Journeys**: Test complete user workflows
- **Cross-Browser**: Test compatibility across browsers
- **Responsive**: Test functionality on different devices
- **Performance**: Test loading times and animations

### Accessibility Testing
- **WCAG Compliance**: Ensure AA level compliance
- **Keyboard Navigation**: Test all interactions with keyboard only
- **Screen Readers**: Test with assistive technologies
- **Color Contrast**: Verify sufficient contrast ratios

## Performance Optimization

### Core Web Vitals
- **LCP**: Optimize hero section loading with image optimization
- **FID**: Minimize JavaScript bundle size and execution time
- **CLS**: Prevent layout shifts with proper image dimensions

### Image Optimization
- **Next.js Image**: Use Next.js Image component for automatic optimization
- **WebP Format**: Serve modern image formats with fallbacks
- **Lazy Loading**: Implement lazy loading for below-fold images
- **Responsive Images**: Serve appropriate sizes for different devices

### Code Splitting
- **Route-Based**: Automatic code splitting by Next.js App Router
- **Component-Based**: Dynamic imports for heavy components
- **Third-Party**: Separate bundles for external libraries
- **Critical CSS**: Inline critical CSS for faster rendering

### Caching Strategy
- **Static Assets**: Long-term caching for images and fonts
- **API Responses**: Appropriate cache headers for API routes
- **CDN**: Leverage Vercel's global CDN for content delivery
- **Browser Caching**: Optimize browser caching policies