import { ScrollView, type ScrollViewProps } from 'react-native'
import { useTheme } from 'react-native-paper'

export const ThemedScrollView = ({ style, ...otherProps }: ScrollViewProps) => {
  const theme = useTheme()
  return <ScrollView style={[{ backgroundColor: theme.colors.background }, style]} {...otherProps} />
}
