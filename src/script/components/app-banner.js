import imgBanner from '../../img/image-banner.svg';

class AppBanner extends HTMLElement {
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
        .banner{
            margin-top: 80px;
        }
        .container{
            margin: 0 113px;
            padding: 0 16px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        .col{
            display: flex;
            flex-direction: column;
        }
        .banner-text{
            margin-top: 150px;
            color: rgb(33, 37, 41);
        }
        .banner-text h2{
            font-size: 2rem;
            margin-bottom: 8px;
        }
        .banner-text h1{
            font-size: 2.5rem;
            margin-bottom: 8px;
        }
        .banner-text p{
            margin-bottom: 1rem;
            font-size: 1rem;
        }
        .banner a{
            text-decoration: none;
            color: #fff;
            display: block;
            width: 100px;
        }
        .btn{
            font-weight: 400;
            line-height: 1.5;
            text-align: center;
            vertical-align: middle;
            cursor: pointer;
            user-select: none;
            border: 1px solid transparent;
            padding: .375rem .75rem;
            font-size: 1rem;
            border-radius: .25rem;
            transition: color .15s ease-in-out, background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        }
        .shadow{
            box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
        }
        .btn-primary{
            color: #fff;
            background-color: #dc3545;
            border-color: #dc3545;
        }
        .btn-primary:hover{
            background-color: #c82333;
            border-color: #bd2130;
        }
        .banner img{
            vertical-align: middle;
        }
        </style>
        
        <div class="banner">
            <div class="container">
                <div class="col">
                    <div class="banner-text">
                        <h2>Save Yourself</h2>
                        <h1>Save the World.</h1>
                        <p>Cucilah tanganmu sebelum makan, gunakan masker, lakukan social distancing, dan gunakan protokol
                            kesehatan.</p>
                    </div>
                    <a href="#data-cov" class="btn btn-primary shadow">Cek Data</a>
                </div>
                <div class="col">
                    <img src="${imgBanner}" alt="img-banner">
                </div>
            </div>
        </div>
        `
    }
}

customElements.define("app-banner", AppBanner);