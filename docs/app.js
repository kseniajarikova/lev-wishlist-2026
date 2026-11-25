const API = 'https://lev-gifts-2026.zharkoe.chatgpt.site/api/reservations';
// The gift list below is generated from app/wishlist-data.ts.
const gifts = [
  {id:'expert-kit',title:'Электронный конструктор «Знаток»',detail:'Набор А с 15 схемами: собирает настоящие электрические цепи.',category:'Творчество',price:1539,url:'https://www.detmir.ru/product/index/id/7242324/',symbol:'⚡',color:'mint'},
  {id:'mini-printer',title:'Мини-термопринтер Attivio',detail:'Печатает небольшие чёрно-белые картинки с телефона.',category:'Творчество',price:1199,url:'https://www.detmir.ru/product/index/id/6236145/',symbol:'▦',color:'peach'},
  {id:'pokemon-paint',title:'Картина по номерам с Пикачу',detail:'Небольшой холст 20 × 20 см. Именно Пикачу, без Стича.',category:'Творчество',price:658,approx:true,url:'https://market.yandex.ru/card/kartina-po-nomeram-pikachu-pokemon/102979255999',symbol:'✎',color:'yellow'},
  {id:'nado-arena',title:'Арена Infinity Nado',detail:'Для баттлов волчков. Арена 42 × 42 см, без волчков.',category:'Nado',price:1699,url:'https://www.detmir.ru/product/index/id/3141859/',symbol:'◎',color:'blue'},
  {id:'nado-bow',title:'Infinity Nado: волчок и лук',detail:'Трайб Стандарт Fiery Blast Wheel.',category:'Nado',price:2874,approx:true,url:'https://www.ozon.ru/product/infiniti-nado-volchok-i-luk-trayb-standart-fiery-blast-wheel-infinity-nado-3372277031/',symbol:'➶',color:'peach'},
  {id:'nado-blaster',title:'Infinity Nado: волчок и бластер',detail:'Трайб Стандарт Сандер Страйк, пускатель в виде пистолета.',category:'Nado',price:3134,approx:true,url:'https://market.yandex.ru/card/infiniti-nado-volchok-blaster-trayb-standart-sander-strayk-tm-infinity-nado/6018762471',symbol:'✷',color:'violet'},
  {id:'karlsson-haus',title:'Билет в театр Karlsson Haus',detail:'Выбери детский спектакль из афиши. Билет нужен и ребёнку, и сопровождающему взрослому.',category:'Впечатления',priceLabel:'Цена зависит от спектакля',url:'https://www.karlssonhaus.ru/',symbol:'★',color:'peach'},
  {id:'podpisnie-certificate',title:'Сертификат в «Подписные издания»',detail:'Лёва сам выберет книгу. Есть электронный и бумажный сертификаты; действует в Петербурге и на сайте.',category:'Впечатления',priceLabel:'Номинал от ~ 500 ₽',url:'https://www.podpisnie.ru/categories/podarki/podarochnye-sertifikaty/',symbol:'✦',color:'yellow'},
  {id:'project-l-finesse',title:'Проект L: Уловки',detail:'Дополнение к базовой игре: жетоны целей и монеты дают дополнительные действия и новые тактические цепочки. Базовая игра у Льва есть.',category:'Игры',price:1650,approx:true,url:'https://market.yandex.ru/card/nastolnaya-igra-crowd-games-proyekt-l-ulovki/102811668233',symbol:'L',color:'violet'},
  {id:'project-l-ghost',title:'Проект L: Призрачная фигура',detail:'Дополнение к базовой игре: чёрные фигуры 5-го уровня, двойное улучшение и действие «воплотить призрака». Базовая игра у Льва есть.',category:'Игры',price:2150,approx:true,url:'https://market.yandex.ru/card/nastolnaya-igra-crowd-games-proyekt-l-prizrachnaya-figura-dopolneniye/102811353906',symbol:'◈',color:'mint'},
  {id:'cosmic-pinball',title:'Attivio: Космический пинбол',detail:'Настольный пинбол с шариками и рычагами.',category:'Игры',price:1599,approx:true,url:'https://www.detmir.ru/product/index/id/6703138/',symbol:'◎',color:'blue'},
  {id:'nado-saber',title:'Infinity Nado: Воздушная сабля',detail:'Ориджинс Суприм Saber: металлический волчок с пусковой установкой, как на фото.',category:'Nado',price:3799,approx:true,url:'https://www.detmir.ru/product/index/id/6732985/',symbol:'✷',color:'peach'},
  {id:'nado-whisker',title:'Infinity Nado: Небесный Вихрь',detail:'Ориджинс Суприм Whisker: волчок с пусковой установкой из серии на фото.',category:'Nado',price:3799,approx:true,url:'https://www.detmir.ru/product/index/id/6732981/',symbol:'✳',color:'mint'},
  {id:'nado-dashing',title:'Infinity Nado: Разящий удар',detail:'Ориджинс Арес Dashing Fist: металлический волчок с пусковой установкой.',category:'Nado',price:2799,approx:true,url:'https://www.detmir.ru/product/index/id/6732977/',symbol:'◉',color:'blue'},
  {id:'blast-galer',title:'Скритчер Бласт Чардж: Геллер',detail:'Большой набор с машинкой-трансформером, бластером и дисками.',category:'Скритчеры',price:3699,approx:true,url:'https://www.detmir.ru/product/index/id/6646040/',symbol:'➶',color:'blue'},
  {id:'blast-hellstorm',title:'Скритчер Бласт Чардж: Хэллшторм',detail:'Большой набор с машинкой-трансформером, бластером и дисками.',category:'Скритчеры',price:3699,approx:true,url:'https://www.detmir.ru/product/index/id/6646041/',symbol:'✹',color:'peach'},
  {id:'blast-solent',title:'Скритчер Бласт Чардж: Солент',detail:'Большой набор с машинкой-трансформером, бластером и дисками.',category:'Скритчеры',price:3699,approx:true,url:'https://www.detmir.ru/product/index/id/6646043/',symbol:'⚡',color:'yellow'},
  {id:'screechers-nitebite',title:'Скритчер Найтбайт',detail:'Машинка-трансформер с магнитными дисками, как на фото.',category:'Скритчеры',price:1799,approx:true,url:'https://www.detmir.ru/product/index/id/3030911/',symbol:'✦',color:'violet'},
  {id:'screechers-nightweaver',title:'Скритчер Найтвивер',detail:'Машинка-трансформер с магнитными дисками, как на фото.',category:'Скритчеры',price:1799,approx:true,url:'https://www.detmir.ru/product/index/id/3030910/',symbol:'✶',color:'mint'},
  {id:'screechers-revadactyl',title:'Скритчер Ревадактиль',detail:'Машинка-трансформер с магнитными дисками, как на фото.',category:'Скритчеры',price:1799,approx:true,url:'https://www.detmir.ru/product/index/id/3030908/',symbol:'➶',color:'peach'},
  {id:'screechers-jayhawk',title:'Скритчер Джейхок',detail:'Машинка-трансформер с магнитными дисками, как на фото.',category:'Скритчеры',price:1799,approx:true,url:'https://www.detmir.ru/product/index/id/3030907/',symbol:'✷',color:'blue'},
  {id:'swim-goggles',title:'Очки для плавания Mad Wave',detail:'Детские Simpler II Junior.',category:'Одежда и спорт',price:1190,approx:true,url:'https://td-sport.ru/catalog/yuniorskie-detskie-ochki/ochki-dlya-plavaniya-mad-wave-simpler-ii-junior-m041107.html',symbol:'◡◡',color:'mint'},
];
const state = { taken: new Set(), ready: false, busy: null, filter: 'all' };
const key = id => `lev-wishlist-2026:${id}`;
const mine = id => !!localStorage.getItem(key(id));
const money = (amount, label) => label || (amount ? `~ ${new Intl.NumberFormat('ru-RU').format(amount)} ₽` : 'Уточни цену');
const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const posterLabel = category => ({'Творчество':'придумай сам','Игры':'давай играть!','Nado':'волчки в бой!','Скритчеры':'переворот!','Одежда и спорт':'для приключений','Впечатления':'сюрприз!'})[category];

