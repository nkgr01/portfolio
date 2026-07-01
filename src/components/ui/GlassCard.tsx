import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glowColor?: string;
  theme?: 'light' | 'dark';
}

export function GlassCard({ children, className = '', hover = true, glowColor = 'rgba(74, 222, 128, 0.1)', theme }: GlassCardProps) {
  const isDark = theme === 'dark';
  const base = isDark
    ? 'backdrop-blur-xl bg-white/[0.03] border border-white/[0.07]'
    : 'backdrop-blur-xl bg-white/80 border border-slate-200/80 shadow-sm';

  return (
    <motion.div
      whileHover={hover ? { y: -4, boxShadow: `0 20px 40px ${glowColor}` } : undefined}
      transition={{ duration: 0.3 }}
      className={`${base} rounded-2xl overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}
