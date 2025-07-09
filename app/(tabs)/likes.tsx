import { ThemedView } from '@/components/ThemedViews/ThemedView'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

export default () => {
  return (
    <>
      <ThemedView style={styles.container}>
        <SafeAreaView style={styles.container}>
            <Text>Me gustas</Text>
        </SafeAreaView>
      </ThemedView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
