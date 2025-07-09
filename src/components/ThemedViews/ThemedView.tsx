import { View, type ViewProps } from 'react-native'
import { useTheme } from 'react-native-paper'

export const ThemedView = ({ style, ...otherProps }: ViewProps) => {
  const theme = useTheme()
  return <View style={[{ backgroundColor: theme.colors.background }, style]} {...otherProps} />
}
