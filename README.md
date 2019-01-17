# SectionList with Sidebar

SectionList with sidebar to jump to sections

![SectionList-array-of-strings](https://user-images.githubusercontent.com/7901330/51170468-393ea780-18b7-11e9-941d-b346566b49fc.gif)
![SectionList-array-of-objects](https://user-images.githubusercontent.com/7901330/51170632-8fabe600-18b7-11e9-84af-fe6ed25abebb.gif)

## Installation

```sh
$ npm i react-native-sectionlist-sidebar
```

or

```sh
$ yarn add react-native-sectionlist-sidebar
```

## Usage

### 1. Import the component

```js
import SectionListSidebar from 'react-native-sectionlist-sidebar'
```

### 2. Embed the component

```js
class App extends React.Component {
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

And all the optional props of `<SectionList />`. You can find them [here](https://facebook.github.io/react-native/docs/sectionlist#props).

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

> `sectionHeaderHeight` must be equal to section header's height with top and bottom margins, paddings, and borders.

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

### More examples
* Names example with array of strings. [array-of-strings-example.js](https://github.com/HasanAlyazidi/react-native-sectionlist-sidebar/blob/master/examples/array-of-strings-example.js)

![SectionList-array-of-strings](https://user-images.githubusercontent.com/7901330/51171252-12817080-18b9-11e9-94bf-dd1ccb649206.png)


* Months example with array of objects. [array-of-objects-example.js](https://github.com/HasanAlyazidi/react-native-sectionlist-sidebar/blob/master/examples/array-of-objects-example.js)

![SectionList-array-of-strings](https://user-images.githubusercontent.com/7901330/51171355-5d02ed00-18b9-11e9-9682-0bcfc5dd2339.png)

## TODO
- [X] Custom sidebar component
- [X] Add RTL support
- [X] Add more examples
- [ ] Mark selected sidebar item
- [ ] Add Tests
- [ ] Your suggestion!