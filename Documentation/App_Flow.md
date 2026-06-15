# **App Flow Document**

## **Project**

**NayePankh Foundation Website Redesign**

---

# **1\. Application Flow Overview**

The website follows a **single-page landing experience** where users navigate through sections using smooth scrolling.

### **Primary Flow**

Landing Page

    ↓

Hero Section

    ↓

About Section

    ↓

Founder Section

    ↓

Impact Statistics

    ↓

Certificates

    ↓

Programs & Internships

    ↓

Volunteer Section

    ↓

Gallery

    ↓

News

    ↓

Contact Section

    ↓

Footer

Goal:

* Educate visitors  
* Build trust  
* Showcase impact  
* Encourage participation  
* Drive volunteer engagement  
  ---

  # **2\. User Types**

  ### **Visitor**

Primary website visitor.

Objectives:

* Learn about NayePankh Foundation  
* Explore programs  
* Understand impact  
* Become volunteer  
* Contact organization  
  ---

  # **3\. Landing Page Flow**

  ## **Entry Point**

  User Opens Website  
           ↓  
  Navbar Loads  
  Hero Section Visible

User immediately sees:

* Organization mission  
* Call-to-action buttons  
* Hero visual  
  ---

  ## **Hero Interaction Flow**

  User Arrives  
       ↓  
  Reads Mission Statement  
       ↓  
  Clicks CTA  
       ↓  
  Scroll To Target Section

  ### **CTA 1**

  Explore Programs  
       ↓  
  Programs Section

  ### **CTA 2**

  Become Volunteer  
       ↓  
  Volunteer Section  
  ---

  # **4\. Navigation Flow**

  ## **Desktop Navigation**

  Navbar  
  │  
  ├── Home  
  ├── About  
  ├── Programs  
  ├── Volunteer  
  └── Contact

  ### **Interaction**

  Click Nav Link  
        ↓  
  Smooth Scroll  
        ↓  
  Target Section  
  ---

  ## **Mobile Navigation Flow**

  ### **Closed State**

  Logo            ☰

  ### **Open State**

  Logo             ✕  
    
  Home  
  About  
  Programs  
  Volunteer  
  Contact

  ### **User Flow**

  Tap Hamburger  
         ↓  
  Open Mobile Menu  
         ↓  
  Select Section  
         ↓  
  Smooth Scroll  
         ↓  
  Menu Closes  
  ---

  # **5\. Dark Mode Flow**

  ## **Initial Load**

  Website Loads  
        ↓  
  Check LocalStorage  
        ↓  
  Theme Found?

  ### **Yes**

  Apply Saved Theme

  ### **No**

  Apply Default Theme  
  ---

  ## **Theme Toggle Flow**

  User Clicks Toggle  
          ↓  
  Switch Theme  
          ↓  
  Update UI  
          ↓  
  Save To LocalStorage  
  ---

  # **6\. About Section Flow**

Purpose:

Build trust and credibility.

### **User Flow**

User Scrolls

      ↓

About Section Appears

      ↓

Animation Triggered

      ↓

User Reads Mission

      ↓

User Continues Scrolling

---

# **7\. Impact Statistics Flow**

Purpose:

Demonstrate measurable impact.

### **User Flow**

Statistics Enter Viewport

         ↓

Counter Animation Starts

         ↓

Numbers Increase

         ↓

User Sees Achievements

Example:

5000+ Students

100+ Programs

200+ Volunteers

50+ Institutions

---

# **8\. Programs Section Flow**

Purpose:

Show opportunities available.

### **User Flow**

User Reaches Programs

         ↓

Program Cards Animate

         ↓

User Reads Programs

         ↓

User Explores Opportunities

### **Program Card Structure**

Program Icon

    ↓

Program Title

    ↓

Description

    ↓

Key Skills

---

# **9\. Volunteer Section Flow**

Purpose:

Increase volunteer participation.

### **User Flow**

User Reads Benefits

         ↓

Understands Opportunities

         ↓

Clicks CTA

         ↓

Scroll To Contact Section

---

# **10\. Gallery & News Flow**

Purpose:

Showcase visual proof and recent events.

### **User Flow**

User Views Gallery

         ↓

Opens Lightbox

         ↓

Reads News Updates

         ↓

Trust Increases

         ↓

Continues To Contact

---

# **11\. Contact Section Flow**

Purpose:

Allow visitors to reach the organization.

---

## **Contact Information Flow**

User Opens Contact Section

         ↓

Views Email

Views Phone

Views Address

---

## **Contact Form Flow**

### **Initial State**

Name

Email

Message

Submit

---

### **Submission Flow**

User Fills Form

        ↓

Clicks Submit

        ↓

Validation

---

### **Validation Success**

Show Success Toast

       ↓

Clear Form

---

### **Validation Failure**

Show Error Message

        ↓

User Corrects Input

---

# **12\. Footer Flow**

Purpose:

Provide quick navigation.

### **Footer Links**

Quick Links

Programs

Contact

Social Media

### **User Flow**

User Reaches Footer

        ↓

Chooses Link

        ↓

Navigate To Section

---

# **13\. Scroll Animation Flow**

### **Trigger System**

Component Enters Viewport

         ↓

Framer Motion Triggered

         ↓

Animation Plays Once

---

### **Animation Usage**

| Section | Animation |
| ----- | ----- |
| Hero | Fade Up / Stagger |
| About | Fade Left / Right |
| Founder | Fade Up |
| Stats | Count Up |
| Certificates| Fade Up |
| Programs | Stagger Cards |
| Volunteer | Fade Up |
| Gallery | Fade Up |
| News | Fade Up |
| Contact | Fade Up |

---

# **14\. Component Interaction Flow**

App

│

├── Navbar

│      │

│      ├── Theme Toggle

│      └── Mobile Menu

│

├── Hero

│      │

│      ├── Explore Programs CTA

│      └── Volunteer CTA

│

├── About

│

├── Founder

│

├── ImpactStats

│

├── Certificates

│

├── Programs

│

├── Volunteer

│

├── Gallery

│

├── News

│

├── Contact

│

└── Footer

---

# **15\. Complete User Journey**

User Visits Website

        ↓

Reads Hero Message

        ↓

Learns About Foundation & Founder

        ↓

Views Impact Statistics & Certificates

        ↓

Explores Programs

        ↓

Reads Volunteer Benefits

        ↓

Views Gallery & News

        ↓

Contacts Foundation

        ↓

Leaves Website With Positive Impression

---

# **16\. Conversion Journey**

### **Internship-Oriented Visitor**

Hero

 ↓

Programs

 ↓

Gallery & News

 ↓

Contact

### **Volunteer-Oriented Visitor**

Hero

 ↓

Volunteer

 ↓

Gallery & News

 ↓

Contact

### **General Visitor**

Hero

 ↓

About

 ↓

Impact

 ↓

Programs

 ↓

Contact

