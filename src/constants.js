/* @flow */
import Normalize from './Nomalize';

export const COLORS = {
  DARK_BLUE: '#00314D',
  DARK_GREY: '#444444',
  GRAY: '#828282',
  GREEN: '#01B64B',
  LIGHT_BLUE: '#EEF6FB',
  LIGHT_GRAY: '#E9E9E9',
  MEDIUM_BLUE: '#5E7785',
  MEDIUM_GRAY: '#D2D2D2',
  RED: '#E41C23',
  PINK: '#FBE7EE',
  VERY_LIGHT_GRAY: '#F6F6F6',
  WHITE: '#FFFFFF'
};

// export const FONTS = {
//   LIGHT: 'MetaOffc-Light',
//   NORMAL: 'MetaOffc-Light',
//   BOLD: 'MetaOffc-Bold'
// };

export const FIELD_TYPES = {
  DEFAULT: 'default',
  PASSWORD: 'password',
  EMAIL: 'email',
  PHONE: 'phone',
  NUMBER: 'number', // has decimals
  INTEGER: 'integer' // has no decimals
};

export const TYPO = {
  TITLE: {
    // fontFamily: FONTS.NORMAL,
    fontSize: Normalize(30),
    color: COLORS.DARK_BLUE,
    marginBottom: 10,
    lineHeight: 28,
    textAlign: 'left'
  },
  H1: {
    // fontFamily: FONTS.LIGHT,
    color: COLORS.DARK_BLUE,
    fontSize: Normalize(28),
    lineHeight: 28,
    textAlign: 'left'
  },
  BODY: {
    // fontFamily: FONTS.LIGHT,
    color: COLORS.GRAY,
    fontSize: Normalize(18),
    lineHeight: 22,
    textAlign: 'left'
  },
  BODY_SMALL: {
    // fontFamily: FONTS.LIGHT,
    color: COLORS.DARK_GREY,
    fontSize: Normalize(16),
    lineHeight: 20,
    textAlign: 'left'
  },
  LINK: {
    // fontFamily: FONTS.LIGHT,
    color: COLORS.DARK_BLUE,
    fontSize: Normalize(18),
    lineHeight: 22,
    textAlign: 'left'
  }
};
