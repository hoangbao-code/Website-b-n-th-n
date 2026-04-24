import { motion } from "motion/react";
import { SERVICES } from "../constants";

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Services</h2>
          <p className="text-zinc-400 max-w-xl">Những giá trị tôi mang lại cho các dự án và đối tác của mình, thông qua các kỹ năng chuyên môn.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 transition-colors project-card"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded bg-[var(--accent)]/20 text-[var(--accent)] mb-6">
                {service.icon}
              </div>
              <h4 className="font-bold text-sm mb-3">{service.title}</h4>
              <p className="text-xs text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
