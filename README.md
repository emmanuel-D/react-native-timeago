# react-native-timeago

[![View package on npm](https://img.shields.io/npm/v/@manu_omg/react-native-timeago.svg?maxAge=2592000&style=flat-square)](https://www.npmjs.com/package/@manu_omg/react-native-timeago) [![npm](https://img.shields.io/npm/dm/@manu_omg/react-native-timeago.svg?maxAge=2592000&style=flat-square)](https://www.npmjs.com/package/@manu_omg/react-native-timeago)

An auto-updating timeago component for React Native using [days.js](https://day.js.org/).

## Usage

```jsx
import React, { Component } from 'react';
import TimeAgo from '@manu_omg/react-native-timeago';

// Timestamp can be any valid data type accepted in a Moment.js constructor
// Currently accepts string, number, array, or a Date instance
let timestamp = "2015-06-21T06:24:44.124Z";

class MyComponent extends Component {

  ...

  render() {
    return (
      <TimeAgo time={timestamp} />
    )
  }

  ...
};
```

If you'd like to hide the string "ago" from the phrase returned, you can use the hideAgo prop:


```jsx
<TimeAgo time={timestamp} hideAgo={true} />
```

All normal Text props are applicable (including style). Use the `interval` prop to change the update interval in milliseconds (default: 60000).

```jsx
// This component would update every 20 seconds
<TimeAgo time={timestamp} interval={20000} />
```

## Support local language
To support local language, you need to require locale language file, and call `dayjs.locale()` in your app.
For example

```jsx
let TimeAgo = require('@manu_omg/react-native-timeago');

let days = require('dayjs'); //load dayjs module to set local language
require('days/locale/zh-cn');
const dayjs = require("dayjs"); //for import dayjs local language file during the application build
dayjs.locale('zh-cn'); //set dayjs local language to zh-cn
...
```


## Contributing

If you'd like to see something added or changed to this module please open a new GitHub issue. Pull requests are always welcome.

___

## 🙌 Contributing
If you have any suggestions for improving LodashX or if you found a bug, please don't hesitate to open an issue. Contributions are welcome!

Special thanks to everyone who has contributed to this project!

[![Emmanuel Dadem](https://avatars.githubusercontent.com/u/37305687?s=80&v=4)](https://github.com/emmanuel-D)

## 🎉 License
**LodashX** is open source and licensed under the MIT license.
