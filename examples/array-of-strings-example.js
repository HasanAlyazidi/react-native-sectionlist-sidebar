import React from 'react';
import { StyleSheet, Text } from 'react-native';
import SectionListSidebar from 'react-native-sectionlist-sidebar';

const ITEM_HEIGHT = 40;

export default class Names extends React.Component {
  state = {
    data: [
      { key: 'A', title: 'Names start with A', data: ['Adam', 'Aron', 'Abdullah'] },
      { key: 'B', title: 'Names start with B', data: ['Bella', 'Brianna', 'Basim'] },
      { key: 'C', title: 'Names start with C', data: ['Christopher', 'Caleb', 'Charles'] },
      { key: 'D', title: 'Names start with D', data: ['Dawson', 'Derek', 'Dalal'] },
      { key: 'E', title: 'Names start with E', data: ['Elijah', 'Ethan', 'Emad'] },
      { key: 'F', title: 'Names start with F', data: ['Fabian', 'Frances', 'Fadhl'] },
      { key: 'G', title: 'Names start with G', data: ['Grayson', 'Graham', 'Griffin'] },
      { key: 'H', title: 'Names start with H', data: ['Hannah', 'Harper', 'Hasan'] },
      { key: 'I', title: 'Names start with I', data: ['Isaac', 'Ivan', 'Ibrahim'] },
      { key: 'J', title: 'Names start with J', data: ['Jabin', 'Jace', 'Jabir'] },
      { key: 'K', title: 'Names start with K', data: ['Kaarina', 'Kacee', 'Kamal'] },
      { key: 'L', title: 'Names start with L', data: ['Liam', 'Lucas', 'Lama'] },
      { key: 'M', title: 'Names start with M', data: ['Millie', 'Matthew', 'Mohammed'] },
      { key: 'N', title: 'Names start with N', data: ['Natalie', 'Naomi', 'Nora'] },
      { key: 'O', title: 'Names start with O', data: ['Owen', 'Orion', 'Omar'] },
      { key: 'P', title: 'Names start with P', data: ['Pablo', 'Paco', 'Padarn'] },
      { key: 'Q', title: 'Names start with Q', data: ['Quan', 'Qwinitin', 'Qasim'] },
      { key: 'R', title: 'Names start with R', data: ['Rabea', 'Racheal', 'Rami'] },
      { key: 'S', title: 'Names start with S', data: ['Sophia', 'Sarah', 'Salah'] },
      { key: 'T', title: 'Names start with T', data: ['Tabby', 'Tabia', 'Talal'] },
      { key: 'U', title: 'Names start with U', data: ['Ulysses', 'Umberto', 'Ula'] },
      { key: 'V', title: 'Names start with V', data: ['Vincent', 'Valentin', 'Vance'] },
      { key: 'W', title: 'Names start with W', data: ['William', 'Weston', 'Wail'] },
      { key: 'X', title: 'Names start with X', data: ['Xavier', 'Xavi', 'Xyla'] },
      { key: 'Y', title: 'Names start with Y', data: ['Yulianna', 'Yadira', 'Yasmin'] },
      { key: 'Z', title: 'Names start with Z', data: ['Zachary', 'Zayne', 'Zain'] },
    ],
  };

  renderItem = ({ item }) => <Text style={styles.item}>{item}</Text>

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
  item: {
    height: ITEM_HEIGHT,
    paddingTop: 12,
    paddingHorizontal: 10,
  },
  sectionHeaderTextStyle: {
    paddingTop: 7,
    paddingHorizontal: 10,
    backgroundColor: '#F2F2F2',
  },
  sidebarItemTextStyle: {
    padding: 2,
    color: 'black',
    textAlign: 'center',
  },
  sidebarContainerStyle: {
    width: 30,
    backgroundColor: '#E6E6E6',
  },
});
