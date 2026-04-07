import { motion } from "framer-motion";
import { Search, ShieldCheck, Heart, Sparkles } from "lucide-react";

const benefits = [
  { icon: Search, title: "Descobrir a causa real", desc: "Sem achismos – diagnóstico com base científica" },
  { icon: ShieldCheck, title: "Evitar agravamento", desc: "Tratamento precoce previne danos irreversíveis" },
  { icon: Heart, title: "Tratamento correto", desc: "Foco na raiz do problema, não apenas sintomas" },
  { icon: Sparkles, title: "Mais segurança e autoestima", desc: "Cabelos saudáveis refletem na sua confiança" },
];

const BenefitsSection = () => (
  <section id="beneficios" className="section-padding bg-background">
    <div className="container mx-auto max-w-5xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="gold-divider mx-auto mb-6" />
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
          O que você <span className="text-gold">ganha com o exame</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-xl bg-card border border-border text-center"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
              <b.icon className="w-6 h-6 text-gold" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">{b.title}</h3>
            <p className="font-body text-sm text-muted-foreground">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
