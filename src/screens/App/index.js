/**
 *
 * App
 *
 */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectAppState, makeSelectLoading, makeSelectError} from './selectors';
import { AppAction, fetchProductListAction } from './actions';
import { NavigationContainer } from '@react-navigation/native';
import ProductList from '../ProductList';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export const App = props => {

  const { fetchProductListActionStart } = props;

  useEffect(() => {
    fetchProductListActionStart();
  },[]);
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Products" 
          component={ProductList} 
          options={{
            headerShown: false
          }}  
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const mapStateToProps = (state,props) => {
  return createStructuredSelector({
    app: makeSelectAppState(),
    loading: makeSelectLoading(),
    error: makeSelectError(),
});
} 
export const mapDispatchToProps = (dispatch) => {
  return {
    AppStart: ({ payload, metadata }) => dispatch(AppAction.start({ payload, metadata })),
    fetchProductListActionStart: () => dispatch(fetchProductListAction.start())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
    
