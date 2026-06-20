# Product Requirements Document — Jharkhand Tourism Platform

**Project:** Booking Jharkhand — Premium Travel Marketplace
**Version:** 1.0
**Status:** Draft
**Author:** Chiti Technologies

---

## 1. Executive Summary

Booking Jharkhand is a digital tourism marketplace connecting travellers with verified hotels, cabs, restaurants, and curated travel packages across Jharkhand. The platform currently exists as a static frontend demo (18 pages). This PRD defines the scope for integrating it with the Chiti Console operations backend, transforming it into a fully operational two-sided marketplace.

**Vision:** Become the official digital gateway for Jharkhand tourism — enabling travellers to discover, plan, and book while empowering local tourism businesses to grow.

---

## 2. Problem Statement

| Problem | Impact |
|---|---|
| No unified booking system | Enquiries are manual, hard to track |
| No vendor management workflow | Onboarding, verification, and communication are ad-hoc |
| No analytics | Cannot measure performance, traffic, or conversion |
| No user accounts | Repeat travellers have no personalized experience |
| No discount/promo engine | Cannot run seasonal campaigns |
| Manual customer support | Enquiries from 18 pages go nowhere unified |

---

## 3. Goals & Success Metrics

### Business Goals
- Enable 600+ tourism vendors to onboard and manage listings
- Process 10,000+ enquiries/month across hotels, cabs, packages, restaurants
- Reduce vendor onboarding time from days to < 24 hours
- Achieve 90% enquiry response rate within 4 hours

### Technical Goals
- Single integration point: Chiti Console API → Static Frontend
- Zero-downtime content updates via Console CMS
- Role-based access for 3+ team member roles
- WhatsApp/email notifications for all booking events

---

## 4. User Personas

### 4.1 Platform Admin (User + Team)
- Manages vendors, content, discounts, analytics
- Needs full dashboard access with role delegation
- Pain point: Currently no way to track anything systematically

### 4.2 Content Manager
- Updates hotel/package/listing descriptions, pricing, images
- Publishes blog posts and destination guides
- Needs a clean CMS without touching code

### 4.3 Support Agent
- Handles customer enquiries from all 18 pages
- Assigns enquiries to vendors, follows up
- Needs unified ticket inbox with status tracking

### 4.4 Vendor (Hotel / Cab / Restaurant)
- Manages their own listing, responds to booking requests
- Needs a limited portal — sees only their own data

### 4.5 Traveller (Customer)
- Browses, searches, submits enquiries
- Needs account to track bookings and favourites

---

## 5. Functional Requirements

### FR-1 Vendor Onboarding & Management

| ID | Requirement | Priority |
|---|---|---|
| FR-1.1 | Vendor submits registration form with business details, documents | P0 |
| FR-1.2 | Admin reviews & approves/rejects with notes | P0 |
| FR-1.3 | Approved vendor gets auto-generated login credentials | P0 |
| FR-1.4 | Vendor can update their profile, images, pricing (subject to admin approval) | P1 |
| FR-1.5 | Admin can suspend or remove vendors | P0 |
| FR-1.6 | Vendor categories: Hotel, Cab Operator, Restaurant, Tour Guide, Experience Provider | P0 |

### FR-2 Booking & Enquiry Management

| ID | Requirement | Priority |
|---|---|---|
| FR-2.1 | Customer enquiries from all pages flow into unified inbox | P0 |
| FR-2.2 | Enquiry types: Hotel booking, Cab booking, Package enquiry, Restaurant reservation, General contact, AI plan request | P0 |
| FR-2.3 | Support agent can assign enquiry to vendor | P0 |
| FR-2.4 | Status tracking: New → Assigned → In Discussion → Confirmed → Completed → Cancelled | P0 |
| FR-2.5 | Automated email/WhatsApp notification on status change | P1 |
| FR-2.6 | Admin can view all bookings in calendar/table view | P1 |

### FR-3 Content Management System

| ID | Requirement | Priority |
|---|---|---|
| FR-3.1 | Console CMS for all listing types (hotels, cabs, packages, restaurants, destinations) | P0 |
| FR-3.2 | Blog post editor with image upload, categories, tags | P0 |
| FR-3.3 | Pricing, availability, and feature toggles per listing | P0 |
| FR-3.4 | Bulk import/export for listings (CSV) | P2 |
| FR-3.5 | Content approval workflow (draft → review → publish) | P1 |

