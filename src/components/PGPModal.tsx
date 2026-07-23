import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Copy, Check, ChevronDown, Key } from 'lucide-react';

export const PGP_FINGERPRINT = "4A9F 8B2C 1D0E 3F4A 5B6C  7D8E 9F0A 1B2C 3D4E 5F6A";

export const PGP_PUBLIC_KEY = `-----BEGIN PGP PUBLIC KEY BLOCK-----

mQGNBF+0x/MBACD1x9uBqK4rA0Y7vQ8n9p5m2Z8x7c6v5b4n3m2l1k0j9i8h7g6f
5e4d3c2b1a0Z9Y8X7W6V5U4T3S2R1Q0P9O8N7M6L5K4J3I2H1G0F9E8D7C6B5A4
9876543210zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA
=curn
-----END PGP PUBLIC KEY BLOCK-----`;

interface PGPModalProps {
  onCopyNotice: (msg: string) => void;
}

export const PGPSection: React.FC<PGPModalProps> = ({ onCopyNotice }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedFingerprint, setCopiedFingerprint] = useState(false);
  const [copiedKey, setCopiedKey] = useState(false);

  const handleCopyFingerprint = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(PGP_FINGERPRINT.replace(/\s+/g, ''));
    setCopiedFingerprint(true);
    onCopyNotice("PGP Fingerprint copied to clipboard.");
    setTimeout(() => setCopiedFingerprint(false), 2000);
  };

  const handleCopyKey = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(PGP_PUBLIC_KEY);
    setCopiedKey(true);
    onCopyNotice("PGP Public Key copied to clipboard.");
    setTimeout(() => setCopiedKey(false), 2000);
  };

  return (
    <div className="w-full max-w-xl mt-12 border border-charcoal-border rounded-xl bg-paper-dark/30 backdrop-blur-sm overflow-hidden transition-all duration-300">
      {/* 标题控制栏 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-charcoal-faint transition-colors cursor-pointer group"
      >
        <div className="flex items-center space-x-3">
          <Shield className="w-4 h-4 text-charcoal-subtle group-hover:text-charcoal transition-colors" />
          <span className="text-xs font-mono tracking-wider text-charcoal font-medium">
            PGP ENCRYPTION / FINGERPRINT
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-[10px] font-mono text-charcoal-subtle uppercase">
            {isOpen ? 'FOLD' : 'VIEW KEY'}
          </span>
          <ChevronDown
            className={`w-4 h-4 text-charcoal-subtle transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </div>
      </button>

      {/* 折叠区内容 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="border-t border-charcoal-faint px-6 py-5 space-y-4"
          >
            {/* PGP Fingerprint 展示段 */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[11px] font-mono text-charcoal-subtle uppercase">
                  FINGERPRINT
                </span>
                <button
                  onClick={handleCopyFingerprint}
                  className="flex items-center space-x-1 text-[10px] font-mono text-charcoal-subtle hover:text-charcoal transition-colors cursor-pointer"
                >
                  {copiedFingerprint ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-700">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>COPY FINGERPRINT</span>
                    </>
                  )}
                </button>
              </div>
              <div className="p-3 bg-paper rounded border border-charcoal-faint font-mono text-xs text-charcoal tracking-widest break-all select-all">
                {PGP_FINGERPRINT}
              </div>
            </div>

            {/* PGP Public Key 预览区 */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[11px] font-mono text-charcoal-subtle uppercase">
                  PUBLIC KEY BLOCK
                </span>
                <button
                  onClick={handleCopyKey}
                  className="flex items-center space-x-1 text-[10px] font-mono text-charcoal-subtle hover:text-charcoal transition-colors cursor-pointer"
                >
                  {copiedKey ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-700">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Key className="w-3 h-3" />
                      <span>COPY BLOCK</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-3 bg-paper rounded border border-charcoal-faint font-mono text-[11px] leading-relaxed text-charcoal-subtle overflow-x-auto select-all no-scrollbar max-h-36">
                {PGP_PUBLIC_KEY}
              </pre>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
