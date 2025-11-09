import SQLite, {SQLiteDatabase} from 'react-native-sqlite-storage';

SQLite.enablePromise(true);

let db: SQLiteDatabase | null = null;

const getDb = async (): Promise<SQLiteDatabase> => {
  if (db) {
    return db;
  }
  db = await SQLite.openDatabase({name: 'myDatabase.db', location: 'default'});
  return db;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  img: string; // Lưu tên file ảnh, ví dụ "pen.jpg"
};

export const initDatabase = async (onSuccess?: () => void): Promise<void> => {
  try {
    const database = await getDb();

    database.transaction(
      tx => {
        tx.executeSql(`
          CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            price REAL,
            img TEXT
          )
        `);

        tx.executeSql(
          `INSERT OR IGNORE INTO products (id, name, price, img)
           VALUES (1, 'Bút máy xanh', 15000, 'pen.jpg')`,
        );
        tx.executeSql(
          `INSERT OR IGNORE INTO products (id, name, price, img)
           VALUES (2, 'Sổ tay học tập', 25000, 'notebook.jpg')`,
        );
        tx.executeSql(
          `INSERT OR IGNORE INTO products (id, name, price, img)
           VALUES (3, 'Thước kẻ 20cm', 10000, 'ruler.jpg')`,
        );
      },
      error => console.error('❌ Lỗi transaction:', error),
      () => {
        console.log('✅ Database initialized');
        if (onSuccess) {
          onSuccess();
        }
      },
    );
  } catch (error) {
    console.error('❌ initDatabase outer error:', error);
  }
};

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const database = await getDb();
    const results = await database.executeSql('SELECT * FROM products');
    const items: Product[] = [];
    const rows = results[0].rows;
    for (let i = 0; i < rows.length; i++) {
      items.push(rows.item(i));
    }
    return items;
  } catch (error) {
    console.error('❌ Lỗi fetchProducts:', error);
    return [];
  }
};

export const addProduct = async (product: Omit<Product, 'id'>) => {
  try {
    const database = await getDb();
    await database.executeSql(
      'INSERT INTO products (name, price, img) VALUES (?, ?, ?)',
      [product.name, product.price, product.img],
    );
    console.log('✅ Product added');
  } catch (error) {
    console.error('❌ Lỗi addProduct:', error);
  }
};

export const updateProduct = async (product: Product) => {
  try {
    const database = await getDb();
    await database.executeSql(
      'UPDATE products SET name = ?, price = ?, img = ? WHERE id = ?',
      [product.name, product.price, product.img, product.id],
    );
    console.log('✅ Product updated');
  } catch (error) {
    console.error('❌ Lỗi updateProduct:', error);
  }
};

export const deleteProduct = async (id: number) => {
  try {
    const database = await getDb();
    await database.executeSql('DELETE FROM products WHERE id = ?', [id]);
    console.log('✅ Product deleted');
  } catch (error) {
    console.error('❌ Lỗi deleteProduct:', error);
  }
};
