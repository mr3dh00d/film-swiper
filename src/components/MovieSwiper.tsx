import { useMovieSwiper } from '@/hooks/useMovieSwiper'
import { MovieSwiperData } from '@/types/movies'
import Swiper from 'react-native-deck-swiper'
import { useTheme } from 'react-native-paper'
import MovieSwiperCard from './MovieSwiperCard'

const MovieSwiper = () => {
  const theme = useTheme()
  const { swiperRef, swipeLeft, swipeRight, cards, cardsAreFetched } = useMovieSwiper()
  return (
    <Swiper<MovieSwiperData>
      ref={swiperRef}
      cards={cards}
      cardIndex={0}
      stackSize={3}
      verticalSwipe={false}
      horizontalSwipe={cardsAreFetched}
      backgroundColor={theme.colors.background}
      animateOverlayLabelsOpacity={true}
      animateCardOpacity={true}
      renderCard={(card: MovieSwiperData | undefined) => (
        <MovieSwiperCard data={card} swipeLeft={swipeLeft} swipeRight={swipeRight} />
      )}
    />
  )
}

export default MovieSwiper
