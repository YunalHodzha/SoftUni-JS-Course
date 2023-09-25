import { cats } from "./catSeeder.js";
import { html, render } from "../node_modules/lit-html/lit-html.js";

const cardTemplate = (data) => html`
<li>
    <img src="./images/${data.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button class="showBtn" @click=${onclick} >Show status code</button>
        <div class="status" style="display: none" id="${data.id}">
            <h4>Status Code: ${data.statusCode}</h4>
            <p>${data.statusMessage}</p>
        </div>
    </div>
</li>
`;

function onclick(event) {
    const cat = event.target.parentNode;

    const result = cat.querySelector('.status').style.display;

    if (result === 'block') {
        cat.querySelector('.showBtn').textContent = 'Show status code';
        cat.querySelector('.status').style.display = 'none';
    } else {
        cat.querySelector('.showBtn').textContent = 'Hide status code';
        cat.querySelector('.status').style.display = 'block';
    }
}

const catsTemplate = cats.map(cardTemplate);

const section = document.getElementById('allCats');
render(html`<ul>${catsTemplate}</ul>`, section);
