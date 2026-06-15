# **Component Architecture**

## **Application Hierarchy**

App  
│  
├── Layout  
│   ├── Navbar  
│   └── Footer  
│  
├── Sections  
│   ├── Hero  
│   ├── About  
│   ├── Founder
│   ├── ImpactStats  
│   ├── Certificates
│   ├── Programs  
│   ├── Volunteer  
│   ├── Gallery
│   ├── News
│   └── Contact  
│  
├── Shared Components  
│   ├── SectionHeading  
│   ├── PrimaryButton  
│   ├── SecondaryButton  
│   ├── StatCard  
│   ├── ProgramCard  
│   ├── ThemeToggle  
│   ├── MobileMenu
│   ├── DonateModal
│   └── PolicyModal
│
├── Hooks
│   └── useTheme.js
│  
└── Utilities  
   ├── animations.js  
   ├── constants.js  
   └── content.js  
---

# **Shared Component Design**

## **SectionHeading**

Used by:

* About  
* Programs  
* Testimonials  
* Contact  
* Volunteer

Props:

title  
subtitle  
centered

Example:

\<SectionHeading  
title="Our Programs"  
subtitle="Opportunities that help students grow"  
/\>  
---

## **PrimaryButton**

Purpose:

Main CTA buttons

Variants:

default  
large

Examples:

Explore Programs  
Join Now  
Send Message  
---

## **SecondaryButton**

Purpose:

Alternative CTA

Examples:

Become Volunteer  
Learn More  
---

## **StatCard**

Props:

number  
label  
icon

Example:

5000+  
Students Reached  
---

## **ProgramCard**

Props:

title  
description  
icon  
skills

Example:

Frontend Development  
---

## **DonateModal**

Props:

isOpen
onClose

## **PolicyModal**

Props:

isOpen
onClose
title
content
---

# **Data Architecture**

Create a single source of content.

## **content.js**

export const heroContent = {}
export const stats = []  
export const programs = []  
export const galleryImages = []
export const newsArticles = []
export const navLinks = []

## **privacy.js / terms.js / refund.js**
Contains text content for legal policies.

Benefits:

* Easy maintenance  
* Cleaner components  
* Less repeated code

---

# **State Architecture**

## **Navbar State**

const \[isMenuOpen, setIsMenuOpen\]

Purpose:

Mobile menu control

---

## **Theme State**

const \[theme, setTheme\]

Purpose:

Dark mode

Storage:

localStorage  
---

## **Contact Form State**

const \[formData, setFormData\]

Fields:

name  
email  
message  
subject

---

## **Modal State**

const \[isModalOpen, setIsModalOpen\]

Purpose:

Manage dialog visibility (Donate, Policy)
---

# **Animation Architecture**

## **animations.js**

Create reusable variants.

Example:

fadeUp  
fadeLeft  
fadeRight  
staggerContainer  
scaleIn

Used throughout application.

Benefits:

* Consistency  
* Cleaner code  
* Easier maintenance

---

# **Implementation Plan**

## **Phase 1: Project Setup**

### **Tasks**

npm create vite@latest  
npm install

Install:

tailwindcss  
framer-motion  
react-icons  
react-countup  
react-hot-toast

Configure:

Tailwind  
Dark Mode  
Folder Structure

### **Deliverable**

Clean project setup.

Estimated Time:

30 minutes  
---

## **Phase 2: Design System**

### **Build**

Colors  
Typography  
Buttons  
Container  
Spacing Utilities

### **Deliverable**

Reusable design foundation.

Estimated Time:

1 hour  
---

## **Phase 3: Navigation**

### **Build**

Navbar  
Theme Toggle  
Mobile Menu  
Smooth Scrolling

### **Deliverable**

Fully responsive navigation.

Estimated Time:

1-2 hours  
---

## **Phase 4: Hero Section**

### **Build**

Headline  
Description  
CTA Buttons  
Hero Illustration  
Background Gradient

### **Add**

Framer Motion Animations

### **Deliverable**

High-impact landing section.

Estimated Time:

2 hours  
---

## **Phase 5: About Section**

### **Build**

Organization Overview  
Mission  
Vision  
Value Cards

### **Deliverable**

Trust-building section.

Estimated Time:

1 hour  
---

## **Phase 6: Impact Statistics**

### **Build**

Stat Cards  
CountUp Animation

### **Deliverable**

Impact showcase.

Estimated Time:

1 hour  
---

## **Phase 7: Programs Section**

### **Build**

Responsive Card Grid  
Hover Effects  
Icons

### **Deliverable**

Internship showcase.

Estimated Time:

2 hours  
---

## **Phase 8: Volunteer Section**

### **Build**

Benefits  
Image  
CTA

### **Deliverable**

Volunteer conversion section.

Estimated Time:

1 hour  
---

## **Phase 9: Gallery & News**

### **Build**

Image Lightbox
Responsive Grids
News Modals

### **Deliverable**

Visual proof and recent updates.

Estimated Time:

2 hours  
---

## **Phase 10: Contact Section**

### **Build**

Contact Details  
Form  
Validation  
Toast Notifications

### **Deliverable**

Working contact form.

Estimated Time:

1-2 hours  
---

## **Phase 11: Footer**

### **Build**

Quick Links  
Social Links  
Copyright

### **Deliverable**

Complete footer.

Estimated Time:

30 minutes  
---

## **Phase 12: Polish & Optimization**

### **Tasks**

Responsive Testing  
Animation Refinement  
Accessibility Checks  
Performance Optimization

### **Target**

Lighthouse Score 90+

Estimated Time:

2-3 hours  
---

# **Final Deliverables**

## **GitHub Repository**

Contains:

Source Code  
README  
Documentation  
---

## **Documentation Folder**

docs/  
├── PRD.md  
├── TRD.md  
├── APP\_FLOW.md  
├── UI\_UX\_BRIEF.md  
---

## **Deployment**

* GitHub Repository  
* Vercel Live URL

