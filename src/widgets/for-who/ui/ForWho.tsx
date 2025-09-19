import { Container } from "@/shared/components/container";
import { ITEMS } from "./mock";
import { Title } from "@/shared/components/title";

export const ForWho = () => {
  return (
    <Container
      outer={`bg-[url('/photos/for-who/for-who-bg.jpg')] bg-cover bg-center bg-no-repeat`}
      overlay="bg-black/40"
      inner="pb-12 text-white"
    >
      <Title className="text-white border-white">Для кого</Title>

      <p className="text-2xl">Образование в Китае отличный выбор для:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {ITEMS.map((item) => (
          <div
            key={item.id}
            className="p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow bg-gradient-primary"
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
