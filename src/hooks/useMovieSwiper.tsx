import { getMoviesService } from '@/service/movies'
import { MovieSwiperData } from '@/types/movies'
import { useQuery } from '@tanstack/react-query'
import { useRef } from 'react'
import Swiper from 'react-native-deck-swiper'

export const useMovieSwiper = () => {
  const swiperRef = useRef<Swiper<MovieSwiperData> | null>(null)
  const swipeLeft = () => {
    swiperRef.current?.swipeLeft()
  }
  const swipeRight = () => {
    swiperRef.current?.swipeRight()
  }

  const { data: cards, isFetched: cardsAreFetched } = useQuery({
    queryKey: ['movies', 1],
    queryFn: () => getMoviesService(),
  })

  return {
    swiperRef,
    swipeLeft,
    swipeRight,
    cards: cards || [],
    cardsAreFetched,
  }
}
