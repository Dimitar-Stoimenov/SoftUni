async function loadCommits() {
    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    const commitsUlElement = document.getElementById('commits');

    const url = `https://api.github.com/repos/${username}/${repo}/commits`;

    let status = 0;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            status = response.status;
            throw new error('Error');
        }

        let data = await response.json();        

        console.log(data);
        

        data.forEach(r => {
            const liElement = document.createElement('li');
            liElement.textContent = `${r.commit.author.name}: ${r.commit.message}`;
            commitsUlElement.appendChild(liElement);
        })

    } catch {
        const errorLiElement = document.createElement('li');        
        errorLiElement.textContent = `Error: ${status} (Not Found)`;
        commitsUlElement.appendChild(errorLiElement);
    }
}