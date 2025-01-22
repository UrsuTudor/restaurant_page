import "./styles.css"
import { pageLoad } from "./main_content.js"
import { menuLoad } from "./menu_content.js"
import { aboutLoad } from "./about_content.js"

function clearContent() {
  const content = document.querySelector("#content")
  content.textContent = ""
}

const home_btn = document.querySelector("#home_btn")
home_btn.addEventListener('click', () => { clearContent(); pageLoad(); });

const menu_btn = document.querySelector("#menu_btn")
menu_btn.addEventListener('click', () => { clearContent(); menuLoad(); });

const about_btn = document.querySelector("#about_btn")
about_btn.addEventListener('click', () => { clearContent(); aboutLoad(); });

pageLoad()
