import CalendarLocale from 'rc-calendar/lib/locale/en_US';
import TimePickerLocale from '../../time-picker/locale/hu_HU';

// Merge into a locale object
const locale = {
  lang: {
    placeholder: 'Dátum választása',
    rangePlaceholder: ['Kezdő dátum', 'Végső dátum'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};

export default locale;
