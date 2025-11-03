/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import ContactList from './src/components/test/ContactList';
// import HelloWordScreen from './src/components/demo1/HelloWordScreen';
// import Props from './src/components/demo1/Props';
// import State from './src/components/demo1/State';
// import Parent from './src/components/dem02/Parent';
// import Giaipt from './src/components/demo3/Giaipt';
// import PhuongTrinhBacNhat from './src/components/demo3/PhuongTrinhBacNhat';
// import Calculator from './src/components/demo3/Calculator';
// import Layout from './src/components/demo4/Layout';
// import HomePage from './src/components/demo4/HomePage';
// import HomePage from './src/components/demo4/FlatList';
// import StudentManagement from './src/components/demo6/StudentManagement';
// import GridScreen from './src/components/demo4/GridScreen';
// import BMI from './src/components/demo5/BMI';

function App() {
  return (
    <>
      {/* <HelloWordScreen />; */}
      {/* <Props name="Ka Phu Đông" age={21} />; */}
      {/* <State />; */}
      {/* <Parent />; */}
      {/* <Giaipt />; */}
      {/* <PhuongTrinh />; */}
      {/* <PhuongTrinhBacNhat />; */}
      {/* <Calculator /> */}
      {/* <Layout></Layout> */}
      {/* <GridScreen></GridScreen> */}
      {/* <HomePage></HomePage> */}
      {/* <BMI></BMI> */}
      {/* <StudentManagement></StudentManagement> */}
      <SafeAreaView style={{flex: 1}}>
        <ContactList />
      </SafeAreaView>
    </>
  );
}

export default App;
