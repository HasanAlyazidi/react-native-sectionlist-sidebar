# SectionList with Sidebar

SectionList with sidebar to jump to sections

## Installation

```
npm i react-native-sectionlist-sidebar
```

or

```
yarn add react-native-sectionlist-sidebar
```

## Usage

### 1. Import the component

```js
import SectionListSidebar from 'react-native-sectionlist-sidebar'
```

### 2. Embed the component

```js
class ExampleScreen extends React.Component {
  render() {
    return (
      <SectionListSidebar
        ...
      />
    )
  }
}
```

### 3. Pass properties to the component

## Properties

| Property                  | Type             | Description                           | Required | Default        |
|---------------------------|------------------|---------------------------------------|----------|----------------|
| data                      | array < object > | Sections data                         | Yes      |                |
| renderItem                | function         | Returns section list item component   | Yes      |                |
| itemHeight                | number           | Section's list item height            | Yes      |                |
| sectionHeaderHeight       | number           | Section's header height               | No       | 22             |
| sectionFooterHeight       | number           | Section's footer height               | No       | 0              |
| separatorHeight           | number           | Section's list item serparator height | No       | 0              |
| listHeaderHeight          | number           | SectionList top header height         | No       | 0              |
| sectionHeaderTextStyle    | object           | Section's list item text style        | No       | { height: 22 } |
| renderSidebarItem         | function         | Returns sidebar's item component      | No       |                |
| sidebarContainerStyle     | object           | Sidebar's container style             | No       | { width: 30 }  |
| sidebarItemContainerStyle | object           | Sidebar's item container style        | No       |                |
| sidebarItemTextStyle      | object           | Sidebar's item text style             | No       |                |
| containerStyle            | object           | SectionListSidebar component's style  | No       |                |
| rtl                       | boolean          | Reverse layout if set to true         | No       | false          |

## Examples

### Minimal example
```js
import React from 'react'
import { Text } from 'react-native'
import SectionListSidebar from 'react-native-sectionlist-sidebar'

export default class MinimalExampleScreen extends React.Component {
  render() {
    return (
      <SectionListSidebar
        data={[{ key: 'A', title: 'A', data: ['Aaron', 'Ali'] }]}
        renderItem={({ item }) => <Text key={item.key}>{item}</Text>}
        itemHeight={30}
      />
    )
  }
}
```

* **`key`**: section's sidebar item title, `string`
* **`title`**: section's title, `string`
* **`data`**: section's data, `[{}]` or `string`

### Custom section header component
```js
  renderSectionHeader = ({ section }) => (
    <View style={{ height: 30, backgroundColor: 'lightgray' }}>
      <Image />
      <Text>{section.title}</Text>
    </View>
  );

  ...

  <SectionListSidebar
    renderSectionHeader={this.renderSectionHeader}
    sectionHeaderHeight={30}
    ...
  />
```

> Use `renderSectionHeader` only if you need to add components to the section headers. For simple headers use `sectionHeaderTextStyle`.

> `sectionHeaderHeight` must br equal to section header's height with top and bottom margins, paddings, and borders.

### Custom sidebar item component
```js
  renderSidebarItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => { this.sectionListSidebar.jumpToSection(index); }}
      style={{ marginVertical: 4, backgroundColor: 'lightgray' }}>
      <Text style={{ padding: 10, color: 'black', textAlign: 'center' }}>{item}</Text>
    </TouchableOpacity>
  );

  ...

  <SectionListSidebar
    ref={ref => { this.sectionListSidebar = ref; }}
    renderSidebarItem={this.renderSidebarItem}
    ...
  />
```

> Use `renderSidebarItem` only if you need to fire a function before/after humping to section and/or add components to sidebar items. You may try accomplishing what you want using `sidebarItemContainerStyle` and `sidebarItemTextStyle` props first, and if you failed, use `renderSidebarItem`.

## TODO
- [X] Custom sidebar component
- [X] Add RTL support
- [ ] Mark selected sidebar item
- [ ] Add more examples
- [ ] Add Tests
- [ ] Your suggestion!