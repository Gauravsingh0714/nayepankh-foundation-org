import { m } from 'framer-motion';
import { FiHeart, FiUsers } from 'react-icons/fi';
import ProgramCard from '../Shared/ProgramCard';
import { focusAreas, internships } from '../../data/content';
import { staggerContainer } from '../../utils/animations';

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-surface-container-lowest dark:bg-background-dark px-margin-mobile md:px-margin-desktop overflow-hidden border-b border-surface-variant/30 dark:border-white/5">
      <div className="max-w-container-max-width mx-auto flex flex-col gap-16">
        
        {/* NGO Core Programs - Primary Focus */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <span className="inline-block px-3 py-1 bg-primary-container/10 text-primary dark:text-primary-container rounded-full font-label-md text-xs border border-primary-container/20 uppercase tracking-wider mb-3">
                Primary Mission
              </span>
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-on-surface dark:text-surface-light font-bold">
                Our Core Social Initiatives
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-surface-variant max-w-2xl mt-2">
                NayePankh Foundation conducts daily efforts to uplift poor communities, combat hunger, and distribute essential sanitary pads.
              </p>
            </div>
            <a
              href="#donate"
              className="bg-primary text-white font-label-md text-label-md px-6 py-3 rounded-lg hover:opacity-90 transition-opacity shrink-0 shadow-sm flex items-center gap-2"
            >
              Donate Now
              <FiHeart className="text-[18px]" />
            </a>
          </div>

          <m.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {focusAreas.map((area, idx) => (
              <ProgramCard
                key={idx}
                title={area.title}
                description={area.description}
                icon={area.icon}
                image={area.image}
                imagePosition={area.imagePosition}
                benefits={area.benefits}
                impact={area.impact}
                isInternship={false}
              />
            ))}
          </m.div>
        </div>

        {/* Student Internships - Secondary Focus */}
        <div className="pt-12 border-t border-surface-variant/40 dark:border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <span className="inline-block px-3 py-1 bg-secondary-container/10 text-secondary dark:text-secondary-container rounded-full font-label-md text-xs border border-secondary-container/20 uppercase tracking-wider mb-3">
                Youth Empowerment
              </span>
              <h3 className="font-headline-lg-mobile md:font-headline-lg text-on-surface dark:text-surface-light font-bold">
                Remote Volunteer Internship Opportunities
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-surface-variant max-w-2xl mt-2">
                We offer volunteer-based, student-led skill-building opportunities for youth to gain real-world project experience under experienced mentors while supporting our social impact campaigns.
              </p>
            </div>
            <a
              href="#contact"
              className="bg-surface-container dark:bg-surface-dark-elevation text-on-surface dark:text-surface-light font-label-md text-label-md px-6 py-3 rounded-lg hover:bg-surface-dim dark:hover:bg-background-dark transition-colors shrink-0 shadow-sm border border-outline-variant/20 dark:border-white/10 flex items-center gap-2"
            >
              Apply Now
              <FiUsers className="text-[18px]" />
            </a>
          </div>

          <m.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {internships.map((internship, idx) => (
              <ProgramCard
                key={idx}
                title={internship.title}
                description={internship.description}
                icon={internship.icon}
                skills={internship.skills}
                isInternship={true}
              />
            ))}
          </m.div>
        </div>

      </div>
    </section>
  );
}
