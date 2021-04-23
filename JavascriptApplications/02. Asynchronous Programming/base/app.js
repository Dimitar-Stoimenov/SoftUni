async function getRecipeList() {
    const url = "http://localhost:3030/jsonstore/cookbook/recipes";

    let mainElement = document.querySelector('body main');

    try {
        const response = await fetch(url);
        const recipes = await response.json();
        mainElement.innerHTML = '';

        Object.values(recipes).forEach(r => {
            let recipeId = r._id;

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

            newRecipeElement.addEventListener('click', (event) => {
                let context = event.currentTarget;
                let data = recipeData(recipeId, context);
                
            });
        });

    } catch (error) {
        alert(error.message);
    }
}

window.addEventListener('load', () => {
    getRecipeList();
});

async function recipeData(recipeId, context) {
    const recipeUrl = `http://localhost:3030/jsonstore/cookbook/details/${recipeId}`;
    const recipeResponse = await fetch(recipeUrl);
    let data = await recipeResponse.json();

    console.log(context);
    console.log(data);
    
    context.classList = '';
    context.children[0].remove();
    context.children[0].remove();

    let ingredientsArr = data.ingredients;
    let stepsArr = data.steps;

    const titleh2Element = document.createElement('h2');
    titleh2Element.textContent = data.name;
    context.appendChild(titleh2Element);

    const bandElement = document.createElement('div');
    bandElement.classList = 'band';
    context.appendChild(bandElement);

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




    const descriptionElement = document.createElement('div');
    descriptionElement.classList = 'description';
    context.appendChild(descriptionElement);
}