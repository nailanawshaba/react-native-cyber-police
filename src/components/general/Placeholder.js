/**
 * Placeholder Scene
 *默认显示文字
    <Placeholder text={"Hello World"} />
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { PropTypes } from 'react';
import { View } from 'react-native';

// Consts and Libs
import { AppStyles } from '@theme/';

// Components
import { Text } from '@ui/';

/* Component ==================================================================== */
const Placeholder = ({ text }) => (
  <View style={[AppStyles.container, AppStyles.containerCentered]}>
    <Text>{text}</Text>
  </View>
);

Placeholder.propTypes = { text: PropTypes.string };
Placeholder.defaultProps = { text: '建设中,敬请期待...' };
Placeholder.componentName = 'Placeholder';

/* Export Component ==================================================================== */
export default Placeholder;
