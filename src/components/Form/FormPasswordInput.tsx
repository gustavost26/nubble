import React from 'react';

import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';

import {PasswordInpuntProps, PasswordInput} from '@components';

export function FormPasswordInput<formType extends FieldValues>({
  control,
  name,
  rules,
  ...PasswordInputProps
}: PasswordInpuntProps & UseControllerProps<formType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field, fieldState}) => (
        <PasswordInput
          errorMessage={fieldState.error?.message}
          value={field.value}
          onChangeText={field.onChange}
          {...PasswordInputProps}
        />
      )}
    />
  );
}
