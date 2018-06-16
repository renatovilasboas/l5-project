import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import MenuContainer from './MenuContainer';
import theme from './theme';

export default function Main(props) {
  return (
    <PaperProvider theme={theme}>
      <MenuContainer {...props} />
    </PaperProvider>
  );
}
