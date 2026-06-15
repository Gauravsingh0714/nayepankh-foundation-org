import { m } from 'framer-motion';
import { FiCheckCircle, FiUsers } from 'react-icons/fi';
import PrimaryButton from '../Shared/PrimaryButton';
import { volunteerContent } from '../../data/content';
import { fadeRight, fadeLeft, staggerContainer } from '../../utils/animations';

export default function Volunteer() {
  return (
    <section id="volunteer" className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto overflow-hidden">
      <m.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative rounded-3xl overflow-hidden bg-on-surface text-surface-light dark:bg-surface-dark-elevation flex flex-col md:flex-row items-center p-8 md:p-16 gap-12 border border-outline-variant/10 dark:border-white/10"
      >
        {/* Left Content Column */}
        <m.div
          variants={fadeRight}
          className="relative z-10 md:w-1/2 flex flex-col items-start text-left"
        >
          <span className="inline-block px-3 py-1 bg-surface-light/10 text-surface-light rounded-full font-label-md text-label-md mb-6 border border-surface-light/20">
            {volunteerContent.badge}
          </span>
          <h2 className="font-headline-lg-mobile md:font-headline-lg mb-6 leading-tight">
            "{volunteerContent.quote}"
          </h2>
          <p className="font-body-md text-body-md text-surface-variant mb-6 opacity-90">
            {volunteerContent.description}
          </p>

          {/* Benefits Bullet List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
            {volunteerContent.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-2 font-label-md text-label-md text-surface-light">
                <FiCheckCircle className="text-success-green text-[20px]" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <PrimaryButton href="#contact" className="w-full sm:w-auto">
            {volunteerContent.ctaText}
            <FiUsers className="text-[20px]" />
          </PrimaryButton>
        </m.div>

        {/* Right Photo Column */}
        <m.div
          variants={fadeLeft}
          className="w-full md:w-1/2 h-64 sm:h-80 md:h-96 opacity-100 rounded-2xl overflow-hidden relative mt-8 md:mt-0"
        >
          <img
            loading="lazy"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            alt="Young diverse volunteers organizing supplies"
            src={volunteerContent.volunteerImage}
            width="600"
            height="450"
          />
        </m.div>
      </m.div>
    </section>
  );
}
