import { MovieSwiperData } from '@/types/movies'
import AntDesign from '@expo/vector-icons/AntDesign'
import { StyleSheet } from 'react-native'
import { Avatar, Card, Text } from 'react-native-paper'

type Props =
  | {
      movie: MovieSwiperData
      like: boolean
    }
  | {
      movie: MovieSwiperData
      dislike: boolean
    }

const MovieCard = ({ movie, ...props }: Props) => {
  return (
    <>
      <Card style={styles.container}>
        <Card.Title
          style={styles.cardTitle}
          titleStyle={styles.noMinHeight}
          subtitleStyle={styles.noMinHeight}
          title={movie.name}
          left={props => <Avatar.Image {...props} source={{ uri: movie.image }} />}
        />
        {/* <Card.Content>
          <Text variant="bodyMedium">{movie.description}</Text>
        </Card.Content> */}
        <Card.Actions>
          {'like' in props && <AntDesign name="like2" size={24} color="green" />}
          {'dislike' in props && <AntDesign name="dislike2" size={24} color="red" />}
        </Card.Actions>
      </Card>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 8,
  },
  cardTitle: {
    paddingVertical: 8,
    minHeight: 0,
  },
  noMinHeight: {
    minHeight: 0,
  },
})

export default MovieCard
