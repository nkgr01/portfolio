import { motion } from 'framer-motion';

interface SectionLabelProps {
  children: string;
  className?: string;
}

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#4ade80] ${className}`}
    >
      <span className="w-8 h-[2px] bg-gradient-to-r from-[#4ade80] to-transparent rounded-full" />
      {children}
    </motion.div>
  );
}
