const key = 'dc968e33ef4baa690970674b27a62d79'

export function getLatest(pageNum) {
    return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=${pageNum}`)
      .then(data => data.json())
}
