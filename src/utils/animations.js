const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

export const fadeUp = {
  hidden: { opacity: 0, y: isMobile ? 0 : 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeLeft = {
  hidden: { opacity: 0, x: isMobile ? 0 : 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeRight = {
  hidden: { opacity: 0, x: isMobile ? 0 : -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: isMobile ? 0 : 0.1,
      delayChildren: isMobile ? 0 : 0.05
    }
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: isMobile ? 1 : 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};
