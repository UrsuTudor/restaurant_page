import pizzaImage from "./pizza.jpg"


function pageLoad() {
  const content = document.querySelector("#content")

  const header = document.createElement("h1")
  header.textContent = "Bear's pizza"
  
  const p1 = document.createElement("p")
  p1.textContent = "Whether you need a light meal before hibernation or a lavish feast after a good winter's sleep, our vast variety of pizzas will have you covered."
  
  const p2 = document.createElement("p")
  p2.textContent = "We guarantee a cozy atmosphere, fresh, high-quality ingredients prepared with the care of food lovers who respect themselves and the food they make for others."
  
  const img = document.createElement("img")
  img.src = pizzaImage
  
  content.append(header, img, p1, p2)
  
  const creditHTML = `
   Photo by <a href="https://unsplash.com/@iavnt?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ivan Torres</a> on 
   // <a href="https://unsplash.com/photos/pizza-with-berries-MQUqbmszGGM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        
  `
  content.insertAdjacentHTML('beforeend', creditHTML)
}

export {pageLoad}
