import DayCard from "./app/dayCard.js"
import Icon from "./app/icon.js";
import Toolbar from "./app/toolbar.js"
import Clock from "./clock.js";
//https://picnicss.com/documentation

window.onload = () => {
	let appElement = document.querySelector('.app')
	let dayCard = new DayCard();
	let clock = new Clock();
	let toolbar = new Toolbar(dayCard, clock);
	let icon = new Icon();
	appElement.innerHTML = toolbar.render() + dayCard.render() + icon.render();
	dayCard.init();
	toolbar.init();
	clock.init();
}