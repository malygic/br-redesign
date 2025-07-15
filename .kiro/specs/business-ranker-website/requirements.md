# Requirements Document

## Introduction

This document outlines the requirements for the complete redesign of the Business Ranker digital agency website. The project involves migrating from a WordPress solution to a modern Jamstack architecture using Next.js and Vercel. The new website will serve as the agency's flagship, demonstrating their technical and design expertise while creating a "WOW effect" for potential clients.

The website aims to increase lead generation through advanced user-friendly forms and a pricing calculator, demonstrate expertise through modern technologies and multilingual support, and improve content management through a Headless CMS (Sanity.io) for the blog.

## Requirements

### Requirement 1: Modern Homepage with WOW Effect

**User Story:** As a potential client visiting the website, I want to be immediately impressed by a modern, technological, and visually appealing homepage with professional animations and interactive elements, so that I can quickly understand the agency's capabilities and feel confident in their expertise.

#### Acceptance Criteria

1. WHEN a user visits the homepage THEN the system SHALL display a hero section with gradient text, animated elements, and showcase images
2. WHEN a user scrolls through the homepage THEN the system SHALL reveal sections with smooth on-scroll animations using Framer Motion
3. WHEN a user hovers over service cards THEN the system SHALL display subtle micro-interactions with scale effects and shadow changes
4. WHEN the page loads THEN the system SHALL use the Outfit font family consistently across all text elements
5. WHEN viewed on any device THEN the system SHALL maintain responsive design with proper spacing and typography scaling

### Requirement 2: Comprehensive Service Presentation

**User Story:** As a business owner looking for digital services, I want to easily understand all available services with clear descriptions and navigation, so that I can quickly find the services that match my needs.

#### Acceptance Criteria

1. WHEN a user views the services section THEN the system SHALL display 6 service cards (Digital Strategy, Design, Web Development, SEO & Copywriting, Online Marketing, Emailing)
2. WHEN a user hovers over the "Services" navigation item THEN the system SHALL display a mega menu with service icons, names, and short descriptions
3. WHEN a user clicks on a service card THEN the system SHALL navigate to the detailed service page
4. WHEN displaying service information THEN the system SHALL use content from the provided JSON files
5. WHEN a user accesses service pages THEN the system SHALL display detailed information about each service offering

### Requirement 3: Interactive Pricing Calculator

**User Story:** As a potential client, I want to use an interactive pricing calculator to get an estimate for my project requirements, so that I can understand the cost structure and make an informed decision about requesting a quote.

#### Acceptance Criteria

1. WHEN a user accesses the pricing page THEN the system SHALL display checkboxes for main services (web development, marketing)
2. WHEN a user selects "web development" THEN the system SHALL show additional options for page count, multilingual support, and additional functionality
3. WHEN a user changes any calculator input THEN the system SHALL immediately recalculate and display the updated total price with smooth animations
4. WHEN calculating web development price THEN the system SHALL apply the formula: 10,000 CZK for 1 page, or 10,000 CZK + (additional pages × 3,500 CZK)
5. WHEN calculating multilingual support THEN the system SHALL apply: (total pages) × (additional languages) × 1,000 CZK
6. WHEN a user clicks "Request Quote" THEN the system SHALL display a contact form with the calculated details pre-filled
7. WHEN the total price is greater than 0 AND user requests a quote THEN the system SHALL show the contact form section

### Requirement 4: Advanced Contact Forms with Meeting Scheduling

**User Story:** As a potential client, I want to easily contact the agency and optionally schedule an online meeting, so that I can discuss my project requirements directly with the team.

#### Acceptance Criteria

1. WHEN a user submits a contact form THEN the system SHALL send an email to info@businessranker.cz with the form content
2. WHEN a user submits a contact form THEN the system SHALL send a confirmation email to the user
3. WHEN a user checks "Schedule online meeting" THEN the system SHALL display date and time selection fields (9:00-18:00 working hours)
4. WHEN a user schedules a meeting THEN the system SHALL create a Google Calendar event with Google Meet link
5. WHEN a meeting is scheduled THEN the system SHALL automatically send invitations to both parties
6. WHEN processing quote requests THEN the system SHALL include calculator data in the email content

