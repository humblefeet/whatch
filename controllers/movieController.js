require('dotenv').config()
const tmdb_api_key = process.env.TMDB_API_KEY
const base_url = `https://api.themoviedb.org/3/discover/movie?api_key=${tmdb_api_key}`

