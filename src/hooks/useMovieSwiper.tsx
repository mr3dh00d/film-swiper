import { MOVIE_KEYWORDS } from '@/constants/movies'
import { getMoviesService } from '@/service/movies'
import { MovieSwiperData } from '@/types/movies'
import { useQuery } from '@tanstack/react-query'
import { useRef } from 'react'
import Swiper from 'react-native-deck-swiper'

export const useMovieSwiper = ({ page }: { page: number }) => {
  const swiperRef = useRef<Swiper<MovieSwiperData> | null>(null)
  const swipeLeft = () => {
    swiperRef.current?.swipeLeft()
  }
  const swipeRight = () => {
    swiperRef.current?.swipeRight()
  }

  const { data: cards, isFetched: cardsAreFetched } = useQuery({
    queryKey: ['movies', page],
    queryFn: () => getMoviesService(page),
  })

  console.log(
    'useMovieSwiper',
    cards?.map(card => card.id)
  )

  return {
    swiperRef,
    swipeLeft,
    swipeRight,
    cards: cards || [],
    cardsAreFetched,
  }
}
