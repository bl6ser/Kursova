const dishes = [
  // 🥗 Салати
  {
    name: 'Салат Цезар',
    price: 245,
    category: 'salads',
    image: 'img/caesar.jpg',
    description: 'Класичний салат з куркою, пармезаном і соусом Цезар.',
    ingredients: 'Курка, салат Романо, пармезан, крутони, соус Цезар'
  },
  {
    name: 'Грецький салат',
    price: 120,
    category: 'salads',
    image: 'img/greek.jpg',
    description: 'Свіжий салат з овочами та сиром фета.',
    ingredients: 'Огірок, помідор, фета, оливки, цибуля, оливкова олія'
  },
  {
    name: 'Салат Капрезе',
    price: 111,
    category: 'salads',
    image: 'img/caprese.jpg',
    description: 'Легкий салат з моцарелою, томатами та базиліком.',
    ingredients: 'Моцарела, помідори, базилік, бальзамік'
  },
  {
    name: 'Паста Карбонара',
    price: 201,
    category: 'main',
    image: 'img/Carbonara.jpg',
    description: 'Італійська паста з беконом та вершковим соусом.',
    ingredients: 'Спагетті, бекон, яйце, пармезан, вершки'
  },
  {
    name: 'Борщ український',
    price: 120,
    category: 'main',
    image: 'img/borscht.jpg',
    description: 'Традиційний український борщ зі сметаною.',
    ingredients: 'Буряк, капуста, морква, картопля, м’ясо, сметана'
  },
  {
    name: 'Рамен з куркою',
    price: 175,
    category: 'main',
    image: 'img/ramen.jpg',
    description: 'Японський суп з локшиною та куркою.',
    ingredients: 'Бульйон, локшина, яйце, курка, гриби'
  },
  {
    name: 'Стейк з яловичини',
    price: 210,
    category: 'meat',
    image: 'img/steak.jpg',
    description: 'Соковитий стейк з травами.',
    ingredients: 'Яловичина, розмарин, часник, спеції'
  },
  {
    name: 'Курка теріякі',
    price: 199,
    category: 'meat',
    image: 'img/teriyaki.jpg',
    description: 'Курка в солодкому соусі теріякі.',
    ingredients: 'Курка, соєвий соус, імбир, мед, кунжут'
  },
  {
    name: 'Рол Філадельфія',
    price: 211,
    category: 'japan',
    image: 'img/philadelphia.jpg',
    description: 'Класичний рол з лососем та сиром філадельфія.',
    ingredients: 'Лосось, сир філадельфія, огірок, рис, норі'
  },
  {
    name: 'Рол Унагі',
    price: 255,
    category: 'japan',
    image: 'img/unagi.jpg',
    description: 'Рол з вугром та соусом унагі.',
    ingredients: 'Вугор, авокадо, рис, норі, кунжут'
  },
  {
    name: 'Бургер BBQ',
    price: 150,
    category: 'street',
    image: 'img/burger.jpg',
    description: 'Соковитий бургер з соусом BBQ.',
    ingredients: 'Булка, яловичина, сир, салат, BBQ соус'
  },
  {
    name: 'Хот-дог класичний',
    price: 90,
    category: 'street',
    image: 'img/hotdog.jpg',
    class: 'hotdog-fix',
    description: 'Смачна сосиска в булці з соусами.',
    ingredients: 'Булка, сосиска, кетчуп, гірчиця'
  },
  {
    name: 'Корн-Дог',
    price: 94,
    category: 'street',
    image: 'img/CornDog.jpg',
    description: 'Кукурудзяний хот-дог на паличці.',
    ingredients: 'Сосиска, кукурудзяне тісто, олія'
  },
  {
    name: 'Рол Дракон',
    price: 435,
    category: 'japan',
    image: 'img/RolDragon.jpg',
    description: 'Фірмовий рол з лососем, авокадо та хрустким кунжутом.',
    ingredients: 'Лосось, авокадо, краб, ікра, сир, кунжут'
  },
  
  {
    name: 'Рол Самурай',
    price: 399,
    category: 'japan',
    image: 'img/RolSamurai.jpg',
    description: 'Пікантний рол із тунцем та соусом теріякі.',
    ingredients: 'Тунець, огірок, манго, мікрозелень, соус теріякі'
  },
  
  {
    name: 'Рол Імператор',
    price: 350,
    category: 'japan',
    image: 'img/RolImperior.jpg',
    description: 'Рол преміум-класу з лососем та ікрою.',
    ingredients: 'Лосось, авокадо, ікра, сир, рис'
  },
  
  {
    name: 'Сирна Бомба',
    price: 277,
    category: 'street',
    image: 'img/cheeseBomb.jpg',
    description: 'Млинці з ніжним розтопленим сиром всередині.',
    ingredients: 'Млинці, твердий сир, зелена цибуля'
  },
  
  {
    name: 'Тако з яловичиною',
    price: 200,
    category: 'street',
    image: 'img/Taco.jpg',
    description: 'Мексиканське тако з пряною яловичиною та овочами.',
    ingredients: 'Тортилья, фарш, помідори, цибуля, зелень'
  },
  
  {
    name: 'Мохіто',
    price: 55,
    category: 'drinks',
    image: 'img/Mohito.jpg',
    description: 'Охолоджений напій з лаймом і м\'ятою.',
    ingredients: 'Лайм, м\'ята, газована вода, цукор, лід'
  },
  
  {
    name: 'Пиво світле',
    price: 60,
    category: 'drinks',
    image: 'img/bear.jpg',
    description: 'Охолоджене розливне пиво з пінкою.',
    ingredients: 'Вода, ячмінь, хміль'
  },
  
  {
    name: 'Панна Котта',
    price: 125,
    category: 'desserts',
    image: 'img/PannaKota.jpg',
    description: 'Ніжний італійський десерт з ягідним соусом.',
    ingredients: 'Вершки, желатин, ваніль, полуниця, малина'
  },
  
  {
    name: 'Шоколадний фондан',
    price: 143,
    category: 'desserts',
    image: 'img/ChokolateFondan.jpg',
    description: 'Теплий шоколадний десерт з рідкою начинкою та морозивом.',
    ingredients: 'Шоколад, борошно, яйця, цукор, морозиво'
  },
  
  {
    name: 'Кебаб на шпажці',
    price: 220,
    category: 'meat',
    image: 'img/Kebab.jpg',
    description: 'Соковитий кебаб з ароматом гриля.',
    ingredients: 'Яловичина, спеції, часник, дерев\'яні шпажки'
  },
  
  {
    name: 'Лазанья болоньєзе',
    price: 164,
    category: 'main',
    image: 'img/LazaniaBolon.jpg',
    description: 'Класична італійська лазанья з м\'ясним соусом.',
    ingredients: 'Листи лазаньї, фарш, томати, бешамель, сир'
  },
  
  {
    name: 'Салат з авокадо',
    price: 167,
    category: 'salads',
    image: 'img/SalatAvokado.png',
    description: 'Легкий салат з авокадо та соєвим соусом.',
    ingredients: 'Авокадо, броколі, огірок, салат, кунжут, соус'
  },
  
  {
    name: 'Салат з креветками',
    price: 179,
    category: 'salads',
    image: 'img/Salatkrevetki.jpg',
    description: 'Салат з креветками, авокадо та яйцем.',
    ingredients: 'Креветки, авокадо, яйце, овочі, лимон'
  },
  
  {
    name: 'BBQ свинина',
    price: 245,
    category: 'meat',
    image: 'img/BBqsvinina.jpg',
    description: 'Реберця під солодким соусом BBQ.',
    ingredients: 'Свинина, BBQ соус, спеції'
  },
  
  {
    name: 'Котлета по-київськи',
    price: 115,
    category: 'meat',
    image: 'img/KotletaKiev.jpg',
    description: 'Смажена куряча котлета з маслом і зеленню.',
    ingredients: 'Курка, вершкове масло, зелень, панірування'
  },
  
  {
    name: 'Плов з куркою',
    price: 200,
    category: 'main',
    image: 'img/PLOV.png',
    description: 'Ароматний плов зі спеціями та шматочками курки.',
    ingredients: 'Рис, курка, морква, спеції, цибуля'
  },
  {
    name: 'Узвар домашній',
    price: 40,
    category: 'drinks',
    image: 'img/uzvar.jpg',
    class: 'uzvar-fix',
    description: 'Солодкий напій з сухофруктів.',
    ingredients: 'Сухофрукти, вода, мед'
  },
  {
    name: 'Матча латте',
    price: 60,
    category: 'drinks',
    image: 'img/matcha.jpg',
    description: 'Зелений чай з молоком.',
    ingredients: 'Матча, молоко, вода, мед'
  },
  {
    name: 'Кола',
    price: 50,
    category: 'drinks',
    image: 'img/cola.jpg',
    description: 'Охолоджений газований напій.',
    ingredients: 'Газована вода, ароматизатор'
  },
  {
    name: 'Тірамісу',
    price: 180,
    category: 'desserts',
    image: 'img/tiramisu.jpg',
    description: 'Італійський десерт з кавою та сиром маскарпоне.',
    ingredients: 'Печиво савоярді, кава, маскарпоне, какао'
  },
  {
    name: 'Чізкейк Нью-Йорк',
    price: 170,
    category: 'desserts',
    image: 'img/cheesecake.jpg',
    class: 'cheesecake-fix',
    description: 'Класичний чізкейк з полуницею.',
    ingredients: 'Сир, печиво, вершки, полуниця'
  },
  

  
  {
    name: 'Французькі макаруни',
    price: 176,
    category: 'desserts',
    image: 'img/macarons.jpg',
    description: 'Кольорові десерти з мигдальним борошном.',
    ingredients: 'Мигдальне борошно, білок, цукор, начинка'
  }
];

