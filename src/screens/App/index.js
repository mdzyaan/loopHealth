/**
 *
 * App
 *
 */
import React, { 
  useState, 
  useEffect, 
  useContext,
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectAppState, makeSelectLoading, makeSelectError} from './selectors';
import { AppAction } from './actions';
import { View, Text, StyleSheet } from 'react-native';
import * as globalSelectors from '../App/selectors';

export const App = props => {

  return (
    <View style={styles.appContainer}>
      <Text>
        App screen
      </Text>
    </View>
  );
}
App.propTypes = {
  // AppStart: PropTypes.func.isRequired,
};
export const mapStateToProps = (state,props) => {
  return createStructuredSelector({
    app: makeSelectAppState(),
    loading: makeSelectLoading(),
    error: makeSelectError(),
});
} 
export const mapDispatchToProps = (dispatch) => {
  return {
    AppStart: ({ payload, metadata }) => dispatch(AppAction.start({ payload, metadata }))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
    

const styles =  StyleSheet.create({
  appContainer: {
    backgroundColor: 'white',
  }
});
