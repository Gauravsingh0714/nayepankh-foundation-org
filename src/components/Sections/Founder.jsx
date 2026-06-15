import { m } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa6';
import { founderContent } from '../../data/content';
import { fadeUp, staggerContainer } from '../../utils/animations';

export default function Founder() {
  return (
    <section id="founder" className="py-24 bg-surface-container-low dark:bg-background-dark/30 px-margin-mobile md:px-margin-desktop overflow-hidden border-t border-b border-surface-variant/50 dark:border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center gap-8"
        >
          {/* Section Badge */}
          <m.span
            variants={fadeUp}
            className="inline-block px-3 py-1 bg-primary-container/10 text-primary dark:text-primary-container rounded-full font-label-md text-xs border border-primary-container/20 uppercase tracking-wider"
          >
            {founderContent.title}
          </m.span>

          {/* Large Editorial Quote Card */}
          <m.div
            variants={fadeUp}
            className="w-full bg-surface-light dark:bg-surface-dark-elevation rounded-3xl p-8 md:p-12 shadow-sm border border-surface-variant dark:border-white/10 relative text-center flex flex-col items-center gap-6"
          >
            <FaQuoteLeft className="text-primary/15 dark:text-primary-container/15 text-[72px] select-none pointer-events-none leading-none mb-4" />

            {/* Inspiring Message */}
            <blockquote className="font-display font-medium text-2xl md:text-3xl lg:text-4xl text-on-surface dark:text-surface-light italic leading-normal max-w-3xl">
              "{founderContent.message}"
            </blockquote>

            <div className="w-16 h-[1px] bg-primary/30 dark:bg-primary-container/30 my-2" />

            {/* Founder Coordinates */}
            <cite className="not-italic flex flex-col items-center gap-1">
              <span className="font-display font-bold text-lg text-on-surface dark:text-surface-light tracking-wider uppercase">
                {founderContent.name}
              </span>
              <span className="font-label-md text-xs text-primary dark:text-primary-container font-semibold uppercase tracking-wider">
                {founderContent.designation}
              </span>
            </cite>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
