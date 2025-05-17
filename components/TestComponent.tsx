// import { Link } from 'expo-router';
// import React, { useState } from 'react';
// import { Alert, FlatList, Image, ImageBackground, Modal, Pressable, RefreshControl, ScrollView, SectionList, StatusBar, Switch, Text, TouchableHighlight, View } from "react-native";
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// // Reusable Card Component
// const Card = ({ item }) => {
//   return (
//     <View className="bg-white w-[45%] shadow-md rounded-lg p-4 m-2">
//       <Text className="text-lg font-bold text-gray-900">{item.title}</Text>
//       <Text className="text-gray-600 mb-2">{item.description}</Text>
//       <Image source={{ uri: item.imageUrl }} className="w-full h-40 rounded-lg mb-2" />
//       <Text className="text-green-500 font-semibold">{item.price}</Text>
//     </View>
//   );
// };

// // Main Component
// const TestComponent = () => {
//   const [buttonPressed, setButtonPressed] = useState(0);
//   const [isSwitchEnabled, setIsSwitchEnabled] = useState(false);
//   const [isRefreshing, setIsRefreshing] = useState(false);
//   const [statusBarColor, setStatusBarColor] = useState("#6b7280"); // Default color
//   const [barStyle, setBarStyle] = useState("light-content");     // Default style
//   const [isTranslucent, setIsTranslucent] = useState(false);
//   const [modalVisible, setModalVisible] = useState(false); // State for modal visibility

//   const textLog = buttonPressed > 1 ? `Button pressed ${buttonPressed} times` : "Button not pressed yet";

//   // Sample Data
//   const flatListData = Array.from({ length: 5 }, (_, index) => ({
//     id: String(index + 1),
//     title: `Product ${index + 1}`,
//     description: `Description for product ${index + 1}`,
//     imageUrl: `https://picsum.photos/id/${index + 10}/300/200`,
//     price: `$${(Math.random() * 100).toFixed(2)}`,
//   }));

//   const sectionListData = [
//     {
//       title: 'Fruits',
//       data: [
//         { id: '1', name: 'Apple' },
//         { id: '2', name: 'Banana' },
//         { id: '3', name: 'Orange' }
//       ]
//     },
//     {
//       title: 'Vegetables',
//       data: [
//         { id: '4', name: 'Carrot' },
//         { id: '5', name: 'Broccoli' },
//         { id: '6', name: 'Spinach' }
//       ]
//     }
//   ];

//   // Refresh Control handler
//   const onRefresh = () => {
//     setIsRefreshing(true);
//     // Simulate data fetching
//     setTimeout(() => {
//       setIsRefreshing(false);
//       console.log("Data refreshed!");
//     }, 2000); // Simulate a 2-second refresh
//   };

//   const toggleStatusBarColor = () => {
//     setStatusBarColor(prevColor => prevColor === "#6b7280" ? "#3b82f6" : "#6b7280"); // Toggle between colors
//   };

//   const toggleBarStyle = () => {
//     setBarStyle(prevStyle => prevStyle === "light-content" ? "dark-content" : "light-content");
//   };

//   const toggleTranslucency = () => {
//     setIsTranslucent(prev => !prev);
//   };

//   return (
//     <SafeAreaProvider>
//       <ImageBackground source={{ uri: 'https://picsum.photos/800/600' }} className="flex-1">
//         <StatusBar
//           backgroundColor={statusBarColor}
//           barStyle={barStyle}
//           translucent={isTranslucent}
//         />
//         <ScrollView
//           className="flex-1"
//           refreshControl={
//             <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} tintColor="#fff" />
//           }
//         >
//           <View className="p-4">
//             <Text className="text-2xl font-bold text-white mb-4">Test Component</Text>
//             <Link href="/onboarding" className="text-blue-500 mb-4">Onboardng </Link>

