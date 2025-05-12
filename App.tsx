import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Button} from './src/components/Button/Button';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text preset="headingLarge" italic>
          Test
        </Text>
        <Button marginBottom="s20" title="Primary" preset="primary" />
        <Button marginBottom="s20" title="Outline" preset="outline" />
        <Button marginBottom="s20" title="Secondary" preset="secondary" />

        <Button loading title="Loding" />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
