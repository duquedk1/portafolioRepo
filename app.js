const API_URL = "https://api.github.com/users/duquedk1/repos"
const API_URL_USER = "https://api.github.com/users/duquedk1/"
console.log('conectado')

const getRepos = async () => {
    const data = await fetch (API_URL)
    const result = await data.json()
    showRepos(result)
}
getRepos()

const showRepos = (repo) => {
    let html = '<section class="container">'
    let container = document.getElementById("repos")
    repo.forEach(element => {
        const { name } = element
        const { login } = element.owner
        const { html_url } = element
        html += 
        `<a href="${html_url}">
        <img src="git.png" alt="avatar-repo" id="img-repos">
        <span><b>Project: </b>${name}</span> 
        <p><b>Author: </b>${login}</p>
        </a>`
    });
    html += "</section>"
    container.innerHTML = html
}