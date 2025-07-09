import { MovieSwiperData } from '@/types/movies'
import { create } from 'zustand'

type LikesStore = {
  likes: MovieSwiperData[]
  dislikes: MovieSwiperData[]
  addLike: (card: MovieSwiperData) => void
  addDislike: (card: MovieSwiperData) => void
  clearLikes: () => void
  clearDislikes: () => void
}

export const useLikesStore = create<LikesStore>(set => ({
  likes: [],
  dislikes: [],
  addLike: card => set(state => ({ likes: [...state.likes, card] })),
  addDislike: card => set(state => ({ dislikes: [...state.dislikes, card] })),
  clearLikes: () => set({ likes: [] }),
  clearDislikes: () => set({ dislikes: [] }),
}))