function notice(message) {
  const element = document.getElementById('notice');
  element.textContent = message;
  element.hidden = !message;
}

function render() {
  const shown = gifts.filter(g => state.filter === 'all' || (state.filter === 'free' && !state.taken.has(g.id)) || (state.filter === 'games' && g.category === 'Игры') || (state.filter === 'nado' && g.category === 'Nado') || (state.filter === 'screechers' && g.category === 'Скритчеры') || (state.filter === 'other' && !['Игры','Nado','Скритчеры'].includes(g.category)));
  document.getElementById('count').textContent = state.ready ? `${gifts.length - state.taken.size} свободно из ${gifts.length}` : 'Брони недоступны';
  document.getElementById('empty').hidden = shown.length !== 0;
  document.getElementById('gifts').innerHTML = shown.map((g, index) => {
    const selected = state.taken.has(g.id);
    const own = selected && mine(g.id);
    const label = state.busy === g.id ? 'Сохраняем…' : own ? 'Отменить мой выбор' : selected ? 'Уже выбрали' : 'Забронировать';
    return `<article class="card ${selected ? 'selected' : ''}"><div class="visual ${escapeHTML(g.color)}" aria-hidden="true"><span class="number">${String(index + 1).padStart(2, '0')}</span><span class="symbol">${escapeHTML(g.symbol)}</span><span class="corner">✳</span><span class="poster-label">${escapeHTML(posterLabel(g.category))}</span></div><div class="card-body"><div class="badges"><span>${escapeHTML(g.category)}</span></div><h3>${escapeHTML(g.title)}</h3><p class="detail">${escapeHTML(g.detail)}</p><p class="price">${money(g.price, g.priceLabel)}${g.approx ? '<small> ориентир</small>' : ''}</p><a class="shop" href="${escapeHTML(g.url)}" target="_blank" rel="noopener noreferrer">${g.search ? 'Поиск подходящей модели' : 'Посмотреть товар'}</a><div class="reservation"><button class="reserve ${own ? 'own' : ''}" data-gift="${escapeHTML(g.id)}" ${!state.ready || state.busy || (selected && !own) ? 'disabled' : ''}>${label}</button><span class="status ${selected ? 'taken' : 'free'}">${own ? 'Твой выбор' : selected ? 'Занято' : 'Свободно'}</span></div></div></article>`;
  }).join('');
}

