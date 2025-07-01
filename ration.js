const days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
let selectedDay = 0;

// Данные о рационе
const mealPlans = {
    "fast-weight-loss": [
      {
        day: "Понедельник",
        meals: [
          { name: "Завтрак", items: ["Овсянка на воде (40 г)", "Яблоко", "Чай"], proteins: 8, fats: 3, carbs: 55, calories: 250 },
          { name: "Перекус", items: ["Кефир 1% (200 мл)", "Грецкий орех (10 г)"], proteins: 5, fats: 8, carbs: 6, calories: 130 },
          { name: "Обед", items: ["Рис бурый (60 г)", "Куриная грудка (70 г)", "Салат из овощей"], proteins: 25, fats: 5, carbs: 40, calories: 350 },
          { name: "Ужин", items: ["Творог 5% (100 г)", "Огурец", "Хлеб цельный (1 кусок)"], proteins: 14, fats: 9, carbs: 35, calories: 300 },
          { name: "Перед сном", items: ["Йогурт без сахара (100 г)"], proteins: 4, fats: 1, carbs: 10, calories: 70 }
        ],
        summary: { calories: 1200, macros: { proteins: 120, fats: 40, carbs: 80 } }
      },
      {
        day: "Вторник",
        meals: [
          { name: "Завтрак", items: ["Гречка на воде (50 г)", "Апельсин", "Чай"], proteins: 6, fats: 2, carbs: 50, calories: 250 },
          { name: "Перекус", items: ["Йогурт натуральный (150 г)"], proteins: 5, fats: 2, carbs: 8, calories: 90 },
          { name: "Обед", items: ["Суп овощной", "Индейка отварная (80 г)", "Хлеб цельный"], proteins: 28, fats: 5, carbs: 42, calories: 360 },
          { name: "Ужин", items: ["Омлет из 2 яиц", "Салат из овощей"], proteins: 16, fats: 18, carbs: 10, calories: 320 },
          { name: "Перед сном", items: ["Кефир 1% (200 мл)"], proteins: 5, fats: 2, carbs: 10, calories: 80 }
        ],
        summary: { calories: 1200, macros: { proteins: 120, fats: 40, carbs: 80 } }
      },
      {
        day: "Среда",
        meals: [
          { name: "Завтрак", items: ["Овсяные хлопья (30 г)", "Молоко 1.5% (150 мл)", "Банан"], proteins: 7, fats: 4, carbs: 48, calories: 260 },
          { name: "Перекус", items: ["Миндаль (10 г)", "Йогурт нежирный"], proteins: 4, fats: 6, carbs: 8, calories: 100 },
          { name: "Обед", items: ["Картофель вареный (100 г)", "Рыба на пару (минтай, 90 г)", "Салат из капусты"], proteins: 24, fats: 5, carbs: 48, calories: 340 },
          { name: "Ужин", items: ["Творожная запеканка без сахара"], proteins: 15, fats: 7, carbs: 32, calories: 280 },
          { name: "Перед сном", items: ["Вода или травяной чай"] }
        ],
        summary: { calories: 1200, macros: { proteins: 120, fats: 40, carbs: 80 } }
      },
      {
        day: "Четверг",
        meals: [
          { name: "Завтрак", items: ["Мюсли без сахара (30 г)", "Молоко 1.5% (150 мл)", "Яблоко"], proteins: 7, fats: 4, carbs: 45, calories: 250 },
          { name: "Перекус", items: ["Финики (2 шт)", "Кефир 1% (200 мл)"], proteins: 4, fats: 2, carbs: 22, calories: 120 },
          { name: "Обед", items: ["Лапша гречневая (50 г)", "Котлеты на пару (2 шт)", "Салат из свеклы"], proteins: 26, fats: 5, carbs: 45, calories: 350 },
          { name: "Ужин", items: ["Рыбные тефтели", "Овощи на пару"], proteins: 18, fats: 10, carbs: 28, calories: 300 },
          { name: "Перед сном", items: ["Кефир 1% (200 мл)"], proteins: 5, fats: 2, carbs: 10, calories: 80 }
        ],
        summary: { calories: 1200, macros: { proteins: 120, fats: 40, carbs: 80 } }
      },
      {
        day: "Пятница",
        meals: [
          { name: "Завтрак", items: ["Каша перловая (50 г)", "Чай", "Яблоко"], proteins: 6, fats: 2, carbs: 50, calories: 240 },
          { name: "Перекус", items: ["Творог 5% (70 г)", "Клубника"], proteins: 8, fats: 3, carbs: 8, calories: 110 },
          { name: "Обед", items: ["Суп-пюре из тыквы", "Отварная говядина (70 г)", "Хлеб цельный"], proteins: 24, fats: 6, carbs: 45, calories: 350 },
          { name: "Ужин", items: ["Картофель в мундире", "Салат из овощей"], proteins: 10, fats: 3, carbs: 55, calories: 300 },
          { name: "Перед сном", items: ["Кефир 1% (200 мл)"], proteins: 5, fats: 2, carbs: 10, calories: 80 }
        ],
        summary: { calories: 1200, macros: { proteins: 120, fats: 40, carbs: 80 } }
      },
      {
        day: "Суббота",
        meals: [
          { name: "Завтрак", items: ["Манная каша (50 г)", "Чай с лимоном", "Апельсин"], proteins: 5, fats: 2, carbs: 55, calories: 250 },
          { name: "Перекус", items: ["Йогурт без сахара (150 г)"], proteins: 5, fats: 2, carbs: 10, calories: 90 },
          { name: "Обед", items: ["Картофельное пюре", "Курица отварная (80 г)", "Салат"], proteins: 27, fats: 5, carbs: 50, calories: 360 },
          { name: "Ужин", items: ["Творог 5% (100 г)", "Огурец", "Хлеб цельный"], proteins: 15, fats: 8, carbs: 38, calories: 300 },
          { name: "Перед сном", items: ["Вода или травяной чай"] }
        ],
        summary: { calories: 1200, macros: { proteins: 120, fats: 40, carbs: 80 } }
      },
      {
        day: "Воскресенье",
        meals: [
          { name: "Завтрак", items: ["Гречка на воде (50 г)", "Чай", "Банан"], proteins: 6, fats: 3, carbs: 50, calories: 250 },
          { name: "Перекус", items: ["Кефир 1% (200 мл)", "Миндаль (10 г)"], proteins: 5, fats: 7, carbs: 10, calories: 120 },
          { name: "Обед", items: ["Рис бурый (80 г)", "Рыба на пару (80 г)", "Салат"], proteins: 24, fats: 6, carbs: 48, calories: 350 },
          { name: "Ужин", items: ["Омлет из 2 яиц", "Овощи на пару"], proteins: 18, fats: 18, carbs: 10, calories: 320 },
          { name: "Перед сном", items: ["Кефир 1% (200 мл)"], proteins: 5, fats: 2, carbs: 10, calories: 80 }
        ],
        summary: { calories: 1200, macros: { proteins: 120, fats: 40, carbs: 80 } }
      }
    ],
    "slow-weight-loss": [
      {
        day: "Понедельник",
        meals: [
          { name: "Завтрак", items: ["Овсянка (50 г)", "Банан", "Молоко 1.5% (150 мл)"], proteins: 9, fats: 5, carbs: 55, calories: 300 },
          { name: "Перекус", items: ["Кефир 1% (200 мл)", "Миндаль (10 г)"], proteins: 5, fats: 8, carbs: 10, calories: 150 },
          { name: "Обед", items: ["Рис бурый (80 г)", "Куриная грудка (90 г)", "Овощной салат"], proteins: 30, fats: 6, carbs: 50, calories: 400 },
          { name: "Ужин", items: ["Творог 5% (120 г)", "Огурец", "Хлеб цельный (1 кусок)"], proteins: 16, fats: 9, carbs: 40, calories: 350 },
          { name: "Перед сном", items: ["Йогурт без сахора (100 г)"], proteins: 4, fats: 1, carbs: 10, calories: 70 }
        ],
        summary: { calories: 1500, macros: { proteins: 130, fats: 50, carbs: 110 } }
      },
      {
        day: "Вторник",
        meals: [
          { name: "Завтрак", items: ["Гречка (60 г)", "Апельсин", "Чай с медом"], proteins: 7, fats: 3, carbs: 60, calories: 300 },
          { name: "Перекус", items: ["Йогурт натуральный (150 г)"], proteins: 5, fats: 2, carbs: 10, calories: 100 },
          { name: "Обед", items: ["Суп овощной", "Индейка (100 г)", "Хлеб цельный"], proteins: 32, fats: 6, carbs: 45, calories: 420 },
          { name: "Ужин", items: ["Омлет из 2 яиц", "Салат из овощей"], proteins: 18, fats: 20, carbs: 10, calories: 330 },
          { name: "Перед сном", items: ["Кефир 1% (200 мл)"], proteins: 5, fats: 2, carbs: 10, calories: 80 }
        ],
        summary: { calories: 1500, macros: { proteins: 130, fats: 50, carbs: 110 } }
      },
      {
        day: "Среда",
        meals: [
          { name: "Завтрак", items: ["Овсяные хлопья (40 г)", "Молоко 1.5% (200 мл)", "Яблоко"], proteins: 8, fats: 5, carbs: 55, calories: 310 },
          { name: "Перекус", items: ["Миндаль (15 г)", "Йогурт нежирный"], proteins: 5, fats: 8, carbs: 8, calories: 130 },
          { name: "Обед", items: ["Картофель (120 г)", "Рыба на пару (100 г)", "Салат"], proteins: 24, fats: 6, carbs: 50, calories: 380 },
          { name: "Ужин", items: ["Творожная запеканка без сахара"], proteins: 16, fats: 7, carbs: 40, calories: 320 },
          { name: "Перед сном", items: ["Вода или чай"] }
        ],
        summary: { calories: 1500, macros: { proteins: 130, fats: 50, carbs: 110 } }
      },
      {
        day: "Четверг",
        meals: [
          { name: "Завтрак", items: ["Мюсли без сахара (40 г)", "Молоко 1.5% (150 мл)", "Груша"], proteins: 8, fats: 5, carbs: 50, calories: 300 },
          { name: "Перекус", items: ["Финики (3 шт)", "Кефир 1% (200 мл)"], proteins: 5, fats: 2, carbs: 28, calories: 150 },
          { name: "Обед", items: ["Лапша гречневая (60 г)", "Котлеты на пару (2 шт)", "Салат"], proteins: 28, fats: 5, carbs: 45, calories: 400 },
          { name: "Ужин", items: ["Рыбные тефтели", "Овощи на пару"], proteins: 20, fats: 10, carbs: 30, calories: 300 },
          { name: "Перед сном", items: ["Кефир 1% (200 мл)"], proteins: 5, fats: 2, carbs: 10, calories: 80 }
        ],
        summary: { calories: 1500, macros: { proteins: 130, fats: 50, carbs: 110 } }
      },
      {
        day: "Пятница",
        meals: [
          { name: "Завтрак", items: ["Каша перловая (60 г)", "Чай", "Яблоко"], proteins: 7, fats: 3, carbs: 55, calories: 280 },
          { name: "Перекус", items: ["Творог 5% (80 г)", "Клубника"], proteins: 9, fats: 4, carbs: 9, calories: 120 },
          { name: "Обед", items: ["Суп-пюре из тыквы", "Говядина (80 г)", "Хлеб цельный"], proteins: 26, fats: 7, carbs: 45, calories: 350 },
          { name: "Ужин", items: ["Картофель в мундире", "Салат из овощей"], proteins: 10, fats: 3, carbs: 55, calories: 320 },
          { name: "Перед сном", items: ["Кефир 1% (200 мл)"], proteins: 5, fats: 2, carbs: 10, calories: 80 }
        ],
        summary: { calories: 1500, macros: { proteins: 130, fats: 50, carbs: 110 } }
      },
      {
        day: "Суббота",
        meals: [
          { name: "Завтрак", items: ["Манная каша (60 г)", "Чай с лимоном", "Апельсин"], proteins: 6, fats: 3, carbs: 60, calories: 300 },
          { name: "Перекус", items: ["Йогурт без сахора (150 г)"], proteins: 5, fats: 2, carbs: 10, calories: 120 },
          { name: "Обед", items: ["Картофельное пюре", "Курица отварная (100 г)", "Салат"], proteins: 30, fats: 5, carbs: 55, calories: 420 },
          { name: "Ужин", items: ["Творог 5% (120 г)", "Огурец", "Хлеб"], proteins: 16, fats: 9, carbs: 40, calories: 350 },
          { name: "Перед сном", items: ["Вода или травяной чай"] }
        ],
        summary: { calories: 1500, macros: { proteins: 130, fats: 50, carbs: 110 } }
      },
      {
        day: "Воскресенье",
        meals: [
          { name: "Завтрак", items: ["Гречка (60 г)", "Чай", "Банан"], proteins: 7, fats: 4, carbs: 55, calories: 300 },
          { name: "Перекус", items: ["Кефир 1% (200 мл)", "Миндаль (15 г)"], proteins: 5, fats: 8, carbs: 10, calories: 150 },
          { name: "Обед", items: ["Рис бурый (80 г)", "Рыба на пару (90 г)", "Салат"], proteins: 26, fats: 6, carbs: 48, calories: 350 },
          { name: "Ужин", items: ["Омлет из 2 яиц", "Овощи на пару"], proteins: 18, fats: 18, carbs: 10, calories: 320 },
          { name: "Перед сном", items: ["Кефир 1% (200 мл)"], proteins: 5, fats: 2, carbs: 10, calories: 80 }
        ],
        summary: { calories: 1500, macros: { proteins: 130, fats: 50, carbs: 110 } }
      }
    ],
    "weight-maintenance": [
      {
        day: "Понедельник",
        meals: [
          { name: "Завтрак", items: ["Овсянка (60 г)", "Банан", "Молоко 1.5% (200 мл)"], proteins: 10, fats: 6, carbs: 60, calories: 350 },
          { name: "Перекус", items: ["Кефир 1% (200 мл)", "Миндаль (15 г)"], proteins: 5, fats: 9, carbs: 10, calories: 170 },
          { name: "Обед", items: ["Рис бурый (100 г)", "Куриная грудка (120 г)", "Овощной салат"], proteins: 35, fats: 7, carbs: 55, calories: 450 },
          { name: "Ужин", items: ["Творог 5% (150 г)", "Огурец", "Хлеб цельный (2 куска)"], proteins: 18, fats: 10, carbs: 50, calories: 400 },
          { name: "Перед сном", items: ["Йогурт без сахора (150 г)"], proteins: 5, fats: 2, carbs: 15, calories: 100 }
        ],
        summary: { calories: 1800, macros: { proteins: 140, fats: 60, carbs: 150 } }
      },
      {
        day: "Вторник",
        meals: [
          { name: "Завтрак", items: ["Гречка (70 г)", "Апельсин", "Чай с медом"], proteins: 8, fats: 4, carbs: 65, calories: 300 },
          { name: "Перекус", items: ["Йогурт натуральный (180 г)", "Мёд (1 ст.л.)", "Мюсли (25 г)"], proteins: 7, fats: 8, carbs: 35, calories: 270 },
          { name: "Обед", items: ["Суп овощной", "Индейка (120 г)", "Хлеб цельный (2 куска)"], proteins: 32, fats: 6, carbs: 45, calories: 420 },
          { name: "Ужин", items: ["Омлет из 3 яиц", "Салат из овощей"], proteins: 20, fats: 25, carbs: 12, calories: 380 },
          { name: "Перед сном", items: ["Кефир 1% (200 мл)"], proteins: 5, fats: 2, carbs: 10, calories: 80 }
        ],
        summary: { calories: 1800, macros: { proteins: 140, fats: 60, carbs: 150 } }
      },
      {
        day: "Среда",
        meals: [
          { name: "Завтрак", items: ["Овсяные хлопья (50 г)", "Молоко 1.5% (200 мл)", "Яблоко"], proteins: 9, fats: 5, carbs: 55, calories: 310 },
          { name: "Перекус", items: ["Миндаль (20 г)", "Йогурт нежирный"], proteins: 5, fats: 9, carbs: 8, calories: 150 },
          { name: "Обед", items: ["Картофель (120 г)", "Рыба на пару (100 г)", "Салат"], proteins: 24, fats: 6, carbs: 50, calories: 380 },
          { name: "Ужин", items: ["Творожная запеканка без сахара"], proteins: 16, fats: 7, carbs: 40, calories: 320 },
          { name: "Перед сном", items: ["Вода или чай"] }
        ],
        summary: { calories: 1800, macros: { proteins: 140, fats: 60, carbs: 150 } }
      },
      {
        day: "Четверг",
        meals: [
          { name: "Завтрак", items: ["Мюсли без сахара (40 г)", "Молоко 1.5% (150 мл)", "Груша"], proteins: 8, fats: 5, carbs: 50, calories: 300 },
          { name: "Перекус", items: ["Финики (4 шт)", "Кефир 1% (200 мл)"], proteins: 5, fats: 2, carbs: 28, calories: 150 },
          { name: "Обед", items: ["Спагетти с мясным соусом", "Хлеб", "Сыр"], proteins: 30, fats: 22, carbs: 70, calories: 650 },
          { name: "Ужин", items: ["Пицца домашняя", "Салат"], proteins: 22, fats: 22, carbs: 65, calories: 600 },
          { name: "Перед сном", items: ["Коктейль из молока, банана и протеина"], proteins: 12, fats: 8, carbs: 40, calories: 300 }
        ],
        summary: { calories: 1800, macros: { proteins: 140, fats: 60, carbs: 150 } }
      },
      {
        day: "Пятница",
        meals: [
          { name: "Завтрак", items: ["Гречка (70 г)", "Сливочное масло (10 г)", "Яйца (3 шт)", "Апельсин"], proteins: 16, fats: 14, carbs: 50, calories: 450 },
          { name: "Перекус", items: ["Банан", "Арахисовая паста (1 ст.л.)"], proteins: 6, fats: 12, carbs: 25, calories: 250 },
          { name: "Обед", items: ["Рис (130 г)", "Говядина (130 г)", "Картофель (100 г)", "Салат с авокадо"], proteins: 35, fats: 18, carbs: 65, calories: 600 },
          { name: "Ужин", items: ["Паста с сыром", "Овощи на гриле"], proteins: 22, fats: 20, carbs: 60, calories: 550 },
          { name: "Перед сном", items: ["Кефир 1% (200 мл)"], proteins: 5, fats: 2, carbs: 10, calories: 80 }
        ],
        summary: { calories: 1800, macros: { proteins: 140, fats: 60, carbs: 150 } }
      },
      {
        day: "Суббота",
        meals: [
          { name: "Завтрак", items: ["Омлет из 3 яиц", "Хлеб тостовый (2 куска)", "Авокадо (40 г)", "Апельсин"], proteins: 18, fats: 22, carbs: 45, calories: 500 },
          { name: "Перекус", items: ["Кефир 1% (200 мл)", "Миндаль (15 г)", "Сухофрукты (15 г)"], proteins: 5, fats: 8, carbs: 25, calories: 220 },
          { name: "Обед", items: ["Рис белый (130 г)", "Рыба жареная (130 г)", "Картофель (100 г)"], proteins: 30, fats: 22, carbs: 65, calories: 600 },
          { name: "Ужин", items: ["Картофельное пюре с маслом", "Курица с соусом", "Салат с орехами"], proteins: 25, fats: 18, carbs: 60, calories: 550 },
          { name: "Перед сном", items: ["Коктейль из молока, банана и протеина"], proteins: 12, fats: 8, carbs: 40, calories: 300 }
        ],
        summary: { calories: 1800, macros: { proteins: 140, fats: 60, carbs: 150 } }
      },
      {
        day: "Воскресенье",
        meals: [
          { name: "Завтрак", items: ["Овсянка (80 г)", "Молоко 1.5% (250 мл)", "Мёд (1 ст.л.)", "Банан"], proteins: 14, fats: 10, carbs: 80, calories: 500 },
          { name: "Перекус", items: ["Кефир 1% (200 мл)", "Миндаль (15 г)", "Сухофрукты (15 г)"], proteins: 5, fats: 8, carbs: 25, calories: 220 },
          { name: "Обед", items: ["Спагетти с мясным соусом", "Хлеб", "Сыр"], proteins: 30, fats: 22, carbs: 70, calories: 650 },
          { name: "Ужин", items: ["Пицца домашняя", "Салат"], proteins: 22, fats: 22, carbs: 65, calories: 600 },
          { name: "Перед сном", items: ["Коктейль из молока, банана и протеина"], proteins: 12, fats: 8, carbs: 40, calories: 300 }
        ],
        summary: { calories: 1800, macros: { proteins: 140, fats: 60, carbs: 150 } }
      }
    ],
    "slow-weight-gain": [
      {
        day: "Понедельник",
        meals: [
          { name: "Завтрак", items: ["Овсянка (70 г)", "Банан", "Молоко 1.5% (250 мл)", "Мёд (1 ст.л.)"], proteins: 12, fats: 8, carbs: 70, calories: 450 },
          { name: "Перекус", items: ["Кефир 1% (200 мл)", "Миндаль (15 г)", "Сухофрукты (15 г)"], proteins: 5, fats: 8, carbs: 25, calories: 220 },
          { name: "Обед", items: ["Рис бурый (100 г)", "Куриная грудка (120 г)", "Авокадо (30 г)", "Овощной салат"], proteins: 35, fats: 10, carbs: 60, calories: 550 },
          { name: "Ужин", items: ["Творог 5% (180 г)", "Орехи (15 г)", "Хлеб цельный (2 куска)"], proteins: 20, fats: 12, carbs: 50, calories: 450 },
          { name: "Перед сном", items: ["Коктейль из молока, банана и протеина"], proteins: 10, fats: 6, carbs: 30, calories: 250 }
        ],
        summary: { calories: 2000, macros: { proteins: 150, fats: 70, carbs: 200 } }
      },
      {
        day: "Вторник",
        meals: [
          { name: "Завтрак", items: ["Гречка (80 г)", "Яйца (3 шт)", "Сливочное масло (10 г)", "Апельсин"], proteins: 14, fats: 12, carbs: 55, calories: 450 },
          { name: "Перекус", items: ["Банан", "Арахисовая паста (1 ст.л.)"], proteins: 6, fats: 12, carbs: 25, calories: 250 },
          { name: "Обед", items: ["Суп овощной с рисом", "Говядина (120 г)", "Картофель фри (100 г)"], proteins: 35, fats: 18, carbs: 65, calories: 600 },
          { name: "Ужин", items: ["Паста с сыром", "Овощи на гриле"], proteins: 22, fats: 20, carbs: 60, calories: 550 },
          { name: "Перед сном", items: ["Коктейль из молока, банана и протеина"], proteins: 10, fats: 6, carbs: 30, calories: 250 }
        ],
        summary: { calories: 2000, macros: { proteins: 150, fats: 70, carbs: 200 } }
      },
      {
        day: "Среда",
        meals: [
          { name: "Завтрак", items: ["Омлет из 3 яиц", "Хлеб тостовый (2 куска)", "Авокадо (40 г)", "Апельсин"], proteins: 18, fats: 22, carbs: 45, calories: 500 },
          { name: "Перекус", items: ["Банан", "Арахисовая паста (1 ст.л.)"], proteins: 6, fats: 12, carbs: 25, calories: 250 },
          { name: "Обед", items: ["Рис белый (130 г)", "Рыба жареная (130 г)", "Картофель (100 г)"], proteins: 30, fats: 22, carbs: 65, calories: 600 },
          { name: "Ужин", items: ["Картофельное пюре с маслом", "Курица с соусом", "Салат с орехами"], proteins: 25, fats: 18, carbs: 60, calories: 550 },
          { name: "Перед сном", items: ["Коктейль из молока, банана и протеина"], proteins: 10, fats: 6, carbs: 30, calories: 250 }
        ],
        summary: { calories: 2000, macros: { proteins: 150, fats: 70, carbs: 200 } }
      },
      {
        day: "Четверг",
        meals: [
          { name: "Завтрак", items: ["Овсянка (80 г)", "Молоко 1.5% (250 мл)", "Мёд (1 ст.л.)", "Банан"], proteins: 14, fats: 10, carbs: 80, calories: 500 },
          { name: "Перекус", items: ["Кефир 1% (200 мл)", "Миндаль (15 г)", "Сухофрукты (15 г)"], proteins: 5, fats: 8, carbs: 25, calories: 220 },
          { name: "Обед", items: ["Спагетти с мясным соусом", "Хлеб", "Сыр"], proteins: 30, fats: 22, carbs: 70, calories: 650 },
          { name: "Ужин", items: ["Пицца домашняя", "Салат"], proteins: 22, fats: 22, carbs: 65, calories: 600 },
          { name: "Перед сном", items: ["Коктейль из молока, банана и протеина"], proteins: 10, fats: 6, carbs: 30, calories: 250 }
        ],
        summary: { calories: 2000, macros: { proteins: 150, fats: 70, carbs: 200 } }
      },
      {
        day: "Пятница",
        meals: [
          { name: "Завтрак", items: ["Гречка (80 г)", "Сливочное масло (10 г)", "Яйца (3 шт)", "Апельсин"], proteins: 16, fats: 14, carbs: 50, calories: 450 },
          { name: "Перекус", items: ["Банан", "Арахисовая паста (1 ст.л.)"], proteins: 6, fats: 12, carbs: 25, calories: 250 },
          { name: "Обед", items: ["Рис (130 г)", "Говядина (130 г)", "Картофель (100 г)", "Салат с авокадо"], proteins: 35, fats: 18, carbs: 65, calories: 600 },
          { name: "Ужин", items: ["Паста с сыром", "Овощи на гриле"], proteins: 22, fats: 20, carbs: 60, calories: 550 },
          { name: "Перед сном", items: ["Коктейль из молока, банана и протеина"], proteins: 10, fats: 6, carbs: 30, calories: 250 }
        ],
        summary: { calories: 2000, macros: { proteins: 150, fats: 70, carbs: 200 } }
      },
      {
        day: "Суббота",
        meals: [
          { name: "Завтрак", items: ["Омлет из 3 яиц", "Хлеб тостовый (2 куска)", "Авокадо (40 г)", "Апельсин"], proteins: 18, fats: 22, carbs: 45, calories: 500 },
          { name: "Перекус", items: ["Кефир 1% (200 мл)", "Миндаль (15 г)", "Сухофрукты (15 г)"], proteins: 5, fats: 8, carbs: 25, calories: 220 },
          { name: "Обед", items: ["Рис белый (130 г)", "Рыба жареная (130 г)", "Картофель (100 г)"], proteins: 30, fats: 22, carbs: 65, calories: 600 },
          { name: "Ужин", items: ["Картофельное пюре с маслом", "Курица с соусом", "Салат с орехами"], proteins: 25, fats: 18, carbs: 60, calories: 550 },
          { name: "Перед сном", items: ["Коктейль из молока, банана и протеина"], proteins: 10, fats: 6, carbs: 30, calories: 250 }
        ],
        summary: { calories: 2000, macros: { proteins: 150, fats: 70, carbs: 200 } }
      },
      {
        day: "Воскресенье",
        meals: [
          { name: "Завтрак", items: ["Овсянка (80 г)", "Молоко 1.5% (250 мл)", "Мёд (1 ст.л.)", "Банан"], proteins: 14, fats: 10, carbs: 80, calories: 500 },
          { name: "Перекус", items: ["Кефир 1% (200 мл)", "Миндаль (15 г)", "Сухофрукты (15 г)"], proteins: 5, fats: 8, carbs: 25, calories: 220 },
          { name: "Обед", items: ["Спагетти с мясным соусом", "Хлеб", "Сыр"], proteins: 30, fats: 22, carbs: 70, calories: 650 },
          { name: "Ужин", items: ["Пицца домашняя", "Салат"], proteins: 22, fats: 22, carbs: 65, calories: 600 },
          { name: "Перед сном", items: ["Коктейль из молока, банана и протеина"], proteins: 10, fats: 6, carbs: 30, calories: 250 }
        ],
        summary: { calories: 2000, macros: { proteins: 150, fats: 70, carbs: 200 } }
      }
    ],
    "fast-weight-gain": [
      {
        day: "Понедельник",
        meals: [
          { name: "Завтрак", items: ["Овсянка (80 г)", "Банан", "Молоко 1.5% (300 мл)", "Мёд (1 ст.л.)"], proteins: 14, fats: 10, carbs: 80, calories: 500 },
          { name: "Перекус", items: ["Кефир 1% (200 мл)", "Миндаль (20 г)", "Сухофрукты (20 г)"], proteins: 6, fats: 10, carbs: 30, calories: 250 },
          { name: "Обед", items: ["Рис бурый (120 г)", "Куриная грудка (150 г)", "Авокадо (50 г)", "Овощной салат"], proteins: 40, fats: 12, carbs: 70, calories: 600 },
          { name: "Ужин", items: ["Творог 5% (200 г)", "Орехи (20 г)", "Хлеб цельный (2 куска)"], proteins: 22, fats: 15, carbs: 60, calories: 500 },
          { name: "Перед сном", items: ["Коктейль из молока, банана и протеина"], proteins: 12, fats: 8, carbs: 40, calories: 300 }
        ],
        summary: { calories: 2200, macros: { proteins: 160, fats: 80, carbs: 220 } }
      },
      {
        day: "Вторник",
        meals: [
          { name: "Завтрак", items: ["Гречка (100 г)", "Яйца (3 шт)", "Сливочное масло (10 г)", "Апельсин"], proteins: 16, fats: 14, carbs: 55, calories: 500 },
          { name: "Перекус", items: ["Банан", "Арахисовая паста (1 ст.л.)"], proteins: 6, fats: 12, carbs: 25, calories: 250 },
          { name: "Обед", items: ["Суп овощной с рисом", "Говядина (150 г)", "Картофель фри (100 г)"], proteins: 40, fats: 20, carbs: 70, calories: 650 },
          { name: "Ужин", items: ["Паста с сыром", "Овощи на гриле"], proteins: 25, fats: 22, carbs: 70, calories: 600 },
          { name: "Перед сном", items: ["Коктейль из молока, банана и протеина"], proteins: 12, fats: 8, carbs: 40, calories: 300 }
        ],
        summary: { calories: 2200, macros: { proteins: 160, fats: 80, carbs: 220 } }
      },
      {
        day: "Среда",
        meals: [
          { name: "Завтрак", items: ["Омлет из 4 яиц", "Хлеб тостовый (2 куска)", "Авокадо (50 г)", "Апельсин"], proteins: 20, fats: 25, carbs: 45, calories: 550 },
          { name: "Перекус", items: ["Банан", "Арахисовая паста (1 ст.л.)"], proteins: 6, fats: 12, carbs: 25, calories: 250 },
          { name: "Обед", items: ["Рис белый (150 г)", "Рыба жареная (150 г)", "Картофель фри (100 г)"], proteins: 35, fats: 25, carbs: 70, calories: 650 },
          { name: "Ужин", items: ["Картофельное пюре с маслом", "Курица с соусом", "Салат с орехами"], proteins: 25, fats: 18, carbs: 60, calories: 550 },
          { name: "Перед сном", items: ["Коктейль из молока, банана и протеина"], proteins: 12, fats: 8, carbs: 40, calories: 300 }
        ],
        summary: { calories: 2200, macros: { proteins: 160, fats: 80, carbs: 220 } }
      },
      {
        day: "Четверг",
        meals: [
          { name: "Завтрак", items: ["Овсянка (100 г)", "Молоко 1.5% (300 мл)", "Мёд (2 ст.л.)", "Банан"], proteins: 16, fats: 12, carbs: 90, calories: 600 },
          { name: "Перекус", items: ["Кефир 1% (200 мл)", "Миндаль (20 г)", "Сухофрукты (20 г)"], proteins: 6, fats: 10, carbs: 30, calories: 250 },
          { name: "Обед", items: ["Спагетти с мясным соусом", "Хлеб", "Сыр"], proteins: 35, fats: 25, carbs: 70, calories: 700 },
          { name: "Ужин", items: ["Пицца домашняя", "Салат"], proteins: 22, fats: 22, carbs: 65, calories: 600 },
          { name: "Перед сном", items: ["Коктейль из молока, банана и протеина"], proteins: 12, fats: 8, carbs: 40, calories: 300 }
        ],
        summary: { calories: 2200, macros: { proteins: 160, fats: 80, carbs: 220 } }
      },
      {
        day: "Пятница",
        meals: [
          { name: "Завтрак", items: ["Гречка (100 г)", "Сливочное масло (10 г)", "Яйца (3 шт)", "Апельсин"], proteins: 16, fats: 14, carbs: 50, calories: 450 },
          { name: "Перекус", items: ["Банан", "Арахисовая паста (1 ст.л.)"], proteins: 6, fats: 12, carbs: 25, calories: 250 },
          { name: "Обед", items: ["Рис (150 г)", "Говядина (150 г)", "Картофель фри (100 г)", "Салат с авокадо"], proteins: 40, fats: 20, carbs: 65, calories: 650 },
          { name: "Ужин", items: ["Паста с сыром", "Овощи на гриле"], proteins: 22, fats: 20, carbs: 60, calories: 550 },
          { name: "Перед сном", items: ["Коктейль из молока, банана и протеина"], proteins: 12, fats: 8, carbs: 40, calories: 300 }
        ],
        summary: { calories: 2200, macros: { proteins: 160, fats: 80, carbs: 220 } }
      },
      {
        day: "Суббота",
        meals: [
          { name: "Завтрак", items: ["Омлет из 4 яиц", "Хлеб тостовый (2 куска)", "Сыр", "Апельсин"], proteins: 22, fats: 25, carbs: 45, calories: 500 },
          { name: "Перекус", items: ["Кефир 1% (200 мл)", "Миндаль (20 г)", "Сухофрукты (20 г)"], proteins: 6, fats: 10, carbs: 30, calories: 250 },
          { name: "Обед", items: ["Рис белый (150 г)", "Рыба жареная (150 г)", "Картофель фри (100 г)"], proteins: 35, fats: 25, carbs: 65, calories: 650 },
          { name: "Ужин", items: ["Картофельное пюре с маслом", "Курица с соусом", "Салат с орехами"], proteins: 25, fats: 18, carbs: 60, calories: 550 },
          { name: "Перед сном", items: ["Коктейль из молока, банана и протеина"], proteins: 12, fats: 8, carbs: 40, calories: 300 }
        ],
        summary: { calories: 2200, macros: { proteins: 160, fats: 80, carbs: 220 } }
      },
      {
        day: "Воскресенье",
        meals: [
          { name: "Завтрак", items: ["Овсянка (100 г)", "Молоко 1.5% (300 мл)", "Мёд (2 ст.л.)", "Банан"], proteins: 16, fats: 12, carbs: 90, calories: 600 },
          { name: "Перекус", items: ["Кефир 1% (200 мл)", "Миндаль (20 г)", "Сухофрукты (20 г)"], proteins: 6, fats: 10, carbs: 30, calories: 250 },
          { name: "Обед", items: ["Спагетти с мясным соусом", "Хлеб", "Сыр"], proteins: 35, fats: 25, carbs: 70, calories: 700 },
          { name: "Ужин", items: ["Пицца домашняя", "Салат"], proteins: 22, fats: 22, carbs: 65, calories: 650 },
          { name: "Перед сном", items: ["Коктейль из молока, банана и протеина"], proteins: 12, fats: 8, carbs: 40, calories: 300 }
        ],
        summary: { calories: 2200, macros: { proteins: 160, fats: 80, carbs: 220 } }
      }
    ]
  };

