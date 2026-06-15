import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS } from '../utils/constants';
import {
  FiUsers,
  FiHeart,
  FiCheckCircle,
  FiCalendar,
  FiGlobe,
  FiCoffee,
  FiShield,
  FiBook,
  FiCode,
  FiActivity,
  FiMail,
  FiPhone,
  FiMapPin
} from 'react-icons/fi';

// Local Asset Static Imports
import logoIcon from '../assets/logos/logo-icon.webp';
import logoFull from '../assets/logos/logo-full.webp';
import team1 from '../assets/images/team/Team Image 1.webp';
import team3 from '../assets/images/team/Team Image 3.webp';

import certificate12A from '../assets/images/certificates/12A certificate.webp';
import certificate80G from '../assets/images/certificates/80G certificate.webp';
import certificateSociety from '../assets/images/certificates/Society Registration Certificate.webp';

import news1 from '../assets/images/media/news article1.webp';
import news2 from '../assets/images/media/news article2.webp';
import news3 from '../assets/images/media/news article3.webp';
import news4 from '../assets/images/media/news article4.webp';
import news5 from '../assets/images/media/news article5.webp';

import donate1 from '../assets/images/programs/Donate Image (1).webp';
import donate1_400 from '../assets/images/programs/Donate Image (1)-400w.webp';
import donate1_600 from '../assets/images/programs/Donate Image (1)-600w.webp';
import donate1_800 from '../assets/images/programs/Donate Image (1)-800w.webp';
import donate2 from '../assets/images/programs/Donate Image (2).webp';
import donate3 from '../assets/images/programs/Donate Image (3).webp';
import donate4 from '../assets/images/programs/Donate Image (4).jpg';
import donate5 from '../assets/images/programs/Donate Image (5).jpg';

export const logoAsset = logoIcon;
export const logoAssetFull = logoFull;

export const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Impact", href: "#impact" },
  { label: "Programs", href: "#programs" },
  { label: "Volunteer", href: "#volunteer" },
  { label: "Contact", href: "#contact" }
];

export const heroContent = {
  badge: "UP GOVT. | 80G & 12A Registered",
  title: "Badalte Bharat Ki Nayi Tasveer",
  subtitle: "We are one of the biggest youth-led non-governmental organizations in India. Driven by the passion of our youth, we strive to build a better future for underprivileged sectors through continuous efforts in education, food distribution, and community empowerment.",
  primaryCta: "Support Our Mission",
  secondaryCta: "Learn More",
  heroImage: donate1,
  heroImage400: donate1_400,
  heroImage600: donate1_600,
  heroImage800: donate1_800,
  highlightStats: [
    { value: 200000, label: "Lives Impacted", suffix: "+" },
    { value: 500, label: "Youth Volunteers", suffix: "+" },
    { value: 100, label: "Events Conducted", suffix: "+" }
  ]
};

export const aboutContent = {
  title: "About NayePankh Foundation",
  subtitle: "Giving wings to uplift the underprivileged sections of our society.",
  introText: "Service to mankind is service to God. NayePankh Foundation is a registered non-profit organization (Societies Registration Act, 1860) led entirely by the passionate youth of our country, many of whom are still in schools and colleges. We work continuously to solve daily challenges faced by people in India, making this earth a better place for all creatures.",
  historyTitle: "How It Started",
  historyText: "In the challenging Covid-era of 2020, as the world strove to survive, a group of high schoolers felt a strong urge to make a difference. Armed only with hope and their limited personal resources, they set out to support families and stray animals in need. That small circle grew into a network of dedicated changemakers across the state. On March 28, 2021, NayePankh officially landed on the ground to serve. Today, we are proud to be a 12A and 80G certified NGO.",
  communityImage: team1,
  values: [
    {
      title: "Youth-Led Action",
      description: "Empowering school and college students to take charge and lead grass-root level social changes.",
      icon: FiUsers
    },
    {
      title: "Immediate Impact",
      description: "Distributing food, sanitary napkins, and clothes directly to communities and stray animals in need.",
      icon: FiHeart
    },
    {
      title: "Transparency",
      description: "Operating with valid 12A and 80G tax certifications, ensuring donor contributions are fully accounted for.",
      icon: FiCheckCircle
    }
  ]
};

export const founderContent = {
  title: "From the Founder's Desk",
  name: "PRASHANT SHUKLA",
  designation: "Founder & President, NayePankh Foundation",
  message: "If we all do something, then together there is no problem that we cannot solve!"
};

export const impactStats = [
  {
    value: 200000,
    label: "Lives Impacted",
    icon: FiUsers,
    color: "primary"
  },
  {
    value: 500,
    label: "Youth Volunteers",
    icon: FiHeart,
    color: "secondary"
  },
  {
    value: 100,
    label: "Events Conducted",
    icon: FiCalendar,
    color: "tertiary"
  },
  {
    value: 50, // Review placeholder value to match original site configuration
    label: "Partner Institutions",
    icon: FiGlobe,
    color: "success-green"
  }
];

