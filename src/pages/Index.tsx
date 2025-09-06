import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "Building2",
      title: "Офисные помещения",
      description: "Комплексная уборка офисов, бизнес-центров и административных зданий"
    },
    {
      icon: "Home",
      title: "Жилые объекты",
      description: "Генеральная и поддерживающая уборка квартир и частных домов"
    },
    {
      icon: "Factory",
      title: "Производственные объекты",
      description: "Специализированный клининг промышленных и складских помещений"
    },
    {
      icon: "Stethoscope",
      title: "Медицинские учреждения",
      description: "Дезинфекция и санитарная обработка медицинских помещений"
    }
  ];

  const advantages = [
    {
      icon: "Shield",
      title: "Лицензированная деятельность",
      description: "Все необходимые разрешения и сертификаты"
    },
    {
      icon: "Users",
      title: "Квалифицированный персонал",
      description: "Обученные специалисты с опытом работы"
    },
    {
      icon: "CheckCircle",
      title: "Контроль качества",
      description: "Многоступенчатая система проверки результата"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <nav className="bg-white border-b-2 border-gray-200 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-primary text-white p-2 rounded mr-3">
                <Icon name="Building" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">ПрофКлининг</h1>
                <p className="text-xs text-gray-600">Чебоксары • Новочебоксарск</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-primary font-medium transition-colors">Услуги</a>
              <a href="#about" className="text-gray-700 hover:text-primary font-medium transition-colors">О компании</a>
              <a href="#contact" className="text-gray-700 hover:text-primary font-medium transition-colors">Контакты</a>
              <Button className="bg-primary hover:bg-primary/90">
                <Icon name="Phone" size={16} className="mr-2" />
                +7 (835) 123-45-67
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                Профессиональные клининговые услуги
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Клининговые услуги<br/>
                для <span className="text-primary">бизнеса</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Обеспечиваем безупречную чистоту офисных, жилых и промышленных помещений 
                в Чебоксарах и Новочебоксарске. Работаем с юридическими и физическими лицами.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="FileText" size={18} className="mr-2" />
                  Получить коммерческое предложение
                </Button>
                <Button variant="outline" size="lg" className="border-2">
                  <Icon name="Calculator" size={18} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-100 rounded-lg p-8 shadow-sm">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white p-4 rounded shadow-sm">
                    <div className="text-2xl font-bold text-primary mb-1">500+</div>
                    <div className="text-sm text-gray-600">Объектов обслужено</div>
                  </div>
                  <div className="bg-white p-4 rounded shadow-sm">
                    <div className="text-2xl font-bold text-primary mb-1">7</div>
                    <div className="text-sm text-gray-600">Лет на рынке</div>
                  </div>
                  <div className="bg-white p-4 rounded shadow-sm">
                    <div className="text-2xl font-bold text-primary mb-1">50+</div>
                    <div className="text-sm text-gray-600">Сотрудников</div>
                  </div>
                  <div className="bg-white p-4 rounded shadow-sm">
                    <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                    <div className="text-sm text-gray-600">Служба поддержки</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Направления деятельности</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Предоставляем полный спектр клининговых услуг для различных типов объектов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши преимущества</h2>
            <p className="text-gray-600 text-lg">Почему выбирают нас</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={advantage.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">География обслуживания</h2>
            <p className="text-gray-600 text-lg">Работаем в двух городах Чувашской Республики</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="MapPin" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">г. Чебоксары</h3>
                <p className="text-gray-600 mb-6">
                  Все районы города. Работаем с крупными бизнес-центрами и жилыми комплексами.
                </p>
                <Button variant="outline" className="border-2">
                  <Icon name="Phone" size={16} className="mr-2" />
                  Заказать в Чебоксарах
                </Button>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="MapPin" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">г. Новочебоксарск</h3>
                <p className="text-gray-600 mb-6">
                  Полное покрытие города. Специализируемся на промышленных объектах.
                </p>
                <Button variant="outline" className="border-2">
                  <Icon name="Phone" size={16} className="mr-2" />
                  Заказать в Новочебоксарске
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-primary-foreground/90 text-lg">
              Консультация и выезд специалиста для оценки объекта
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center text-white">
                <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Телефон</h3>
                <p className="font-medium">+7 (835) 123-45-67</p>
                <p className="text-sm text-white/80 mt-1">Круглосуточно</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center text-white">
                <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="font-medium">info@profklining21.ru</p>
                <p className="text-sm text-white/80 mt-1">Ответим в течение часа</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center text-white">
                <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Building" size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Офис</h3>
                <p className="font-medium">г. Чебоксары</p>
                <p className="text-sm text-white/80 mt-1">ул. Ленина, 15, офис 301</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Icon name="FileText" size={18} className="mr-2" />
              Запросить коммерческое предложение
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-primary text-white p-2 rounded mr-3">
                <Icon name="Building" size={20} />
              </div>
              <div>
                <span className="text-lg font-bold">ПрофКлининг</span>
                <p className="text-gray-400 text-sm">Клининговые услуги в Чувашии</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                ООО "ПрофКлининг" • ОГРН 1234567890123<br/>
                Лицензия на обращение с отходами № 123456
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;