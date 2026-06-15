import { m } from 'framer-motion';
import { FiCompass, FiClock } from 'react-icons/fi';
import SectionHeading from '../Shared/SectionHeading';
import { aboutContent } from '../../data/content';
import { fadeRight, fadeLeft, staggerContainer, scaleIn } from '../../utils/animations';

export default function About() {
  return (
    <section id="about" className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-light dark:bg-background-dark overflow-hidden border-b border-surface-variant/30 dark:border-white/5">
      <div className="max-w-container-max-width mx-auto flex flex-col gap-16">
        
        {/* Section Heading */}
        <SectionHeading
          title={aboutContent.title}
          subtitle={aboutContent.subtitle}
        />

        {/* Bento Grid Panel */}
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Who We Are Box */}
          <m.div
            variants={fadeRight}
            className="lg:col-span-7 bg-surface-container-lowest dark:bg-surface-dark-elevation rounded-3xl p-8 md:p-10 shadow-sm border border-surface-variant dark:border-white/10 flex flex-col justify-center transition-transform hover:-translate-y-0.5 duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <FiCompass className="text-primary dark:text-primary-container text-2xl" />
              <h3 className="font-headline-sm md:font-headline-md font-bold text-primary dark:text-primary-container leading-tight">Who We Are</h3>
            </div>
            <p className="font-body-md text-body-md text-on-surface dark:text-surface-light leading-relaxed mb-6">
              {aboutContent.introText}
            </p>

            <div className="flex items-center gap-3 mb-6 border-t border-surface-variant/40 dark:border-white/5 pt-6">
              <FiClock className="text-primary dark:text-primary-container text-2xl" />
              <h3 className="font-headline-sm md:font-headline-md font-bold text-primary dark:text-primary-container leading-tight">{aboutContent.historyTitle}</h3>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant leading-relaxed">
              {aboutContent.historyText}
            </p>
          </m.div>

          {/* Group/Team Work Image Box */}
          <m.div
            variants={fadeLeft}
            className="lg:col-span-5 rounded-3xl overflow-hidden shadow-md h-72 lg:h-auto relative group border border-surface-variant dark:border-white/10 p-3 bg-surface-container"
          >
            <img
              loading="lazy"
              className="w-full h-full object-cover rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
              alt="NayePankh Foundation youth team working together"
              src={aboutContent.communityImage}
              width="640"
              height="480"
            />
          </m.div>
        </m.div>

        {/* Core Values Section */}
        <div className="mt-8">
          <h4 className="font-title-md text-xl font-bold text-center text-on-surface dark:text-surface-light mb-8 uppercase tracking-wider">
            Our Foundation Pillars
          </h4>
          <m.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {aboutContent.values.map((value, idx) => (
              <m.div
                key={idx}
                variants={scaleIn}
                className="bg-surface-container-lowest dark:bg-surface-dark-elevation rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow border border-surface-variant dark:border-white/10"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-container/20 text-primary dark:text-primary-container flex items-center justify-center mb-6 border border-primary/10">
                  <value.icon className="text-[28px] select-none" />
                </div>
                <h5 className="font-title-md text-lg font-semibold text-on-surface dark:text-surface-light mb-3">
                  {value.title}
                </h5>
                <p className="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant leading-relaxed">
                  {value.description}
                </p>
              </m.div>
            ))}
          </m.div>
        </div>

      </div>
    </section>
  );
}
