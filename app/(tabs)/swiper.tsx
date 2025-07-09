import MovieSwiper from '@/components/MovieSwiper'
import { ThemedView } from '@/components/ThemedViews/ThemedView'
import { useCallback, useState } from 'react'

export default () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1)
    setCurrentIndex(0)
  }

  // const resetIndex = useCallback(() => {
  //   setCurrentIndex(0)
  // }, [])

  return (
    <>
      <ThemedView>
        <MovieSwiper currentIndex={currentIndex} page={currentPage} handleNextPage={handleNextPage} />
      </ThemedView>
    </>
  )
}
