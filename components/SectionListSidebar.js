import React from 'react';
import {
  StyleSheet, SectionList, FlatList, View, Text, TouchableOpacity, PixelRatio,
} from 'react-native';
import PropTypes from 'prop-types';
import sectionListGetItemLayout from 'react-native-section-list-get-item-layout';

export default class SectionListSidebar extends React.PureComponent {
  static propTypes = {
    // general
    rtl: PropTypes.bool,
    containerStyle: PropTypes.shape({}),

    // section list
    data: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      data: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
    })).isRequired,
    renderItem: PropTypes.func.isRequired,
    itemHeight: PropTypes.number.isRequired,
    sectionHeaderHeight: PropTypes.number,
    sectionFooterHeight: PropTypes.number,
    separatorHeight: PropTypes.number,
    listHeaderHeight: PropTypes.number,
    sectionHeaderTextStyle: PropTypes.shape({}),

    // sidebar
    renderSidebarItem: PropTypes.func,
    sidebarContainerStyle: PropTypes.shape({}),
    sidebarItemContainerStyle: PropTypes.shape({}),
    sidebarItemTextStyle: PropTypes.shape({}),
  };

  static defaultProps = {
    // general
    rtl: false,
    containerStyle: null,

    // section list
    sectionHeaderHeight: 22,
    sectionFooterHeight: 0,
    separatorHeight: 0,
    listHeaderHeight: 0,
    sectionHeaderTextStyle: { height: 22 },

    // sidebar
    renderSidebarItem: null,
    sidebarContainerStyle: { width: 30 },
    sidebarItemContainerStyle: null,
    sidebarItemTextStyle: null,
  };

  constructor(props) {
    super(props);
    this.setItemLayoutFunc();
  }

  setItemLayoutFunc = () => {
    const {
      itemHeight,
      sectionHeaderHeight,
      sectionFooterHeight,
      separatorHeight,
      listHeaderHeight,
    } = this.props;

    this.getItemLayout = sectionListGetItemLayout({
      getItemHeight: () => itemHeight,
      getSectionHeaderHeight: () => sectionHeaderHeight,
      getSectionFooterHeight: () => sectionFooterHeight,
      getSeparatorHeight: () => separatorHeight / PixelRatio.get(),
      listHeaderHeight,
    });
  }

  setFlatListRef = (ref) => { this.sectionList = ref; }

  renderSectionHeader = ({ section }) => {
    const { sectionHeaderHeight, sectionHeaderTextStyle } = this.props;

    return (
      <Text style={{ ...sectionHeaderTextStyle, height: sectionHeaderHeight }}>{section.title}</Text>
    )
  };

  renderDefaultSidebarItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => { this.jumpToSection(index); }}
      style={this.props.sidebarItemContainerStyle}
    >
      <Text style={this.props.sidebarItemTextStyle}>{item}</Text>
    </TouchableOpacity>
  );

  jumpToSection = (sectionIndex, itemIndex = -1) => {
    this.sectionList.scrollToLocation({
      sectionIndex,
      itemIndex,
    });
  }

  renderSidebarItem = this.props.renderSidebarItem || this.renderDefaultSidebarItem

  sectionListKeyExtractor = (item, index) => `item-${index}`;

  sidebarKeyExtractor = item => item;

  render() {
    const {
      data,
      rtl,
      containerStyle,
      sidebarContainerStyle,
      ...props
    } = this.props;

    return (
      <View style={[styles.container, containerStyle]}>
        <View style={{ flexDirection: rtl ? 'row-reverse' : 'row' }}>
          <SectionList
            ref={this.setFlatListRef}
            keyExtractor={this.sectionListKeyExtractor}
            renderSectionHeader={this.renderSectionHeader}
            getItemLayout={this.getItemLayout}
            sections={data}
            {...props}
          />

          <View style={sidebarContainerStyle}>
            <FlatList
              data={data.map(item => item.key)}
              keyExtractor={this.sidebarKeyExtractor}
              renderItem={this.renderSidebarItem}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listsContainer: {
    flexDirection: 'row',
  },
});
