# Integration Plan — Jharkhand Tourism Platform × Chiti Console

**Version:** 1.0
**Last Updated:** June 2026

---

## Table of Contents
1. [Overview](#1-overview)
2. [Console Screens & Views](#2-console-screens--views)
3. [API Integration Points](#3-api-integration-points)
4. [Data Models](#4-data-models)
5. [Notification Flows](#5-notification-flows)
6. [Role Permissions Matrix](#6-role-permissions-matrix)
7. [Implementation Roadmap](#7-implementation-roadmap)

---

## 1. Overview

This document defines every screen, view, and integration point needed in the Chiti Console to operate the Booking Jharkhand platform. Each screen includes the purpose, key components, data sources, and mockup guidance.

**Console URL:** `https://chiti-console.vercel.app`
**Frontend URL:** `https://booking-jharkhand.vercel.app` (example)

---

## 2. Console Screens & Views

### 2.1 Dashboard — Operations Overview

**Purpose:** Daily command centre showing platform health at a glance.

```
┌─────────────────────────────────────────────────────────┐
│  [Logo]  DASHBOARD    │  Search...    │  👤 Admin  ⚙️  │
├─────────────────────────────────────────────────────────┤
│ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐           │
│ │Total │ │Pending│ │Active│ │Open  │ │Revenue│           │
│ │Enq.  │ │Vendor │ │Listng│ │Ticks│ │(MTD) │           │
│ │ 342  │ │  12   │ │ 156  │ │  8   │ │₹2.4L │           │
│ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘           │
├─────────────────────────────────────────────────────────┤
│ Recent Enquiries (last 24h)               View All →     │
│ ┌──────────────────────────────────────────────────┐    │
│ │ #3421  Hotel  Netarhat Forest     ⏳ Assigned    │    │
│ │ #3420  Cab    Ranchi → Deoghar    ✅ Confirmed   │    │
│ │ #3419  Pkg    Betla Safari Pkg    🆕 New         │    │
│ │ #3418  Rest.  Jungle Cafe         💬 In Disc.    │    │
│ └──────────────────────────────────────────────────┘    │
├─────────────────────────────────────────────────────────┤
│ Vendor Approval Queue (12 pending)      Review →        │
│ ┌──────────────────────────────────────────────────┐    │
│ │ 📄 The Forest Inn, Netarhat       ⏳ 2 days ago  │    │
│ │ 📄 Raj Cab Service, Ranchi        ⏳ 1 day ago   │    │
│ └──────────────────────────────────────────────────┘    │
├─────────────────────────────────────────────────────────┤
│ Chart: Enquiries by Category (This Week)                │
│ ████████████ Hotels ████████ Cabs ████ Packages ██ Rest │
└─────────────────────────────────────────────────────────┘
```

**Components:**
- KPI cards (5): Total Enquiries, Pending Vendors, Active Listings, Open Tickets, Monthly Revenue
- Recent Enquiries table (last 5, auto-refresh)
- Vendor Approval Queue (mini-list with approve/reject buttons)
- Enquiry volume chart (last 7 days, stacked by category)
- Quick-action buttons: New Vendor, New Listing, Broadcast Message

**Data source:** Aggregated from bookings, vendors, listings tables
**Auto-refresh:** Every 30 seconds

---

### 2.2 Vendor Management

#### 2.2.1 Vendor List

**Purpose:** Search, filter, and manage all registered vendors.

```
┌─────────────────────────────────────────────────────────┐
│  [Logo]  VENDORS                                       │
├─────────────────────────────────────────────────────────┤
│ 🔍 Search name, business, city...                       │
│ [All Status ▼] [All Category ▼] [All District ▼] [+ Add]│
├─────────────────────────────────────────────────────────┤
│ ┌───┬──────────┬────────────┬───────┬──────┬──────┬────┐│
│ │ # │ Business │ Owner      │ Type  │City  │Status│Act ││
│ ├───┼──────────┼────────────┼───────┼──────┼──────┼────┤│
│ │ 1 │ Forest   │ Anjali M.  │ Hotel │Netar │ ✅   │ ✎  ││
│ │   │ Homestay │            │       │ hat  │Active│    ││
│ │ 2 │ Raj Cabs │ Rajesh K.  │ Cab   │Ranch │ ⏳   │ ✎  ││
│ │   │          │            │       │  i   │Pending│    ││
│ │ 3 │ Jungle   │ Suman T.   │Rest.  │Lateh │ ❌   │ ✎  ││
│ │   │ Cafe     │            │       │  ar  │Susp. │    ││
│ └───┴──────────┴────────────┴───────┴──────┴──────┴────┘│
│ Page 1 of 12  [1 2 3 ... 12]                Total: 156  │
└─────────────────────────────────────────────────────────┘
```

**Filters:** Status (Active/Pending/Suspended), Category (Hotel/Cab/Restaurant/Tour Guide/Experience), District (24 districts of Jharkhand), Date range
**Columns:** ID, Business Name, Owner Name, Type, City, Status (colour-coded), Actions (Edit, Suspend, Delete)

#### 2.2.2 Vendor Detail / Approval View

**Purpose:** Review vendor application or manage existing vendor details.

```
┌─────────────────────────────────────────────────────────┐
│  ← Back to Vendors  │  [✅ Approve] [❌ Reject]        │
├─────────────────────────────────────────────────────────┤
│ Vendor: The Forest Homestay        Status: Pending      │
│ Owner: Anjali Mahato               Applied: 18 Jun 2026 │
├─────────────────────────────────────────────────────────┤
│ ┌─── PROFILE ───────────────────────────────────────┐   │
│ │ Business Name:   The Forest Homestay              │   │
│ │ Owner Name:      Anjali Mahato                    │   │
│ │ GST:             20ABCDE1234F1Z5                  │   │
│ │ Phone:           +91-9876543210                   │   │
│ │ Email:           anjali@foresthomestay.com        │   │
│ │ Category:        Hotel / Homestay                 │   │
│ │ District:        Latehar                          │   │
│ │ Address:         3 km from Netarhat Main Gate     │   │
│ └──────────────────────────────────────────────────┘   │
│ ┌─── DOCUMENTS ────────────────────────────────────┐   │
│ │ 📄 GST Certificate         ✅ Verified           │   │
│ │ 📄 Aadhaar Card            ✅ Verified           │   │
│ │ 📄 Property Proof          ⏳ Pending Review     │   │
│ │ 📄 Fire Safety Clearance   ❌ Not Uploaded       │   │
│ └──────────────────────────────────────────────────┘   │
│ ┌─── LISTINGS ─────────────────────────────────────┐   │
│ │ 🏠 Standard Room     ₹2,500/night  3 units       │   │
│ │ 🏠 Deluxe Room       ₹4,000/night  2 units       │   │
│ │ 🏠 Dormitory         ₹800/night   8 beds         │   │
│ │ [+ Add Listing]                                   │   │
│ └──────────────────────────────────────────────────┘   │
│ Activity Log:                                          │
│ • 18 Jun 2026 14:30 — Application submitted            │
│ • 18 Jun 2026 14:32 — Documents uploaded               │
└─────────────────────────────────────────────────────────┘
```

**Sections:**
1. **Profile** — Business/owner details (editable by admin)
2. **Documents** — Uploaded proofs with verify/decline per document
3. **Listings** — Associated products (rooms, vehicles, menu items)
4. **Booking History** — All past bookings for this vendor
5. **Activity Log** — Audit trail
6. **Performance Metrics** — Response rate, avg response time, total bookings
7. **Admin Notes** — Internal notes visible to admin team only

---

### 2.3 Booking & Enquiry Inbox

#### 2.3.1 Unified Inbox

**Purpose:** All customer enquiries in one place — the primary daily tool for support agents.

```
┌─────────────────────────────────────────────────────────┐
│  [Logo]  ENQUIRIES                                      │
├─────────────────────────────────────────────────────────┤
│ 🔍 Search enquiry ID, name, phone...                    │
│ [All Status ▼] [All Type ▼] [All Vendor ▼] [📅 Date]   │
├─────────────────────────────────────────────────────────┤
│ ┌────────────────────────────────────────────────────┐  │
│ │ #3421 │ Hotel │ Netarhat Forest Homestay          │  │
│ │ 👤 Rahul S.  +91-98765XXXXX                       │  │
│ │ 📅 20 Jun 2026  10:42 AM       ⏳ Assigned → Anjali│  │
│ │ 🏷️ 2 adults, 1 child  |  Check-in: 25 Jun        │  │
│ │ [💬 Assign] [📞 Call] [✏️ Note]                   │  │
│ ├────────────────────────────────────────────────────┤  │
│ │ #3420 │ Cab   │ Ranchi → Deoghar                  │  │
│ │ 👤 Priya M.  +91-87654XXXXX                       │  │
│ │ 📅 20 Jun 2026  09:15 AM       ✅ Confirmed        │  │
│ │ 🏷️ Sedan  |  Pickup: Ranchi Airport  |  28 Jun   │  │
│ ├────────────────────────────────────────────────────┤  │
│ │ #3419 │ Pkg   │ Betla Wildlife Safari             │  │
│ │ 👤 Amit K.  +91-76543XXXXX                       │  │
│ │ 📅 19 Jun 2026  18:30 PM       🆕 New              │  │
│ │ 🏷️ 2 Days / 1 Night  |  4 adults                 │  │
│ └────────────────────────────────────────────────────┘  │
│ Enquiries: 342   Open: 8   Avg Response: 2.4h          │
└─────────────────────────────────────────────────────────┘
```

**Filters:** Status (New/Assigned/In Discussion/Confirmed/Completed/Cancelled), Type (Hotel/Cab/Package/Restaurant/Contact/AI Plan), Vendor, Date range, Priority
**List view:** Card layout with key info, colour-coded status badges
**Bulk actions:** Select multiple → Assign to vendor, Change status, Delete

#### 2.3.2 Enquiry Detail View

**Purpose:** Full conversation thread and management for a single enquiry.

```
┌─────────────────────────────────────────────────────────┐
│  ← Back                    Status: In Discussion        │
│  Enquiry #3421                                         │
├─────────────────────────────────────────────────────────┤
│ ┌─── CUSTOMER INFO ────────────────┐ ┌─── ENQUIRY ──┐  │
│ │ Name:    Rahul S.                │ │ Type: Hotel  │  │
│ │ Phone:   +91-9876543210          │ │ Vendor: For- │  │
│ │ Email:   rahul@email.com         │ │   est Home-  │  │
│ │ City:    Mumbai                  │ │   stay       │  │
│ │ Language: Hindi                  │ │ Check-in:    │  │
│ │ [View Customer Profile →]        │ │   25 Jun 2026│  │
│ └──────────────────────────────────┘ │ Check-out:   │  │
│                                      │   27 Jun 2026│  │
│ ┌─── CONVERSATION ───────────────┐  │ Guests: 2+1  │  │
│ │ 📅 20 Jun 10:42 AM             │  │ Room: Deluxe │  │
│ │ Customer: Is the deluxe room   │  │ Budget:      │  │
│ │ available for 25-27 June? We   │  │   ₹3-4K/night│  │
│ │ are a family of 3.             │  └──────────────┘  │
│ │                                │                     │
│ │ 📅 20 Jun 11:15 AM             │  ┌─── ACTIONS ──┐  │
│ │ Vendor: Yes, deluxe room is    │  │ [Assign]     │  │
│ │ available. ₹4,000/night incl.  │  │ [Change      │  │
│ │ breakfast. Shall I confirm?    │  │  Status]     │  │
│ │                                │  │ [Add Note]   │  │
│ │ 📅 20 Jun 12:30 PM             │  │ [Notify      │  │
│ │ Agent (You): Sent confirmation │  │  Customer]   │  │
│ │ to customer via WhatsApp.      │  │ [Convert to  │  │
│ │                                │  │  Booking]    │  │
│ │ ┌──────────────────────────┐   │  └──────────────┘  │
│ │ │ Type a message...  [Send]│   │                     │
│ │ └──────────────────────────┘   │  ┌─── NOTES ────┐  │
│ └────────────────────────────────┘  │ Customer     │  │
│                                      │ prefers      │  │
│                                      │ WhatsApp     │  │
│                                      │ communication│  │
│                                      │ [Add Note +] │  │
│                                      └──────────────┘  │
└─────────────────────────────────────────────────────────┘
```

**Sections:**
1. **Customer Info** Panel — Contact details, source, language preference
2. **Enquiry Details** Panel — Type, vendor, dates, guests, budget, special requests
3. **Conversation Thread** — Chronological messages with agent/vendor/customer labels, file attachments
4. **Actions** Panel — Status change, assign, notify, convert to confirmed booking
5. **Internal Notes** — Team-only notes

---

### 2.4 Content Management System

#### 2.4.1 Listing Manager (Hotels / Cabs / Restaurants / Packages)

**Purpose:** Manage all listings displayed on the frontend.

```
┌─────────────────────────────────────────────────────────┐
│  [Logo]  CONTENT  >  HOTELS                            │
├─────────────────────────────────────────────────────────┤
│ 🔍 Search...                         [Vendor: All ▼]   │
│ [All Status ▼] [+ New Hotel]                           │
├─────────────────────────────────────────────────────────┤
│ ┌────────────────────────────────────────────────────┐  │
│ │ 🏠 Netarhat Forest Homestay     ✅ Published  ✎ ⚡│  │
│ │    Anjali Mahato · Latehar · 4 rooms               │  │
│ │    ₹2,500-₹4,000/night    ⭐ 4.5 (23 reviews)     │  │
│ ├────────────────────────────────────────────────────┤  │
│ │ 🏠 Saranda Eco Resort         ⏳ Draft       ✎ ⚡ │  │
│ │    Vendor Pending · West Singhbhum · 8 rooms       │  │
│ │    ₹3,500-₹8,000/night        ⭐ New               │  │
│ ├────────────────────────────────────────────────────┤  │
│ │ 🏠 Betla Jungle Lodge         ❌ Unpublished   ✎  │  │
│ │    Suman T. · Palamu · 6 rooms                     │  │
│ │    ₹1,800-₹3,000/night    ⭐ 3.8 (12 reviews)      │  │
│ └────────────────────────────────────────────────────┘  │
│ Page 1 of 5                        Total Hotels: 48    │
└─────────────────────────────────────────────────────────┘
```

**Listing Editor (Modal or Page):**

```
┌─────────────────────────────────────────────────────────┐
│  ← Back to Hotels  │  [Save Draft] [📋 Preview] [Pub.] │
├─────────────────────────────────────────────────────────┤
│ ┌─── BASIC INFO ───────────────────────────────────┐    │
│ │ Name:      Netarhat Forest Homestay              │    │
│ │ Vendor:    Anjali Mahato (ID: V-042)             │    │
│ │ Category:  Hotel / Homestay                      │    │
│ │ Status:    ✅ Published                          │    │
│ │ Tags:      forest, netarhat, budget, family      │    │
│ └──────────────────────────────────────────────────┘    │
│ ┌─── MEDIA ────────────────────────────────────────┐    │
│ │ [📷] [📷] [📷] [📷] [+ Add Image]               │    │
│ │ Drag to reorder. Recommended: 1200×800px         │    │
│ └──────────────────────────────────────────────────┘    │
│ ┌─── PRICING ──────────────────────────────────────┐    │
│ │ Room Type     Price   Qty  Amenities             │    │
│ │ Standard     ₹2,500   3   WiFi, AC, TV           │    │
│ │ Deluxe       ₹4,000   2   WiFi, AC, TV, Bkfst   │    │
│ │ Dormitory     ₹800    8   Fan, Common Bath       │    │
│ │ [+ Add Room Type]                                │    │
│ └──────────────────────────────────────────────────┘    │
│ ┌─── DESCRIPTION ──────────────────────────────────┐    │
│ │ <editor>                                         │    │
│ │ Nestled in the serene pine forests of Netarhat,  │    │
│ │ our homestay offers a peaceful retreat...        │    │
│ └──────────────────────────────────────────────────┘    │
│ ┌─── LOCATION ────────────────────────────────────┐    │
│ │ Address:   3 km from Netarhat Main Gate         │    │
│ │ District:  Latehar                               │    │
│ │ Map:       [🗺️ Pin on Map]                      │    │
│ └──────────────────────────────────────────────────┘    │
│ ┌─── SEO ─────────────────────────────────────────┐    │
│ │ Meta Title:   Netarhat Forest Homestay - Book   │    │
│ │ Meta Desc:    Best homestay in Netarhat...      │    │
│ │ Slug:         netarhat-forest-homestay          │    │
│ └──────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────┘
```

**Same structure for:**
- Cab listings (Fleet: sedan/SUV/tempo, routes, pricing per km)
- Restaurant listings (cuisine type, menu items, seating capacity)
- Packages (itinerary, inclusions/exclusions, duration, price per person)

#### 2.4.2 Blog Manager

**Purpose:** Create and manage travel guides, destination articles.

```
┌─────────────────────────────────────────────────────────┐
│  CONTENT  >  BLOG                                       │
├─────────────────────────────────────────────────────────┤
│ [+ New Post]  [Categories ▼]  [Tags ▼]                 │
├─────────────────────────────────────────────────────────┤
│ ┌────────────────────────────────────────────────────┐  │
│ │ Sacred Journeys: Ancient Temples of Jharkhand      │  │
│ │ 📅 15 Jun 2026  |  Culture  |  💬 12  |  ✅ Pub. │  │
│ ├────────────────────────────────────────────────────┤  │
│ │ Waterfall Trail: 5 Must-Visit Falls in Ranchi      │  │
│ │ 📅 10 Jun 2026  |  Nature  |  💬 8  |  ✅ Pub.   │  │
│ ├────────────────────────────────────────────────────┤  │
│ │ Weekend Guide: Netarhat on a Budget                │  │
│ │ 📅 05 Jun 2026  |  Travel Tips  |  💬 3  |  ⏳ Dr.│  │
│ └────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

---

### 2.5 Discount & Promotions Engine

**Purpose:** Create and manage promotional campaigns.

```
┌─────────────────────────────────────────────────────────┐
│  [Logo]  PROMOTIONS                                     │
├─────────────────────────────────────────────────────────┤
│ [+ New Campaign]  [Active ▼]  [Expired ▼]              │
├─────────────────────────────────────────────────────────┤
│ ┌────────────────────────────────────────────────────┐  │
│ │ 🔥 Monsoon Madness        Code: MONSOON25          │  │
│ │   25% off on all hotels  |  Valid: 1 Jul-31 Aug    │  │
│ │   Used: 142/500  |  Revenue: ₹3.2L  |  ✅ Active  │  │
│ ├────────────────────────────────────────────────────┤  │
│ │ 🎉 New User Offer          Code: WELCOMEJHARK      │  │
│ │   ₹500 off on first cab booking  |  Valid: Always  │  │
│ │   Used: 89/200  |  Revenue: ₹89K  |  ✅ Active    │  │
│ ├────────────────────────────────────────────────────┤  │
│ │ 🏕️ Netarhat Special        Code: NETHAT20         │  │
│ │   20% off on Netarhat packages | Expired: 15 Mar   │  │
│ │   Used: 34/100  |  Revenue: ₹1.1L  |  ❌ Expired  │  │
│ └────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

**Campaign Editor:**

```
┌─────────────────────────────────────────────────────────┐
│  New Campaign                                           │
├─────────────────────────────────────────────────────────┤
│ Campaign Name:    [____________________]                │
│ Discount Code:    [____________________] [Auto-generate]│
│ Discount Type:    (•) Percentage  ( ) Flat Amount       │
│ Value:            [___] %                               │
│ Min Cart Value:   [______] (optional)                   │
│ Max Discount:     [______] (optional)                   │
│ Applicable To:    [✓ Hotels] [  Cabs] [✓ Packages] [  ]│
│ Usage Limit:      [___] total  [___] per user           │
│ Valid From:       [📅________]  To: [📅________]        │
│ Description:      [___________________________]         │
│                                                         │
│ [Cancel]  [Create Campaign]                             │
└─────────────────────────────────────────────────────────┘
```

---

### 2.6 Customer Support Center

#### 2.6.1 Ticket List

**Purpose:** Support tickets from all sources (contact form, enquiry follow-ups, direct).

```
┌─────────────────────────────────────────────────────────┤
│  [Logo]  SUPPORT                                        │
├─────────────────────────────────────────────────────────┤
│ 🔍 Search...  [Open ▼]  [Priority ▼]  [Assigned To ▼] │
├─────────────────────────────────────────────────────────┤
│ ┌───┬──────┬────────┬────────┬──────┬─────┬──────┬───┐ │
│ │ # │From  │Subject │Vendor  │Prio  │Age  │Status│Act│ │
│ ├───┼──────┼────────┼────────┼──────┼─────┼──────┼───┤ │
│ │T42│Rahul │Not     │Forest  │🔴    │2d   │📞    │✎  │
│ │   │S.    │getting │Homestay│High   │     │Open  │   │
│ │   │      │refund  │        │       │     │      │   │
│ │T41│Priya │Need    │Raj     │🟡    │5h   │💬    │✎  │
│ │   │      │resched-│Cabs    │Med    │     │In Pr.│   │
│ │   │      │ule cab │        │       │     │      │   │
│ │T40│Vikas │Want to │N/A     │🟢    │1h   │🆕    │✎  │
│ │   │      │partner │        │Low    │     │New   │   │
│ └───┴──────┴────────┴────────┴──────┴─────┴──────┴───┘ │
└─────────────────────────────────────────────────────────┘
```

**Ticket Detail View:**
- Customer info + conversation history
- Internal notes (team only)
- Predefined response templates ("refund policy", "rescheduling", "contact vendor")
- Status workflow: New → In Progress → Waiting on Customer → Resolved → Closed
- SLA timer showing time elapsed since creation

---

### 2.7 User Accounts (Admin View)

**Purpose:** Manage all registered users on the platform.

```
┌─────────────────────────────────────────────────────────┐
│  [Logo]  USERS                                          │
├─────────────────────────────────────────────────────────┤
│ 🔍 Search email, name, phone...     [+ Invite User]     │
│ [All Role ▼]  [All Status ▼]                           │
├─────────────────────────────────────────────────────────┤
│ ┌───┬────────┬────────────┬──────┬───────┬──────┬────┐ │
│ │ # │ Name   │ Email      │Role  │Joined│Status│Act │ │
│ │ 1 │Rahul S.│rahul@e.com│Cust. │12Jun │ ✅   │✎   │ │
│ │ 2 │Anjali  │anjali@f.. │Vendor│10Jun │ ✅   │✎   │ │
│ │ 3 │You     │you@admin  │Admin │01Jan │ ✅   │✎   │ │
│ │ 4 │Priya   │priya@e.com│Cust. │15Jun │ ⏳   │✎   │ │
│ │   │        │           │      │      │Verif │     │ │
│ └───┴────────┴────────────┴──────┴───────┴──────┴────┘ │
└─────────────────────────────────────────────────────────┘
```

**User Detail View:**
- Profile info, account status, verification status
- Login history (last 5 logins, device, IP)
- Enquiry/booking history for this user
- Role & permissions management
- Account actions: Verify, Suspend, Change Role, Delete

---

### 2.8 Analytics Dashboard

**Purpose:** Data-driven insights for team decision-making.

```
┌─────────────────────────────────────────────────────────┐
│  [Logo]  ANALYTICS         📅 Last 30 Days ▼            │
├─────────────────────────────────────────────────────────┤
│ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐          │
│ │1,247 │ │ 342  │ │ 27.4%│ │ 2.4h │ │₹7.2L │          │
│ │Total │ │Enq.  │ │Conv. │ │Avg   │ │Rev.  │          │
│ │Visit │ │This  │ │Rate  │ │Resp. │ │(MTD) │          │
│ │ s    │ │Month │ │      │ │Time  │ │      │          │
│ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘          │
├─────────────────────────────────────────────────────────┤
│ 📊 Enquiries Trend                        [📥 Export]  │
│  ██  ████  ██  ██████  ████  ██  ██████              │
│  Mon Tue  Wed Thu  Fri  Sat Sun                       │
├─────────────────────────────────────────────────────────┤
│ Top Destinations    │ Enquiry by Category              │
│ ┌────────────────┐  │ ┌────────────────┐               │
│ │ 1. Netarhat    │  │ │ Hotels   45%   │               │
│ │ 2. Deoghar     │  │ │ Cabs     28%   │               │
│ │ 3. Ranchi      │  │ │ Packages 18%   │               │
│ │ 4. Betla       │  │ │ Rest.     9%   │               │
│ │ 5. Patratu     │  │ └────────────────┘               │
│ └────────────────┘  │                                  │
│ Vendor Performance  │ Platform Growth                  │
│ ┌────────────────┐  │ ┌────────────────┐               │
│ │ Forest Home-   │  │ │ Vendors: +12   │               │
│ │ stay: 42 enq.  │  │ │ this month     │               │
│ │ Raj Cabs: 38   │  │ │ Listings: +8   │               │
│ │ Saranda Eco:   │  │ │ Users: +342    │               │
│ │ 31 enq.        │  │ └────────────────┘               │
│ └────────────────┘  │                                  │
└─────────────────────────────────────────────────────────┘
```

**Report Builder (Exportable to PDF/CSV):**
- Date range picker
- Metric selection (enquiries, conversion, revenue, vendors)
- Dimension breakdown (by district, category, vendor, source)
- Chart type (bar, line, pie, table)

---

### 2.9 Settings & Configuration

**Purpose:** Platform-wide configuration.

| Section | Settings |
|---|---|
| **General** | Platform name, logo, favicon, contact email, phone |
| **Booking** | Default enquiry expiry (hours), auto-assignment rules, cancellation policy |
| **Notifications** | WhatsApp template IDs, email SMTP, SMS API key, notification triggers |
| **Payment** | Payment gateway keys, commission percentage, payout schedule |
| **Roles** | Create/edit roles, assign permissions per role |
| **SEO** | Default meta title/description, sitemap generation toggle |
| **Localization** | Language toggle default, currency symbol, date format |

---

## 3. API Integration Points

The frontend (current static site) will fetch data from Chiti Console API.

| Endpoint | Purpose | Method | Example |
|---|---|---|---|
| `GET /api/listings?type=hotel` | Fetch hotel listings | GET | Returns JSON array of hotels |
| `GET /api/listings/:id` | Single listing detail | GET | Returns hotel with rooms |
| `POST /api/enquiries` | Submit a new enquiry | POST | Customer submits booking request |
| `GET /api/packages` | Fetch package listings | GET | Returns packages with itinerary |
| `GET /api/blog` | Fetch blog posts | GET | Returns posts with content |
| `POST /api/auth/login` | User login | POST | Returns JWT token |
| `POST /api/auth/register` | User registration | POST | Creates customer account |
| `GET /api/users/:id/bookings` | User's booking history | GET | Returns their enquiries |
| `POST /api/vendors/register` | Vendor registration | POST | Submits vendor application |
| `GET /api/promotions?active=true` | Active discount codes | GET | Returns valid promotions |
| `POST /api/contact` | Contact form submission | POST | Creates support ticket |
| `GET /api/destinations` | Fetch destination data | GET | Returns districts/attractions |

**Frontend Integration Plan:**
1. Replace static HTML content with API-fetched dynamic content
2. Form submissions POST to API instead of going nowhere
3. Add JWT token management for authenticated users
4. Implement lazy loading and caching for performance

---

## 4. Data Models

### Vendor
```
Vendor {
  id: string (UUID)
  businessName: string
  ownerName: string
  category: enum (hotel|cab|restaurant|tour_guide|experience)
  gst: string (optional)
  phone: string
  email: string
  district: string
  address: string
  documents: Document[]
  status: enum (pending|active|suspended|rejected)
  createdAt: timestamp
  updatedAt: timestamp
}
```

### Listing (Hotel / Cab / Restaurant / Package)
```
Listing {
  id: string (UUID)
  vendorId: string (FK → Vendor)
  type: enum (hotel|cab|restaurant|package)
  name: string
  description: string (rich text)
  images: string[] (URLs)
  pricing: Pricing[] (type-specific: rooms, routes, menu items)
  location: { address, district, lat, lng }
  amenities: string[]
  tags: string[]
  status: enum (draft|published|unpublished)
  seo: { metaTitle, metaDesc, slug }
  rating: number (avg)
  reviewCount: number
  createdAt: timestamp
  updatedAt: timestamp
}
```

### Enquiry
```
Enquiry {
  id: string (UUID)
  type: enum (hotel|cab|package|restaurant|contact|ai_plan)
  customerId: string (FK → User, nullable)
  customerName: string
  customerPhone: string
  customerEmail: string
  listingId: string (FK → Listing, nullable)
  vendorId: string (FK → Vendor, nullable)
  details: object (type-specific: dates, guests, pickup, etc.)
  status: enum (new|assigned|in_discussion|confirmed|completed|cancelled)
  assignedTo: string (FK → User, nullable)
  priority: enum (low|medium|high)
  source: string (page URL where enquiry came from)
  createdAt: timestamp
  updatedAt: timestamp
}
```

### Promotion
```
Promotion {
  id: string (UUID)
  code: string (unique)
  type: enum (percentage|flat)
  value: number
  minCartValue: number (optional)
  maxDiscount: number (optional)
  applicableTypes: string[] (hotel|cab|package|restaurant)
  usageLimit: number (total)
  perUserLimit: number
  usedCount: number
  validFrom: timestamp
  validTo: timestamp
  isActive: boolean
  description: string
  createdAt: timestamp
}
```

---

## 5. Notification Flows

### 5.1 Vendor Onboarding
```
Vendor submits form
  → Console creates PENDING record
  → Email to admin: "New vendor application received"
  → Admin reviews → Approve/Reject
  → Email to vendor: "Welcome! Your account is active" / "Application declined"
```

### 5.2 Customer Enquiry
```
Customer submits enquiry on frontend
  → Console creates NEW enquiry
  → If auto-assign enabled: enquiry assigned to vendor
  → Email to vendor: "New booking enquiry received"
  → Email to customer: "We've received your enquiry"
  → Support agent can intervene at any point
```

### 5.3 Booking Confirmed
```
Vendor/Agent marks enquiry as CONFIRMED
  → WhatsApp to customer: "Your booking at [property] is confirmed!"
  → Email to customer: Confirmation details + invoice
  → Console updates booking status
```

---

## 6. Role Permissions Matrix

| Permission | Admin | Content Manager | Support Agent | Vendor |
|---|---|---|---|---|
| View Dashboard | ✅ | ✅ (limited) | ✅ (limited) | ❌ |
| Manage Vendors | ✅ | ❌ | ❌ | ❌ |
| Approve/Reject Vendors | ✅ | ❌ | ❌ | ❌ |
| View All Enquiries | ✅ | ❌ | ✅ | ❌ |
| View Own Enquiries | ❌ | ❌ | ❌ | ✅ |
| Assign Enquiries | ✅ | ❌ | ✅ | ❌ |
| Manage Listings (all) | ✅ | ✅ | ❌ | ❌ |
| Manage Own Listing | ❌ | ❌ | ❌ | ✅ |
| Create/Edit Content | ✅ | ✅ | ❌ | ❌ |
| Create Promotions | ✅ | ❌ | ❌ | ❌ |
| View Analytics | ✅ | ✅ | ❌ | ❌ |
| Manage Users | ✅ | ❌ | ❌ | ❌ |
| Support Tickets | ✅ | ❌ | ✅ | ❌ |
| Platform Settings | ✅ | ❌ | ❌ | ❌ |

---

## 7. Implementation Roadmap

### Week 1-2: Foundation
- Set up Chiti Console project (Next.js + Tailwind + PostgreSQL)
- Implement authentication & role-based access
- Create database schema (vendors, listings, enquiries, users, promotions)
- Build dashboard shell with sidebar navigation

### Week 3-4: Core Operations
- Vendor management screens (list, detail, approve/reject)
- Enquiry inbox (list, detail, conversation thread)
- Listing manager (CRUD for hotels, cabs, restaurants, packages)
- API endpoints for frontend integration

### Week 5-6: Content & Customer
- Blog manager
- User management
- Promotions engine
- Frontend API integration (replace static content)
- Form submissions → Console API

### Week 7-8: Notifications & Polish
- WhatsApp/email notification integration
- Customer accounts frontend (login, bookings)
- Vendor portal (limited access)
- Analytics dashboard
- Testing & bug fixes

### Week 9-10: Launch
- Load testing & optimization
- Documentation & team training
- Soft launch with 10 pilot vendors
- Full launch with migration/staging plan
