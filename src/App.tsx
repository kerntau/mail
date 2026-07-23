import { useRef, useState } from 'react';
import { GenesisSection } from './components/GenesisSection';
import { AddressSection } from './components/AddressSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ToastNotice } from './components/ToastNotice';

export default function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const addressRef = useRef<HTMLDivElement>(null);

  const showCopyNotice = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2200);
  };

  const scrollToAddress = () => {
    addressRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-paper text-charcoal font-sans overflow-x-hidden">
      {/* 极简背景纸张纹理 */}
      <div className="fixed inset-0 pointer-events-none opacity-30 bg-[radial-gradient(#2C3E50_0.75px,transparent_0.75px)] [background-size:20px_20px]" />

      {/* 第一屏：意象呈现 (The Genesis) */}
      <GenesisSection onScrollNext={scrollToAddress} />

      {/* 极细模块分隔线 */}
      <div className="w-full max-w-4xl h-[1px] bg-charcoal-faint mx-auto" />

      {/* 第二屏：通信坐标 (The Address) */}
      <div ref={addressRef}>
        <AddressSection onCopyNotice={showCopyNotice} />
      </div>

      {/* 极细模块分隔线 */}
      <div className="w-full max-w-4xl h-[1px] bg-charcoal-faint mx-auto" />

      {/* 第三屏：终章回响 (The Philosophy) */}
      <PhilosophySection />

      {/* 悬浮轻量级 Toast 提示 */}
      <ToastNotice message={toastMessage} />
    </div>
  );
}
