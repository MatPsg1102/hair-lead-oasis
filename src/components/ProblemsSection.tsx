import { motion } from "framer-motion";

const problems = [
  "Queda de cabelo excessiva",
  "Falhas no couro cabeludo",
  "Vermelhidão e coceira",
  "Caspa persistente",
  "Afinamento dos fios",
  "Medo de calvície",
];

const ProblemsSection = () => (
  <section id="problemas" className="section-padding bg-card">
    <div className="container mx-auto max-w-4xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="gold-divider mx-auto mb-6" />
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Se você está passando por isso,<br />
          <span className="text-gold">você precisa agir agora</span>
        </h2>
        <p className="text-muted-foreground font-body mb-10 max-w-2xl mx-auto">
          Ignorar esses sinais pode agravar o problema. Quanto antes o diagnóstico, maior a chance de recuperação.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {problems.map((problem, i) => (
          <motion.div
            key={problem}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-background rounded-xl p-5 border border-border text-left"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <span className="text-gold text-xl mr-2">⚠️</span>
            <span className="font-body text-foreground font-medium">{problem}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemsSection;