let selectedIndexes = new Set();

const savedIndexes = localStorage.getItem('selectedIndexes');
if (savedIndexes) {
  try {
    selectedIndexes = new Set(JSON.parse(savedIndexes));
  } catch (e) {
    selectedIndexes = new Set();
  }
}

function renderDishes() {
  const categories = {
    salads: document.getElementById('salads-list'),
    main: document.getElementById('main-list'),
    meat: document.getElementById('meat-list'),
    japan: document.getElementById('japan-list'),
    street: document.getElementById('street-list'),
    drinks: document.getElementById('drinks-list'),
    desserts: document.getElementById('desserts-list')
  };

  Object.values(categories).forEach(ul => (ul.innerHTML = ''));

  dishes.forEach((dish, index) => {
    const imageClass = dish.class ? `class="${dish.class}"` : '';
    const li = document.createElement('li');
    li.classList.add('fade-in');

    li.innerHTML = `
      <label>
        <input type="checkbox" data-index="${index}" ${selectedIndexes.has(index) ? 'checked' : ''}>
        <img src="${dish.image}" alt="${dish.name}" ${imageClass} data-index="${index}">
        <strong>${dish.name}</strong>
        <span>${dish.price} грн</span>
      </label>
    `;

    li.querySelector('input').addEventListener('change', (e) => {
      if (e.target.checked) {
        selectedIndexes.add(index);
    
        // ✨ Анімація класу
        li.classList.add('added');
        setTimeout(() => li.classList.remove('added'), 400);
    
        // 🛒 Анімація польоту до кошика
        flyToCart(li.querySelector('img'));
    
      } else {
        selectedIndexes.delete(index);
      }
      updateFloatingCart();
    });

    li.querySelector('img').addEventListener('click', () => showModal(dish));
    categories[dish.category].appendChild(li);
  });
   setupFadeInOnScroll();
  updateFloatingCart(); 
}

