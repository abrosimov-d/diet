import data from "./menuData.js";
import data2 from "./menuData2.js";

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
        let eatings = ['08:00 завтрак', '10:30 ланч ', '13:00 обед', '16:00 полдник', '18:00 ужин']
        for (let i = 0; i < eatings.length; i++)
            result = result + `<div class="menu-line"><div class="time">${eatings[i]}</div> <div>${this.getData()[this.index][i].title}</div></div>`
        return result;
    }

    getData() {
        console.log(data2())
        return data;
    }
}
