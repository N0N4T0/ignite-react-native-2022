import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { config } from './config/gluestack-ui.config';
import { Center, GluestackUIStyledProvider, Text } from '@gluestack-ui/themed';
import { StatusBar } from 'react-native';
import { Loading } from '@components/Loading';
import { SignUp } from '@screens/SignUp';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <GluestackUIStyledProvider config={config}>

      <StatusBar
        barStyle='light-content'
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <SignUp /> : <Loading />}

    </GluestackUIStyledProvider>
  );
}
