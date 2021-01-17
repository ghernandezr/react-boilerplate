import messages from './locales';

const defaultLocale = 'en';

export const defaultTranslations = {
  locale: defaultLocale,
  messages: messages[defaultLocale],
  defaultLocale,
};