import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [email, setEmail] = useState('');
  const [rsvp, setRsvp] = useState('');

  // Дата события (замените на вашу дату)
  const eventDate = new Date('2025-08-15T19:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleRSVP = () => {
    if (email && rsvp) {
      alert(`Спасибо за подтверждение! Ждем вас на празднике.`);
      setEmail('');
      setRsvp('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-yellow-200 to-amber-200 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-10 w-24 h-24 bg-gradient-to-br from-orange-200 to-red-200 rounded-full opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Заголовок */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
            <Icon name="Cake" size={32} className="text-amber-600" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
          </div>
          <h1 className="text-6xl md:text-7xl font-serif text-amber-900 mb-4 tracking-wide">
            День Рождения
          </h1>
          <p className="text-xl text-amber-700 font-light italic">
            Приглашение на торжественное празднование
          </p>
        </div>

        {/* Основная карточка приглашения */}
        <Card className="max-w-4xl mx-auto mb-16 bg-white/80 backdrop-blur-sm border-amber-200 shadow-2xl animate-scale-in">
          <CardContent className="p-12">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-4 mb-8">
                <Icon name="Star" size={24} className="text-amber-500" />
                <Icon name="Gift" size={36} className="text-amber-600" />
                <Icon name="Star" size={24} className="text-amber-500" />
              </div>
              
              <h2 className="text-4xl font-serif text-amber-900 mb-6">
                Вы приглашены на празднование!
              </h2>
              
              <div className="space-y-4 text-lg text-amber-800">
                <div className="flex items-center justify-center gap-3">
                  <Icon name="Calendar" size={20} className="text-amber-600" />
                  <span className="font-medium">15 августа 2025 года</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Icon name="Clock" size={20} className="text-amber-600" />
                  <span className="font-medium">19:00</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Icon name="MapPin" size={20} className="text-amber-600" />
                  <span className="font-medium">Ресторан "Золотой зал"</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Icon name="Navigation" size={20} className="text-amber-600" />
                  <span className="font-medium">ул. Праздничная, 25</span>
                </div>
              </div>
            </div>

            {/* Дресс-код */}
            <div className="bg-amber-50 rounded-lg p-6 mb-8 border border-amber-200">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Icon name="Shirt" size={20} className="text-amber-600" />
                <h3 className="text-lg font-medium text-amber-900">Дресс-код</h3>
              </div>
              <p className="text-amber-800 text-center">
                Элегантный вечерний стиль. Приветствуются праздничные наряды!
              </p>
            </div>

            {/* Обратный отсчет */}
            <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-serif text-amber-900 text-center mb-6">
                До праздника осталось:
              </h3>
              <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 shadow-lg">
                    <div className="text-3xl font-bold text-amber-900">{timeLeft.days}</div>
                    <div className="text-sm text-amber-700 font-medium">дней</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 shadow-lg">
                    <div className="text-3xl font-bold text-amber-900">{timeLeft.hours}</div>
                    <div className="text-sm text-amber-700 font-medium">часов</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 shadow-lg">
                    <div className="text-3xl font-bold text-amber-900">{timeLeft.minutes}</div>
                    <div className="text-sm text-amber-700 font-medium">минут</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 shadow-lg">
                    <div className="text-3xl font-bold text-amber-900">{timeLeft.seconds}</div>
                    <div className="text-sm text-amber-700 font-medium">секунд</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Форма RSVP */}
            <div className="bg-white rounded-lg p-8 border border-amber-200">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Icon name="Mail" size={20} className="text-amber-600" />
                <h3 className="text-xl font-medium text-amber-900">Подтверждение участия</h3>
              </div>
              
              <div className="max-w-md mx-auto space-y-4">
                <div>
                  <label className="block text-sm font-medium text-amber-800 mb-2">
                    Ваш email
                  </label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ваш@email.com"
                    className="border-amber-200 focus:border-amber-400"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-amber-800 mb-2">
                    Сможете ли прийти?
                  </label>
                  <select
                    value={rsvp}
                    onChange={(e) => setRsvp(e.target.value)}
                    className="w-full px-3 py-2 border border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                  >
                    <option value="">Выберите ответ</option>
                    <option value="yes">Да, обязательно приду! 🎉</option>
                    <option value="no">К сожалению, не смогу</option>
                    <option value="maybe">Постараюсь прийти</option>
                  </select>
                </div>
                
                <Button
                  onClick={handleRSVP}
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-medium py-3 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить подтверждение
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Дополнительная информация */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white/60 backdrop-blur-sm border-amber-200 hover:bg-white/80 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Icon name="Gift" size={32} className="text-amber-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-amber-900 mb-2">Подарки</h3>
              <p className="text-amber-700 text-sm">
                Ваше присутствие — лучший подарок! Но если хотите порадовать — сюрприз приветствуется
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/60 backdrop-blur-sm border-amber-200 hover:bg-white/80 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Icon name="Car" size={32} className="text-amber-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-amber-900 mb-2">Парковка</h3>
              <p className="text-amber-700 text-sm">
                Бесплатная парковка у ресторана. Также удобно добираться на такси
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/60 backdrop-blur-sm border-amber-200 hover:bg-white/80 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Icon name="Phone" size={32} className="text-amber-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-amber-900 mb-2">Контакты</h3>
              <p className="text-amber-700 text-sm">
                Вопросы? Звоните: +7 (999) 123-45-67 или пишите в WhatsApp
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Футер */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <Icon name="Heart" size={20} className="text-amber-600" />
            <span className="text-amber-800 font-medium">Будем рады видеть вас на празднике!</span>
            <Icon name="Heart" size={20} className="text-amber-600" />
          </div>
          <div className="flex justify-center items-center gap-2 text-amber-700">
            <Icon name="Sparkles" size={16} />
            <span className="text-sm">С любовью и предвкушением встречи</span>
            <Icon name="Sparkles" size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;