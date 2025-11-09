import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
  Modal,
  TextInput,
  ScrollView,
} from 'react-native';
import {
  initDatabase,
  fetchProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  Product,
} from '../../database/database';

// 🔹 Map tên file ảnh sang require()
const imageMap: Record<string, any> = {
  'pen.jpg': require('../../assets/images/pen.jpg'),
  'notebook.jpg': require('../../assets/images/notebook.jpg'),
  'ruler.jpg': require('../../assets/images/ruler.jpg'),
  'eraser.jpg': require('../../assets/images/eraser.jpg'),
  'pencil.jpg': require('../../assets/images/pencil.jpg'),
  'backpack.jpg': require('../../assets/images/backpack.jpg'),
  'pencase.jpg': require('../../assets/images/pencase.jpg'),
  'notehightlight.jpg': require('../../assets/images/notehightlight.jpg'),
  'compa.jpg': require('../../assets/images/compa.jpg'),
  'highlight.jpg': require('../../assets/images/highlight.jpg'),
  'scissors.jpg': require('../../assets/images/scissors.jpg'),
  'file.jpg': require('../../assets/images/file.jpg'),
};

const ProductCRUD = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [img, setImg] = useState('pen.jpg'); // ảnh mặc định

  // 🔹 Lấy dữ liệu
  const loadData = async () => {
    const data = await fetchProducts();
    setProducts(data);
  };

  useEffect(() => {
    initDatabase(loadData);
  }, []);

  // 🔹 Mở form thêm / sửa
  const openForm = (product?: Product) => {
    if (product) {
      setEditingProduct(product);
      setName(product.name);
      setPrice(product.price.toString());
      setImg(product.img);
    } else {
      setEditingProduct(null);
      setName('');
      setPrice('');
      setImg('pen.jpg');
    }
    setModalVisible(true);
  };

  // 🔹 Lưu sản phẩm
  const handleSave = async () => {
    if (!name || !price) {
      Alert.alert('⚠️', 'Vui lòng nhập đủ thông tin');
      return;
    }

    if (editingProduct) {
      await updateProduct({
        id: editingProduct.id,
        name,
        price: parseFloat(price),
        img,
      });
      Alert.alert('✅', 'Cập nhật thành công');
    } else {
      await addProduct({name, price: parseFloat(price), img});
      Alert.alert('✅', 'Thêm sản phẩm thành công');
    }

    setModalVisible(false);
    loadData();
  };

  // 🔹 Xóa sản phẩm
  const handleDelete = (id: number) => {
    Alert.alert('Xác nhận', 'Bạn có muốn xóa sản phẩm này?', [
      {text: 'Hủy'},
      {
        text: 'Xóa',
        style: 'destructive',
        onPress: async () => {
          await deleteProduct(id);
          loadData();
        },
      },
    ]);
  };

  // 🔹 Render 1 sản phẩm
  const renderItem = ({item}: {item: Product}) => (
    <View style={styles.card}>
      <Image
        source={imageMap[item.img] || imageMap['pen.jpg']}
        style={styles.image}
      />
      <Text style={styles.name} numberOfLines={2}>
        {item.name}
      </Text>
      <Text style={styles.price}>{item.price.toLocaleString()}đ</Text>

      <View style={styles.actions}>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#ffaa00'}]}
          onPress={() => openForm(item)}>
          <Text style={styles.buttonText}>Sửa</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#ff4e4e'}]}
          onPress={() => handleDelete(item.id)}>
          <Text style={styles.buttonText}>Xóa</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>🛍️ Cửa hàng học tập</Text>
        <TouchableOpacity style={styles.addButton} onPress={() => openForm()}>
          <Text style={styles.addButtonText}>+ Thêm</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={3}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
      />

      {/* 🔹 Modal Form */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <ScrollView>
              <Text style={styles.modalTitle}>
                {editingProduct ? '✏️ Sửa sản phẩm' : '➕ Thêm sản phẩm'}
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Tên sản phẩm"
                value={name}
                onChangeText={setName}
              />
              <TextInput
                style={styles.input}
                placeholder="Giá sản phẩm"
                keyboardType="numeric"
                value={price}
                onChangeText={setPrice}
              />

              <Text style={styles.chooseImageText}>Chọn ảnh:</Text>
              <View style={styles.imageRow}>
                {Object.keys(imageMap).map(file => (
                  <TouchableOpacity key={file} onPress={() => setImg(file)}>
                    <Image
                      source={imageMap[file]}
                      style={[
                        styles.imageOption,
                        img === file && {
                          borderColor: '#ff5c4e',
                          borderWidth: 2,
                        },
                      ]}
                    />
                  </TouchableOpacity>
                ))}
              </View>

              <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveText}>Lưu</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.saveButton, {backgroundColor: '#aaa'}]}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.saveText}>Hủy</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ProductCRUD;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#ffe7e0'},
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
    backgroundColor: '#ff9b6b',
    paddingVertical: 12,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  list: {
    padding: 10,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginHorizontal: 3,
  },
  image: {width: 80, height: 80, borderRadius: 8, marginBottom: 6},
  name: {fontSize: 12, fontWeight: '600', textAlign: 'center'},
  price: {color: '#ff5c4e', fontWeight: '500', fontSize: 12, marginVertical: 4},
  actions: {flexDirection: 'row', gap: 4},
  button: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  buttonText: {color: '#fff', fontSize: 11, fontWeight: 'bold'},
  addButton: {
    backgroundColor: '#ff5c4e',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  addButtonText: {color: '#fff', fontWeight: 'bold', fontSize: 13},

  // Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    padding: 20,
  },
  modalContent: {backgroundColor: '#fff', borderRadius: 10, padding: 20},
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff5c4e',
    textAlign: 'center',
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  chooseImageText: {
    fontWeight: '600',
    marginBottom: 5,
    color: '#444',
  },
  saveButton: {
    backgroundColor: '#ff5c4e',
    padding: 12,
    borderRadius: 8,
    marginVertical: 5,
  },
  saveText: {color: '#fff', fontWeight: 'bold', textAlign: 'center'},
  imageRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 10,
  },
  imageOption: {
    width: 60,
    height: 60,
    borderRadius: 8,
    margin: 4,
  },
});
