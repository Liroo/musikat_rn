import React from 'react';
import { FieldValues, FormProvider, UseFormReturn, useForm } from 'react-hook-form';
import { View, ViewProps } from 'react-native';

import { twMerge } from '@/utils/twMerge';

export type UIFormProps<Inputs extends FieldValues> = {
  defaultValues?: any;
  children: React.ReactNode;
  onSubmit?: (data: Inputs) => void;
  methods?: UseFormReturn<Inputs, any>;
} & ViewProps;

export default function UIForm<Inputs extends FieldValues = any>({
  methods,
  defaultValues,
  children,
  onSubmit,
  className,
  ...props
}: UIFormProps<Inputs>) {
  const formMethods = useForm<Inputs>({
    defaultValues,
    reValidateMode: 'onSubmit',
  });
  const internalMethods = methods || formMethods;

  return (
    <FormProvider {...internalMethods}>
      <View {...props} className={twMerge('flex flex-col', className)}>
        {children}
      </View>
    </FormProvider>
  );
}
