const menuItems = [
  {
    id: 1,
    name: 'Classic Baklava',
    category: 'baklava',
    price: 210,
    description: 'Layers of phyllo dough filled with chopped nuts and sweetened with syrup',
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=500'
  },
  {
    id: 2,
    name: 'Cheese Kunafa',
    category: 'kunafa',
    price: 280,
    description: 'Shredded phyllo dough with sweet cheese filling, soaked in sweet syrup',
    image: 'https://images.unsplash.com/photo-1611293388250-580b08c4a145?w=500'
  },
  {
    id: 3,
    name: 'Date Mamoul',
    category: 'mamoul',
    price: 190,
    description: 'Shortbread cookies filled with date paste and dusted with powdered sugar',
    image: 'https://images.unsplash.com/photo-1593347535897-85b575090d91?w=500'
  },
  {
    id: 4,
    name: 'Pistachio Baklava',
    category: 'baklava',
    price: 49,
    description: 'Traditional baklava made with pure pistachio filling',
    image: 'https://images.unsplash.com/photo-1583582101524-0b003ef0b69a?w=500'
  },
  {
    id: 5,
    name: 'Nutella Kunafa',
    category: 'kunafa',
    price: 159,
    description: 'Modern twist on kunafa with rich Nutella filling',
    image: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=500'
  },
  {
    id: 6,
    name: 'Walnut Mamoul',
    category: 'mamoul',
    price: 499,
    description: 'Traditional mamoul cookies filled with crushed walnuts',
    image: 'https://images.unsplash.com/photo-1558401391-7899b4bd5bbf?w=500'
  }
];

function createMenuCard(item) {
  return `
    <div class="menu-item" data-category="${item.category}">
      <img src="${item.image}" alt="${item.name}">
      <div class="menu-item-content">
        <h2>${item.name}</h2>
        <p>${item.description}</p>
        <span class="price">Rs.${item.price}</span>
      </div>
    </div>
  `;
}

function displayMenuItems(items) {
  const menuContainer = document.getElementById('menu-container');
  menuContainer.innerHTML = items.map(item => createMenuCard(item)).join('');
}

function setupFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Filter items
      const category = button.dataset.category;
      const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
      
      displayMenuItems(filteredItems);
    });
  });
}

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(menuItems);
  setupFilters();
});