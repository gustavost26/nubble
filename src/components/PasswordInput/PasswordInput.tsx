import React, {useState} from 'react';
import {TextInput, TextInputProps, Icon} from '@components';

export type PasswordInpuntProps = Omit<
  TextInputProps,
  'RightComponent' | 'secureTextEntry'
>;

export function PasswordInput(props: PasswordInpuntProps) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  function toggleSecureTextEntry() {
    setIsSecureTextEntry(prev => !prev);
  }

  return (
    <TextInput
      secureTextEntry={isSecureTextEntry}
      {...props}
      RightComponent={
        <Icon
          onPress={toggleSecureTextEntry}
          color="gray2"
          name={isSecureTextEntry ? 'eyeOn' : 'eyeOff'}
        />
      }
    />
  );
}
