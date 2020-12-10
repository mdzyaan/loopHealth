/**
 *
 * ProductList
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import ProductCard from '../../components/ProductCard';
import { Appbar,Modal, Portal, Title, Provider } from 'react-native-paper';
import { Chip } from 'react-native-paper';
import * as globalSelectors from '../App/selectors';
import {setSelectedCategoriesList} from '../App/actions';

export const ProductList = props => {
  const { product, categories, selectedCategories,setSelectedCategoriesListStart } = props;
  const { data: productsList, loading } = product;

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);


  const toggleCategory = (category) => {
    let categorySelected = selectedCategories.includes(category);
    if (categorySelected) {
      setSelectedCategoriesListStart([...selectedCategories.filter(item => item !== category)]);
    } else {
      setSelectedCategoriesListStart([...selectedCategories,category])
    }
  }
  const renderModal = (
    <Portal>
      <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modal}>
        <Title>Category</Title>
        <View style={styles.categoryChipContainer}>
          {categories.map((category, categoryId) => (
            <Chip 
              style={styles.categoryChip} 
              selected={selectedCategories.includes(category)} 
              mode="outlined" 
              key={categoryId}
              onPress={() => toggleCategory(category)}
            >
              {category}
            </Chip>
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
        {loading ? (
          <Text style={styles.loadingText}>Loading...</Text>
        ) :  productsList.filter(product => selectedCategories.length > 0 ?  selectedCategories.includes(product.category): true).map((product) => (
          <ProductCard key={product.productId} title={product.productName} description={product.additionalInfo} category={product.category} img={product.searchImage}/>
        ))}
      </ScrollView>
    </View>
  );
};

ProductList.propTypes = {
  setSelectedCategoriesListStart: PropTypes.func.isRequired,
};
export const mapStateToProps = () => {
  return createStructuredSelector({
    product: globalSelectors.makeSelectProductError(),
    categories: globalSelectors.makeSelectCategoriesError(),
    selectedCategories: globalSelectors.makeSelectSelectedCategoriesError(), 
  });
} 
export const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedCategoriesListStart: (data) => dispatch(setSelectedCategoriesList(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
    

const styles =  StyleSheet.create({
  productListContainer: {
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
  },
  loadingText: {
    textAlign: 'center',
  },
  modal: {
    backgroundColor: 'white', 
    padding: 16, 
    margin: 16, 
    borderRadius: 16
  }
});
