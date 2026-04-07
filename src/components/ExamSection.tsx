import { motion } from "framer-motion";
import examImg from "@/assets/tricoscopio-exame.jpg";

const steps = [
  { num: "01", title: "Análise do couro cabeludo", desc: "Imagem ampliada da raiz e do fio capilar" },
  { num: "02", title: "Identificação de problemas", desc: "Inflamações, oleosidade, miniaturização" },
  { num: "03", title: "Diagnóstico completo", desc: "Relatório detalhado com a causa real" },
  { num: "04", title: "Plano de tratamento", desc: "Orientação personalizada para seu caso" },
];

const ExamSection = () => (
  <section id="exame" className="section-padding bg-card">
    <div className="container mx-auto max-w-5xl">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "var(--shadow-card)" }}>
            <img src={examImg} alt="Exame de tricoscopia mostrando folículos capilares" loading="lazy" width={800} height={608} className="w-full h-auto object-cover" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="gold-divider mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como funciona a <span className="text-gold">Tricoscopia?</span>
          </h2>
          <p className="font-body text-muted-foreground mb-8">
            Análise detalhada do couro cabeludo com equipamento de alta precisão que revela o que seus olhos não conseguem ver.
          </p>

          <div className="space-y-5">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 items-start"
              >
                <span className="font-display text-2xl font-bold text-gold-light">{step.num}</span>
                <div>
                  <h3 className="font-body font-semibold text-foreground">{step.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ExamSection;
