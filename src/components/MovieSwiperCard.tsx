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
          {data ? `${data.name} #${data.id}` : ''}
        </Text>
      </LinearGradient>
    </View>
    <Card.Content style={styles.cardContent}>
      <Text variant="bodyMedium">{data?.description || 'No description available.'}</Text>
    </Card.Content>
    {data && (
      <Card.Actions style={{ justifyContent: 'space-between' }}>
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
    height: 550,
  },
  cardCover: {
    height: 550,
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
  },
  cardContent: {
    padding: 10,
  },
})

export default memo(MovieSwiperCard)
