export default class Clock {
    constructor() {
        this.element = null;
        this.timer = null;
        this.counter = 0;
    }

    render() {
        return `<div class="clock">${this.renderInnerHTML()}</div>`
    }

    renderInnerHTML() {
        let date = new Date();
        return `${date.toLocaleTimeString()}`
    }

    init() {
        this.element = document.querySelector('.clock');
        setInterval(() => {
            this.counter = this.counter + 1;
            this.element.innerHTML = this.renderInnerHTML()
        }, 1000)
    }
}