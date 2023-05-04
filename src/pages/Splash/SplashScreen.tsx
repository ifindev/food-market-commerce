import clsx from "clsx";
import { styled } from "nativewind";
import { Text, View } from "react-native";
import { Logo } from "../../assets/illustrations";

const SplashContainer = styled(
  View,
  clsx("bg-yellow w-screen h-screen flex flex-col justify-center items-center")
);
const SplashText = styled(
  Text,
  clsx("text-black-darkish font-medium text-[32px] mt-[30px]")
);

export default function SplashScreen() {
  return (
    <SplashContainer>
      <Logo />
      <SplashText>FoodMarket</SplashText>
    </SplashContainer>
  );
}
