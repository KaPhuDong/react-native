import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageSourcePropType,
} from 'react-native';

type ProductCardProps = {
  name: string;
  price: number;
  image: ImageSourcePropType;
};

const ProductCard: React.FC<ProductCardProps> = ({name, price, image}) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{price.toLocaleString()}đ</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Mua ngay</Text>
      </TouchableOpacity>
    </View>
  );
};

type Product = {
  id: number;
  name: string;
  price: number;
  image: ImageSourcePropType;
};

const products: Product[] = [
  {
    id: 1,
    name: 'Bút máy xanh',
    price: 15000,
    image: require('../../assets/images/pen.jpg'),
  },
  {
    id: 2,
    name: 'Sổ tay học tập',
    price: 25000,
    image: require('../../assets/images/notebook.jpg'),
  },
  {
    id: 3,
    name: 'Thước kẻ 20cm',
    price: 10000,
    image: require('../../assets/images/ruler.jpg'),
  },
  {
    id: 4,
    name: 'Balo học sinh',
    price: 120000,
    image: require('../../assets/images/backpack.jpg'),
  },
  {
    id: 5,
    name: 'Tẩy trắng',
    price: 5000,
    image: require('../../assets/images/eraser.jpg'),
  },
  {
    id: 6,
    name: 'Bút chì gỗ',
    price: 7000,
    image: require('../../assets/images/pencil.jpg'),
  },
  {
    id: 7,
    name: 'Hộp bút vải canvas',
    price: 45000,
    image: require('../../assets/images/pencase.jpg'),
  },
  {
    id: 8,
    name: 'Giấy note 5 màu',
    price: 12000,
    image: require('../../assets/images/notehightlight.jpg'),
  },
  {
    id: 9,
    name: 'Bộ compa kỹ thuật',
    price: 30000,
    image: require('../../assets/images/compa.jpg'),
  },
  {
    id: 10,
    name: 'Bút highlight vàng',
    price: 11000,
    image: require('../../assets/images/highlight.jpg'),
  },
  {
    id: 11,
    name: 'Kéo thủ công',
    price: 13000,
    image: require('../../assets/images/scissors.jpg'),
  },
  {
    id: 12,
    name: 'Túi đựng tài liệu A4',
    price: 35000,
    image: require('../../assets/images/file.jpg'),
  },
];

const HomePage: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🛍️ Cửa hàng học tập</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.grid}>
          {products.map(item => (
            <ProductCard
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe7e0',
  },
  header: {
    backgroundColor: '#ff9b6b',
    paddingVertical: 15,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF',
  },
  scrollContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '32%',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 8,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    minHeight: 80,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 4,
  },
  price: {
    color: '#ffa27c',
    marginVertical: 4,
    fontWeight: '500',
    fontSize: 12,
  },
  button: {
    backgroundColor: '#ff5c4e',
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
