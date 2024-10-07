import DayCard from "./app/dayCard.js"
import Toolbar from "./app/toolbar.js"


window.onload = () => {
    console.log('hello')
	let toolbar = new Toolbar();
	let dayCard = new DayCard();
	let appElement = document.querySelector('.app')
	appElement.innerHTML = toolbar.render() + dayCard.render();
}