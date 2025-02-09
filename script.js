
document.getElementById('preferences-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const diet = document.getElementById('diet').value;
    const recipeList = document.getElementById('recipe-list');
    
    
    const recipes = {
      vegetarian: ['Vegetarian Lasagna', 'Grilled Veggie Skewers'],
      vegan: ['Vegan Buddha Bowl', 'Vegan Pancakes'],
      glutenFree: ['Gluten-Free Pizza', 'Quinoa Salad']
    };
    
    
    recipeList.innerHTML = '';
    
    
    recipes[diet].forEach(recipe => {
      const recipeItem = document.createElement('div');
      recipeItem.textContent = recipe;
      recipeItem.className = 'recipe-item';
      recipeList.appendChild(recipeItem);
    });
  });
  
  
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
  });
