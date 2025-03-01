let getDiv = document.getElementById("show");

function searchNews() {
    let getInp = document.getElementById("inp");

    fetch(`https://newsapi.org/v2/everything?q=tesla&from=2025-01-01&sortBy=publishedAt&apiKey=515ea1901a3d4aa6a48e5cd62602a609`)
        .then((data) => {
            return data.json();
        })
        .then((data) => {
            data.articles.map((article) => {
                getDiv.innerHTML += `
                    <div class="abc">
                        <img width="100%" src=${article.urlToImage} />
                        <p>${article.title}</p>
                        <p>${article.description}</p>
                        <p>${article.author}</p>
                        <p>${article.publishedAt}</p>
                    </div>
                `;
            });
        });
}




