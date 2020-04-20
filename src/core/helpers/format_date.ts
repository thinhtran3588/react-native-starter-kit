import dayjs from 'dayjs';
import {config} from '@core/config';

export const formatDate = (timestamp: number, template: string = config.dateFormat): string => {
  return dayjs.unix(timestamp).format(template);
};
