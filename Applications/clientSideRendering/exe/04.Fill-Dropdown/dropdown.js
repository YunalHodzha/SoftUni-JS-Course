import { html, render } from "../node_modules/lit-html/lit-html.js";

//items = async functions getAllItems
//itemTemplate
//render

async function getAllItems() {
    const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown');
    const data = await response.json();

    return data;
}

const items = Object.values(await getAllItems());

const itemTemplate = html`
${items.map(item => html`<option value=${item._id}>${item.text}</option>`)}
`;

const menuElem = document.getElementById('menu');

render(itemTemplate, menuElem);

document.querySelector('input[type="submit"]').addEventListener('click', addItem);

async function addItem(e) {
    //e.preventDefault();

    const text = document.getElementById('itemText').value;

    const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown', {
        method: "POST",
        headers: { "Content-Type": "application.json" },
        body: JSON.stringify({ text })
    })

    if(response.ok) {
        console.log("OKEY")

        // const newItem = await response.json();

        // const newItemTemplate = html`<option value=${newItem._id}>${newItem.text}</option>`;

        // render(newItemTemplate, menuElem);
    } else {
        alert('something went wrong');
    }

}