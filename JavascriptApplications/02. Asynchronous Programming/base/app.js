async function getRecipeList() {
    const url = "http://localhost:3030/jsonstore/cookbook/recipes";

    let mainElement = document.querySelector('body main');
    mainElement.innerHTML = '';

    try {
        const response = await fetch(url);
        const recipes = await response.json();

        Object.values(recipes).forEach(r => {
            let recipeName = r.name;
            let img = r.img;

            let newRecipeElement = document.createElement('article');
            newRecipeElement.classList = 'preview';

            let divTitle = document.createElement('div');
            divTitle.classList = 'title';
            let h2titleElement = document.createElement('h2');
            h2titleElement.textContent = recipeName;
            divTitle.appendChild(h2titleElement);

            newRecipeElement.appendChild(divTitle);

            let divImg = document.createElement('div');
            divImg.classList = 'small';
            divImg.innerHTML = `<img src=${img}></img>`;

            newRecipeElement.appendChild(divImg);

            mainElement.appendChild(newRecipeElement);
        });

    } catch (error) {
        alert(error.message);
    }
}

window.addEventListener('load', () => {
    getRecipeList();
})