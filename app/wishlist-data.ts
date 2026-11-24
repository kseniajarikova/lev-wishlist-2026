export type Gift = {
  id: string; title: string; detail: string; category: 'Игры' | 'Творчество' | 'Nado' | 'Одежда и спорт';
  price?: number; url: string; symbol: string; color: string; joint?: boolean; approx?: boolean; search?: boolean;
};

export const gifts: Gift[] = [
  {id:'iq-numbers',title:'IQ-Цифры',detail:'Головоломка с цифрами и 120 заданиями. Эта идея особенно понравилась Лёве.',category:'Игры',price:1890,url:'https://www.mosigra.ru/iq-cifri',symbol:'123',color:'violet'},
  {id:'seven-nine',title:'7 на 9',detail:'Быстрая карточная игра с устным счётом для компании. 8+.',category:'Игры',price:499,url:'https://www.mosigra.ru/7-na-9',symbol:'7⁄9',color:'yellow'},
  {id:'pentago',title:'Пентаго. Третье измерение',detail:'Абстрактная стратегия на пространственное мышление для двоих.',category:'Игры',price:1490,url:'https://www.mosigra.ru/pentago',symbol:'◉',color:'blue'},
  {id:'iq-satellite',title:'IQ-Спутник гения',detail:'Компактная головоломка с заданиями 2D и 3D.',category:'Игры',price:990,approx:true,url:'https://sankt-peterburg.clever-toy.ru/catalog/nastolnyie-igryi/logiceskie-igry/logicheskaya-igra-IQ-sputnik-geniya',symbol:'✧',color:'mint'},
  {id:'iq-spiral',title:'IQ-Виток',detail:'Небольшая головоломка Bondibon, удобно брать в дорогу.',category:'Игры',price:995,url:'https://www.detmir.ru/product/index/id/6261503/',symbol:'∞',color:'peach'},
  {id:'antivirus',title:'Антивирус. Мутация',detail:'Логическая игра с перемещением деталей. Нужен именно выпуск «Мутация».',category:'Игры',price:1725,approx:true,url:'https://market.yandex.ru/card/logicheskaya-igra-bondibon-antivirus-mutatsiya-art-sg-435-ru/4622883444',symbol:'✚',color:'violet'},
  {id:'cvetarium',title:'Цветариум',detail:'Настолка про умножение через выращивание клумб. Для игры вместе.',category:'Игры',price:1190,url:'https://bandaumnikov.ru/product/tsvetarium/',symbol:'✿',color:'yellow'},
  {id:'cortex',title:'Кортекс 2 для детей',detail:'Игра на внимание, память и логику. Нужна детская версия 2.',category:'Игры',price:1490,approx:true,url:'https://market.yandex.ru/card/stil-zhizni-nastolnaya-igra-korteks-2-dlya-detey--p7/102101851585',symbol:'◌',color:'blue'},
  {id:'expert-kit',title:'Электронный конструктор «Знаток»',detail:'Набор А с 15 схемами: собирает настоящие электрические цепи.',category:'Творчество',price:1539,url:'https://www.detmir.ru/product/index/id/7242324/',symbol:'⚡',color:'mint'},
  {id:'mini-printer',title:'Мини-термопринтер Attivio',detail:'Печатает небольшие чёрно-белые картинки с телефона.',category:'Творчество',price:1199,url:'https://www.detmir.ru/product/index/id/6236145/',symbol:'▦',color:'peach'},
  {id:'pokemon-paint',title:'Картина по номерам с Пикачу',detail:'Небольшой холст 20 × 20 см. Именно Пикачу, без Стича.',category:'Творчество',price:658,approx:true,url:'https://market.yandex.ru/card/kartina-po-nomeram-pikachu-pokemon/102979255999',symbol:'✎',color:'yellow'},
  {id:'nado-arena',title:'Арена Infinity Nado',detail:'Для баттлов волчков. Арена 42 × 42 см, без волчков.',category:'Nado',price:1699,url:'https://www.detmir.ru/product/index/id/3141859/',symbol:'◎',color:'blue'},
  {id:'nado-bow',title:'Infinity Nado: волчок и лук',detail:'Трайб Стандарт Fiery Blast Wheel. Совместный подарок: цена выше лимита.',category:'Nado',price:2874,approx:true,joint:true,url:'https://www.ozon.ru/product/infiniti-nado-volchok-i-luk-trayb-standart-fiery-blast-wheel-infinity-nado-3372277031/',symbol:'➶',color:'peach'},
  {id:'nado-blaster',title:'Infinity Nado: волчок и бластер',detail:'Трайб Стандарт Сандер Страйк, пускатель в виде пистолета. Совместный подарок.',category:'Nado',price:3134,approx:true,joint:true,url:'https://market.yandex.ru/card/infiniti-nado-volchok-blaster-trayb-standart-sander-strayk-tm-infinity-nado/6018762471',symbol:'✷',color:'violet'},
  {id:'swim-goggles',title:'Очки для плавания Mad Wave',detail:'Детские Simpler II Junior. Переносица регулируется; проверь посадку.',category:'Одежда и спорт',price:1090,url:'https://www.getsport.ru/product/simpler-ii-junior-zelenyj-one-size/186651',symbol:'◡◡',color:'mint'},
  {id:'pokemon-pajamas',title:'Пижама с покемонами · 134',detail:'Комплект для сна с принтом Pokémon, рост 134. Выбери подходящую модель.',category:'Одежда и спорт',search:true,url:'https://www.ozon.ru/search/?text=%D0%BF%D0%B8%D0%B6%D0%B0%D0%BC%D0%B0%20%D0%BF%D0%BE%D0%BA%D0%B5%D0%BC%D0%BE%D0%BD%20%D0%B4%D0%B5%D1%82%D1%81%D0%BA%D0%B0%D1%8F%20134',symbol:'★',color:'yellow'},
  {id:'screechers-pajamas',title:'Пижама со Скритчерами · 134',detail:'Комплект для сна со Screechers Wild, рост 134. Выбери подходящую модель.',category:'Одежда и спорт',search:true,url:'https://www.ozon.ru/search/?text=%D0%BF%D0%B8%D0%B6%D0%B0%D0%BC%D0%B0%20Screechers%20Wild%20134',symbol:'✹',color:'peach'},
];
