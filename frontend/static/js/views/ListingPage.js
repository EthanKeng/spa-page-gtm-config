import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("ListingPage");
    }

    async getHtml() {
        return `
            <h1>Listingページ</h1>
            <p>こちらはListingページです。</p>
        `;
    }
}