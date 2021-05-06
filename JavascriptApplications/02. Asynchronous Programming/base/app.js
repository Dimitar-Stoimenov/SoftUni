async function getRecipeList() {
    const url = "http://localhost:3030/jsonstore/cookbook/recipes";

    let mainElement = document.querySelector('body main');

    try {
        const response = await fetch(url);

        if (response.ok == false) {
            throw new Error(response.statusText);
        }

        const recipes = await response.json();
        mainElement.innerHTML = '';

        Object.values(recipes).map(createPreview).forEach(r => mainElement.appendChild(r));

    } catch (error) {
        alert(error.message);
    }
}

function createPreview(recipe) {
    let recipeId = recipe._id;
    let recipeName = recipe.name;
    let img = recipe.img;

    let result = document.createElement('article');
    result.classList = 'preview';

    let divTitle = document.createElement('div');
    divTitle.classList = 'title';
    let h2titleElement = document.createElement('h2');
    h2titleElement.textContent = recipeName;
    divTitle.appendChild(h2titleElement);

    result.appendChild(divTitle);

    let divImg = document.createElement('div');
    divImg.classList = 'small';
    divImg.innerHTML = `<img src=${img}></img>`;
    result.appendChild(divImg);

    result.addEventListener('click', () => getRecipeDetails(recipeId, result));

    return result;
}

async function getRecipeDetails(id, preview) {
    const recipeUrl = `http://localhost:3030/jsonstore/cookbook/details/` + id;

    const recipeResponse = await fetch(recipeUrl);
    const data = await recipeResponse.json();

    const article = document.createElement('article');
    
    const titleh2Element = document.createElement('h2');
    titleh2Element.textContent = data.name;

    const bandElement = document.createElement('div');
    bandElement.classList = 'band';

    const thumbElement = document.createElement('div');
    thumbElement.classList = 'thumb';
    const imgElement = document.createElement('img');
    imgElement.src = data.img;
    thumbElement.appendChild(imgElement);
    bandElement.appendChild(thumbElement);

    const ingredientsElement = document.createElement('div');
    ingredientsElement.classList = 'ingredients';
    const ingredientsh3 = document.createElement('h3');
    ingredientsh3.textContent = "Ingredients:";
    ingredientsElement.appendChild(ingredientsh3);
    const ulIngredientElement = document.createElement('ul');
    data.ingredients.map(i => {
        let liIngredientElement = document.createElement('li');
        liIngredientElement.textContent = i;
        ulIngredientElement.appendChild(liIngredientElement);
    });
    ingredientsElement.appendChild(ulIngredientElement);
    bandElement.appendChild(ingredientsElement);

    const descriptionElement = document.createElement('div');
    descriptionElement.classList = 'description';

    const descTitleh2Element = document.createElement('h2');
    descTitleh2Element.textContent = 'Preparation:';
    descriptionElement.appendChild(descTitleh2Element);

    data.steps.map(s => {
        let stepParagraphElement = document.createElement('p');
        stepParagraphElement.textContent = s;
        descriptionElement.appendChild(stepParagraphElement);
    })

    article.appendChild(titleh2Element);
    article.appendChild(bandElement);
    article.appendChild(descriptionElement);

    preview.replaceWith(article);
}

window.addEventListener('load', () => {
    getRecipeList();
});