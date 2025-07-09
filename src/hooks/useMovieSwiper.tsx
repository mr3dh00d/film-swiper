import { MovieSwiperData } from '@/types/movies'
import { useCallback, useRef } from 'react'
import { Animated } from 'react-native'
import Swiper from 'react-native-deck-swiper'

export const useMovieSwiper = () => {
  const swiperRef = useRef<Swiper<MovieSwiperData> | null>(null)
  const swipeX = useRef(new Animated.Value(0)).current

  const swipeLeft = () => {
    swiperRef.current?.swipeLeft()
  }
  const swipeRight = () => {
    swiperRef.current?.swipeRight()
  }

  const resetSwipeX = useCallback(() => {
    swipeX.setValue(0)
  }, [swipeX])

  const setSwipeX = useCallback(
    (value: number) => {
      swipeX.setValue(value)
    },
    [swipeX]
  )

  const likeScale = swipeX.interpolate({
    inputRange: [0, 150],
    outputRange: [0, 1.5],
    extrapolate: 'clamp',
  })

  const dislikeScale = swipeX.interpolate({
    inputRange: [-150, 0],
    outputRange: [1.5, 0],
    extrapolate: 'clamp',
  })

  return {
    swiperRef,
    swipeLeft,
    swipeRight,
    resetSwipeX,
    setSwipeX,
    likeScale,
    dislikeScale,
    swipeX,
  }
}
