import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/5531999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20minha%20avalia%C3%A7%C3%A3o%20capilar%20gratuita!";

const UrgencySection = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center bg-secondary/50 border-2 border-gold/30 rounded-2xl p-8 md:p-12"
      >
        <p className="text-5xl mb-4">⏳</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Promoção por <span className="text-gold">tempo limitado</span>
        </h2>
        <p className="font-body text-muted-foreground mb-2 text-lg">
          O exame de tricoscopia normalmente é cobrado, mas estamos oferecendo <strong className="text-foreground">gratuitamente</strong> em uma ação especial.
        </p>
        <p className="font-body text-gold-dark font-semibold text-lg mb-8">
          ⚠️ Válido somente até o Dia das Mães · Vagas limitadas por dia
        </p>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
          Garantir minha vaga gratuita
        </a>
      </motion.div>
    </div>
  </section>
);

export default UrgencySection;