### Requirement 5: Multilingual Support

**User Story:** As a user who speaks Czech, English, or Ukrainian, I want to view the website in my preferred language, so that I can better understand the services and communicate with the agency.

#### Acceptance Criteria

1. WHEN a user visits the website THEN the system SHALL default to Czech language
2. WHEN a user clicks the language switcher THEN the system SHALL display options for Czech, English, and Ukrainian
3. WHEN a user selects a different language THEN the system SHALL update all content to the selected language
4. WHEN switching languages THEN the system SHALL maintain the current page context and URL structure
5. WHEN accessing any page THEN the system SHALL display content in the user's selected language

### Requirement 6: Blog with Content Management

**User Story:** As a website visitor interested in digital marketing insights, I want to read blog articles and filter them by categories, so that I can find relevant content for my business needs.

#### Acceptance Criteria

1. WHEN a user visits the blog page THEN the system SHALL display all published articles from Sanity.io CMS
2. WHEN viewing the blog THEN the system SHALL show category filter buttons for immediate client-side filtering
3. WHEN a user clicks a category filter THEN the system SHALL instantly show only articles from that category
4. WHEN a user clicks on an article THEN the system SHALL display the full article content with proper formatting
5. WHEN displaying articles THEN the system SHALL show title, excerpt, publication date, author, and featured image

### Requirement 7: Professional Visual Identity Implementation

**User Story:** As a visitor to the website, I want to experience a cohesive, professional, and modern visual design that reflects the agency's technical expertise, so that I feel confident in their ability to handle my digital projects.

#### Acceptance Criteria

1. WHEN viewing any page THEN the system SHALL use the dark theme with primary color #B47CFD, secondary #FF7FC2, and accent #FFB07B
2. WHEN displaying interactive elements THEN the system SHALL use gradient backgrounds and colored shadows for visual depth
3. WHEN showing content containers THEN the system SHALL use large border radius (lg) for cards and medium (md) for buttons
4. WHEN displaying text THEN the system SHALL maintain proper typography hierarchy with responsive font sizes
5. WHEN users interact with elements THEN the system SHALL provide subtle animations and micro-interactions

### Requirement 8: Client Testimonials and Social Proof

**User Story:** As a potential client evaluating the agency, I want to see testimonials and reviews from previous clients, so that I can assess the quality of their work and client satisfaction.

#### Acceptance Criteria

1. WHEN viewing the homepage THEN the system SHALL display a testimonials section with client reviews
2. WHEN showing testimonials THEN the system SHALL include client name, company, quote, and photo
3. WHEN displaying testimonials THEN the system SHALL implement a carousel or grid layout for multiple reviews
4. WHEN showing client information THEN the system SHALL use the provided testimonial data from homepage.json
5. WHEN testimonials are displayed THEN the system SHALL maintain visual consistency with the overall design

### Requirement 9: SEO and Performance Optimization

**User Story:** As a business owner searching for digital services online, I want the website to appear in search results and load quickly, so that I can easily find and access the agency's services.

#### Acceptance Criteria

1. WHEN any page loads THEN the system SHALL include unique and relevant title and meta description tags
2. WHEN search engines crawl the site THEN the system SHALL provide sitemap.xml and robots.txt files
3. WHEN displaying content THEN the system SHALL use semantic HTML with proper heading structure (H1, H2, H3)
4. WHEN pages load THEN the system SHALL optimize images and implement lazy loading
5. WHEN accessed on any device THEN the system SHALL maintain fast loading times and responsive design

### Requirement 10: Professional Photography and Visual Assets

**User Story:** As a potential client viewing the website, I want to see professional photos of the team and workspace, so that I can build trust and get a sense of the people and environment behind the agency.

#### Acceptance Criteria

1. WHEN viewing the homepage hero section THEN the system SHALL display workspace photos with logo and project mockups
2. WHEN viewing the about page team section THEN the system SHALL show professional portraits of Alex and Anastasia with their roles
3. WHEN viewing service pages THEN the system SHALL include relevant team collaboration photos as ambient images
4. WHEN displaying team photos THEN the system SHALL use optimized images with proper alt text and responsive sizing
5. WHEN showing project mockups THEN the system SHALL display real estate and barbershop website examples in hero or portfolio sections

