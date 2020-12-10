/**
 *
 * ProductList
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
import { makeSelectProductListState, makeSelectLoading, makeSelectError} from './selectors';
import { ProductListAction } from './actions';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import ProductCard from '../../components/ProductCard';
import { Appbar,Modal, Portal, Title, Provider } from 'react-native-paper';
import { Chip } from 'react-native-paper';

export const ProductList = props => {

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const containerStyle = {backgroundColor: 'white', padding: 16, margin: 16, borderRadius: 16};

  const categories = ['watch', 'dress', 'clothes', 'tie','watch', 'dress', 'clothes', 'tie','watch', 'dress', 'clothes', 'tie','watch', 'dress', 'clothes', 'tie'];
  const selectedCategories = ['watch']
  const renderModal = (
    <Portal>
      <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
        <Title>Category</Title>
        <View style={styles.categoryChipContainer}>
          {categories.map((category, categoryId) => (
            <Chip style={styles.categoryChip} selected={selectedCategories.includes(category)} mode="outlined" key={categoryId}>{category}</Chip>
          ))}
        </View>
      </Modal>
    </Portal>
  );

  return (
    <View>
      {renderModal}
      <Appbar style={styles.appBar} >
        <Appbar.Content title="Products"  />
        <Appbar.Action
          icon="filter"
          onPress={showModal}
        /> 
      </Appbar>
      <ScrollView style={styles.productListContainer}>
        <ProductCard title={'Danieal'} description="Danieal calean watches" category="watch" img="http://assets.myntassets.com/assets/images/2466435/2018/5/21/265434b9-de22-4b2c-9ca2-ded4c01ef5801526878966488-Daniel-Klein-Women-Black-Analogue-Watch-DK11421-5-2221526878966271-1.jpg"/>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ScrollView>
    </View>
    
  );
}
ProductList.propTypes = {
  // ProductListStart: PropTypes.func.isRequired,
};
export const mapStateToProps = (state,props) => {
  return createStructuredSelector({
    productList: makeSelectProductListState(),
    loading: makeSelectLoading(),
    error: makeSelectError(),
});
} 
export const mapDispatchToProps = (dispatch) => {
  return {
    ProductListStart: ({ payload, metadata }) => dispatch(ProductListAction.start({ payload, metadata }))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
    

const styles =  StyleSheet.create({
  productListContainer: {
    backgroundColor: 'white',
    padding: 16
  },
  appBar: {
    backgroundColor: 'white',
  },
  categoryChipContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 8,
    flexWrap: 'wrap',
    maxHeight: 400,
  },
  categoryChip: {
    marginRight: 8,
    marginBottom: 8
  }
});
