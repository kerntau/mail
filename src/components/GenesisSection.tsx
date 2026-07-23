import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RotateCw, ArrowDown } from 'lucide-react';

interface GenesisSectionProps {
  onScrollNext: () => void;
}

export const GenesisSection: React.FC<GenesisSectionProps> = ({ onScrollNext }) => {
  const [animationKey, setAnimationKey] = useState(0);

  const handleReplay = () => {
    setAnimationKey((prev) => prev + 1);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between items-center px-6 py-12 select-none overflow-hidden">
      {/* 顶部克制标示与重播动效触发点 */}
      <div className="w-full max-w-5xl flex justify-between items-center text-xs tracking-widest text-charcoal-subtle font-mono">
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-charcoal animate-pulse"></span>
          <span className="uppercase">CURN // 01</span>
        </div>
        <button
          onClick={handleReplay}
          className="flex items-center space-x-1.5 hover:text-charcoal transition-colors duration-300 group cursor-pointer px-3 py-1.5 rounded-full border border-charcoal-faint hover:border-charcoal-border"
          title="重新体验笔画生长"
        >
          <RotateCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-700 ease-out" />
          <span>REPLAY</span>
        </button>
      </div>

      {/* 视觉中心：curn.me 动态矢量签名 */}
      <div className="flex-1 flex flex-col items-center justify-center relative my-auto">
        <div className="relative w-[340px] sm:w-[540px] md:w-[720px] h-[160px] sm:h-[220px] md:h-[260px] flex items-center justify-center">
          {/* 背景微柔辅助光斑与精准坐标格网 */}
          <div className="absolute inset-0 border border-charcoal-faint rounded-2xl pointer-events-none opacity-30 flex items-center justify-between p-4">
            <span className="text-[10px] font-mono text-charcoal-subtle">LAT: 01.CURN</span>
            <span className="text-[10px] font-mono text-charcoal-subtle">FORMAT: VESSEL</span>
          </div>

          <svg
            key={animationKey}
            viewBox="0 0 760 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-md"
          >
            {/* 底纹透视网格与极细基准线条 */}
            <line x1="40" y1="140" x2="720" y2="140" stroke="#2C3E50" strokeWidth="1" strokeOpacity="0.08" strokeDasharray="3 3" />
            <line x1="40" y1="80" x2="720" y2="80" stroke="#2C3E50" strokeWidth="1" strokeOpacity="0.05" strokeDasharray="2 4" />

            {/* 连笔优雅手写字形 (c - u - r - n - . - m - e) 精确三阶贝塞尔曲线 */}
            {/* 
              Letter 'c': (40,95) -> (90,65) -> (50,135) -> (105,140)
              Letter 'u': -> (125,90) -> (125,128) -> (155,138) -> (165,90) -> (165,138)
              Letter 'r': -> (185,92) -> (195,85) -> (200,98) -> (225,138)
              Letter 'n': -> (240,90) -> (240,138) -> (255,90) -> (280,90) -> (290,138)
              Dot '.':    -> (315,138)
              Letter 'm': -> (345,90) -> (345,138) -> (360,90) -> (385,90) -> (395,138) -> (410,90) -> (435,90) -> (445,138)
              Letter 'e': -> (465,115) -> (490,80) -> (460,85) -> (470,135) -> (515,130)
            */}
            
            {/* 静止透写虚线路径（底稿感） */}
            <path
              d="M 95 82 C 60 70 50 112 70 132 C 90 144 112 135 125 110 C 130 90 135 125 145 136 C 160 144 172 130 174 96 C 174 122 178 138 190 136 C 196 110 205 84 212 90 C 220 96 215 120 228 138 C 235 115 242 90 245 92 C 248 138 250 138 260 110 C 270 90 292 90 295 138 C 300 140 310 138 318 138 M 326 137 A 3 3 0 1 1 326 136.9 M 338 138 C 344 110 350 90 355 92 C 358 138 360 138 370 110 C 380 90 400 90 405 138 C 412 110 422 90 432 90 C 445 90 448 128 458 138 C 472 138 480 115 480 102 C 480 84 455 86 455 112 C 455 138 490 142 520 130"
              stroke="#2C3E50"
              strokeWidth="2"
              strokeOpacity="0.08"
              strokeDasharray="4 4"
            />

            {/* 动态优雅生长的主笔画 */}
            <motion.path
              d="M 95 82 C 60 70 50 112 70 132 C 90 144 112 135 125 110 C 130 90 135 125 145 136 C 160 144 172 130 174 96 C 174 122 178 138 190 136 C 196 110 205 84 212 90 C 220 96 215 120 228 138 C 235 115 242 90 245 92 C 248 138 250 138 260 110 C 270 90 292 90 295 138 C 300 140 310 138 318 138 M 326 137 A 3 3 0 1 1 326 136.9 M 338 138 C 344 110 350 90 355 92 C 358 138 360 138 370 110 C 380 90 400 90 405 138 C 412 110 422 90 432 90 C 445 90 448 128 458 138 C 472 138 480 115 480 102 C 480 84 455 86 455 112 C 455 138 490 142 520 130"
              stroke="#2C3E50"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: { duration: 2.5, ease: 'easeInOut' },
                opacity: { duration: 0.2, ease: 'easeIn' },
              }}
            />

            {/* 精致纯正衬线手写字体对照渲染（极其优雅淡雅的极简微读文本，确保极高辨识度与极客审美叠加） */}
            <text
              x="380"
              y="180"
              textAnchor="middle"
              fill="#2C3E50"
              fillOpacity="0.2"
              fontSize="12"
              fontFamily="JetBrains Mono, monospace"
              letterSpacing="0.4em"
            >
              C U R N . M E
            </text>
          </svg>
        </div>

        {/* 签名下方 100px 处，以极低透明度静静浮现小字: A vessel for thought. */}
        <motion.div
          key={`subtitle-${animationKey}`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 0.55, y: 0 }}
          transition={{ delay: 2.2, duration: 1.2, ease: 'easeOut' }}
          className="mt-[60px] sm:mt-[80px] text-center"
        >
          <p className="text-sm sm:text-base tracking-[0.2em] font-light text-charcoal font-sans uppercase">
            A vessel for thought.
          </p>
          <div className="w-8 h-[1px] bg-charcoal-subtle mx-auto mt-4 opacity-40"></div>
        </motion.div>
      </div>

      {/* 底部引导下翻触控点 */}
      <motion.button
        onClick={onScrollNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 3.0, duration: 0.8 }}
        className="group flex flex-col items-center space-y-2 text-charcoal-subtle hover:text-charcoal transition-colors cursor-pointer"
      >
        <span className="text-[11px] font-mono tracking-widest uppercase opacity-70 group-hover:opacity-100">
          EXPLORE
        </span>
        <ArrowDown className="w-4 h-4 animate-bounce opacity-70 group-hover:opacity-100" />
      </motion.button>
    </section>
  );
};