function calculateTotal() {
  let total = 0;
  selectedIndexes.forEach(index => (total += dishes[index].price));
  document.getElementById('total-price').textContent = `Загальна вартість: ${total} грн`;
  updateFloatingCart();
}

function updateFloatingCart() {
  const cart = document.querySelector('.floating-cart');
  if (!cart) return; 

  const total = [...selectedIndexes].reduce((sum, i) => sum + dishes[i].price, 0);
  localStorage.setItem('selectedIndexes', JSON.stringify([...selectedIndexes]));
  cart.style.display = 'block';
cart.textContent = total > 0 ? `🧾 ${total} грн` : '🧾 Показати чек';
}

function setupActiveCategoryHighlight() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.category-nav a');
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => link.classList.remove('active'));
          const id = entry.target.getAttribute('id');
          const activeLink = document.querySelector(`.category-nav a[href="#${id}"]`);
          if (activeLink) activeLink.classList.add('active');
        }
      });
    },
    { rootMargin: '-50% 0px -50% 0px', threshold: 0.1 }
  );
  sections.forEach(section => observer.observe(section));
}

function setupFadeInOnScroll() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  document.querySelectorAll('.dish-list li').forEach(el => observer.observe(el));
}

function showModal(dish) {
  const modal = document.createElement('div');
  modal.className = 'dish-modal';
  modal.innerHTML = `
    <div class="dish-modal-content">
      <span class="dish-modal-close">&times;</span>
      <img src="${dish.image}" alt="${dish.name}">
      <h3>${dish.name}</h3>
      <p><strong>Інгредієнти:</strong> ${dish.ingredients || 'Не вказано'}</p>
      <p><strong>Опис:</strong> ${dish.description || 'Немає опису'}</p>
    </div>
  `;
  document.body.appendChild(modal);
  modal.querySelector('.dish-modal-close').onclick = () => modal.remove();
  modal.onclick = (e) => {
    if (e.target === modal) modal.remove();
  };
}

  function handlePayment() {
  const dishModal = document.querySelector('.dish-modal');
  if (dishModal) dishModal.remove();

  const existingMsg = document.querySelector('.payment-success');
  if (existingMsg) existingMsg.remove();

 const sound = document.getElementById('payment-sound');
if (sound) {
  sound.pause(); 
  sound.currentTime = 0;
  const playPromise = sound.play();
  if (playPromise !== undefined) {
    playPromise
      .then(() => console.log(" Звук відтворено"))
      .catch(error => console.warn(" Звук не відтворився:", error));
  }
}

  const msg = document.createElement('div');
  msg.className = 'payment-success';
  msg.textContent = 'Дякуємо за оплату!';
  document.body.appendChild(msg);


    
    setTimeout(() => {
      msg.remove();
      selectedIndexes.clear();
      localStorage.removeItem('selectedIndexes');
      updateFloatingCart();
      renderDishes();
      setupFadeInOnScroll();
    }, 3000);
  }

