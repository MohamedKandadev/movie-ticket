import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const sizes = {
  // global sizes
  base: 8,
  font: 14,
  radius: 10,
  padding: 26,
  margin: 16,

  raduis1: 50,
  raduis2: 22,
  raduis3: 15,

  padding2: 32,

  // font sizes
  t1: 52,
  t2: 44,
  t3: 36,

  h1: 24,
  h2: 20,
  h3: 24,
  h4: 20,

  //   l1: 18,
  //   l2: 16,
  //   l3: 14,
  //   l4: 12,

  //   ps1: 18,
  //   ps2: 16,
  //   ps3: 14,
  //   ps4: 12,

  pr1: 20,
  pr2: 16,
  pr3: 14,
  pr4: 12,

  // app dimensions
  width,
  height,
};

export default sizes;
