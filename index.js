import DayCard from "./app/dayCard.js"
import Toolbar from "./app/toolbar.js"
//https://picnicss.com/documentation

window.onload = () => {
    console.log('hello')
	let appElement = document.querySelector('.app')
	let dayCard = new DayCard();
	let toolbar = new Toolbar(dayCard);
	appElement.innerHTML = toolbar.render() + dayCard.render();
	dayCard.init();
	toolbar.init();
}