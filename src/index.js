
import React from 'react';
import App from './screens/App';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const store = configureStore();
 
const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      accent: 'orange',
      background: 'white'
    },
  };

  
const Root = () => {
  return (
    <Provider store={store}>
        <PaperProvider theme={theme}>
            <App />
        </PaperProvider>
    </Provider>
  )
};



export default Root;
