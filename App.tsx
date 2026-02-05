import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';
import AdvisorWidget from './components/AdvisorWidget';
import { SKILLS, PROJECTS, SOCIAL_LINKS, CERTIFICATIONS, IMAGES } from './constants';
import { ArrowDown, ChevronRight, Award, MapPin, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const App: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'uiux' | 'dev'>('all');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  // Animation Observer
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
          (entry.target as HTMLElement).style.opacity = "1";
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [filter]);

  const filteredProjects = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    elem?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      'service_team2nq',     // Your EmailJS service ID
      'template_dze5bps',    // Your EmailJS template ID
      formData,
      'SrMfqi7n7YfxCmHl8'   // Your EmailJS public key
    ).then(() => {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, (error) => {
      console.error('Email send error:', error);
      alert('Failed to send message. Try again later.');
    });
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden px-4 sm:px-6 md:px-8">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-20 pointer-events-none">
          <div className="absolute top-20 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-600 rounded-full blur-[140px] animate-pulse"></div>
          <div className="absolute bottom-20 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-blue-900 rounded-full blur-[140px]"></div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center w-full">
          <h1 className="text-4xl sm:text-6xl md:text-9xl font-black text-white mb-6 font-heading tracking-tighter leading-[0.9] animate-fade-up">
            Awanthi <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Malawanage
            </span>
          </h1>
          
          <p className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-400 mb-12 leading-relaxed animate-fade-up" style={{ animationDelay: '200ms' }}>
            Transforming ideas into <span className="text-white font-bold">high-fidelity designs</span> and <span className="text-white font-bold">robust code</span>. Specialized in crafting user-centric digital experiences and scalable full-stack applications.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 animate-fade-up" style={{ animationDelay: '400ms' }}>
            <a 
              href="#work" 
              onClick={(e) => handleScroll(e, 'work')}
              className="px-8 sm:px-10 py-3 sm:py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-black flex items-center gap-3 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] text-sm sm:text-base"
            >
              Explore My Work <ArrowDown size={20} className="animate-bounce" />
            </a>
            <div className="flex items-center gap-4 bg-slate-900/50 border border-slate-800 p-2 rounded-xl backdrop-blur-sm">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-all hover:scale-110"
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 sm:gap-16 items-center">
          <div className="relative group reveal-on-scroll">
            <div className="aspect-square w-full max-w-xs sm:max-w-sm mx-auto bg-slate-900 rounded-3xl overflow-hidden border-2 border-slate-800/50 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <img 
                src={IMAGES.profile} 
                alt="Awanthi Malawanage" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 p-4 sm:p-6 bg-cyan-600 rounded-2xl shadow-2xl animate-float">
              <MapPin className="text-white" size={20} />
              <p className="text-white text-xs font-bold mt-1">Colombo, LK</p>
            </div>
          </div>

          <div className="reveal-on-scroll" style={{ animationDelay: '200ms' }}>
            <h2 className="text-sm font-black text-cyan-400 uppercase tracking-widest mb-4 font-heading">Discovery</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8 font-heading">Passionate Designer & Creator</h3>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Currently finalizing my BSc (Hons) in Software Engineering at <span className="text-white font-semibold">NSBM Green University</span>. My journey has been a blend of aesthetic exploration and technical problem-solving.
            </p>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-6 sm:mb-10">
              I believe that great software isn't just about code that works, but about creating experiences that people love to use. I bridge the gap between Figma designs and high-performance components.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
              {[{ title: "UI/UX Design", desc: "User journeys & prototypes." },
                { title: "Web Development", desc: "React, Next.js, Node.js." },
                { title: "Mobile Dev", desc: "React Native apps." },
                { title: "Content Strategy", desc: "SEO & WordPress management." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-slate-900/30 rounded-xl border border-slate-800/50 hover:border-cyan-500/30 transition-colors">
                  <CheckCircle2 className="text-cyan-400 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <h4 className="text-white font-bold text-sm">{item.title}</h4>
                    <p className="text-slate-500 text-xs mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, 'contact')}
              className="text-cyan-400 font-bold flex items-center gap-2 group/link"
            >
              Let's build something together <ChevronRight className="group-hover/link:translate-x-2 transition-transform" size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 sm:py-32 bg-slate-900/10 border-y border-slate-900 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20 reveal-on-scroll">
            <h2 className="text-sm font-black text-cyan-400 uppercase tracking-widest mb-4 font-heading">Toolkit</h2>
            <h3 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-white font-heading">My Professional Skills</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {SKILLS.map((skill, i) => (
              <div key={i} className="reveal-on-scroll" style={{ transitionDelay: `${i * 50}ms` }}>
                <SkillBadge skill={skill} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 sm:py-32 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 sm:gap-10 mb-12 sm:mb-20 reveal-on-scroll">
            <div>
              <h2 className="text-sm font-black text-cyan-400 uppercase tracking-widest mb-4 font-heading">Portfolio</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-heading">Selected Projects</h3>
            </div>

            <div className="flex items-center p-1 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto whitespace-nowrap">
              {(['all', 'dev', 'uiux'] as const).map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`flex-shrink-0 px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-widest transition-all ${filter === cat ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-900/40' : 'text-slate-500 hover:text-white'}`}
                >
                  {cat === 'all' ? 'Everything' : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 min-h-[400px]">
            {filteredProjects.map((project, idx) => (
              <div key={project.id} className="reveal-on-scroll" style={{ transitionDelay: `${(idx % 3) * 100}ms` }}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6 md:px-8 bg-[#020617] border-t border-slate-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-20">
          <div className="reveal-on-scroll">
            <h2 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-none text-white hover:text-cyan-400 transition-colors duration-500">
              SAY <br />HELLO
            </h2>
            <p className="mt-6 sm:mt-10 text-slate-400 text-base sm:text-lg max-w-md leading-relaxed">
              Have a project in mind or just want to chat about the latest design trends? I'm always open to new connections.
            </p>
            <div className="mt-8 sm:mt-12 space-y-6">
              <div>
                <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Direct Mail</h4>
                <a href="mailto:awanthiyashodara@gmail.com" className="text-xl sm:text-2xl font-bold text-white hover:text-cyan-400 transition-colors">
                  awanthiyashodara@gmail.com
                </a>
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Social Hubs</h4>
                <div className="flex gap-3 sm:gap-4 mt-4">
                  {SOCIAL_LINKS.map(link => (
                    <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 rounded-lg text-cyan-400 hover:bg-cyan-600 hover:text-white transition-all hover:scale-110">
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="reveal-on-scroll" style={{ animationDelay: '200ms' }}>
            <form className="space-y-6 sm:space-y-10" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-slate-800 py-3 sm:py-4 text-base sm:text-lg text-white focus:outline-none focus:border-cyan-400 transition-all placeholder:text-slate-600"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-slate-800 py-3 sm:py-4 text-base sm:text-lg text-white focus:outline-none focus:border-cyan-400 transition-all placeholder:text-slate-600"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-slate-800 py-3 sm:py-4 text-base sm:text-lg text-white focus:outline-none focus:border-cyan-400 transition-all placeholder:text-slate-600"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-transparent border-b border-slate-800 py-3 sm:py-4 text-base sm:text-lg text-white focus:outline-none focus:border-cyan-400 transition-all placeholder:text-slate-600 resize-none"
              ></textarea>
              <button type="submit" className="w-full py-4 sm:py-6 bg-cyan-600 hover:bg-cyan-500 text-white font-black text-base sm:text-lg uppercase tracking-widest transition-all active:scale-[0.98] shadow-2xl shadow-cyan-900/20">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 sm:py-20 border-t border-slate-900 px-4 sm:px-6 md:px-8 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-12 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="text-3xl font-black tracking-tighter font-heading">
              <span className="text-white">A</span>
              <span className="text-cyan-400">y</span>
            </div>
          </div>
          <p className="text-slate-500 text-sm sm:text-base font-medium">
            Designed & Built by <span className="text-white">Awanthi Malawanage</span> &copy; {new Date().getFullYear()}
          </p>
          <div className="flex flex-wrap justify-center sm:flex-nowrap gap-4 sm:gap-8 text-slate-500 text-xs sm:text-sm font-bold uppercase tracking-widest">
            <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:text-cyan-400 transition-colors">Bio</a>
            <a href="#work" onClick={(e) => handleScroll(e, 'work')} className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hover:text-cyan-400 transition-colors">Reach Out</a>
          </div>
        </div>
      </footer>

      {/* AI Widget */}
      <AdvisorWidget />
    </div>
  );
};

export default App;
