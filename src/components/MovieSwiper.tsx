import { useMovieSwiper } from '@/hooks/useMovieSwiper'
import { MovieSwiperData } from '@/types/movies'
import Swiper from 'react-native-deck-swiper'
import MovieSwiperCard from './MovieSwiperCard'
import { useLikesStore } from '@/store/useLikesStore'
import { Animated, StyleSheet, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign'

const MovieSwiper = ({
  cards,
  cardsAreFetched,
  page,
  currentIndex,
  handleNextPage,
}: {
  cards: MovieSwiperData[]
  cardsAreFetched: boolean
  page: number
  currentIndex: number
  handleNextPage: () => void
}) => {
  const addLike = useLikesStore(state => state.addLike)
  const addDislike = useLikesStore(state => state.addDislike)
  const { swiperRef, swipeLeft, swipeRight, swipeX, setSwipeX, resetSwipeX, likeScale, dislikeScale } = useMovieSwiper()
  return (
    <Swiper<MovieSwiperData>
      key={`swiper-page-${page}`}
      ref={swiperRef}
      cards={cards}
      cardIndex={currentIndex}
      stackSize={3}
      verticalSwipe={false}
      horizontalSwipe={cardsAreFetched}
      backgroundColor="transparent"
      showSecondCard={false}
      animateOverlayLabelsOpacity={true}
      animateCardOpacity={true}
      renderCard={(card: MovieSwiperData | undefined) => (
        <MovieSwiperCard data={card} swipeLeft={swipeLeft} swipeRight={swipeRight} />
      )}
      overlayLabels={{
        left: {
          element: (
            <View style={styles.overlayLeft}>
              <Animated.View style={{ transform: [{ scale: dislikeScale }] }}>
                <AntDesign name="dislike1" size={48} color="red" />
              </Animated.View>
            </View>
          ),
        },
        right: {
          element: (
            <View style={styles.overlayRight}>
              <Animated.View style={{ transform: [{ scale: likeScale }] }}>
                <AntDesign name="like1" size={48} color="green" />
              </Animated.View>
            </View>
          ),
        },
      }}
      onSwipedLeft={cardIndex => {
        addDislike(cards[cardIndex])
      }}
      onSwipedRight={cardIndex => {
        addLike(cards[cardIndex])
      }}
      onSwipedAll={() => {
        handleNextPage()
      }}
    />
  )
}

const styles = StyleSheet.create({
  overlayLeft: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  overlayRight: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
  },
})

export default MovieSwiper