//             {/* TouchableHighlight */}
//             <View className="flex flex-row justify-around mb-4">
//               <TouchableHighlight
//                 activeOpacity={0.6}
//                 underlayColor="#f00"
//                 className="bg-blue-500 p-4 rounded-full justify-center items-center"
//                 onPress={() => setButtonPressed(buttonPressed + 1)}
//               >
//                 <Text className="text-white text-lg font-bold px-4 py-2 rounded-[100px]">
//                   Press me
//                 </Text>
//               </TouchableHighlight>
//             </View>
//             <Text className="text-gray-200 text-center mb-4">{textLog}</Text>

//             {/* Switch */}
//             <View className="flex flex-row items-center justify-between mb-4">
//               <Text className="text-white text-lg">Enable Feature</Text>
//               <Switch
//                 trackColor={{ false: "#767577", true: "#81b0ff" }}
//                 thumbColor={isSwitchEnabled ? "#f4f3f4" : "#f5dd4b"}
//                 ios_backgroundColor="#3e3e3e"
//                 onValueChange={setIsSwitchEnabled}
//                 value={isSwitchEnabled}
//               />
//             </View>

//             <View className="flex flex-col  mb-4 space-y-3">
//               <TouchableHighlight
//                 onPress={toggleStatusBarColor}
//                 className="bg-purple-500 p-3 rounded-md"
//               >
//                 <Text className="text-white text-center">Toggle Status Bar Color</Text>
//               </TouchableHighlight>

//               <TouchableHighlight
//                 onPress={toggleBarStyle}
//                 className="bg-purple-500 p-3 rounded-md"

//               >
//                 <Text className="text-white text-center">Toggle Bar Style</Text>
//               </TouchableHighlight>
//               <TouchableHighlight
//                 onPress={toggleTranslucency}
//                 className="bg-purple-500 p-3 rounded-md"
//               >
//                 <Text className="text-white text-center">Toggle Translucency</Text>
//               </TouchableHighlight>
//               <TouchableHighlight
//                 onPress={() => setModalVisible(true)} // Show modal on press
//                 className="bg-green-500 p-3 rounded-md"
//               >
//                 <Text className="text-white text-center">Show Modal</Text>
//               </TouchableHighlight>
//             </View>

//             {/* FlatList */}
//             <View className="mb-4">
//               <Text className="text-xl font-semibold text-white mb-2">Products</Text>
//               <FlatList
//                 data={flatListData}
//                 renderItem={({ item }) => <Card item={item} />}
//                 keyExtractor={(item) => item.id}
//                 numColumns={2}
//                 style={{}}
//                 contentContainerStyle={{}}
//               />
//             </View>

//             {/* SectionList */}
//             <View className="mb-4">
//               <Text className="text-xl font-semibold text-white mb-2">Menu Sections</Text>
//               <SectionList
//                 sections={sectionListData}
//                 keyExtractor={(item, index) => item.id || index.toString()}
//                 renderItem={({ item }) => (
//                   <Text className="text-white p-2 border-b border-gray-700">{item.name}</Text>
//                 )}
//                 renderSectionHeader={({ section: { title } }) => (
//                   <Text className="text-lg font-bold text-white p-2 bg-gray-800">{title}</Text>
//                 )}
//                 stickySectionHeadersEnabled={true}
//               />
//             </View>
//           </View>
//         </ScrollView>

//         {/* Modal */}
//         <Modal
//           animationType="fade"
//           transparent={true}
//           visible={modalVisible}
//           onRequestClose={() => {
//             Alert.alert('Modal has been closed.');
//             setModalVisible(!modalVisible);
//           }}>
//           <View className="flex-1 justify-center items-center mt-22">
//             <SafeAreaView className="m-20 bg-white rounded-2xl p-6 items-center shadow-lg w-[90%] max-h-[90%]">
//               <Text className="text-base text-center mb-4 text-xl">Hello World!</Text>
//               <Pressable
//                 className="rounded-2xl px-5 py-3 bg-blue-500 elevation-2"
//                 onPress={() => setModalVisible(!modalVisible)}>
//                 <Text className="text-white font-bold text-center">Hide Modal</Text>
//               </Pressable>
//             </SafeAreaView>
//           </View>
//         </Modal>
//       </ImageBackground>
//     </SafeAreaProvider>
//   );
// };



// export default TestComponent;
