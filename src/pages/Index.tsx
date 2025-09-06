import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "Sparkles",
      title: "Уборка квартир",
      description: "Генеральная и поддерживающая уборка жилых помещений"
    },
    {
      icon: "Building",
      title: "Клининг офисов",
      description: "Профессиональная уборка коммерческих помещений"
    },
    {
      icon: "Sofa",
      title: "Химчистка мебели",
      description: "Глубокая очистка мягкой мебели и ковров"
    },
    {
      icon: "Home",
      title: "Мытье окон",
      description: "Идеальная чистота окон и стеклянных поверхностей"
    }
  ];

  const areas = ["Чебоксары", "Новочебоксарск"];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary">
              <Icon name="Sparkles" className="inline mr-2" size={28} />
              ЧистоДом
            </h1>
            <div className="hidden md:flex space-x-6">
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
              <a href="#areas" className="text-gray-600 hover:text-primary transition-colors">Зоны</a>
              <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button>
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('/img/acdbe909-e2c7-40f9-a23f-d022510e197f.jpg')`
          }}
        ></div>
        <div className="container mx-auto px-4 text-center relative z-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Профессиональный клининг<br/>
            в <span className="text-primary">Чебоксарах</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Качественная уборка квартир и офисов. Используем экологичные средства 
            и современное оборудование. Работаем в Чебоксарах и Новочебоксарске.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на уборку
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Наши услуги</h3>
            <p className="text-gray-600 text-lg">Полный спектр клининговых услуг для дома и офиса</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section id="areas" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Зоны обслуживания</h3>
            <p className="text-gray-600 text-lg">Работаем в двух городах Чувашской Республики</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {areas.map((area, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-8 text-center">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name="MapPin" size={40} className="text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">{area}</h4>
                  <p className="text-gray-600 mb-6">
                    Выезжаем во все районы города. Бесплатная консультация и расчет стоимости.
                  </p>
                  <Button variant="outline" className="w-full">
                    <Icon name="Phone" size={16} className="mr-2" />
                    Вызвать в {area}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Свяжитесь с нами</h3>
            <p className="text-gray-600 text-lg">Готовы ответить на все вопросы и записать на удобное время</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={32} className="text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Телефон</h4>
                <p className="text-primary font-medium">+7 (835) 123-45-67</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={32} className="text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Email</h4>
                <p className="text-primary font-medium">info@chistodom21.ru</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={32} className="text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Режим работы</h4>
                <p className="text-gray-600">Ежедневно<br/>с 8:00 до 20:00</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center mb-4">
            <Icon name="Sparkles" size={24} className="text-primary mr-2" />
            <span className="text-xl font-bold">ЧистоДом</span>
          </div>
          <p className="text-gray-400">
            Профессиональная клининговая компания в Чебоксарах и Новочебоксарске
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;