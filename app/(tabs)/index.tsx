import { icons } from "@/constants/icons"
import { images } from "@/constants/images"
import { Image, ScrollView, View } from "react-native"

export default function Index() {
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute top-0 left-0 right-0 bottom-0 w-full z-0" />

      <ScrollView className="flex-1 px-5" showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 10, minHeight: "100%" }}>
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
      </ScrollView>
    </View>
  )
}