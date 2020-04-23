import React, {useEffect, useState} from 'react';
import {useImmer} from 'use-immer';
import {useSelector} from 'react-redux';
import {RootState} from '@app/store';
import {config} from '@core/config';
import {Text, AppLayout, Alert, Dimensions, Carousel, Pagination, useTheme} from '@core/components';
import {weatherService} from '@weather/services';
import {WeatherData} from '@weather/interfaces';
import {WeatherItem} from './components';
import {styles} from './weather_screen.styles';

interface Conditions {
  lat: number;
  long: number;
  city: string;
  unit: string;
}

export const WeatherScreen = (): JSX.Element => {
  const theme = useTheme();
  const lang = useSelector((state: RootState) => state.settings.lang);
  const [conditions, setConditions] = useImmer<Conditions>({
    long: 105.84,
    lat: 21.02,
    city: 'Hanoi',
    unit: config.weather.unitCodes.celsius,
  });
  const [weatherForecasts, setWeatherForecasts] = useState<WeatherData[]>([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const {width: screenWidth} = Dimensions.get('window');

  useEffect(() => {
    const refresh = async (): Promise<void> => {
      try {
        const data = await weatherService.getDailyWeatherForecast({...conditions, lang});
        setWeatherForecasts(data);
      } catch (error) {
        Alert.alert('Error', error.message);
      }
    };
    refresh();
  }, [conditions, lang]);

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
      <AppLayout style={styles.noDataLayout}>
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
        dotColor={theme['text-basic-color']}
        inactiveDotColor={theme['text-basic-color']}
      />
    </AppLayout>
  );
};
