import { Loading } from '@components/Loading';
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { GluestackUIStyledProvider } from '@gluestack-ui/themed';
import { Routes } from '@routes/index';
import { StatusBar } from 'react-native';
import { config } from './config/gluestack-ui.config';
import { AuthContext } from '@contexts/AuthContext';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <GluestackUIStyledProvider config={config}>

      <StatusBar
        barStyle='light-content'
        backgroundColor="transparent"
        translucent
      />
      <AuthContext.Provider value={{
        user: {
          id: '1',
          name: 'Rodrigo Gonçalves',
          email: 'rodrigo@email.com',
          avatar: 'rodrigo.png'
        }
      }}>
        {fontsLoaded ? <Routes /> : <Loading />}
      </AuthContext.Provider>

    </GluestackUIStyledProvider>
  );
}
