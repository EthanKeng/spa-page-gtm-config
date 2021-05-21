import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("HP-tag");
    }

    async getHtml() {
        return `
            <h1>ホームページ</h1>
            <p>こちらはHPです。</p>
        `;
    }
}