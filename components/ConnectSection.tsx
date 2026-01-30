
import React, { useState, useEffect, useRef } from 'react';

const ConnectSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    vision: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const btn = (e.currentTarget as HTMLFormElement).querySelector('button');
    if (btn) btn.innerText = 'TRANSMITTING...';
    
    setTimeout(() => {
      if (btn) btn.innerText = 'SENT';
      setFormState({ name: '', email: '', vision: '' });
      setTimeout(() => {
        if (btn) btn.innerText = 'BEGIN';
      }, 3000);
    }, 2000);
  };

  return (
    <div ref={sectionRef} className="relative w-full h-full flex flex-col justify-between items-center py-24 px-6 bg-[#030303] text-white overflow-hidden">
      {/* BACKGROUND NOISE DECORATION */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#ffffff_0%,_transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className={`flex-1 w-full max-w-3xl flex flex-col justify-center transition-all duration-[2500ms] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'}`}>
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-extralight tracking-[0.25em] uppercase mb-8 text-white/90 leading-relaxed max-w-2xl">
            We are hungry for minds that see beyond frames.
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <input 
              type="text" 
              placeholder="Name" 
              className="py-4 text-xs md:text-sm font-light placeholder:text-gray-800 placeholder:uppercase placeholder:tracking-[0.3em]"
              value={formState.name}
              onChange={e => setFormState({...formState, name: e.target.value})}
              required
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="py-4 text-xs md:text-sm font-light placeholder:text-gray-800 placeholder:uppercase placeholder:tracking-[0.3em]"
              value={formState.email}
              onChange={e => setFormState({...formState, email: e.target.value})}
              required
            />
          </div>
          
          <textarea 
            placeholder="What are you here to create?" 
            rows={1}
            className="py-4 text-xs md:text-sm font-light placeholder:text-gray-800 placeholder:uppercase placeholder:tracking-[0.3em] resize-none overflow-hidden"
            value={formState.vision}
            onChange={e => {
              const target = e.target as HTMLTextAreaElement;
              setFormState({...formState, vision: target.value});
              target.style.height = 'auto';
              target.style.height = target.scrollHeight + 'px';
            }}
          />

          <div className="flex justify-center md:justify-start pt-8">
            <button 
              type="submit"
              className="group relative px-16 py-5 overflow-hidden border border-white/10 text-[10px] tracking-[0.6em] uppercase transition-all duration-1000 ease-in-out"
            >
              <span className="relative z-10 transition-colors duration-1000 group-hover:text-black">Begin</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out"></div>
            </button>
          </div>
        </form>
      </div>

      <footer className="w-full flex flex-col items-center space-y-4 pb-4">
        <div className="w-[1px] h-8 bg-white/5"></div>
        <p className="text-[9px] tracking-[0.5em] uppercase text-white/20 font-light">
          Some visions find each other.
        </p>
      </footer>
    </div>
  );
};

export default ConnectSection;