async function refresh() {
  try {
    const response = await fetch(API, { cache: 'no-store' });
    if (!response.ok) throw Error('Нет связи');
    const data = await response.json();
    if (!Array.isArray(data.reserved)) throw Error('Некорректный ответ');
    state.taken = new Set(data.reserved.filter(id => gifts.some(g => g.id === id)));
    state.ready = true;
  } catch {
    state.ready = false;
    notice('Не удалось обновить брони. Проверь интернет и попробуй ещё раз.');
  }
  render();
}

async function choose(g) {
  if (!state.ready || state.busy || (state.taken.has(g.id) && !mine(g.id))) return;
  const release = state.taken.has(g.id) && mine(g.id);
  const token = release ? localStorage.getItem(key(g.id)) : crypto.randomUUID();
  if (!token) return;
  state.busy = g.id;
  notice('');
  render();
  try {
    const response = await fetch(API, { method: release ? 'DELETE' : 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: g.id, token }) });
    if (response.status === 409 || (release && response.status === 404)) {
      localStorage.removeItem(key(g.id));
      notice(release ? 'Бронь уже снята.' : 'Этот подарок только что выбрали. Посмотри другие варианты.');
    } else if (!response.ok) throw Error('Не получилось сохранить выбор. Попробуй ещё раз.');
    else {
      if (release) localStorage.removeItem(key(g.id));
      else localStorage.setItem(key(g.id), token);
      notice(release ? 'Бронь снята — подарок снова свободен.' : 'Готово! Теперь все видят, что подарок выбран.');
    }
    await refresh();
  } catch (error) {
    notice(error instanceof Error ? error.message : 'Ошибка сохранения');
    await refresh();
  } finally {
    state.busy = null;
    render();
  }
}

document.querySelector('.filters').addEventListener('click', event => {
  const button = event.target.closest('[data-filter]');
  if (!button) return;
  state.filter = button.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(el => {
    el.classList.toggle('active', el === button);
    el.setAttribute('aria-pressed', String(el === button));
  });
  render();
});
document.getElementById('gifts').addEventListener('click', event => {
  const button = event.target.closest('[data-gift]');
  if (button) void choose(gifts.find(g => g.id === button.dataset.gift));
});
document.getElementById('copy-phone').addEventListener('click', async event => {
  const button = event.currentTarget;
  try {
    await navigator.clipboard.writeText('+7 960 2539357');
  } catch {
    const input = document.createElement('textarea'); input.value = '+7 960 2539357'; input.style.position = 'fixed'; input.style.opacity = '0'; document.body.append(input); input.select(); document.execCommand('copy'); input.remove();
  }
  button.textContent = 'Номер скопирован';
  window.setTimeout(() => { button.textContent = 'Скопировать номер'; }, 1800);
});
render();
void refresh();
setInterval(() => void refresh(), 12000);
window.addEventListener('focus', () => void refresh());
