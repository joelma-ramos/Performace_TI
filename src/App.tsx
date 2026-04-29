/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Info, 
  Play, 
  X,
  Presentation
} from 'lucide-react';
import { slides, SlideData } from './presentationData';

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const currentSlide = slides[currentSlideIndex];

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') nextSlide();
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <div className="slide-container bg-brand-blue relative">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(100,255,218,0.05),transparent_70%)] pointer-events-none" />
      
      {/* Header / Nav Bar */}
      <header className="h-16 flex items-center justify-between px-6 border-b border-white/5 glass-morphism z-20">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center">
            <Presentation className="w-5 h-5 text-brand-accent" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-medium text-brand-silver hidden sm:block tracking-wide uppercase text-[10px]">
              Estratégia de TI • Slide {currentSlideIndex + 1} / {slides.length}
            </span>
            <span className="text-[10px] text-brand-gray font-mono hidden md:block">IT_STRATEGY_DECK_2026</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setShowNotes(!showNotes)}
            className={`p-2 rounded-lg transition-all duration-300 ${showNotes ? 'bg-brand-accent/20 text-brand-accent border border-brand-accent/30' : 'hover:bg-white/5 text-brand-gray border border-transparent'}`}
            title="Notas do Orador"
          >
            <Info className="w-5 h-5" />
          </button>
          <button 
            onClick={toggleFullscreen}
            className="p-2 rounded-lg hover:bg-white/5 text-brand-gray border border-transparent transition-all"
            title="Tela Cheia"
          >
            {isFullscreen ? <X className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
          </button>
          <div className="h-4 w-[1px] bg-white/10 mx-1" />
          <div className="flex items-center gap-1">
            <button 
              onClick={prevSlide}
              disabled={currentSlideIndex === 0}
              className="p-2 rounded-lg hover:bg-white/5 text-brand-gray disabled:opacity-20 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              disabled={currentSlideIndex === slides.length - 1}
              className="p-2 rounded-lg hover:bg-white/5 text-brand-gray disabled:opacity-20 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 relative overflow-hidden flex">
        <div className="flex-1 relative overflow-hidden flex items-center justify-center p-4 md:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.02, y: -10 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-6xl aspect-video glass-morphism rounded-3xl p-8 md:p-16 flex flex-col justify-center shadow-2xl overflow-hidden relative group"
            >
              {currentSlide.type === 'cover' ? (
                <CoverSlide slide={currentSlide} />
              ) : currentSlide.type === 'final' ? (
                <FinalSlide slide={currentSlide} />
              ) : (
                <StandardSlide slide={currentSlide} />
              )}
              
              <div className="absolute bottom-6 right-10 font-mono text-[8px] text-brand-gray tracking-[0.4em] opacity-20 group-hover:opacity-60 transition-opacity">
                ESTRATÉGIA_TI // DECISÃO_SISTEMA_LEGADO // 2026
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {showNotes && (
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 200 }}
              className="fixed lg:relative right-0 top-16 bottom-0 w-full lg:w-[400px] glass-morphism border-l border-brand-accent/5 z-30 p-8 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                   <h3 className="font-display font-semibold text-brand-accent uppercase tracking-[0.2em] text-[10px]">
                     Controle do Orador
                   </h3>
                </div>
                <button onClick={() => setShowNotes(false)} className="lg:hidden text-brand-gray">
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-10">
                <section>
                  <h4 className="text-[10px] uppercase tracking-widest text-brand-gray mb-4 font-mono font-bold flex items-center gap-2">
                    <div className="w-1 h-1 bg-brand-gray rounded-full" /> Sugestão Visual
                  </h4>
                  <div className="text-xs text-brand-silver/60 leading-relaxed bg-brand-accent/5 p-5 rounded-2xl border border-brand-accent/10 italic">
                    {currentSlide.visualSuggestion}
                  </div>
                </section>
                
                <section>
                  <h4 className="text-[10px] uppercase tracking-widest text-brand-gray mb-4 font-mono font-bold flex items-center gap-2">
                    <div className="w-1 h-1 bg-brand-accent rounded-full" /> Script (30 Segundos)
                  </h4>
                  <div className="text-lg text-white leading-relaxed font-light">
                    <span className="text-brand-accent text-3xl font-serif mr-2">“</span>
                    {currentSlide.script}
                    <span className="text-brand-accent text-3xl font-serif ml-1">”</span>
                  </div>
                </section>
                
                <div className="pt-10 mt-10 border-t border-white/5">
                   <div className="flex justify-between items-end mb-4">
                      <h4 className="text-[10px] uppercase tracking-widest text-brand-gray font-mono font-bold">Progresso</h4>
                      <span className="text-xs font-mono text-brand-accent">{currentSlideIndex + 1}/{slides.length}</span>
                   </div>
                   <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-brand-accent shadow-[0_0_8px_rgba(100,255,218,0.4)] transition-all duration-500"
                        style={{ width: `${((currentSlideIndex + 1) / slides.length) * 100}%` }}
                      />
                   </div>
                </div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

function CoverSlide({ slide }: { slide: SlideData }) {
  return (
    <div className="flex flex-col items-center text-center space-y-10">
      <motion.div 
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: 'spring' }}
        className="w-28 h-28 rounded-[2rem] bg-brand-accent/5 border border-brand-accent/20 flex items-center justify-center mb-2 shadow-[0_0_50px_rgba(100,255,218,0.05)]"
      >
        <slide.icon className="w-12 h-12 text-brand-accent" />
      </motion.div>
      <div className="space-y-6 max-w-4xl">
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-white leading-[1.1] tracking-tight"
        >
          {slide.title}
        </motion.h1>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: 100 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="h-1 bg-brand-accent mx-auto rounded-full" 
        />
      </div>
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-brand-gray text-[10px] md:text-xs font-bold uppercase tracking-[0.4em]"
      >
        {slide.bullets.map((b, i) => (
          <span key={i} className="flex items-center gap-3">
            <span className="text-brand-accent opacity-50">•</span>
            {b}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function StandardSlide({ slide }: { slide: SlideData }) {
  return (
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-10">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-brand-accent/40" />
            <span className="font-mono text-[9px] text-brand-accent tracking-[0.4em] uppercase font-bold">Slide_Master_{slide.id.toString().padStart(2, '0')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight tracking-tight">
            {slide.title}
          </h2>
        </div>
        
        <ul className="space-y-6">
          {slide.bullets.map((bullet, idx) => (
            <motion.li 
              key={idx}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 * idx + 0.3 }}
              className="flex items-start gap-5 group"
            >
              <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-brand-accent shadow-[0_0_8px_rgba(100,255,218,0.5)] group-hover:scale-150 transition-transform" />
              <span className="flex-1 text-brand-silver text-lg lg:text-xl font-light leading-relaxed group-hover:text-white transition-colors">{bullet}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="hidden lg:block">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="relative aspect-square max-w-[380px] mx-auto"
        >
          {/* Decorative Rings */}
          <div className="absolute inset-0 border border-brand-accent/5 rounded-full animate-[spin_20s_linear_infinite]" />
          <div className="absolute inset-4 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full aspect-square glass-morphism rounded-3xl p-10 flex flex-col items-center justify-center gap-10 border border-brand-accent/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(100,255,218,0.05),transparent_50%)]" />
              
              <div className="relative">
                <motion.div
                  animate={{ 
                    y: [0, -6, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <slide.icon className="w-24 h-24 text-brand-accent group-hover:scale-110 transition-transform duration-500" />
                </motion.div>
                <div className="absolute -bottom-2 inset-x-0 h-4 bg-brand-accent/20 blur-xl rounded-full scale-x-50" />
              </div>
              
              <div className="w-full space-y-4 relative">
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                   <motion.div 
                     initial={{ width: 0 }}
                     animate={{ width: '70%' }}
                     transition={{ duration: 1, delay: 1 }}
                     className="h-full bg-brand-accent/40" 
                   />
                </div>
                <div className="h-1.5 w-2/3 bg-white/5 rounded-full" />
                <div className="h-1.5 w-3/4 bg-white/5 rounded-full" />
              </div>

              {/* Data numbers floating */}
              <div className="absolute top-6 left-6 font-mono text-[8px] text-brand-accent/40 tracking-wider">0xFA42</div>
              <div className="absolute bottom-6 right-6 font-mono text-[8px] text-brand-accent/40 tracking-wider">STRAT_DATA</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function FinalSlide({ slide }: { slide: SlideData }) {
  return (
    <div className="flex flex-col items-center text-center space-y-12">
      <motion.div 
        animate={{ 
          y: [0, -10, 0],
          boxShadow: ["0 0 20px rgba(100,255,218,0.1)", "0 0 50px rgba(100,255,218,0.2)", "0 0 20px rgba(100,255,218,0.1)"]
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="w-32 h-32 rounded-[2.5rem] bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center p-4"
      >
        <slide.icon className="w-16 h-16 text-brand-accent" />
      </motion.div>
      
      <div className="space-y-6">
        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-display font-black text-white leading-tight tracking-tighter"
        >
          {slide.title}
        </motion.h1>
        <div className="flex items-center justify-center gap-4">
           <div className="h-[1px] w-8 bg-brand-accent/30" />
           <p className="text-brand-accent font-mono text-[10px] tracking-[1em] uppercase font-bold">Contato_Estratégico</p>
           <div className="h-[1px] w-8 bg-brand-accent/30" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-3xl">
        {slide.bullets.map((b, i) => (
          <motion.div 
            key={i} 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 * i + 0.5 }}
            className="p-5 rounded-2xl bg-white/5 border border-white/5 text-brand-silver text-sm font-medium hover:bg-brand-accent/5 hover:border-brand-accent/20 transition-all cursor-default group"
          >
            <span className="opacity-60 group-hover:opacity-100 group-hover:text-brand-accent transition-all">{b}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
