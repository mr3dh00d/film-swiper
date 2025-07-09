import { MOVIE_KEYWORDS, MOVIE_TYPE } from '@/constants/movies'
import { OMDBDiscoverResponse } from '@/types/omdb'
import axios from 'axios'

const omdbAPI = axios.create({
  baseURL: 'http://www.omdbapi.com/',
  params: {
    apikey: process.env.EXPO_PUBLIC_OMDB_API_KEY,
  },
})

export const getMoviesAPI = async (search: keyof typeof MOVIE_KEYWORDS) => {
  try {
    const response = await omdbAPI.get<OMDBDiscoverResponse>('/', {
      params: {
        type: MOVIE_TYPE,
        s: search,
      },
    })
    return response.data
  } catch (error) {
    console.error('Error fetching movie:', error)
    throw error
  }
}
