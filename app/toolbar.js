export default class Toolbar {
    constructor() {
        console.log('Toolbar.constructor')
    }

    render() {
        return `<div class="toolbar">
        <button class="toolbar-prev">prev</button>
        <button class="toolbar-next">next</button>
        </div>`
    }
}