/* @flow */
import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
  ScrollView,
  Dimensions
} from 'react-native';

import { COLORS, TYPO } from '../constants';
import Normalize from '../Nomalize';

const BTN_CLOSE = require('./btn_close.png');
const BTN_CLOSE_WHITE = require('./btn_close_reverse.png');

/**
 * The Modal component
 * @export
 * @prop {string} [animationTypetitle='slide'] The type of animation of the modal.
 * @prop {boolean} [visible=true] If the modal is visible.
 * @prop {string} [title] The title of the modal. Optional.
 * @prop {string} [text='Text'] The text of the modal.
 * @prop {boolean} [fullscreen=true] The modal takes the whole screen or part of it
 * @prop {*} onClose The function called when the modal is closed.
 */

export default ({
  animationType = 'slide',
  visible = true,
  title,
  text = 'Text',
  fullscreen = false,
  dark = false,
  onClose
}: {
  animationType: 'none' | 'slide' | 'fade',
  visible: boolean,
  title: string,
  text: string,
  fullscreen: boolean,
  dark: boolean,
  onClose: () => mixed
}) => {
  const { height } = Dimensions.get('window');
  return (
    <Modal
      animationType={animationType}
      hardwareAccelerated
      visible={visible}
      transparent
      onRequestClose={() => {}}
    >
      <View style={styles.wrapper}>
        {/*The Transparent background */}
        {!fullscreen && <View style={styles.transparentBackground} />}
        {/* The modal content */}
        <View
          style={[
            styles.container,
            fullscreen && styles.containerFullscreen,
            dark && styles.containerDark
          ]}
        >
          {/* The close button */}
          <TouchableOpacity style={styles.btnCloseContainer} onPress={onClose}>
            <Image
              style={styles.btnClose}
              source={dark ? BTN_CLOSE_WHITE : BTN_CLOSE}
              resizeMode={'contain'}
              resizeMethod={'scale'}
            />
          </TouchableOpacity>
          {/* The modal body */}
          <View style={styles.body}>
            {/* The modal title */}
          
              {title &&
                <Text style={[styles.title, dark && styles.titleDark]}>
                  {title}
                </Text>}
          

            {/* The modal text */}
            <ScrollView style={{ maxHeight: height / 3 }}>
              <Text
                style={[
                  TYPO.BODY,
                  fullscreen && TYPO.BODY_SMALL,
                  styles.text,
                  dark && styles.textDark
                ]}
              >
                {text}
              </Text>
            </ScrollView>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  btnClose: {
    width: Normalize(24),
    height: Normalize(19)
  },
  btnCloseContainer: {
    marginTop: Normalize(20),
    marginLeft: Normalize(20)
  },
  container: {
    backgroundColor: COLORS.WHITE
  },
  containerFullscreen: {
    flex: 1
  },
  containerDark: {
    backgroundColor: COLORS.MEDIUM_BLUE
  },
  wrapper: {
    marginTop: Platform.OS === 'ios' ? 22 : 0,
    flex: 1
  },
  transparentBackground: {
    backgroundColor: 'black',
    opacity: 0.25,
    flex: 1
  },
  text: {
    marginTop: Normalize(10)
  },
  textDark: {
    color: COLORS.WHITE
  },
  title: {
    fontSize: Normalize(24),
    color: COLORS.MEDIUM_BLUE
  },
  titleDark: {
    color: COLORS.WHITE
  },
  body: {
    marginTop: Normalize(38),
    marginBottom: Normalize(38),
    marginRight: Normalize(20),
    marginLeft: Normalize(20)
  }
});
