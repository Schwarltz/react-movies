const key = 'dc968e33ef4baa690970674b27a62d79'

export function getLatest() {
    return fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=dc968e33ef4baa690970674b27a62d79&language=en-US&page=1")
      .then(data => data.json())
}



// `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=${pageNum}`