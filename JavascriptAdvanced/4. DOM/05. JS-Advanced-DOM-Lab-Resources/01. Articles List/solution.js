function createArticle() {
	let titleElement = document.getElementById('createTitle');
	let contentElement = document.getElementById('createContent');

	let headingElement = document.createElement('h3');
	headingElement.innerHTML = titleElement.value;
	titleElement.value = ''

	let articleBodyElement = document.createElement('p')
	articleBodyElement.innerHTML = contentElement.value;
	contentElement.value = ''

	let articleElement = document.createElement('article');
	articleElement.appendChild(headingElement);
	articleElement.appendChild(articleBodyElement);

	let articleSectionElement = document.getElementById('articles');
	articleSectionElement.appendChild(articleElement)
}