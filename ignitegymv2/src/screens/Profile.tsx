import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Center, ScrollView, VStack, Text } from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native";


export function Profile() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />

      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt="$6" px="$10">
          <UserPhoto
            source={{ uri: 'https://github.com/N0N4T0.png' }}
            size="xl"
            alt="Imagem do usuário"
          />

          <TouchableOpacity>
            <Text
              color="$green500"
              fontFamily="$heading"
              fontSize="$md"
              mt="$2"
              mb="$8"
            >
              Alterar Foto
            </Text>
          </TouchableOpacity>

          <Center w="$full" gap="$4">
            <Input placeholder="Nome" bg="$gray600" />
            <Input value="luc@email.com" bg="$gray600" isReadOnly />
          </Center>
        </Center>
      </ScrollView>
    </VStack>
  )
}