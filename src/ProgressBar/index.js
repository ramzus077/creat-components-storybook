/* @flow */
import React, { PureComponent } from 'react';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';

import { COLORS } from '../constants';

/**
 * The ProgressBar Component.
 * 
 * @export
 * @class ProgressBar
 * @extends {PureComponent}
 * @prop {number} [height=10] The height of the ProgressBar.
 * @prop {color} [barColor=COLORS.DARK_BLUE] The color of the filling of the ProgressBar.
 * @prop {color} [fillColor=COLORS.DARK_GREY] The color of the background of the ProgressBar.
 * @prop {number} [duration=1000] The duration of the animation of the ProgressBar.
 * @prop {number} [progress] Progress in percentage
 */
export default class ProgressBar extends PureComponent {
  static defaultProps = {
    height: 10,
    barColor: COLORS.DARK_BLUE,
    fillColor: COLORS.DARK_GREY,
    duration: 1000
  };

  componentWillMount = () => {
    this.animation = new Animated.Value(this.props.progress);
  };

  componentDidUpdate = (prevProps: { progress: number, duration: number }) => {
    const { progress, duration } = this.props;
    if (prevProps.progress !== progress) {
      Animated.timing(this.animation, {
        toValue: progress,
        duration
      }).start();
    }
  };

  animation: Animated.Value = null;

  props: {
    height: number,
    barColor: string,
    fillColor: string,
    duration: number,
    progress: number
  };

  render() {
    const { height, barColor, fillColor } = this.props;

    const widthInterpolated: number =
      this.animation &&
      this.animation.interpolate({
        inputRange: [0, 100],
        outputRange: [0, Dimensions.get('window').width],
        extrapolate: 'clamp'
      });

    return (
      <View style={[{ flexDirection: 'row', height }]}>
        <View style={{ flex: 1 }}>
          <View
            style={[
              StyleSheet.absoluteFill,
              { backgroundColor: fillColor, opacity: 0.1 }
            ]}
          />
          <Animated.View
            style={[
              styles.barStyle,
              {
                width: widthInterpolated,
                backgroundColor: barColor
              }
            ]}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  barStyle: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0
  }
};
