import fa from './messages/fa.json';

type Messages = typeof fa;

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages { }
}