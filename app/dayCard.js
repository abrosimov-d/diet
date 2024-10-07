import Menu from "./menu.js";

export default class DayCard {
    constructor() {
        this.currentDate = new Date();
        this.element = null;
    }

    prev() {
        this.currentDate = this.addDays(this.currentDate, -1);
        this.element.innerHTML = this.renderInnerHtml();
    }

    next() {
        this.currentDate = this.addDays(this.currentDate, 1);
        this.element.innerHTML = this.renderInnerHtml();
    }

    render() {
        return `<div class="daycard card">
            ${this.renderInnerHtml()}
        </div>`
    }

    renderInnerHtml() {
        return `<div class="current-date">${this.beautyfyDate(this.currentDate)}</div>
            <div class="workdata">${this.getWorkData(this.getDayIndex(this.currentDate))}</div>
            ${this.renderMenu(this.getDayIndex(this.currentDate))}`
    }

    init() {
        this.element = document.querySelector('.daycard')
    }

    addDays(date, days) {
		let result = new Date(date);
		result.setDate(result.getDate() + days)
		return result;
	}

    getDayIndex(date) {
        let firstDay = new Date(2024, 9, 8)
        return Math.floor((date - firstDay) / (1000 * 60 * 60 * 24))
    }

    beautyfyDate(date) {
        let months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сент', 'окт', 'ноя', 'дек',]
        let weekDays = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
        let result = ''
        result = `${date.getDate()} ${months[date.getMonth()]} ${weekDays[date.getDay()]}`
        return result;
    }

    getWorkData(index) {
        let workData = ['Д2', 'О1', 'О2', 'Д1']
        return `${workData[index % 4]}`
    }

    renderMenu(index) {
        let menu = new Menu(index);
        return menu.render()
    }
}