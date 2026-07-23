import React from 'react';
import { motion } from 'framer-motion';
import { Feather } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-between items-center px-6 py-20 relative select-none">
      {/* 模块序号 */}
      <div className="w-full max-w-5xl flex justify-between items-center text-xs tracking-widest text-charcoal-subtle font-mono">
        <span>PHILOSOPHY // 03</span>
        <span>ESSENCE</span>
      </div>

      {/* 核心阐述短句 */}
      <div className="max-w-2xl text-center space-y-8 my-auto py-12">
        <div className="w-10 h-10 rounded-full border border-charcoal-faint flex items-center justify-center mx-auto opacity-70">
          <Feather className="w-4 h-4 text-charcoal stroke-[1.5]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <blockquote className="text-xl sm:text-2xl md:text-3xl text-charcoal font-light leading-relaxed font-sans tracking-wide">
            “在信息碎片化的时代，过滤杂音，归于平静。<br className="hidden sm:inline" />
            这里不接收喧嚣，只承载真实的思考与回响。”
          </blockquote>
          
          <div className="w-12 h-[1px] bg-charcoal-border mx-auto opacity-50"></div>
          
          <p className="text-xs font-mono text-charcoal-subtle tracking-widest uppercase">
            — CURN.ME VESSEL STATEMENT
          </p>
        </motion.div>
      </div>

      {/* 页脚末端 */}
      <footer className="w-full max-w-5xl flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-charcoal-faint text-[11px] font-mono text-charcoal-subtle gap-4">
        <div className="flex items-center space-x-2">
          <span>curn.me</span>
          <span>©</span>
          <span>{new Date().getFullYear()}</span>
        </div>
        <div className="tracking-widest uppercase text-[10px] opacity-70">
          CRAFTED WITH INTENTIONAL RESTRAINT
        </div>
      </footer>
    </section>
  );
};
