function loadRepos() {
	const username = document.getElementById('username').value;

	const url = `https://api.github.com/users/${username}/repos`;

	const requestPromise = fetch(url);
	requestPromise.then(handleResponse);
	// или 
	// fetch(url).then(handleResponse);

	function handleResponse(response) {
		const dataPromise = response.json();
		dataPromise.then(handleData)
		// или
		// response.json().then(handleData);
	}

	function handleData(data) {
		console.log(data);
	}

	// накрая може да стане всичко на един ред:
	// fetch(url).then(response => response.json().then(data => console.log(data)));

	// или на три реда:
	// fetch(url)
	// 	.then(response => response.json())
	// 	.then(data => console.log(data));
}