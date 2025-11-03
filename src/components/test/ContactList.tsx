import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

interface Contact {
  name: string;
  phone: string;
}

const ContactList = () => {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [search, setSearch] = useState<string>('');
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleAddOrEdit = () => {
    if (!name.trim() || !phone.trim()) return;

    if (editingIndex !== null) {
      const updated = [...contacts];
      updated[editingIndex] = {name, phone};
      setContacts(updated);
      setEditingIndex(null);
    } else {
      setContacts([...contacts, {name, phone}]);
    }

    setName('');
    setPhone('');
  };

  const handleEdit = (index: number) => {
    const contact = contacts[index];
    setName(contact.name);
    setPhone(contact.phone);
    setEditingIndex(index);
  };

  const handleDelete = (index: number) => {
    const updated = contacts.filter((_, i) => i !== index);
    setContacts(updated);
  };

  const filteredContacts = contacts.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📒 Danh Bạ Cute</Text>

      <TextInput
        style={styles.input}
        placeholder="🌸 Nhập tên"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="📱 Nhập số điện thoại"
        keyboardType="numeric"
        value={phone}
        onChangeText={setPhone}
      />

      <TouchableOpacity style={styles.addButton} onPress={handleAddOrEdit}>
        <Text style={styles.addButtonText}>
          {editingIndex !== null ? '💾 LƯU' : '➕ THÊM'}
        </Text>
      </TouchableOpacity>

      <TextInput
        style={styles.searchInput}
        placeholder="🔍 Tìm kiếm..."
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredContacts}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item, index}) => (
          <View style={styles.contactItem}>
            <Text style={styles.contactText}>
              👤 {item.name} - {item.phone}
            </Text>
            <View style={styles.actions}>
              <TouchableOpacity onPress={() => handleEdit(index)}>
                <Text style={styles.icon}>✏️</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(index)}>
                <Text style={styles.icon}>🗑️</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEFF7',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FF66A3',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#FFD6E7',
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#FF66A3',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 15,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#FFD6E7',
    marginBottom: 15,
  },
  contactItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFD6E7',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },
  contactText: {
    fontSize: 16,
    color: '#333',
  },
  actions: {
    flexDirection: 'row',
    gap: 10,
  },
  icon: {
    fontSize: 20,
  },
});
