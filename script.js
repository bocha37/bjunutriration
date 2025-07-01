document.getElementById('bju-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const gender = document.getElementById('gender').value;
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  const age = parseInt(document.getElementById('age').value);
  const activity = parseFloat(document.getElementById('activity').value);
  const goal = parseFloat(document.getElementById('goal').value);

  if (!weight || !height || !age) {
    alert("Заполните все поля!");
    return;
  }

  let bmr;
  if (gender === 'female') {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  }

  const tdee = bmr * activity;
  const calories = Math.round(tdee * goal);

  // Белки
  let proteinPerKg = 2;
  if (goal <= 0.85) proteinPerKg = 1.8;
  if (goal >= 1.1) proteinPerKg = 2.2;
  const proteins = Math.round(proteinPerKg * weight);

  // Жиры
  const fats = Math.round((0.25 * calories) / 9);

  // Углеводы
  const carbs = Math.round((calories - (proteins * 4 + fats * 9)) / 4);

  // Вода
  const water = Math.round(weight * 30);

  // Дефицит/профицит
  const calorieDifference = calories - tdee;
  const differenceText = document.getElementById("difference-text");
  if (calorieDifference < 0) {
    differenceText.textContent = `Дефицит: ${Math.abs(calorieDifference)} ккал`;
  } else if (calorieDifference > 0) {
    differenceText.textContent = `Профицит: ${calorieDifference} ккал`;
  } else {
    differenceText.textContent = `Норма: 0 ккал`;
  }
  document.getElementById('difference').classList.remove('hidden');

  // Вывод результатов
  document.getElementById('calories').textContent = calories;
  document.getElementById('proteins').textContent = proteins;
  document.getElementById('fats').textContent = fats;
  document.getElementById('carbs').textContent = carbs;
  document.getElementById('water').textContent = water;

  // Рацион
  const rationList = document.getElementById('ration-list');
  rationList.innerHTML = '';
  let rationItems = [];

  if (goal <= 0.85) {
    rationItems = [
      "Больше овощей и зелени",
      "Постные белки: курица, индейка, яйца, рыба",
      "Умеренное количество сложных углеводов: гречка, киноа, овсянка",
      "Минимум сахара и простых углеводов",
      "Жиры из орехов, авокадо, оливкового масла"
    ];
  } else if (goal === 1.0) {
    rationItems = [
      "Сбалансированное питание: белки, жиры, углеводы",
      "Источники белков: мясо, рыба, творог, бобовые",
      "Сложные углеводы: рис, макароны из твёрдых сортов, картофель",
      "Полезные жиры: орехи, авокадо, оливковое масло",
      "Фрукты и овощи ежедневно"
    ];
  } else if (goal >= 1.1) {
    rationItems = [
      "Высококалорийные продукты: бананы, авокадо, орехи",
      "Частые приёмы пищи (5–6 раз в день)",
      "Больше углеводов: рис, паста, овсянка, хлеб",
      "Качественные белки: курица, яйца, протеин",
      "Дополнительно: омега-3, BCAA, креатин"
    ];
  }

  rationItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    rationList.appendChild(li);
  });

  // Тренировки
  const workoutText = document.getElementById('workout-text');
  let workoutPlan = "";

  if (goal === 0.8 || goal === 0.85) {
    workoutPlan = "Фокусируйся на кардио и силовых тренировках 4–5 раз в неделю. Умеренная интенсивность.";
  } else if (goal === 1.0) {
    workoutPlan = "Тренировки 3–4 раза в неделю: комбинация силовых и кардио для поддержания формы.";
  } else if (goal === 1.1 || goal === 1.2) {
    workoutPlan = "Силовые тренировки 5–6 раз в неделю. Акцент на прогрессии нагрузки и полноценном отдыхе.";
  }

  workoutText.textContent = workoutPlan;

  // Показываем всё
  document.getElementById('water-result').classList.remove('hidden');
  document.getElementById('result').classList.remove('hidden');
  document.getElementById('ration').classList.remove('hidden');
  document.getElementById('workout').classList.remove('hidden');
});