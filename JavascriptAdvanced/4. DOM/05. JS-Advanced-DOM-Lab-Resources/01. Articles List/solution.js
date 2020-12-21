function createArticle() {
	let titleElement = document.getElementById('createTitle');
	let contentElement = document.getElementById('createContent');

	if (titleElement.value != '' && contentElement.value != '') {
		let headingElement = document.createElement('h3');
		headingElement.innerHTML = titleElement.value;
		
		let articleBodyElement = document.createElement('p')
		articleBodyElement.innerHTML = contentElement.value;
		
		let articleElement = document.createElement('article');
		articleElement.appendChild(headingElement);
		articleElement.appendChild(articleBodyElement);
		
		let articleSectionElement = document.getElementById('articles');
		articleSectionElement.appendChild(articleElement)
		
		titleElement.value = ''
		contentElement.value = ''
	}
}