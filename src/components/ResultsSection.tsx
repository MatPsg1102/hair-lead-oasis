import { motion } from "framer-motion";
import resultFem from "@/assets/resultado-feminino.jpg";
import resultMasc from "@/assets/resultado-masculino.jpg";

const WHATSAPP_URL = "https://wa.me/5531999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20minha%20avalia%C3%A7%C3%A3o%20capilar%20gratuita!";

const results = [
  {
    img: resultFem,
    alt: "Resultado de tratamento capilar feminino após 3 meses",
    label: "Alopecia Feminina",
    desc: "Paciente apresentava rarefação capilar e afinamento dos fios. Após 3 meses de tratamento personalizado, houve recuperação visível da densidade capilar.",
  },
  {
    img: resultMasc,
    alt: "Evolução de tratamento de alopecia androgenética masculina em 3 meses",
    label: "Alopecia Androgenética",
    desc: "Evolução de tratamento em paciente masculino com alopecia androgenética. Resultados progressivos ao longo de 3 meses com protocolo individualizado.",
  },
];

const ResultsSection = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="gold-divider mx-auto mb-6" />
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Resultados reais em{" "}
          <span className="text-gold">apenas 3 meses</span>
        </h2>
        <p className="font-body text-muted-foreground max-w-2xl mx-auto">
          Com diagnóstico preciso e tratamento personalizado, nossos pacientes alcançam resultados visíveis em poucas semanas.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {results.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="rounded-2xl overflow-hidden border border-border bg-card"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <img
              src={item.img}
              alt={item.alt}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block bg-gold/20 text-gold text-xs font-semibold px-3 py-1 rounded-full font-body">
                  3 meses de tratamento
                </span>
                <span className="font-body text-sm font-semibold text-foreground">
                  {item.label}
                </span>
              </div>
              <p className="font-body text-sm text-muted-foreground">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-10"
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp animate-pulse-gold"
        >
          Quero começar meu tratamento
        </a>
      </motion.div>
    </div>
  </section>
);

export default ResultsSection;
