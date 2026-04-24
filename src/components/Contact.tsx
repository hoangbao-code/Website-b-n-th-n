import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, X } from "lucide-react";

export default function Contact() {
  const [showZaloQR, setShowZaloQR] = useState(false);

  return (
    <section id="contact" className="py-24 px-6 md:px-12 mb-24 relative">
      <div className="max-w-5xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Let's Connect</h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Kết nối với tôi qua các nền tảng mạng xã hội để trao đổi chi tiết về công việc và hợp tác.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {/* Facebook */}
          <a
            href="https://www.facebook.com/hoang.bao.21122007"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center p-8 rounded-2xl glass hover:bg-[#1877F2]/10 transition-all duration-300 border border-white/5 hover:border-[#1877F2]/50 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#1877F2]/0 to-[#1877F2]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-16 h-16 rounded-2xl bg-[#1877F2]/20 flex items-center justify-center mb-6 relative z-10 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(24,119,242,0.4)]">
              <svg className="w-8 h-8 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 relative z-10">Facebook</h3>
            <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors relative z-10 text-center">
              Hoàng Xuân Gia Bảo
            </p>
            <div className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-[#1877F2]">
              <ArrowRight size={20} />
            </div>
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/Dvmxhuytin93"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center p-8 rounded-2xl glass hover:bg-[#26A5E4]/10 transition-all duration-300 border border-white/5 hover:border-[#26A5E4]/50 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#26A5E4]/0 to-[#26A5E4]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-16 h-16 rounded-2xl bg-[#26A5E4]/20 flex items-center justify-center mb-6 relative z-10 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(38,165,228,0.4)]">
              <svg className="w-8 h-8 text-[#26A5E4]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.19-.08-.05-.19-.02-.27 0-.12.03-1.9 1.2-5.36 3.53-.5.35-1.01.55-1.46.54-.49-.01-1.35-.25-1.91-.44-.69-.23-1.24-.36-1.19-.76.02-.21.32-.42.88-.65 3.42-1.49 5.71-2.47 6.85-2.95 3.26-1.36 3.93-1.59 4.37-1.6.1 0 .32.02.46.14.12.1.15.24.16.35-.01.03-.01.12-.01.14z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 relative z-10">Telegram</h3>
            <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors relative z-10 text-center">
              @Dvmxhuytin93
            </p>
            <div className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-[#26A5E4]">
              <ArrowRight size={20} />
            </div>
          </a>

          {/* Discord */}
          <a
            href="https://discordapp.com/users/your_discord_id" /* Replace with actual Discord link if needed */
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center p-8 rounded-2xl glass hover:bg-[#5865F2]/10 transition-all duration-300 border border-white/5 hover:border-[#5865F2]/50 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#5865F2]/0 to-[#5865F2]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-16 h-16 rounded-2xl bg-[#5865F2]/20 flex items-center justify-center mb-6 relative z-10 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(88,101,242,0.4)]">
              <svg className="w-8 h-8 text-[#5865F2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 relative z-10">Discord</h3>
            <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors relative z-10 text-center">
              Gia Bảo
            </p>
            <div className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-[#5865F2]">
              <ArrowRight size={20} />
            </div>
          </a>

          {/* Zalo */}
          <button
            onClick={() => setShowZaloQR(true)}
            className="group relative flex flex-col items-center p-8 rounded-2xl glass hover:bg-[#0068FF]/10 transition-all duration-300 border border-white/5 hover:border-[#0068FF]/50 overflow-hidden w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#0068FF]/0 to-[#0068FF]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-16 h-16 rounded-2xl bg-[#0068FF]/20 flex items-center justify-center mb-6 relative z-10 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(0,104,255,0.4)]">
              {/* Custom SVG for Zalo text logo since it has no standard icon */}
              <svg className="w-8 h-8 text-[#0068FF]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.24 13.91c-.34 2.87-3.1 5.3-6.68 5.3-1.07 0-2.08-.22-3-.61-1.63 1.4-3.5 1.77-3.69 1.79-.31.04-.63-.12-.76-.41-.12-.29-.05-.62.18-.83 1.01-.95 1.56-2.19 1.75-2.81C6.26 15.01 5.2 13.14 5.2 11c0-3.64 3.37-6.6 7.52-6.6 4.15 0 7.52 2.96 7.52 6.6 0 .97-.24 1.9-.66 2.76.12.35.31.7.53 1.02.13.19.16.44.08.65-.08.21-.29.35-.5.35h-.05c-.17 0-.35-.07-.48-.2-.17-.18-.32-.41-.44-.66zm-5.7-5.06c-.19.04-.37.13-.52.28-.29.28-.43.66-.43 1.05 0 .39.14.77.43 1.05.15.15.33.24.52.28h.08c.2-.04.38-.13.53-.28.29-.28.43-.66.43-1.05 0-.39-.14-.77-.43-1.05-.15-.15-.33-.24-.53-.28h-.08zm-3.08 0c-.19.04-.37.13-.52.28-.29.28-.43.66-.43 1.05 0 .39.14.77.43 1.05.15.15.33.24.52.28h.08c.2-.04.38-.13.53-.28.29-.28.43-.66.43-1.05 0-.39-.14-.77-.43-1.05-.15-.15-.33-.24-.53-.28h-.08zM8.38 8.85c-.19.04-.37.13-.52.28-.29.28-.43.66-.43 1.05 0 .39.14.77.43 1.05.15.15.33.24.52.28h.08c.2-.04.38-.13.53-.28.29-.28.43-.66.43-1.05 0-.39-.14-.77-.43-1.05-.15-.15-.33-.24-.53-.28h-.08z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 relative z-10">Zalo</h3>
            <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors relative z-10 text-center">
              0354084364
            </p>
            <div className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-[#0068FF]">
              <ArrowRight size={20} />
            </div>
          </button>
        </motion.div>
      </div>

      {/* Zalo Modal */}
      <AnimatePresence>
        {showZaloQR && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowZaloQR(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative p-6 bg-[#2B3B4C] rounded-2xl shadow-2xl max-w-sm w-full"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setShowZaloQR(false)}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
                title="Đóng"
              >
                <X size={24} />
              </button>
              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold text-white mb-6">Mã QR Zalo</h3>
                {/* Dummy placeholder for QR Code, ideally loaded from state or asset */}
                <div className="bg-white p-2 rounded-xl inline-block mx-auto overflow-hidden">
                  <div className="w-64 md:w-72 flex items-center justify-center">
                     <img src="https://placehold.co/500x500/ffffff/0068ff?text=++Zalo+QR++&font=roboto" alt="Zalo QR Placeholder" className="w-full h-auto rounded-xl shadow-lg" />
                  </div>
                </div>
                <p className="text-sm text-zinc-300 pt-2">
                  Quét mã để kết nối với tôi trên Zalo
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
