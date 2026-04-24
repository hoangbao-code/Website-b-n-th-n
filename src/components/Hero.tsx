import { motion } from "motion/react";
import { PERSONAL_INFO } from "../constants";
import { ArrowDown, Mail, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section id="about" className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent)] opacity-10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="flex items-center gap-2">
            <span className="status-dot" />
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-dim)]">Available for Freelance</span>
          </div>
          <h1 className="hero-title">
            Hi, I'm <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1px var(--text-main)", opacity: 0.8 }}>
              {PERSONAL_INFO.name}
            </span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-lg leading-relaxed">
            {PERSONAL_INFO.role}. {PERSONAL_INFO.short_desc}
          </p>

          <div className="flex items-center gap-6 pt-4">
            <a
              href="#contact"
              className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-opacity-90 transition"
            >
              Contact Me
            </a>
            <div className="flex items-center gap-2 text-[var(--text-dim)] font-mono text-xs uppercase tracking-widest">
              <MapPin size={16} />
              {PERSONAL_INFO.location}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          {/* Glassmorphism Code Block Simulation */}
      <div className="relative w-[400px] h-[500px] mx-auto">
        {/* Main Image */}
        <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
            alt="Coding Workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-black/20 to-transparent"></div>
        </div>

        {/* Floating Glass Card 1 */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute -right-8 top-20 glass p-4 rounded-xl flex items-center gap-4 shadow-xl"
        >
          <div className="w-10 h-10 rounded-full bg-[var(--accent)]/20 text-[var(--accent)] flex items-center justify-center">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
          </div>
          <div>
            <p className="text-white font-bold text-sm">100+ Tài khoản</p>
            <p className="text-[var(--text-dim)] text-xs">Mở khóa thành công</p>
          </div>
        </motion.div>

        {/* Floating Glass Card 2 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute -left-8 bottom-24 glass p-4 rounded-xl flex items-center gap-4 shadow-xl"
        >
          <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
          </div>
          <div>
            <p className="text-white font-bold text-sm">Cung cấp dịch vụ tối ưu</p>
            <p className="text-[var(--text-dim)] text-xs">Tăng tỷ lệ chuyển đổi ROI</p>
          </div>
        </motion.div>
      </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
