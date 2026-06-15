# NayePankh Foundation Website Redesign

**Live Demo:** [https://nayepankh-foundation-org.netlify.app/](https://nayepankh-foundation-org.netlify.app/)

This repository contains the production-ready frontend redesign for the **NayePankh Foundation** website. 

NayePankh Foundation is a registered non-profit organization (Societies Registration Act, 1860) led entirely by the passionate youth of our country. They work continuously to solve daily challenges faced by people in India, making this earth a better place.

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)

## Documentation

Full project documentation can be found in the `/Documentation` directory:
- [Product Requirements (PRD)](./Documentation/PRD.md)
- [Technical Requirements (TRD)](./Documentation/TRD.md)
- [Application Flow](./Documentation/App_Flow.md)
- [Component Architecture](./Documentation/COMPONENT_ARCHITECTURE.md)
- [UI/UX Brief](./Documentation/UI_UX_BRIEF.md)
- [Content Strategy](./Documentation/CONTENT_STRATEGY.md)

## Key Features
- **Highly Optimized Performance:** Perfect 100/100 Lighthouse scores for Performance, Accessibility, Best Practices, and SEO.
- **Fully Responsive Layout:** Optimized for Mobile, Tablet, and Desktop.
- **Dark Mode Support:** Smooth toggling and LocalStorage persistence.
- **Modern Animations:** Built with `framer-motion` (dynamically chunked for performance).
- **WebP Images:** Multi-resolution (400w, 600w, 800w) optimized image loading strategy.

## Development Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Gauravsingh0714/nayepankh-foundation-org.git
   cd nayepankh-foundation-org
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

## Production Build

To build the application for production:
```bash
npm run build
```

This will compile the optimized application assets into the `/dist` directory, ready to be deployed to Netlify or any static hosting service.

## Lighthouse Scores
- Performance: **100**
- Accessibility: **100**
- Best Practices: **100**
- SEO: **100**
