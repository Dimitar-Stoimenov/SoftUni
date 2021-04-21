async function asyncLoadRepos() {
	const username = document.getElementById('username').value;

	const url = `https://api.github.com/users/${username}/repos`;

	try {
		const response = await fetch(url);
		console.log(response);

		if (response.status == 404) {
			throw new Error('User not found');
		}

		const data = await response.json();
		console.log(`Promise fulfilled`);
		console.log(data);

		const ulElement = document.getElementById('repos');
		ulElement.innerHTML = "";

		data.forEach(r => {
			const liElement = document.createElement('li');
			liElement.textContent = r.full_name;
			ulElement.appendChild(liElement);
		});
	} catch (error) {
		console.log(`Promise rejected`);
		console.log(error);
	}	
}

// по този начин подаваме масив от заявки и ще върне един промис, който ще се изпълни когато тия три неща се изпълнят, обаче те ще се стартират едновременно;
const responses = await Promise.all([
	fetch(url0),
	fetch(url1),
	fetch(url2)
]);