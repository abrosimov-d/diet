import data from "./menuData.js";

export default class Menu {
    constructor(index) {
        this.index = Math.abs(index % 8);
    }

    render() {
        return `<div class="menu">
                ${this.getEatings()}
                </div>`
    }

    getEatings() {
        let result = ''
        let eatings = ['00:00', '00:00', '00:00', '00:00', '00:00']
        for (let i = 0; i < eatings.length; i++)
            result = result + `<div class="menu-line"><div class="time">${eatings[i]}</div> <div>${data[this.index][i].title}</div></div>`
        return result;
    }
}
