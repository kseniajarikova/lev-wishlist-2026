export type Gift = {
  id: string; title: string; detail: string; category: 'Творчество' | 'Nado' | 'Одежда и спорт';
  price?: number; url: string; symbol: string; color: string; approx?: boolean; search?: boolean;
};

export const gifts: Gift[] = [
  {id:'expert-kit',title:'Электронный конструктор «Знаток»',detail:'Набор А с 15 схемами: собирает настоящие электрические цепи.',category:'Творчество',price:1539,url:'https://www.detmir.ru/product/index/id/7242324/',symbol:'⚡',color:'mint'},
  {id:'mini-printer',title:'Мини-термопринтер Attivio',detail:'Печатает небольшие чёрно-белые картинки с телефона.',category:'Творчество',price:1199,url:'https://www.detmir.ru/product/index/id/6236145/',symbol:'▦',color:'peach'},
  {id:'pokemon-paint',title:'Картина по номерам с Пикачу',detail:'Небольшой холст 20 × 20 см. Именно Пикачу, без Стича.',category:'Творчество',price:658,approx:true,url:'https://market.yandex.ru/card/kartina-po-nomeram-pikachu-pokemon/102979255999',symbol:'✎',color:'yellow'},
  {id:'nado-arena',title:'Арена Infinity Nado',detail:'Для баттлов волчков. Арена 42 × 42 см, без волчков.',category:'Nado',price:1699,url:'https://www.detmir.ru/product/index/id/3141859/',symbol:'◎',color:'blue'},
  {id:'nado-bow',title:'Infinity Nado: волчок и лук',detail:'Трайб Стандарт Fiery Blast Wheel.',category:'Nado',price:2874,approx:true,url:'https://www.ozon.ru/product/infiniti-nado-volchok-i-luk-trayb-standart-fiery-blast-wheel-infinity-nado-3372277031/',symbol:'➶',color:'peach'},
  {id:'nado-blaster',title:'Infinity Nado: волчок и бластер',detail:'Трайб Стандарт Сандер Страйк, пускатель в виде пистолета.',category:'Nado',price:3134,approx:true,url:'https://market.yandex.ru/card/infiniti-nado-volchok-blaster-trayb-standart-sander-strayk-tm-infinity-nado/6018762471',symbol:'✷',color:'violet'},
  {id:'swim-goggles',title:'Очки для плавания Mad Wave',detail:'Детские Simpler II Junior. Переносица регулируется; проверь посадку.',category:'Одежда и спорт',price:1190,approx:true,url:'https://td-sport.ru/catalog/yuniorskie-detskie-ochki/ochki-dlya-plavaniya-mad-wave-simpler-ii-junior-m041107.html',symbol:'◡◡',color:'mint'},
];
