import React, {useEffect, useState} from 'react';
import {useImmer} from 'use-immer';
import {Alert, Dimensions} from 'react-native';
import {config} from '@core/config';
import {Text, AppLayout, Carousel, Pagination} from '@core/components';
import {weatherService} from '@weather/services';
import {WeatherData} from '@weather/interfaces';
import {WeatherItem} from './components';
import {styles} from './weather_screen.styles';

interface Conditions {
  lat: number;
  long: number;
  city: string;
  unit: string;
  lang: string;
}

export const WeatherScreen = (): JSX.Element => {
  const [conditions, setConditions] = useImmer<Conditions>({
    long: 105.84,
    lat: 21.02,
    city: 'Hanoi',
    unit: config.weather.unitCodes.celsius,
    lang: 'vi',
  });
  const [weatherForecasts, setWeatherForecasts] = useState<WeatherData[]>([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const {width: screenWidth} = Dimensions.get('window');

  useEffect(() => {
    const refresh = async (): Promise<void> => {
      try {
        const data = await weatherService.getDailyWeatherForecast(conditions);
        setWeatherForecasts(data);
      } catch (error) {
        Alert.alert('Error', error.message);
      }
    };
    refresh();
  }, [conditions]);

  const toggleUnit = (): void => {
    setConditions((draft) => {
      draft.unit =
        conditions.unit === config.weather.unitCodes.celsius
          ? config.weather.unitCodes.fahrenheit
          : config.weather.unitCodes.celsius;
    });
  };

  const renderWeatherItem = ({item: weatherForecast, index}: {item: WeatherData; index: number}): JSX.Element => {
    return (
      <WeatherItem
        key={weatherForecast.date}
        data={weatherForecast}
        isToday={index === 0}
        unit={conditions.unit}
        toggleUnit={toggleUnit}
      />
    );
  };

  if (weatherForecasts.length === 0) {
    return (
      <AppLayout style={styles.layout}>
        <Text>No data</Text>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <Carousel
        data={weatherForecasts}
        renderItem={renderWeatherItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth - 100}
        onSnapToItem={setActiveSlide}
      />
      <Pagination
        dotsLength={weatherForecasts.length}
        activeDotIndex={activeSlide}
        dotStyle={styles.dot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </AppLayout>
  );
};
