/* @flow */
import { Alert } from 'react-native';

/**
 * The Alert component
 * @export
 * @prop {string} [title=string] The title of the alert.
 * @prop {string} [message=string] The message of the alert.
 * @prop {array} [buttons=[{text:'OK',style:'cancel'}]] An array containing the buttons of the alert.
 */
export default ({
  title = 'Alert title',
  message = 'Alert message',
  buttons = [{ text: 'OK', style: 'cancel' }]
}: {
  title?: string,
  message?: string,
  buttons: Array<mixed>
}) =>
  Alert.alert(title, message, buttons, {
    cancelable: false
  });
