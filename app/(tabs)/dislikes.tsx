import MovieCard from '@/components/MovieCard'
import { ThemedScrollView } from '@/components/ThemedViews/ThemedScrollView'
import { ThemedView } from '@/components/ThemedViews/ThemedView'
import { useLikesStore } from '@/store/useLikesStore'
import AntDesign from '@expo/vector-icons/AntDesign'
import { StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

export default () => {
  const dislikes = useLikesStore(state => state.dislikes)
  const clearDislikes = useLikesStore(state => state.clearDislikes)
  return (
    <>
      <ThemedView style={styles.container}>
        <SafeAreaView style={styles.container}>
          {dislikes.length > 0 ? (
            <ThemedScrollView style={styles.paddingMedium}>
              {dislikes.map((movie, index) => (
                <MovieCard key={index} dislike movie={movie} />
              ))}
              <View style={[styles.centered, { marginTop: 16 }]}>
                <Button icon="delete" mode="outlined" onPress={clearDislikes}>
                  Vaciar
                </Button>
              </View>
            </ThemedScrollView>
          ) : (
            <View style={[styles.container, styles.centered, { opacity: 0.5 }]}>
              <AntDesign name="dislike2" size={78} style={{ alignSelf: 'center', marginBottom: 16 }} />
              <Text variant="titleLarge">Aquí van los personajes que no te gustan.</Text>
            </View>
          )}
        </SafeAreaView>
      </ThemedView>
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
  paddingMedium: {
    paddingHorizontal: 16,
  },
})
