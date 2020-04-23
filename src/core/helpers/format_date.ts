import dayjs from 'dayjs';
import 'dayjs/locale/vi';
import {getI18n} from 'react-i18next';
import {config} from '@core/config';

export const formatDate = (timestamp: number, template: string = config.dateFormat): string => {
  return dayjs.unix(timestamp).locale(getI18n().language).format(template);
};
