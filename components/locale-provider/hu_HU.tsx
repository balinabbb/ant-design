import moment from 'moment';
moment.locale('hu');

import Pagination from 'rc-pagination/lib/locale/en_US';
import DatePicker from '../date-picker/locale/en_US';
import TimePicker from '../time-picker/locale/en_US';
import Calendar from '../calendar/locale/en_US';

export default {
  locale: 'hu',
  Pagination,
  DatePicker,
  TimePicker,
  Calendar,
  Table: {
    filterTitle: 'Szűrés',
    filterConfirm: 'Rendben',
    filterReset: 'Visszaállítás',
    emptyText: 'Nincs adat',
    selectAll: 'Aktuális kiválasztása',
    selectInvert: 'Inverz kiválasztása',
  },
  Modal: {
    okText: 'Rendben',
    cancelText: 'Mégsem',
    justOkText: 'Rendben',
  },
  Popconfirm: {
    okText: 'Rendben',
    cancelText: 'Cancel',
  },
  Transfer: {
    notFoundContent: 'Nem található',
    searchPlaceholder: 'Keresés',
    itemUnit: 'elem',
    itemsUnit: 'elemek',
  },
  Select: {
    notFoundContent: 'Nem található',
  },
  Upload: {
    uploading: 'Feltöltés...',
    removeFile: 'Fájl törlése',
    uploadError: 'Hiba feltöltés közben',
    previewFile: 'Előnézet',
  },
};
