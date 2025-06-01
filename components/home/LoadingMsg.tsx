import { useColorScheme } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

interface IProps {
  isLoading: boolean;
}

export default function LoadingMsg(props: IProps) {
  const { isLoading } = props;
  const colorScheme = useColorScheme();

  const sharedScale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: sharedScale.value }],
    };
  });

  useEffect(() => {
    if (!isLoading) {
      return;
    }
    sharedScale.value = withRepeat(
      withTiming(sharedScale.value * 1.5, { duration: 1000 }),
      -1,
      true,
    );

    return () => {
      cancelAnimation(sharedScale);
      sharedScale.value = 1;
    };
  }, [isLoading]);

  return (
    <Animated.View
      style={[
        animatedStyle,
        {
          width: 24,
          height: 24,
          borderRadius: 12,
          backgroundColor: colorScheme === "light" ? "#eee" : "#222",
        },
      ]}
    />
  );
}