// Прогноз потери/набора веса
function updateForecast(summary) {
  const deficit = summary.calories - 2000; // предполагаем TDEE = 2000 ккал
  const weightChangePerWeek = (deficit / 7700) * -1; // 1 кг ≈ 7700 ккал
  const direction = weightChangePerWeek > 0 ? "потеряете" : "наберете";
  document.getElementById("forecastInfo").textContent =
    `На текущем потреблении вы будете ${Math.abs(weightChangePerWeek).toFixed(2)} кг в неделю.`;
}

// Экспорт в PDF
function exportToPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text("Рацион питания", 10, 10);
  doc.setFontSize(12);

  let y = 20;
  const plan = mealPlans[getActiveGoal()][selectedDay];
  doc.text(`День: ${plan.day}`, 10, y += 10);
  plan.meals.forEach(meal => {
    doc.text(`${meal.name} (${meal.calories} ккал)`, 10, y += 10);
    meal.items.forEach(item => {
      doc.text(`• ${item}`, 15, y += 7);
    });
  });

  doc.save('рацион.pdf');
}

// Переключение дней
function getActiveGoal() {
  return document.getElementById("goal").value;
}

function renderDay() {
  const goal = getActiveGoal();
  const plans = mealPlans[goal];
  const currentPlan = plans[selectedDay];

  document.getElementById("dayName").textContent = currentPlan.day;
  const caloriesInfo = document.getElementById("caloriesInfo");
  const macrosInfo = document.getElementById("macrosInfo");
  const mealsContainer = document.getElementById("mealsContainer");

  caloriesInfo.textContent = `Калории: ${currentPlan.summary.calories} ккал`;
  macrosInfo.textContent = `БЖУ: Б: ${currentPlan.summary.macros.proteins} г / Ж: ${currentPlan.summary.macros.fats} г / У: ${currentPlan.summary.macros.carbs} г`;

  mealsContainer.innerHTML = "";
  currentPlan.meals.forEach(meal => {
    const card = document.createElement("div");
    card.className = "bg-gray-800 rounded-lg overflow-hidden shadow-md";
    card.innerHTML = `
      <div class="bg-purple-600 px-3 py-2">
        <h3 class="font-semibold text-sm">${meal.name} (${meal.calories} ккал)</h3>
      </div>
      <ul class="p-3 space-y-1 text-sm list-disc pl-5">
        ${meal.items.map(item => `<li>${item}</li>`).join("")}
      </ul>
      <div class="px-3 py-1 text-xs text-gray-400 border-t border-gray-700">
        Б: ${meal.proteins || 0} г / Ж: ${meal.fats || 0} г / У: ${meal.carbs || 0} г
      </div>
    `;
    mealsContainer.appendChild(card);
  });

  updateForecast(currentPlan.summary);
}

function nextDay() {
  const goal = getActiveGoal();
  selectedDay = (selectedDay + 1) % mealPlans[goal].length;
  renderDay();
}

function prevDay() {
  const goal = getActiveGoal();
  selectedDay = (selectedDay - 1 + mealPlans[goal].length) % mealPlans[goal].length;
  renderDay();
}

function downloadProducts() {
  fetch('products.json')
    .then(response => response.json())
    .then(data => {
      let content = "Название\tКалории\tБелки\tЖиры\tУглеводы\n";
      data.products.forEach(p => {
        content += `${p.name}\t${p.calories}\t${p.proteins}\t${p.fats}\t${p.carbs}\n`;
      });

      const blob = new Blob([content], { type: 'text/plain' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'продукты.txt';
      link.click();
    });
}

// Инициализация
window.onload = () => {
  renderDay();

  // Подключение jspdf
  const script = document.createElement("script");
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js ";
  script.onload = () => console.log("jspdf загружен");
  document.head.appendChild(script);
};