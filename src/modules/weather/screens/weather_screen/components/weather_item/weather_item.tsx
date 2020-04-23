import React from 'react';
import {useTranslation} from 'react-i18next';
import {config} from '@core/config';
import {Text, View, Card, FastImage, TouchableOpacity} from '@core/components';
import {formatDate} from '@core/helpers';
import {WeatherData} from '@weather/interfaces';
import {styles} from './weather_item.styles';

interface Props {
  data: WeatherData;
  isToday?: boolean;
  unit: string;
  toggleUnit: () => void;
}

export const WeatherItem = (props: Props): JSX.Element => {
  const {t} = useTranslation('weather');
  const {data, isToday, unit, toggleUnit} = props;
  const imageUrl = `http://openweathermap.org/img/wn/${data.icon}@2x.png`;
  const displayUnit = unit === config.weather.unitCodes.celsius ? 'C' : 'F';
  return (
    <View style={styles.layout}>
      <Card style={styles.card}>
        <View style={styles.row}>
          <FastImage
            style={styles.image}
            source={{
              uri: imageUrl,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
          <TouchableOpacity onPress={toggleUnit}>
            <Text style={styles.bold} category='h3'>
              {`${data.temperature.min}°${displayUnit} - ${data.temperature.max}°${displayUnit}`}
            </Text>
          </TouchableOpacity>
        </View>
        <Text category='s1'>{data.description}</Text>
        <View style={styles.row}>
          <Text>{`${t('humidity')}:`}</Text>
          <Text style={styles.bold} category='h6'>{`${data.humidity}%`}</Text>
        </View>

        {isToday && (
          <TouchableOpacity onPress={toggleUnit}>
            <Text category='h1' style={[styles.bold, styles.currentTemp]}>
              {`${data.temperature.current}°${displayUnit}`}
            </Text>
          </TouchableOpacity>
        )}
        <Text category='h6' style={[styles.bold, styles.date]}>
          {`${formatDate(data.date)}, ${formatDate(data.date, 'dddd')} ${isToday ? `(${t('today')})` : ''}`}
        </Text>
      </Card>
    </View>
  );
};
