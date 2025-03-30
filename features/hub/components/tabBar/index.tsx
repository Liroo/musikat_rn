import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import SvgHubHome from '@/components/svg/hub/home';
import SvgHubProfile from '@/components/svg/hub/profile';
import SvgHubSettings from '@/components/svg/hub/settings';
import UIPressable, { HapticsType } from '@/components/ui/pressable';
import { twMerge } from '@/utils/twMerge';

const routeIcons = {
  index: <SvgHubHome />,
  settings: <SvgHubSettings />,
  profile: <SvgHubProfile />,
};

export default function HubTabBar(props: BottomTabBarProps) {
  const { bottom } = useSafeAreaInsets();
  const { state, navigation } = props;

  return (
    <View className="absolute bottom-[42px] w-full items-center px-[24px]">
      <View
        className="bg-grey-bg h-[70px] w-full rounded-full px-[24px] py-[20px]"
        style={{ paddingBottom: bottom }}>
        <View className="flex-row items-center justify-between">
          {state.routes.map((route, index) => {
            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name, route.params);
              }
            };

            const icon = routeIcons[route.name as keyof typeof routeIcons];

            return (
              <UIPressable
                hitSlop={20}
                key={index}
                onPress={onPress}
                hapticType={HapticsType.ImpactLight}
                className={twMerge(
                  'transition-opacity duration-200',
                  isFocused ? 'opacity-100' : 'opacity-50'
                )}>
                {icon}
              </UIPressable>
            );
          })}
        </View>
      </View>
    </View>
  );
}
