import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";

const main = function () {
    const getTotal = () => {
        fetch(`https://indonesia-covid-19.mathdro.id/api/`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.error) {
                    showResponseMessage(responseJson.message);
                } else {
                    rendertotal(responseJson);
                }
            })
            .catch(error => {
                showResponseMessage(error);
            })
    }
    const rendertotal = (responseJson) => {
        const totalElement = document.getElementById("total-covid");

        totalElement.innerHTML = `
            <h5>Total Kasus Covid-19 di Indonesia</h5>
            <div class="row">
                <div class="col-md">
                    <h1 class="confirmed">${responseJson.jumlahKasus}</h1>
                    <h6>Positif <span class="emoji">&#128577;<span></h6>
                </div>
                <div class="col-md">
                    <h1 class="treatment">${responseJson.perawatan}</h1>
                    <h6>Perawatan <span class="emoji">&#128567;<span></h6>
                </div>
                <div class="col-md">
                    <h1 class="recovered">${responseJson.sembuh}</h1>
                    <h6>Sembuh <span class="emoji">&#128522;<span></h6>
                </div>
                <div class="col-md">
                    <h1 class="deaths">${responseJson.meninggal}</h1>
                    <h6>Meninggal <span class="emoji">&#128542;<span></h6>
                </div>
                <p>Data didapatkan dari <a href="https://github.com/mathdroid/indonesia-covid-19-api" target="_blank">Mathdroid Indonesia</a><p>
            </div>
        `
    }
    const showResponseMessage = (message = "Cek koneksi Internet") => {
        alert(message);
    };


    getTotal();

    //Grid JS
    const grid = new Grid({
        search: true,
        columns: ["Provinsi", "Positif", "Sembuh", "Meninggal"],
        server: {
            url: 'https://indonesia-covid-19.mathdro.id/api/provinsi',
            then: data => data.data.map(prov => [prov.provinsi, prov.kasusPosi, prov.kasusSemb, prov.kasusMeni])
        },
        pagination: {
            limit: 10
        },
        language: {
            'search': {
                'placeholder': 'Cari Provinsi...'
            }
        }
    });

    grid.render(document.getElementById("data-prov"));
}
export default main;