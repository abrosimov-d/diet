export default class Toolbar {
    constructor(dayCard) {
        this.dayCard = dayCard;
        this.prevElement = null;
        this.nextElement = null;
    }

    render() {
        return `<div class="toolbar">
            <button class="toolbar-prev toolbar-button">.</button>
            <button class="toolbar-next toolbar-button">.</button>
        </div>`
    }

    init() {
        this.prevElement = document.querySelector(".toolbar-prev")
        this.prevElement.addEventListener('click', (e) => {
            this.dayCard.prev();
        })
        this.nextElement = document.querySelector(".toolbar-next")
        this.nextElement.addEventListener('click', (e) => {
            this.dayCard.next();
        })
    }
}