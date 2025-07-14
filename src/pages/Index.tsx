import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('design');

  // Данные для портфолио
  const designProjects = [
    {
      id: 1,
      title: 'Архитектурная визуализация',
      description: 'Фотореалистичная 3D модель жилого комплекса',
      category: '3D Architecture',
      year: '2024'
    },
    {
      id: 2,
      title: 'Персонаж для игры',
      description: 'Детализированная 3D модель воина',
      category: 'Character Design',
      year: '2024'
    },
    {
      id: 3,
      title: 'Продуктовая визуализация',
      description: '3D рендер наушников для рекламы',
      category: 'Product Visualization',
      year: '2023'
    }
  ];

  const photoProjects = [
    {
      id: 1,
      title: 'Городские портреты',
      description: 'Серия уличных портретов',
      category: 'Street Photography',
      year: '2024'
    },
    {
      id: 2,
      title: 'Архитектура',
      description: 'Геометрия современного города',
      category: 'Architecture',
      year: '2024'
    },
    {
      id: 3,
      title: 'Природа',
      description: 'Пейзажи и макросъемка',
      category: 'Nature',
      year: '2023'
    }
  ];

  const screenshotProjects = [
    {
      id: 1,
      title: 'Cyberpunk 2077',
      description: 'Лучшие моменты прохождения',
      category: 'RPG',
      year: '2024'
    },
    {
      id: 2,
      title: 'Red Dead Redemption 2',
      description: 'Пейзажи и атмосфера Дикого Запада',
      category: 'Action',
      year: '2024'
    },
    {
      id: 3,
      title: 'The Witcher 3',
      description: 'Мир Ведьмака в скриншотах',
      category: 'RPG',
      year: '2023'
    }
  ];

  const getProjectsForTab = (tab: string) => {
    switch (tab) {
      case 'design':
        return designProjects;
      case 'photo':
        return photoProjects;
      case 'screenshots':
        return screenshotProjects;
      default:
        return [];
    }
  };

  const socialLinks = [
    { name: 'GitHub', icon: 'Github', url: '#' },
    { name: 'Behance', icon: 'Palette', url: '#' },
    { name: 'Instagram', icon: 'Instagram', url: '#' },
    { name: 'Telegram', icon: 'MessageCircle', url: '#' },
    { name: 'Email', icon: 'Mail', url: '#' }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-roboto">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-6xl font-montserrat font-bold mb-4 animate-fade-in">
            Портфолио
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in">
            3D дизайнер, фотограф, геймер. Создаю визуальные решения и делюсь скриншотами.
          </p>
        </header>

        {/* Navigation Tabs */}
        <div className="mb-12">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-900 border-gray-800">
              <TabsTrigger 
                value="design" 
                className="text-white data-[state=active]:bg-white data-[state=active]:text-black font-montserrat font-medium transition-all duration-300"
              >
                <Icon name="Box" size={18} className="mr-2" />
                3D Дизайн
              </TabsTrigger>
              <TabsTrigger 
                value="photo" 
                className="text-white data-[state=active]:bg-white data-[state=active]:text-black font-montserrat font-medium transition-all duration-300"
              >
                <Icon name="Camera" size={18} className="mr-2" />
                Фотография
              </TabsTrigger>
              <TabsTrigger 
                value="screenshots" 
                className="text-white data-[state=active]:bg-white data-[state=active]:text-black font-montserrat font-medium transition-all duration-300"
              >
                <Icon name="Image" size={18} className="mr-2" />
                Скриншоты
              </TabsTrigger>
            </TabsList>

            {/* Content for each tab */}
            {['design', 'photo', 'screenshots'].map((tab) => (
              <TabsContent key={tab} value={tab} className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getProjectsForTab(tab).map((project) => (
                    <Card 
                      key={project.id} 
                      className="bg-gray-900 border-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-105 animate-scale-in"
                    >
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-white font-montserrat font-semibold">
                            {project.title}
                          </CardTitle>
                          <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
                            {project.year}
                          </span>
                        </div>
                        <CardDescription className="text-gray-400">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">
                            {project.category}
                          </span>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300"
                          >
                            <Icon name="ExternalLink" size={14} className="mr-1" />
                            Открыть
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Social Links */}
        <footer className="border-t border-gray-800 pt-8 mt-16">
          <div className="text-center">
            <h3 className="text-2xl font-montserrat font-semibold mb-6">
              Связаться со мной
            </h3>
            <div className="flex justify-center space-x-6 mb-8">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="flex items-center justify-center w-12 h-12 bg-gray-900 hover:bg-gray-800 rounded-full transition-all duration-300 hover:scale-110"
                  title={link.name}
                >
                  <Icon name={link.icon} size={20} />
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              © 2024 Портфолио. Все права защищены.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;