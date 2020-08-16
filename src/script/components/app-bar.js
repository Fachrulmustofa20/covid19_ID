import Logo from '../../img/logo.svg';
class AppBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :host{
            display: block;
            width: 100%;
            height: 60px;
            top: 0;
            background-color: #fff;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            z-index: 10;
            position: fixed;
        }
        .logo{
            position: relative;
        }
        .logo img{
            margin-top: 10px;
            margin-left: 10px;
        }
        
        </style>
        <a href="#" class="logo"><img src="${Logo}" alt"logo" style="width: 140px, height: 40px";></a>
        `
    }
}

customElements.define("app-bar", AppBar);