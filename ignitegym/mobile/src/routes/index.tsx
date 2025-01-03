import { Box } from '@gluestack-ui/themed'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { gluestackUIConfig } from '../../config/gluestack-ui.config'
import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'
import { useContext } from 'react'
import { AuthContext } from '@contexts/AuthContext'


export function Routes() {
  const contextData = useContext(AuthContext);
  console.log("USUÁRIO LOGADO =>", contextData);


  const theme = DefaultTheme
  theme.colors.background = gluestackUIConfig.tokens.colors.gray700

  return (
    <Box flex={1} bg="$gray700">
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  )
}