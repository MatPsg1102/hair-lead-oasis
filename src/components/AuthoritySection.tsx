import { motion } from "framer-motion";
import { Shield, Microscope, UserCheck, Award } from "lucide-react";

const items = [
  { icon: Award, title: "Especialista em Tricologia", desc: "Biomédica com formação avançada em saúde capilar" },
  { icon: UserCheck, title: "Atendimento Personalizado", desc: "Masculino e feminino, com abordagem individualizada" },
  { icon: Microscope, title: "Equipamento Profissional", desc: "Tricoscópio de alta precisão para diagnóstico completo" },
  { icon: Shield, title: "Diagnóstico Preciso", desc: "Identificação da causa real, não apenas dos sintomas" },
];

const AuthoritySection = () => (
  <section id="autoridade" className="section-padding bg-background">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="gold-divider mx-auto mb-6" />
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Por que confiar na <span className="text-gold">Dra. Rafaela Coimbra?</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex gap-4 p-6 rounded-xl bg-card border border-border"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
              <item.icon className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AuthoritySection;
