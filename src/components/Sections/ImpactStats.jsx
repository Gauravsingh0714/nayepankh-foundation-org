import { m } from 'framer-motion';
import SectionHeading from '../Shared/SectionHeading';
import StatCard from '../Shared/StatCard';
import { impactStats } from '../../data/content';
import { staggerContainer } from '../../utils/animations';

export default function ImpactStats() {
  return (
    <section id="impact" className="py-24 bg-surface dark:bg-background-dark px-margin-mobile md:px-margin-desktop overflow-hidden">
      <div className="max-w-container-max-width mx-auto">
        {/* Section Heading */}
        <SectionHeading
          title="Our Impact in Numbers"
          subtitle="Measurable change we've brought to communities across the nation."
          centered={true}
        />

        {/* Dynamic Cards Grid */}
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {impactStats.map((stat, idx) => (
            <StatCard
              key={idx}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
              color={stat.color}
            />
          ))}
        </m.div>
      </div>
    </section>
  );
}
