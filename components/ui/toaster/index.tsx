import { useEffect } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import UIToast from './toast';

import { useAppDispatch, useAppSelector } from '@/flux/hooks';
import { removeAllToast } from '@/flux/toast/reducer';
import { selectToastList } from '@/flux/toast/selector';
import { Toast } from '@/flux/toast/type';
import { twMerge } from '@/utils/twMerge';

export default function UIToaster({ inModal = false }: { inModal?: boolean }) {
  const toastList = useAppSelector(selectToastList);
  const { top } = useSafeAreaInsets();
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      if (inModal) dispatch(removeAllToast());
    };
  }, []);

  return toastList.length > 0 ? (
    <View
      className={twMerge(
        'absolute top-0 z-[100] flex min-w-full flex-col items-center justify-center gap-[16px] px-[16px]'
      )}
      style={{
        top: inModal ? 0 : top + 20,
      }}>
      {toastList.map((toast: Toast) => {
        return <UIToast key={toast.id} toast={toast} />;
      })}
    </View>
  ) : null;
}
