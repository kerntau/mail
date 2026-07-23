import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Mail, Compass, Box, Anchor } from 'lucide-react';
import { PGPSection } from './PGPModal';

interface AddressSectionProps {
  onCopyNotice: (msg: string) => void;
}

export const AddressSection: React.FC<AddressSectionProps> = ({ onCopyNotice }) => {
  const [copied, setCopied] = useState(false);
  const email = "hi@curn.me";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopied(true);
    onCopyNotice("Copied to clipboard.");
    setTimeout(() => setCopied(false), 2000);
  };

  const semantics = [
    {
      icon: Anchor,
      symbol: "锚点 (C)",
      title: "物理坐标",
      desc: "取自姓氏首字母，茫茫赛博世界中不可动摇的纯粹延伸。"
    },
    {
      icon: Box,
      symbol: "容器 (urn)",
      title: "信息封装",
      desc: "代码、技术与思想的载体，过滤纷繁杂音，有序沉淀。"
    },
    {
      icon: Compass,
      symbol: "意象 (沉)",
      title: "静水流深",
      desc: "与中文“沉”同音共振，拒绝快餐交互，追求深度的专注。"
    }
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20 relative select-none">
      {/* 模块序号与标题 */}
      <div className="w-full max-w-5xl flex justify-between items-center text-xs tracking-widest text-charcoal-subtle font-mono mb-16">
        <span>ADDRESS // 02</span>
        <span>LOCATION: CYBERSPACE</span>
      </div>

      <div className="w-full max-w-3xl flex flex-col items-center">
        {/* 核心通信坐标交互卡片 */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={handleCopyEmail}
          className="w-full paper-card p-8 sm:p-12 rounded-2xl border border-charcoal-border paper-shadow cursor-pointer relative group transition-all duration-500"
        >
          {/* 微型边角工装线 */}
          <div className="absolute top-3 left-3 text-[9px] font-mono text-charcoal-subtle opacity-40">
            [PRIMARY MAILBOX]
          </div>
          <div className="absolute top-3 right-3 text-[9px] font-mono text-charcoal-subtle opacity-40">
            CLICK TO COPY
          </div>

          <div className="flex flex-col items-center justify-center space-y-4 my-4">
            <div className="p-3 rounded-full bg-paper border border-charcoal-faint group-hover:border-charcoal-border transition-colors">
              <Mail className="w-6 h-6 text-charcoal stroke-[1.5]" />
            </div>

            {/* 核心地址 */}
            <div className="flex items-center space-x-3">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-charcoal tracking-tight font-sans">
                {email}
              </h2>
              <div className="p-2 rounded-lg opacity-60 group-hover:opacity-100 transition-opacity">
                {copied ? (
                  <Check className="w-6 h-6 text-emerald-600 animate-scale-in" />
                ) : (
                  <Copy className="w-6 h-6 text-charcoal-subtle group-hover:text-charcoal transition-colors" />
                )}
              </div>
            </div>

            <p className="text-xs font-mono text-charcoal-subtle tracking-widest uppercase">
              {copied ? "COPIED TO CLIPBOARD" : "CLICK ANYWHERE ON CARD TO COPY"}
            </p>
          </div>
        </motion.div>

        {/* 语义诠释卡片组：锚点、容器、意象 */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          {semantics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl border border-charcoal-faint bg-paper-dark/20 hover:border-charcoal-border transition-colors duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="w-4 h-4 text-charcoal-subtle stroke-[1.5]" />
                    <span className="text-[10px] font-mono text-charcoal-subtle">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-sm font-medium text-charcoal mb-1 font-sans">
                    {item.symbol}
                  </h3>
                  <p className="text-[11px] font-mono text-charcoal-subtle mb-3">
                    {item.title}
                  </p>
                  <p className="text-xs text-charcoal-muted leading-relaxed font-sans font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* PGP 指纹安全通道面板 */}
        <PGPSection onCopyNotice={onCopyNotice} />
      </div>
    </section>
  );
};
