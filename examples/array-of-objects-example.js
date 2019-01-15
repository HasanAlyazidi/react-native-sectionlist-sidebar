import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SectionListSidebar from 'react-native-sectionlist-sidebar';

const ITEM_HEIGHT = 40;

export default class Months extends React.Component {
  state = {
    data: [
      { key: '1', title: 'January', data: [{ name: 'Hasan', result: 95 }, { name: 'Adam', result: 91 }] },
      { key: '2', title: 'Febraury', data: [{ name: 'Adam', result: 100 }, { name: 'Hasan', result: 88 }] },
      { key: '3', title: 'March', data: [{ name: 'Ali', result: 99 }, { name: 'Adam', result: 98 }] },
      { key: '4', title: 'April', data: [{ name: 'Bella', result: 88 }, { name: 'Dawson', result: 85 }] },
      { key: '5', title: 'May', data: [{ name: 'Liam', result: 96 }, { name: 'Hasan', result: 90 }] },
      { key: '6', title: 'June', data: [{ name: 'Natalie', result: 95 }, { name: 'Ali', result: 94 }] },
      { key: '7', title: 'July', data: [{ name: 'Ali', result: 97 }, { name: 'Natalie', result: 96 }] },
      { key: '8', title: 'August', data: [{ name: 'Sophia', result: 79 }, { name: 'Sarah', result: 77 }] },
      { key: '9', title: 'September', data: [{ name: 'William', result: 93 }, { name: 'Hasan', result: 91 }] },
      { key: '10', title: 'October', data: [{ name: 'Hasan', result: 95 }, { name: 'Hasan', result: 91 }] },
      { key: '11', title: 'November start with K', data: [{ name: 'Wail', result: 99 }, { name: 'Xavi', result: 91 }] },
      { key: '12', title: 'December', data: [{ name: 'Zain', result: 100 }, { name: 'Wail', result: 98 }] },
    ],
  };

  renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemResult}>{item.result}%</Text>
    </View>
  )

  render() {
    return (
      <SectionListSidebar
        data={this.state.data}
        renderItem={this.renderItem}
        itemHeight={ITEM_HEIGHT}
        sectionHeaderHeight={30}
        sectionHeaderTextStyle={styles.sectionHeaderTextStyle}
        sidebarItemContainerStyle={styles.sidebarItemContainerStyle}
        sidebarItemTextStyle={styles.sidebarItemTextStyle}
        sidebarContainerStyle={styles.sidebarContainerStyle}
      />
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    height: ITEM_HEIGHT,
    paddingTop: 12,
    paddingHorizontal: 10,
  },
  itemName: {
    flex: 1,
    color: 'black',
  },
  itemResult: {
    color: 'gray',
  },
  sectionHeaderTextStyle: {
    paddingTop: 7,
    paddingHorizontal: 10,
    backgroundColor: '#F2F2F2',
  },
  sidebarItemTextStyle: {
    padding: 12,
    color: 'black',
    textAlign: 'center',
  },
  sidebarContainerStyle: {
    width: 40,
    backgroundColor: '#E6E6E6',
  },
});
