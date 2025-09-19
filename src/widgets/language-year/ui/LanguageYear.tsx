import { Container } from "@/shared/components/container";
import Image from "next/image";

export const LanguageYear = () => {
  return (
    <Container
      outer={`bg-[url('/photos/language-year/language-year-bg.jpg')] bg-cover bg-center bg-no-repeat py-16 px-6 lg:px-20`}
      overlay="bg-black/40"
      inner="text-white grid lg:grid-cols-2 gap-10"
    >
      <div className="leading-relaxed">
        <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
          Языковой год
        </h2>
        <p className="text-lg mb-4">
          Языковой год — это интенсивная годичная программа изучения китайского
          языка, предназначенная для иностранных студентов. Основная цель —
          помочь учащимся овладеть китайским языком (уровни HSK 3-4 и выше),
          подготовиться к дальнейшему обучению в Китае или работе в китайской
          среде.
        </p>

        <div className="max-w-4xl mx-auto text-lg">
          <h2 className="font-semibold">Программа включает:</h2>

          <ul className="space-y-4 leading-relaxed">
            <li className="flex items-start gap-3">
              <span>
                - Углубленное изучение китайского
                <span className="text-base block">
                  (грамматика, лексика, аудирование, говорение, письмо)
                </span>
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span>
                - Культурные мероприятия
                <span className="text-base block">
                  (каллиграфия, традиционные праздники, экскурсии)
                </span>
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span>- Практику общения с носителями языка</span>
            </li>
          </ul>

          <p className="mt-10 text-lg">
            После успешного завершения студенты могут продолжить обучение в
            Китае по академическим или профессиональным программам.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 grid-rows-3 gap-4">
        <div className="w-full h-full row-span-3 relative">
          <Image
            src={`photos/language-year/IMG_7250.jpg`}
            alt="Университет в Китае"
            fill
            className="rounded-2xl shadow-md object-cover"
          />
        </div>
        <Image
          src={`photos/language-year/IMG_5792.jpg`}
          alt="Диплом"
          width={600}
          height={600}
          className="rounded-2xl shadow-md object-cover"
        />
        <Image
          src={`photos/language-year/IMG_7067.jpg`}
          alt="Выпускники"
          width={600}
          height={600}
          className="rounded-2xl shadow-md object-cover col-start-2"
        />
        <Image
          src={`photos/language-year/IMG_5775.jpg`}
          alt="Выпускники"
          width={600}
          height={600}
          className="rounded-2xl shadow-md object-cover col-start-2 row-start-3"
        />
      </div>
    </Container>
  );
};
