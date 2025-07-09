import { MovieSwiperData } from '@/types/movies'
import AntDesign from '@expo/vector-icons/AntDesign'
import { LinearGradient } from 'expo-linear-gradient'
import { memo } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Card, Text } from 'react-native-paper'

const MovieSwiperCard = ({
  data,
  swipeLeft,
  swipeRight,
}: {
  data?: MovieSwiperData
  swipeLeft: () => void
  swipeRight: () => void
}) => (
  <Card style={styles.card}>
    <View style={styles.cardContainerCover}>
      <Card.Cover style={styles.cardCover} source={{ uri: data?.image }} />
      <LinearGradient colors={['transparent', 'rgba(0,0,0,1)']} style={styles.cardCoverLinearGradient}>
        <Text variant="titleLarge" style={{ color: 'white' }}>
          {data ? data.name : ''}
        </Text>
        <Text variant="titleMedium" style={{ color: 'white' }}>
          {data ? data.year : ''}
        </Text>
      </LinearGradient>
    </View>
    {data && (
      <Card.Actions style={styles.cardActions}>
        <Button onPress={swipeLeft}>
          <AntDesign name="dislike2" size={18} />
        </Button>
        <Button onPress={swipeRight}>
          <AntDesign name="like2" size={18} />
        </Button>
      </Card.Actions>
    )}
  </Card>
)

const styles = StyleSheet.create({
  card: {
    flex: 1,
  },
  cardContainerCover: {
    position: 'relative',
    width: '100%',
    height: 625,
  },
  cardCover: {
    height: 625,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  cardCoverLinearGradient: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardActions: {
    justifyContent: 'space-between',
  },
})

export default memo(MovieSwiperCard)
