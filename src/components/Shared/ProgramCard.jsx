import { m } from 'framer-motion';
import { FiArrowRight, FiHeart } from 'react-icons/fi';
import { scaleIn } from '../../utils/animations';

export default function ProgramCard({ title, description, icon: Icon, image, imagePosition, skills, benefits, impact, isInternship = false }) {
  return (
    <m.div
      variants={scaleIn}
      className="group bg-surface-light dark:bg-surface-dark-elevation rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-surface-variant dark:border-white/10 flex flex-col justify-between"
    >
      <div>
        {/* Card Image Banner (For Core NGO Focus Areas) */}
        {image ? (
          <div className="w-full h-48 rounded-xl overflow-hidden mb-6 border border-surface-variant/40 dark:border-white/5 relative">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              style={{ objectPosition: imagePosition || 'center' }}
              width="384"
              height="192"
              loading="lazy"
            />
            {/* Floating Icon Badge */}
            <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-surface-light/95 dark:bg-surface-dark-elevation/95 backdrop-blur-sm shadow-md border border-surface-variant/40 dark:border-white/10 flex items-center justify-center text-primary dark:text-primary-container">
              {Icon && <Icon className="text-[20px] select-none" />}
            </div>
          </div>
        ) : (
          /* Standalone Icon Container (For Internships) */
          <div className="w-12 h-12 rounded-full bg-primary-container/10 dark:bg-primary-container/20 flex items-center justify-center text-primary dark:text-primary-container mb-6 transition-transform group-hover:scale-110">
            {Icon && <Icon className="text-[26px] select-none" />}
          </div>
        )}

        {/* Title */}
        <h3 className="font-title-md text-lg font-semibold text-on-surface dark:text-surface-light mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant mb-6 leading-relaxed">
          {description}
        </p>

        {/* Dynamic Detail: Benefits (For NGO focus areas) */}
        {benefits && (
          <div className="mb-4 pt-2 border-t border-surface-variant/40 dark:border-white/5">
            <h4 className="font-caption text-caption text-primary dark:text-primary-container uppercase font-bold tracking-wider mb-2">Key Activities</h4>
            <p className="font-caption text-caption text-on-surface-variant dark:text-surface-variant leading-relaxed">
              {benefits}
            </p>
          </div>
        )}

        {/* Dynamic Detail: Impact Stats (For NGO focus areas) */}
        {impact && (
          <div className="mb-6 inline-flex items-center gap-1.5 px-3 py-1 bg-success-green/10 text-success-green rounded-full font-label-md text-xs border border-success-green/20">
            <span className="w-1.5 h-1.5 rounded-full bg-success-green" />
            <span>Impact: {impact}</span>
          </div>
        )}

        {/* Dynamic Detail: Skills Chips (For Internships) */}
        {skills && skills.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-6 pt-2 border-t border-surface-variant/40 dark:border-white/5">
            <h4 className="font-caption text-caption text-secondary dark:text-secondary-container uppercase font-bold tracking-wider mb-2 w-full">Core Skills</h4>
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 bg-surface-container-low dark:bg-background-dark text-on-surface-variant dark:text-surface-variant rounded-md font-label-md text-xs border border-surface-variant/20 dark:border-white/5"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Dynamic CTA */}
      <a
        href={isInternship ? "#contact" : "#donate"}
        className="text-primary dark:text-primary-container font-label-md text-label-md flex items-center gap-1 group-hover:gap-2 transition-all w-fit cursor-pointer border-b border-transparent hover:border-primary dark:hover:border-primary-container pb-0.5 mt-4"
      >
        <span>{isInternship ? "Apply for Internship" : "Support this Program"}</span>
        {isInternship ? (
          <FiArrowRight className="text-[16px] select-none" />
        ) : (
          <FiHeart className="text-[16px] select-none" />
        )}
      </a>
    </m.div>
  );
}