export const focusAreas = [
  {
    title: "Food Distribution",
    description: "Fighting hunger by distributing fresh meals to underprivileged families and supporting stray animal welfare across communities.",
    icon: FiCoffee,
    image: donate2,
    benefits: "Nutritional relief, daily distribution drives, stray animal feeding",
    impact: "Over 200,000+ meals served"
  },
  {
    title: "Women Hygiene Awareness",
    description: "Breaking the stigma around menstruation by organizing workshops, spreading personal hygiene awareness, and providing sanitary pads.",
    icon: FiShield,
    image: donate3,
    imagePosition: "top",
    benefits: "Free sanitary napkin distribution, health education, reducing drop-out rates",
    impact: "Thousands of women reached"
  },
  {
    title: "Education Support",
    description: "Providing learning resources, basic school supplies, and digital literacy mentorship to youth and children in underprivileged sectors.",
    icon: FiBook,
    image: donate4,
    benefits: "Basic tutoring, distribution of school supplies, digital skills guidance",
    impact: "Empowering children for the future"
  },
  {
    title: "Clothing Drives",
    description: "Collecting and distributing clean, warm clothing to poor families and individuals living in shelter homes and streets.",
    icon: FiHeart,
    image: donate5,
    imagePosition: "top",
    benefits: "Seasonal warm clothing, dignity in wear, clean cloth sorting",
    impact: "Warmth provided to families in winter"
  }
];

export const internships = [
  {
    title: "Frontend Development Internship",
    description: "Build clean layouts, optimize responsive user interfaces in React, work with Framer Motion, and learn state synchronization under experienced student mentors.",
    icon: FiCode,
    skills: ["React & Vite", "Tailwind CSS", "Git & GitHub", "Accessibility (WCAG)"]
  },
  {
    title: "Web Development Program",
    description: "Master baseline web technologies (HTML, CSS, JavaScript) and build solid projects from scratch to build an impressive portfolio.",
    icon: FiGlobe,
    skills: ["HTML5 & CSS3", "Modern JavaScript", "Responsive Grid Layouts", "Vite Bundler"]
  },
  {
    title: "AI & Machine Learning Internship",
    description: "Gain hands-on exposure to data analysis, core machine learning models, and integrations using Python and modern AI tools.",
    icon: FiActivity,
    skills: ["Python Data Science", "Scikit-Learn", "Data Visualizations", "AI API Integrations"]
  },
  {
    title: "Social Impact & Outreach",
    description: "Coordinate grass-roots community outreach campaigns, manage ground logistics, and build leadership and communication skills.",
    icon: FiUsers,
    skills: ["Outreach Strategy", "Event Management", "Volunteer Team Leadership", "Communication"]
  }
];

export const volunteerContent = {
  badge: "Join Our Team",
  quote: "Be the change you wish to see. Empower your peers and lift your community.",
  description: "By joining NayePankh Foundation, you become part of a statewide family of young leaders. Volunteers gain practical experience, develop team leadership skills, and earn certified recognition while making a concrete difference.",
  benefits: [
    "Youth Leadership Roles",
    "Statewide Networking",
    "Hands-on Field Outreach",
    "Certified Recommendation letters"
  ],
  ctaText: "Become a Volunteer",
  volunteerImage: team3
};

export const certificates = [
  {
    title: "80G Certificate",
    description: "Income Tax exemption registration certificate under section 80G, allowing 50% tax deductions on contributions.",
    image: certificate80G
  },
  {
    title: "12A Certificate",
    description: "Tax exemption registration certificate under section 12A of the Income Tax Act, 1961.",
    image: certificate12A
  },
  {
    title: "Society Registration",
    description: "Official registration certificate of NayePankh Foundation under the Societies Registration Act, 1860.",
    image: certificateSociety
  }
];

export const newsArticles = [
  { image: news1, title: "NayePankh distribution drive coverage 1" },
  { image: news2, title: "NayePankh community initiative coverage 2" },
  { image: news3, title: "NayePankh Covid relief news report 3" },
  { image: news4, title: "NayePankh awareness campaigns news article 4" },
  { image: news5, title: "NayePankh stray animal feeding drive article 5" }
];

export const contactContent = {
  title: "Get in Touch",
  subtitle: "Have questions, suggestions, or want to collaborate? Connect with NayePankh Foundation and we'll reply shortly.",
  info: [
    {
      title: "Email Us",
      value: CONTACT_EMAIL,
      icon: FiMail,
      href: `mailto:${CONTACT_EMAIL}`
    },
    {
      title: "Call Us",
      value: CONTACT_PHONE,
      icon: FiPhone,
      href: `tel:${CONTACT_PHONE.replace(/-/g, '')}`
    },
    {
      title: "Visit Us",
      value: CONTACT_ADDRESS,
      icon: FiMapPin,
      href: "https://maps.google.com/?q=Kanpur,UttarPradesh,India"
    }
  ]
};

export const footerContent = {
  description: "Badalte Bharat Ki Nayi Tasveer. Giving wings to uplift the underprivileged section of our society. A youth-led organization making a visible difference.",
  quickLinks: [
    { label: "About Us", href: "#about" },
    { label: "Our Impact", href: "#impact" },
    { label: "Focus Programs", href: "#programs" },
    { label: "Volunteer", href: "#volunteer" },
    { label: "Contact Us", href: "#contact" }
  ],
  legalLinks: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms & Conditions", href: "#terms" },
    { label: "Cancellation & Refund", href: "#refund" }
  ]
};
