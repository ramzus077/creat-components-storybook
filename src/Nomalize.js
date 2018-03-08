/* @flow */
import { Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;

export default (size: number) => {
  switch (deviceHeight) {
    case 480:
      return size / 1.2;
    default:
      return size;
  }
};
