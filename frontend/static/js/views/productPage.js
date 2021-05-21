import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("productPage");
    }

    async getHtml() {
        return `
            <h1>productPage</h1>
            <p>商品ページです。</p>
          
        `;
    }
}