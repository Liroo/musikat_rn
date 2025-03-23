import * as Haptics from 'expo-haptics';
import { useEffect, useMemo } from 'react';
import { Text, View } from 'react-native';

import UIPressable from '@/components/ui/pressable';
import { useAppDispatch } from '@/flux/hooks';
import { removeToast } from '@/flux/toast/reducer';
import { Toast } from '@/flux/toast/type';
import { twMerge } from '@/utils/twMerge';

export default function UIToast({ toast }: { toast: Toast }) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (toast.status === 'error') Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    const timeout = setTimeout(() => {
      dispatch(removeToast(toast.id as string));
    }, toast.duration ?? 3000);

    return () => clearTimeout(timeout);
  }, []);

  const backgroundClassname = useMemo(() => {
    switch (toast.status) {
      case 'warning':
        return 'bg-communicative-orange';
      case 'error':
        return 'bg-communicative-negative';
      case 'info':
        return 'bg-grey-6';
      case 'success':
      default:
        return 'bg-communicative-positive';
    }
  }, [toast.status]);

  const textClassname = useMemo(() => {
    switch (toast.status) {
      case 'warning':
        return 'text-white';
      case 'error':
        return 'text-white';
      case 'info':
        return 'text-white';
      case 'success':
      default:
        return 'text-white text-body2 font-bold';
    }
  }, [toast.status]);

  return (
    <UIPressable
      className="pointer-events-auto w-full"
      onPress={() => {
        if (toast.timerRef?.current) {
          clearInterval(toast.timerRef.current);
        }
        dispatch(removeToast(toast.id as string));
      }}>
      <View
        className={twMerge(
          'pointer-events-auto flex min-h-[44px] items-center justify-center rounded-[10px] px-[16px] py-[6px]',
          backgroundClassname
        )}>
        <Text className={twMerge('text-body3 text-center text-white', textClassname)}>
          {toast.text}
        </Text>
      </View>
    </UIPressable>
  );
}
