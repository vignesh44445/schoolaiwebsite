# UI/UX Audit & Redesign Report


##  Executive Summary
During this redesign sprint, the primary focus was on improving the user experience, clarifying navigation, and enhancing the visual quality of the website. I have prioritized high-impact sections to ensure an immediate improvement in conversion rates and usability. The overall aesthetic has been brought closer to modern EdTech standards—featuring a clear hierarchy, consistent spacing, and appropriate typography.

 My core focus has been ensuring a strict **design-to-code match**, where the original vision is seamlessly carried out in the built version.

---

##  1. Navigation & Header Issues

### 1.1 Conflicting Call-to-Actions (CTAs)
* **Issue:** In the top right corner of the desktop view, the Sign in and Schedule a Call buttons had conflicting visual weights (outlined vs. solid pink). This created visual competition, pulling the user's eye in two directions immediately upon page load.
* **Resolution:** Rebalanced the visual hierarchy of the buttons so the primary CTA stands out smoothly without competing with secondary actions.

### 1.2 Premature Conversion Ask ("AI for Schools")
* **Issue:** When a user clicked "AI for Schools," they were immediately asked to "Try for Free" before the site explained what the product actually was. This creates massive friction—similar to asking someone to buy a car before they’ve seen the engine.
* **Resolution:** Adjusted the user flow. Additionally, the label "AI products" was changed to **"School products"** to instantly capture the target audience's attention and provide immediate clarity.

### 1.3 Missing Footer Structure
* **Issue:** The homepage ended abruptly after the "Latest from Blog" section and a "Start Your Journey!" CTA. It lacked a traditional, structured footer containing company policies, privacy details, or legal links.
* **Resolution:** Established a proper footer hierarchy to ground the page, provide necessary context, and build conventional user trust.

---

## 📏 2. Layout & Width Issues

### 2.1 Sub-menu Containment
* **Issue:** In the "Philosophy" dropdown, sub-menu items like "It's Time to Reset Education" were contained in a white box that didn't fully span the width of the menu container.
* **Resolution:** Expanded the background container to match the full width of the menu for a cleaner, unified layout.

---

## 🎛️ 3. Drop-down & Interaction Issues

### 3.1 "Schedule a Call" Component Overlap
* **Issue:** The timezone selection dropdown was sitting directly top of the calendar grid. Users had to repeatedly back out or move the dropdown to check which date they had selected.
* **Resolution:** Restructured the Z-index and layout flow to ensure the dropdown menu and calendar grid cooperate spatially without obscuring user choices.

---

##  4. Pricing Section

### 4.1 Accessibility & Color Contrast
* **Issue:** The text "Let’s Talk Pricing" was almost entirely unreadable due to a severe Color Contrast Violation.
* **Resolution:** Updated typography and background pairings to meet strict accessibility standards and ensure total readability.

### 4.2 Broken Feedback Loops
* **Issue:** Clicking the pricing CTA button resulted in exactly nothing happening, creating a confusing and broken loop for the user.
* **Resolution:** Restored interaction states (hover/active/focus) so the user receives immediate feedback upon engagement.

---

## 🏠 5. Homepage & Visual Aesthetics

### 5.1 Distracting Background Patterns
* **Issue:** The background wasn't pure white; it had a repeating, light-grey textured pattern (resembling a geometric weave or mesh) that degraded text legibility and felt outdated.
* **Resolution:** Cleaned up the background rendering to allow content and typography to breathe.

### 5.2 Cut-off Graphics & Images
* **Issue:** Several critical graphics (e.g., the robot illustration) and logos were clipped by the edge of their parent containers, making the site feel unfinished or "cheap."
* **Resolution:** Fixed container overflow and alignment issues to ensure all brand graphics render fully and beautifully.

### 5.3 High-Impact Client Section Enhancement
* **Implemented:** Added an **Infinite Marquee** to the client section. This dynamic improvement adds a premium layer of polish and motion to the layout.

---

##  6. Mobile & Responsive Issues

### 6.1 Messy Mobile Menus
* **Issue:** The mobile layout was highly inconsistent—some items were left-aligned, some centered in strange "floating boxes," and others looked like external banner ads rather than internal navigation links.
* **Resolution:** Standardized the mobile menu grid to establish a clear, predictable, and clean hierarchy.

### 6.2 Excessive Scrolling
* **Issue:** The mobile menu was too long, forcing users to scroll way too far just to find essential pages like "Blog" or "Pricing."
* **Resolution:** Condensed the menu structure vertically to prioritize vital navigation links.

### 6.3 Touch Target Sizes (Hard to Tap)
* **Issue:** Links were too small and packed too closely together. Users with larger fingers would easily tap the wrong link.
* **Resolution:** Increased minimal touch targets to iOS/Android design standards and expanded padding for a stress-free mobile experience.

---
I have carefully identified key user pain points and worked systematically to address them. By leveraging AI tools, I gained a deeper understanding of each aspect from the user’s perspective and continuously refined the solution through iterative development.

I would truly appreciate the opportunity to prove myself. Given a chance, I am confident that I can demonstrate consistent growth, adaptability, and a strong commitment to delivering meaningful improvements.
