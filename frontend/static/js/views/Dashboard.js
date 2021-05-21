import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>Single Page APP</h1>
            <p>
                SPAのサイトですが、GTMへの相性が悪いといわれてきました。が、
            </p>    
            <p>
            URLPathを利用し、トリガーの種類が履歴の変更にすればSPAでも発火できるはずです。
            </p>
            <p>
            dynamicのURLでしたら、regexで頑張れば可能でしょう。
            </p>
            <img src="/gtmtag.PNG" alt="" width="700">
            <img src="/gtmtrigger.PNG" alt="" width="700">

            <h2>ご覧の通り、Product&CVtagは１つのトリガーしかないので、Reloadしても発火しません。</h2>
            <p>
                <a href="/hptag" data-link>homepage-tag</a>.
            </p>
        `;
    }
}