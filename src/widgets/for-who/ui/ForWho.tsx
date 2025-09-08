import { Container } from "@/shared/components/container";
import { ITEMS } from "./mock";

export const ForWho = () => {
  return (
    <Container outer="bg-background-secondary" inner="pb-12">
      <div className="flex justify-center">
        <h2 className="text-5xl text-center text-primary-dark font-bold border-b-2 border-primary-dark  pt-16 pb-8 mb-8 uppercase w-full">
          Для кого
        </h2>
      </div>
      <p className="text-2xl">Образование в Китае отличный выбор для:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {ITEMS.map((item) => (
          <div
            key={item.id}
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-md leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <p className="text-lg mt-8 leading-relaxed">
        Китай – одна из самых безопасных стран мира с низким уровнем
        преступности. Кампусы университетов оборудованы современными системами
        безопасности, а в городах создана комфортная среда для иностранных
        студентов.
        <br />
        Если ваш профиль соответствует этим критериям – Китай открывает для вас
        новые возможности!
        <br />
        Готовы начать путь к образованию в Поднебесной? Оставьте заявку, и мы
        поможем с поступлением!
      </p>
    </Container>
  );
};
