import { getMoviesAPI } from '@/api/omdb'
import { MOVIE_KEYWORDS } from '@/constants/movies'
import { MovieSwiperData } from '@/types/movies'

export const getMoviesService = async (page = 1) => {
  const response = await getMoviesAPI(MOVIE_KEYWORDS[page - 1] as keyof typeof MOVIE_KEYWORDS)
  return response.Search.map<MovieSwiperData>(movie => ({
    id: movie.imdbID,
    year: movie.Year,
    name: movie.Title,
    image: movie.Poster,
  }))
}
