import { MovieSwiperData } from '@/types/movies'
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

  return {
    swiperRef,
    swipeLeft,
    swipeRight,
  }
}
