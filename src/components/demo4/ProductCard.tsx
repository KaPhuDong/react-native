import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

type ProductCardProps = {
  name: string;
  price: number;
  image: string;
};

const ProductCard: React.FC<ProductCardProps> = ({name, price, image}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: image}} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{price.toLocaleString()}đ</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Mua ngay</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  price: {
    color: '#ffa27c',
    marginVertical: 5,
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#ff5c4e',
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
