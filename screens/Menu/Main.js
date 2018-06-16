import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import MenuContainer from './MenuContainer';
import theme from './theme';
import configureStore from '../../store/configureStore';

const store = configureStore();

export default function Main(props) {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <MenuContainer {...props} />
      </PaperProvider>
    </Provider>
  );
}
