import MovieSwiper from '@/components/MovieSwiper'
import { ThemedView } from '@/components/ThemedViews/ThemedView'
import { MOVIE_KEYWORDS } from '@/constants/movies'
import { getMoviesService } from '@/service/movies'
import { useQuery } from '@tanstack/react-query'
import AntDesign from '@expo/vector-icons/AntDesign'
import { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

export default () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  const { data: cards, isFetched: cardsAreFetched } = useQuery({
    queryKey: ['movies', currentPage],
    queryFn: () => getMoviesService(currentPage),
  })

  useEffect(() => {
    setCurrentIndex(0)
  }, [currentPage])

  const handleNextPage = () => {
    const nextPage = currentPage + 1
    if (nextPage < MOVIE_KEYWORDS.length) {
      setCurrentPage(currentPage + 1)
    } else {
      setIsFinished(true)
    }
  }

  return (
    <>
      {!isFinished ? (
        <ThemedView>
          <MovieSwiper
            cards={cards || []}
            cardsAreFetched={cardsAreFetched}
            currentIndex={currentIndex}
            page={currentPage}
            handleNextPage={handleNextPage}
          />
        </ThemedView>
      ) : (
        <ThemedView style={styles.container}>
          <SafeAreaView style={styles.container}>
            <View style={[styles.container, styles.centered, { opacity: 0.5 }]}>
              <AntDesign name="smileo" size={78} style={{ alignSelf: 'center', marginBottom: 16 }} />
              <Text variant="titleLarge">Haz completado el listado.</Text>
            </View>
          </SafeAreaView>
        </ThemedView>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