### Requirement 11: Detailed Pricing Packages and Calculator Integration

**User Story:** As a business owner evaluating services, I want to see clear pricing packages and use a detailed calculator with specific functionality options, so that I can understand the cost structure and make informed decisions.

#### Acceptance Criteria

1. WHEN viewing the pricing page THEN the system SHALL display three packages: Basic (10,000 Kč), Advanced (13,500 Kč), Premium (41,500 Kč)
2. WHEN showing pricing packages THEN the system SHALL list specific features for each package with clear descriptions
3. WHEN using the calculator THEN the system SHALL include additional functionality options (advanced animations, payment gateway, interactive calculator, booking forms, online chat)
4. WHEN calculating marketing services THEN the system SHALL include Google My Business registration, monthly SEO copy, social media management, and PPC campaign setup
5. WHEN displaying calculator results THEN the system SHALL show itemized breakdown: pages price, additional languages, functionality, marketing services, and total

### Requirement 12: Technology Showcase and Team Presentation

**User Story:** As a potential client, I want to see the technologies the agency uses and learn about the team members, so that I can assess their technical capabilities and personal approach.

#### Acceptance Criteria

1. WHEN viewing the about page THEN the system SHALL display a technology section with HTML5, CSS3, JavaScript, PHP, WordPress, Figma, Google, YouTube, Facebook, Instagram
2. WHEN showing the team section THEN the system SHALL present Alex (web design & web development) and Anastasia (marketing & SEO copywriting)
3. WHEN displaying team members THEN the system SHALL include professional photos, names, and role descriptions
4. WHEN viewing technology showcase THEN the system SHALL emphasize modern approach combining deep knowledge with practical experience
5. WHEN presenting the team THEN the system SHALL highlight the personal approach and family business values

### Requirement 13: Comprehensive FAQ and Service Details

**User Story:** As a potential client with questions, I want to find detailed answers about services, processes, and pricing, so that I can make an informed decision without needing to contact the agency first.

#### Acceptance Criteria

1. WHEN viewing FAQ sections THEN the system SHALL include service-specific questions for each page (pricing, services, general)
2. WHEN displaying pricing FAQ THEN the system SHALL address package customization, project timeline, final pricing, quality guarantees, and service requests
3. WHEN showing services FAQ THEN the system SHALL cover collaboration process, service types, long-term vs short-term cooperation, content creation, campaign measurement, content management, support, communication, and individual service selection
4. WHEN presenting FAQ THEN the system SHALL use accordion-style display with smooth animations
5. WHEN FAQ is displayed THEN the system SHALL include contact CTA for additional questions

### Requirement 14: Footer and Navigation Structure

**User Story:** As a website visitor, I want to easily navigate through all sections of the website and find contact information, so that I can access any page or get in touch with the agency.

#### Acceptance Criteria

1. WHEN viewing any page THEN the system SHALL display a sticky header with logo, navigation menu, and CTA button
2. WHEN scrolling down THEN the system SHALL maintain header visibility with backdrop blur effect
3. WHEN viewing any page THEN the system SHALL display a comprehensive footer with contact info, service links, and legal information
4. WHEN clicking navigation items THEN the system SHALL navigate to the appropriate pages
5. WHEN viewing footer THEN the system SHALL display company information, contact details, and social media links

### Requirement 15: Performance and Deployment Standards

**User Story:** As a website visitor, I want the website to load quickly and work reliably across all devices and browsers, so that I can access information efficiently regardless of my setup.

#### Acceptance Criteria

1. WHEN measuring performance THEN the system SHALL achieve Lighthouse scores: Performance >95, Accessibility >98, Best Practices >100, SEO >100
2. WHEN testing across browsers THEN the system SHALL work correctly on Chrome, Firefox, and Safari latest versions
3. WHEN testing responsive design THEN the system SHALL function properly on Desktop (1920px), Laptop (1440px), Tablet (768px), Mobile (375px)
4. WHEN deployed THEN the system SHALL include all required environment variables for Sanity, Resend, and Google Calendar API
5. WHEN accessing the site THEN the system SHALL provide proper sitemap.xml, robots.txt, and social media meta tags