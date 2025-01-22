function aboutLoad() {
  const content = document.querySelector("#content")

  const sections = [
    {
      title: "Our Story",
      content: "Our journey began with a simple dream: to bring the rich flavors of Italy to our community. Inspired by traditional recipes passed down through generations, we combine fresh, locally sourced ingredients with time-honored techniques to craft pizzas that are both delicious and unforgettable."
    },
    {
      title: "Our Philosophy",
      content: "At Bear's Pizza, we believe that great food starts with great ingredients. That’s why we use only the finest, hand-picked produce, premium meats, and authentic Italian cheeses. Every pizza is made to order, ensuring that each bite is a perfect balance of flavor and texture."
    },
    {
      title: "What Sets Us Apart",
      content: null,
      list: [
        "Authenticity: Our pizzas are crafted with a genuine wood-fired oven, delivering that signature crispy crust and smoky flavor.",
        "Quality: From our homemade dough to our signature tomato sauce, everything is prepared fresh daily.",
        "Variety: Whether you’re craving a classic Margherita, a rich Quattro Formaggi, or something adventurous like our signature Canibale, we have something for everyone.",
        "Cozy Atmosphere: Step into Bear's Pizza and feel right at home. With warm lighting, comfortable seating, and friendly service, we’ve created the perfect spot to relax and enjoy a meal.",
        "Community: We are proud to be a part of [Your Community Name], and we strive to create a warm, welcoming atmosphere for families, friends, and pizza lovers alike."
      ]
    },
    {
      title: "Beyond Pizza",
      content: "While our pizzas are the star of the show, our menu also features a delightful selection of pastas, salads, and desserts. Don’t forget to pair your meal with a glass of wine from our curated list or a refreshing craft beer."
    },
    {
      title: "Join Us Today",
      content: "Whether you’re dining in, taking out, or celebrating a special occasion, Bear's Pizza is here to make every moment memorable. Come visit us at [Your Address] or order online to enjoy the taste of Italy in the comfort of your home."
    }
  ]

  sections.forEach((section) => {
    const sectionHTML = `
    <h2>${section.title}</h2>
    ${section.content ? `<p>${section.content}</p>` : ""}
    ${section.list ? listHTML(section.list) : ""}
    `

    content.insertAdjacentHTML('beforeend', sectionHTML)
  })

  function listHTML(items) {
    return `<ul>${items.map(item => `<li>${item}</li>`).join("")}</ul>`;
  }
}

export {aboutLoad}