function showFullCart() {
  const modal = document.createElement('div');
  modal.className = 'dish-modal';

  let content = `
    <div class="dish-modal-content">
      <span class="dish-modal-close">&times;</span>
      <h3 style="color: #FF512F; text-align: center;">Ваше замовлення</h3>
  `;

  if (selectedIndexes.size === 0) {
    content += `<p style="text-align: center;">Ви ще нічого не вибрали 🍽️</p>`;
  } else {
    let total = 0;
    content += '<ul>';
    selectedIndexes.forEach(index => {
      const dish = dishes[index];
      total += dish.price;
      content += `
        <li style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px dashed #ccc;">
          <div style="display: flex; align-items: center;">
            <img src="${dish.image}" alt="${dish.name}" class="mini-preview">
            <div>
              <strong>${dish.name}</strong><br>
              <span style="font-size:14px; color:#777;">${dish.price} грн</span>
            </div>
          </div>
          <button class="remove-btn" data-index="${index}" style="
            background: none;
            border: none;
            color: #f45b2a;
            font-size: 18px;
            cursor: pointer;
            padding: 0 6px;
          " title="Видалити">🗑️</button>
        </li>
      `;
    });
    content += '</ul>';
    content += `<p style="margin-top: 16px; font-weight: bold; text-align: center;">Загальна сума: ${total} грн</p>`;
    content += `
      <div style="margin-top: 20px; display: flex; justify-content: center;">
        <button class="pay-btn" onclick="handlePayment()" style="
          background: linear-gradient(90deg, #ff7043, #d972ff);
          color: white;
          padding: 10px 24px;
          font-size: 16px;
          border-radius: 14px;
          border: none;
          cursor: pointer;
          font-weight: 500;
          transition: background 0.3s ease;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        ">
          Оплатити
        </button>
      </div>
    `;
  }

  content += `</div>`;
  modal.innerHTML = content;
  document.body.appendChild(modal);

  modal.querySelector('.dish-modal-close').onclick = () => modal.remove();
  modal.onclick = (e) => {
    if (e.target === modal) modal.remove();
  };

  // 🗑 Обробка кнопок "Видалити"
  modal.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const index = parseInt(e.currentTarget.dataset.index);
      selectedIndexes.delete(index);
      modal.remove();
      showFullCart();
      updateFloatingCart();
      renderDishes();
    });
  });
}




