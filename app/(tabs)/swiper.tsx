import MovieSwiper from '@/components/MovieSwiper'
import { ThemedView } from '@/components/ThemedViews/ThemedView'
import { useState } from 'react'

export default () => {
  return (
    <>
      <ThemedView>
        <MovieSwiper />
      </ThemedView>
    </>
  )
}
