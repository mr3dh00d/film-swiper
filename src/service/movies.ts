import { getMoviesAPI } from '@/api/omdb'
import { MovieSwiperData } from '@/types/movies'

export const getMoviesService = async () => {
  const response = await getMoviesAPI()
  return response.Search.map<MovieSwiperData>(movie => ({
    id: movie.imdbID,
    year: movie.Year,
    name: movie.Title,
    image: movie.Poster,
  }))
}
