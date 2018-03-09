/* @flow */
import Normalize from '../Nomalize';
import { COLORS, FONTS } from '../constants';

export const commonStyles = {
  inputStyle: {
    textAlignVertical: 'top',
    paddingRight: 15,
    color: COLORS.DARK_GREY,
    paddingLeft: 15,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.MEDIUM_GRAY,
    fontSize: Normalize(20),
    backgroundColor: COLORS.WHITE
  },
  inputStyleFocused: {
    borderColor: COLORS.MEDIUM_BLUE
  },
  inputErrorStyle: {
    backgroundColor: COLORS.PINK,
    borderColor: COLORS.RED
  }
};