### FR-4 User Accounts & Authentication

| ID | Requirement | Priority |
|---|---|---|
| FR-4.1 | Customer sign-up/login (email or Google OAuth) | P0 |
| FR-4.2 | Customer dashboard: My Bookings, Favourites, Saved Searches | P1 |
| FR-4.3 | Vendor login with scoped permissions | P0 |
| FR-4.4 | Admin login with role-based access (Admin, Content Manager, Support) | P0 |
| FR-4.5 | Password reset, session management | P0 |

### FR-5 Discounts & Promotions

| ID | Requirement | Priority |
|---|---|---|
| FR-5.1 | Create discount codes with type (percentage, flat), value, min cart | P0 |
| FR-5.2 | Set validity dates, usage limits, applicable categories | P0 |
| FR-5.3 | Auto-apply seasonal promotions (Monsoon, Winter, Festivals) | P1 |
| FR-5.4 | Track redemption counts and revenue impact | P1 |

### FR-6 Customer Support

| ID | Requirement | Priority |
|---|---|---|
| FR-6.1 | Unified ticket inbox for all customer enquiries | P0 |
| FR-6.2 | Internal notes, tags, priority levels | P0 |
| FR-6.3 | Predefined response templates for common scenarios | P1 |
| FR-6.4 | SLA tracking: response time, resolution time | P2 |
| FR-6.5 | Customer satisfaction rating after ticket resolution | P2 |

### FR-7 Analytics & Reporting

| ID | Requirement | Priority |
|---|---|---|
| FR-7.1 | Dashboard KPIs: Total enquiries, conversion rate, top destinations | P0 |
| FR-7.2 | Vendor performance reports (response time, bookings received) | P1 |
| FR-7.3 | Revenue/projection reports | P1 |
| FR-7.4 | Traffic sources, popular pages, search trends | P2 |

---

## 6. Non-Functional Requirements

| Requirement | Specification |
|---|---|
| **Performance** | API responses < 300ms; page load < 2s |
| **Uptime** | 99.5% SLA |
| **Security** | HTTPS, JWT auth, role-based access, XSS/CSRF protection |
| **Mobile** | All Console views fully responsive |
| **Accessibility** | WCAG 2.1 AA compliance for Console |
| **Backup** | Daily automated backups, 30-day retention |
| **Language** | English + Hindi (existing i18n preserved) |

---

## 7. Integration Architecture

```
┌──────────────────────────────┐     ┌──────────────────────────────┐
│   Frontend (Current Site)    │     │   Chiti Console (Backend)    │
│                              │     │                              │
│  18 Static HTML Pages        │◄───►│  REST API / GraphQL          │
│  Vite + Tailwind + GSAP      │     │  PostgreSQL + Redis          │
│  Hosted on Vercel/Netlify    │     │  Hosted on Vercel            │
│                              │     │                              │
│  Customer-facing only        │     │  Operations-only             │
│  No auth required            │     │  Role-based auth required    │
└──────────────────────────────┘     └──────────────────────────────┘
                                              │
                                     ┌────────┴────────┐
                                     │   Integrations   │
                                     │  ─────────────  │
                                     │  WhatsApp API    │
                                     │  Email (SMTP)    │
                                     │  Google OAuth    │
                                     │  SMS Gateway     │
                                     └─────────────────┘
```

---

## 8. Phased Delivery Plan

### Phase 1 — Core Operations (6 weeks)
- Chiti Console setup with vendor management, booking inbox
- Content CMS for hotels, cabs, packages, restaurants
- Admin and support agent accounts
- Frontend API integration for dynamic content

### Phase 2 — Vendor & Customer Experience (4 weeks)
- Vendor portal with listing management
- Customer accounts (sign-up, login, my bookings)
- Discount/promo engine
- WhatsApp/email notifications

### Phase 3 — Growth & Intelligence (4 weeks)
- Analytics dashboard with custom reports
- AI trip planner integration with real data
- Bulk import/export tools
- Customer satisfaction tracking
- Performance optimization and load testing
