function menuLoad() {
  const content = document.querySelector("#content")

  const menuItems = [
    {
      name: 'Capricciosa',
      weight: '665g',
      toppings: 'tomato sauce, mozzarella, ham, mushrooms, corn, olives, peppers',
    },
    {
      name: 'Prosciutto Funghi',
      weight: '560g',
      toppings: 'tomato sauce, mozzarella, ham, mushrooms',
    },
    {
      name: 'Quattro Formaggi',
      weight: '540g',
      toppings: 'tomato sauce, mozzarella, gorgonzola, parmesan, cedar',
    },
    {
      name: 'Canibale',
      weight: '660g',
      toppings: 'tomato sauce, mozzarella, prosciutto, salami, bacon, olives, corn',
    },
  ];
  

  menuItems.forEach(item => {
    const pizzaHTML = `
    <div class="menu_item">
      <h2>${item.name}</h2>
      <p><strong>Weight:</strong> ${item.weight}</p>
      <p><strong>Toppings:</strong> ${item.toppings}</p>
    </div>
  `;
    content.insertAdjacentHTML('beforeend', pizzaHTML)
  })
}

export {menuLoad}
