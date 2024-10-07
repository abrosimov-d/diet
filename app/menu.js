import data from "./menuData.js";
import data2 from "./menuData2.js";
import data3 from "./menuData3.js";

export default class Menu {
    constructor(index) {
        this.index8 = Math.abs(index % 8);
        this.index = index;
    }

    render() {
        return `<div class="menu">
                ${this.getEatings()}
                </div>`
    }

    getEatings() {
        let result = ''
        let eatings = ['08:00<sup>звтр</sup>', '10:30<sup>ланч</sup> ', '13:00<sup>обед</sup>', '16:00<sup>плдн</sup>', '18:00<sup>ужин</sup>']
        let dishes = ''
        for (let i = 0; i < eatings.length; i++) {
            dishes = this.getData()[this.index].title
            console.log(dishes)
            if (dishes.indexOf('|') > 0) {
                dishes = dishes.replace(/\|([^,]+)/g, '<sup>$1</sup>')
            }
            result = result + `<div class="menu-line"><div class="time">${eatings[i]}</div><div class="dish">${dishes}</div></div>`

        }
        return result;
    }

    getEatings3() {
        let result = ''
        let eatings = ['08:00<sup>звтр</sup>', '10:30<sup>ланч</sup> ', '13:00<sup>обед</sup>', '16:00<sup>плдн</sup>', '18:00<sup>ужин</sup>']
        let dishes = ''
        for (let i = 0; i < eatings.length; i++) {
            //console.log(this.getData()[i].meals)
            result = result + `<div class="menu-line"><div class="time">${eatings[i]}</div><div class="dish">${dishes}</div></div>`

        }
        return result;
    }



    getData() {
        return data2(this.index);
    }
}
