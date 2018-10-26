export function newsApi(pageNumber) {
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=5763846de30d489aa867f0711e2b031c&q=singapore&page=${pageNumber}`;
    return fetch(url)
        .then(response=> response.json())
        .then(newsData => ({newsList: newsData.response.docs}))
        .catch(error => {
            console.log(error);
            return error
        });
}