function openSidebarWithAnimation() {
  const sidebar = document.querySelector('.category-nav');
  const content = document.querySelector('.content');
  const overlay = document.getElementById('overlay');

  
  sidebar.classList.add('opening');

 
  sidebar.addEventListener('transitionend', function handler(e) {
    if (e.propertyName === 'transform') {
      sidebar.classList.remove('opening');
      sidebar.classList.remove('collapsed');
      sidebar.removeEventListener('transitionend', handler);
    }
  });

  content.classList.remove('expanded');
  overlay.classList.add('active');
}

const TRANSITION_DURATION = 400; 

function toggleSidebar() {
  const sidebar = document.querySelector('.category-nav');
  const content = document.querySelector('.content');
  const overlay = document.getElementById('overlay');

  if (sidebar.classList.contains('collapsed')) {
    //  Плавне відкриття:
    sidebar.classList.remove('collapsed');
    sidebar.classList.add('opening');
    content.classList.remove('expanded');
    overlay.classList.add('active');

   
    setTimeout(() => {
      sidebar.classList.remove('opening');
    }, 400);
  } else {
    //  Плавне закриття:
    sidebar.classList.add('collapsed');
    content.classList.add('expanded');
    overlay.classList.remove('active');
  }
}

function flyToCart(imgElement) {
  const cart = document.querySelector('.floating-cart');
  if (!cart) return;

  const imgRect = imgElement.getBoundingClientRect();
  const cartRect = cart.getBoundingClientRect();

  const clone = imgElement.cloneNode(true);
  clone.classList.add('fly-image');
  clone.style.top = `${imgRect.top}px`;
  clone.style.left = `${imgRect.left}px`;

  document.body.appendChild(clone);

  requestAnimationFrame(() => {
    clone.style.transform = `translate(${cartRect.left - imgRect.left}px, ${cartRect.top - imgRect.top}px) scale(0.3)`;
    clone.style.opacity = '0';
  });

  setTimeout(() => clone.remove(), 800);
}

window.addEventListener('DOMContentLoaded', () => {
  renderDishes(); 
  setupActiveCategoryHighlight();
  setupFadeInOnScroll();
  updateFloatingCart(); 


  //  Події на іконку меню та оверлей
  const menuToggle = document.querySelector('.menu-toggle');
  const overlay = document.getElementById('overlay');
  const links = document.querySelectorAll('.category-nav a');

  if (menuToggle) menuToggle.addEventListener('click', toggleSidebar);
  if (overlay) overlay.addEventListener('click', toggleSidebar);

  //  Закриття при кліку на пункт категорії
  links.forEach(link => {
    link.addEventListener('click', () => {
      const sidebar = document.querySelector('.category-nav');
      if (!sidebar.classList.contains('collapsed')) toggleSidebar();
    });
  });
});

