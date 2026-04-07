import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Camila S.",
    text: "Eu achava que era normal cair cabelo, descobri que era uma inflamação no couro cabeludo. Graças à Dra. Rafaela, comecei o tratamento certo e meu cabelo já voltou a crescer!",
    role: "Paciente há 4 meses",
  },
  {
    name: "Ricardo M.",
    text: "Tinha medo de estar ficando calvo. O exame mostrou que era uma questão hormonal tratável. Hoje me sinto muito mais confiante.",
    role: "Paciente há 6 meses",
  },
  {
    name: "Juliana A.",
    text: "O exame é rápido e indolor. Em minutos, a Dra. Rafaela me mostrou exatamente o que estava acontecendo. Recomendo muito!",
    role: "Paciente há 3 meses",
  },
];

const TestimonialsSection = () => (
  <section id="depoimentos" className="section-padding bg-card">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="gold-divider mx-auto mb-6" />
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          O que nossos <span className="text-gold">pacientes dizem</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="p-6 rounded-xl bg-background border border-border"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="flex gap-1 mb-4 text-gold">
              {[...Array(5)].map((_, j) => (
                <span key={j}>★</span>
              ))}
            </div>
            <p className="font-body text-sm text-muted-foreground mb-4 italic">"{t.text}"</p>
            <div>
              <p className="font-body font-semibold text-foreground text-sm">{t.name}</p>
              <p className="font-body text-xs text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
