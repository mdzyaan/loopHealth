import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Chip } from 'react-native-paper';
import  { View,StyleSheet } from 'react-native';

const ProductCard = ({img, title = 'Product', description = "Description", category = 'Others'}) => (
  <Card style={styles.cardContainer}>
      <Card.Cover source={{ uri: img }} />
    <Card.Content>
      <Title>{title}</Title>
      <Paragraph>{description}</Paragraph>
      <View style={styles.chip}>
        <Chip mode="outlined">{category}</Chip>
      </View>
    </Card.Content>
  </Card>
);

export default ProductCard;

const styles = StyleSheet.create({
    cardContainer: {
        marginBottom: 16
    },
    chip: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 8
    },
})