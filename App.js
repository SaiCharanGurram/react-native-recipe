/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  ScrollView,
  Text,
  Image,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {FlatGrid, SectionGrid} from 'react-native-super-grid';

import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont().then();
import Ionic from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
Material.loadFont().then();

import {Menu, session} from './components/data';
Ionic.loadFont().then();
const header = 'Find the best\ncooking recipe';

// '#F8F8F4'
const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: Colors.lighter}}>
      <StatusBar />
      <View
        style={{
          // justifyContent: 'center',
          // alignItems: 'center',
          marginTop: 32,
          marginLeft: 24,
        }}>
        <Text style={styles.header}>{header}</Text>
      </View>
      <View
        style={{
          // flex: 1,
          flexDirection: 'row',
          // backgroundColor: 'red',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            // borderWidth: 1,
            borderColor: 'black',
            flex: 1,
            // margin: 8,
            marginVertical: 30,
            // marginHorizontal: 16,
            marginLeft: 24,
            padding: 12,
            PaddingVertical: 16,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            // justifyContent: 'space-between',
          }}>
          <Icon name="search" size={20} color="gray" />
          <Text style={{color: 'gray', marginLeft: 10, fontSize: 16}}>
            Search
          </Text>
        </View>
        <View
          style={{
            // flex: 1,
            alignItems: 'flex-end',
            marginHorizontal: 16,
            // borderWidth: 1,
            padding: 9,
            borderRadius: 12,
            backgroundColor: 'green',

            // justifyContent: 'flex-end',
            // backgroundColor: 'red',
            // marginLeft: 20,
          }}>
          <Ionic name="filter" size={24} color="white" />
        </View>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
          marginBottom: 16,
          marginTop: 8,
          // backgroundColor: 'green',
          height: 30,
        }}>
        {session.map((i, id) => {
          return (
            <Text
              key={id}
              style={{
                fontSize: 16,
                marginRight: 8,
                marginLeft: 24,
              }}>
              {i}
            </Text>
          );
        })}
      </ScrollView>
      <ScrollView>
        {/* <FlatGrid
          itemDimension={130}
          data={Menu}
          renderItem={({item}) => <Text>{item.dishName}</Text>}
        /> */}

        <FlatGrid
          itemDimension={150}
          data={Menu}
          style={styles.gridView}
          // staticDimension={300}
          // fixed
          spacing={20}
          renderItem={({item}) => (
            <View style={[styles.itemContainer, {backgroundColor: '#FFFF'}]}>
              <Image
                source={item.url}
                style={{
                  height: 170,
                  width: 165,
                  // flex: 1,
                  borderRadius: 30,
                }}
              />
              <View style={{padding: 10}}>
                <Text style={styles.itemName}>{item.dishName}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    // alignItems: 'space-between',
                    justifyContent: 'space-between',
                    marginTop: 8,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Ionic name="time-outline" size={12} color="gray" />
                    <Text style={styles.itemCode}>{item.time}min</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Material name="fire" size={12} color="gray" />
                    <Text style={styles.itemCode}>{item.calories}kcal</Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  header: {
    fontWeight: '700',
    fontSize: 36,
  },
  gridView: {
    // marginTop: 10,
    flex: 1,
    // backgroundColor: 'red',
  },
  itemContainer: {
    // justifyContent: 'flex-end',
    borderRadius: 30,
    // padding: 10,
    height: 260,
  },
  itemName: {
    fontSize: 16,
    // color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    // fontWeight: '600',
    fontSize: 12,
    // color: '#fff',
  },
});

export default App;
