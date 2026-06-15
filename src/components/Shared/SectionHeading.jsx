import { m } from 'framer-motion';
import { fadeUp } from '../../utils/animations';

export default function SectionHeading({ title, subtitle, centered = false }) {
  return (
    <m.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`mb-12 ${centered ? 'text-center mx-auto' : 'text-left'}`}
    >
      <h2 className="font-headline-lg-mobile md:font-headline-lg text-on-surface dark:text-surface-light mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-surface-variant max-w-3xl">
          {subtitle}
        </p>
      )}
    </m.div>
  );
}
