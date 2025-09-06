import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "Home",
      title: "Уборка домов",
      description: "Сделаем ваш дом идеально чистым и уютным",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: "Building2",
      title: "Клининг офисов",
      description: "Профессиональная чистота для вашего бизнеса",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "Sparkles",
      title: "Генеральная уборка",
      description: "Глубокая очистка всех поверхностей",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: "Zap",
      title: "Экспресс-уборка",
      description: "Быстро и качественно в любое время",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Floating Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-white/30">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-2">
                <Icon name="Sparkles" size={16} className="text-white" />
              </div>
              <span className="font-bold text-gray-800">ЯркийКлининг</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#services" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Услуги</a>
              <a href="#about" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">О нас</a>
              <a href="#contact" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Контакты</a>
            </div>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-lg">
              <Icon name="Phone" size={16} className="mr-2" />
              Звонок
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl animate-bounce-in"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 blur-3xl animate-bounce-in" style={{animationDelay: '0.5s'}}></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
              ✨ Новый уровень чистоты в Чебоксарах!
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient-shift bg-300% leading-tight">
                Супер Клининг
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              Превращаем уборку в магию! 🪄 Современные технологии, эко-средства 
              и команда профи создают идеальную чистоту в Чебоксарах и Новочебоксарске
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg shadow-xl transform hover:scale-105 transition-all duration-300">
                <Icon name="Calendar" size={20} className="mr-2" />
                Заказать уборку сейчас! 🚀
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-purple-300 hover:bg-purple-50 px-8 py-4 text-lg backdrop-blur-sm bg-white/50">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть видео
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Наши супер-услуги
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Каждая услуга - это небольшое чудо чистоты! ✨
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:scale-105 transition-all duration-500 border-0 shadow-xl hover:shadow-2xl bg-white/60 backdrop-blur-sm animate-bounce-in"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <CardContent className="p-8 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500" 
                       style={{background: `linear-gradient(135deg, rgb(236 72 153), rgb(239 68 68))`}}></div>
                  
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:rotate-12 transition-transform duration-500`}>
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <Button 
                    variant="outline" 
                    className={`w-full border-2 bg-gradient-to-r ${service.gradient} border-transparent text-white hover:shadow-lg transition-all duration-300`}
                  >
                    Узнать больше
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white/30 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "2000+", label: "Счастливых клиентов", emoji: "😍" },
              { number: "5000+", label: "Убранных квадратов", emoji: "✨" },
              { number: "99.9%", label: "Довольных клиентов", emoji: "🏆" },
              { number: "24/7", label: "Поддержка", emoji: "💬" }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-bounce-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-4xl mb-2">{stat.emoji}</div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Работаем в двух городах! 🌟
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { 
                city: "Чебоксары", 
                emoji: "🏙️",
                gradient: "from-blue-500 to-purple-500",
                features: ["Все районы", "Быстрый выезд", "Скидки постоянным клиентам"]
              },
              { 
                city: "Новочебоксарск", 
                emoji: "🌆",
                gradient: "from-purple-500 to-pink-500",
                features: ["Полное покрытие", "Спецпредложения", "Работаем с предприятиями"]
              }
            ].map((area, index) => (
              <Card key={index} className="border-0 shadow-2xl bg-white/60 backdrop-blur-sm hover:scale-105 transition-all duration-500 overflow-hidden group">
                <CardContent className="p-0 relative">
                  <div className={`h-32 bg-gradient-to-r ${area.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute top-4 right-4 text-4xl opacity-50">{area.emoji}</div>
                    <div className="absolute bottom-4 left-6">
                      <h3 className="text-2xl font-bold text-white mb-1">{area.city}</h3>
                      <div className="flex items-center text-white/90">
                        <Icon name="MapPin" size={16} className="mr-1" />
                        <span className="text-sm">Зона обслуживания</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <ul className="space-y-3 mb-6">
                      {area.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button className={`w-full bg-gradient-to-r ${area.gradient} hover:shadow-lg text-white border-0 transform group-hover:scale-105 transition-all duration-300`}>
                      <Icon name="Phone" size={16} className="mr-2" />
                      Заказать в {area.city}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Свяжитесь с нами! 📞
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Готовы ответить на все вопросы и приехать уже сегодня! ⚡
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {[
              { icon: "Phone", title: "Телефон", value: "+7 (835) 123-45-67", subtitle: "Звоните прямо сейчас!" },
              { icon: "Mail", title: "Email", value: "hello@cleanmagic.ru", subtitle: "Ответим моментально" },
              { icon: "Clock", title: "Режим работы", value: "24/7", subtitle: "Работаем всегда!" }
            ].map((contact, index) => (
              <Card key={index} className="bg-white/20 backdrop-blur-md border-white/30 hover:bg-white/30 transition-all duration-300">
                <CardContent className="p-6 text-center text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={contact.icon} size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{contact.title}</h3>
                  <p className="font-bold mb-1">{contact.value}</p>
                  <p className="text-sm text-white/80">{contact.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-300">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp 💬
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-3">
              <Icon name="Sparkles" size={20} className="text-white" />
            </div>
            <div>
              <span className="text-xl font-bold">ЯркийКлининг</span>
              <p className="text-gray-400 text-sm">Магия чистоты в Чувашии ✨</p>
            </div>
          </div>
          <p className="text-gray-400 mb-4">
            Делаем мир чище и ярче каждый день! 🌈
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <span>© 2024 ЯркийКлининг</span>
            <span>•</span>
            <span>Политика конфиденциальности</span>
            <span>•</span>
            <span>Условия использования</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;