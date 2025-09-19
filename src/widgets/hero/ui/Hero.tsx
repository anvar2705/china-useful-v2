import { Button } from "@/shared/components/button";
import { Container } from "@/shared/components/container";
import { motion } from "framer-motion";

export const Hero = () => (
  <Container
    outer="pt-18 bg-[url('/photos/hero/hero-bg.jpg')] bg-cover bg-center bg-no-repeat"
    overlay="absolute inset-0 bg-black/55"
    inner="h-190 text-white"
  >
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col justify-center pt-60 bg-h"
    >
      <h1 className="text-5xl font-semibold mb-10">
        Откройте мир знаний и возможностей в Китае
      </h1>
      <div className="text-3xl mb-10">
        300+ успешно отправленных студентов, реальные кейсы, поддержка на каждом
        этапе — от выбора университета до заселения в кампус.
      </div>
      <div className="flex justify-center gap-6">
        {/* <Button>Оставить заявку</Button> */}
        <Button>Бесплатная консультация</Button>
      </div>
    </motion.div>
  </Container>
);
