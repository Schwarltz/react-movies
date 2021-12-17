const key = 'dc968e33ef4baa690970674b27a62d79'

export function getLatest(pageNum) {
    return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=${pageNum}`)
      .then(data => data.json())
}

export function getSearch(query, pageNum) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=${pageNum}&include_adult=false&region=en-US`)
      .then(data => data.json());
}
