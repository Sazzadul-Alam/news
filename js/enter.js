const loadAllNews = async () => {
    const url = `https://openapi.programming-hero.com/api/news/category/05`
    const res = await fetch(url);
    const data = await res.json();
    displayAllNews(data.data);

}
const displayAllNews = news => {
    toggleSpinner(true);
    const newsLength = document.getElementById('news-lenght');
    newsLength.innerText = parseInt(news.length);
    const allNewsContainer = document.getElementById('news-container');

    news.forEach(news => {

        const newsDiv = document.createElement('div');
        newsDiv.classList.add('col');
        newsDiv.innerHTML = `
        <div  class="card my-5 p-3">
        <div class="row">
                    <div class="col-md-4">
                        <img src="${news.image_url}" class="img-fluid  rounded-start" alt="...">
                    </div>
                    <div class="col-md-8 text-bg-light">
                        <div class="card-body">
                            <h2>${news.title}
                            </h2>
                            <p class="card-text text-truncate  text-muted">
                            ${news.details}
                            </p>
                            <div class="d-flex">
                                <div class="mx-5">
                                <p>
                                <img src="${news.author.img}" class="img-fluid" style=" height: 50px;" alt="...">
                                </p>
                                </div>
                                <div>
                                    <h4>${news.author.name}</h4>
                                    <p class="text-muted">${news.author.published_date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    </div>
        
        `;
        allNewsContainer.appendChild(newsDiv);

    });
    toggleSpinner(false);

}


const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove('d-none')
    }
    else {
        loaderSection.classList.add('d-none');
    }
}
loadAllNews()