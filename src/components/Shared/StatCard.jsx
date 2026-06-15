import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { m } from 'framer-motion';
import { scaleIn } from '../../utils/animations';

export default function StatCard({ value, label, icon: Icon, color }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const colorMap = {
    primary: 'bg-primary-container/20 text-primary dark:text-primary-container',
    secondary: 'bg-secondary-container/20 text-secondary dark:text-secondary-container',
    tertiary: 'bg-tertiary-container/20 text-tertiary dark:text-tertiary-container',
    'success-green': 'bg-success-green/20 text-success-green',
  };

  const CountUpComponent = typeof CountUp === 'function' ? CountUp : (CountUp.default || CountUp);

  return (
    <m.div
      ref={ref}
      variants={scaleIn}
      className="bg-surface-container-lowest dark:bg-surface-dark-elevation rounded-2xl p-8 shadow-sm border border-surface-variant dark:border-white/10 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300"
    >
      <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${colorMap[color] || colorMap.primary}`}>
        {Icon && <Icon className="text-[32px] select-none" />}
      </div>
      <div className="font-display-lg text-4xl md:text-5xl font-bold text-on-surface dark:text-surface-light mb-2 flex items-center justify-center gap-0.5">
        {inView ? (
          <CountUpComponent start={0} end={value} duration={2} />
        ) : (
          <span>0</span>
        )}
        <span>+</span>
      </div>
      <p className="font-title-md text-title-md text-on-surface-variant dark:text-surface-variant">
        {label}
      </p>
    </m.div>
  );
}
