import { motion } from 'framer-motion';
import type { Theme } from '../../hooks/useTheme';

interface SectionLabelProps {
  children: string;
  className?: string;
  theme?: Theme;
}

export function SectionLabel({ children, className = '', theme }: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] ${theme === 'dark' ? 'text-[#4ade80]' : 'text-[#16a34a]'} ${className}`}
    >
      <span className={`w-8 h-[2px] rounded-full ${theme === 'dark' ? 'bg-gradient-to-r from-[#4ade80] to-transparent' : 'bg-gradient-to-r from-[#16a34a] to-transparent'}`} />
      {children}
    </motion.div>
  );
}
