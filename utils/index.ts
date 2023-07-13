import { CarProps, FilterProps } from '@/types';

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  const headers = {
    'X-RapidAPI-Key': '3b834a19bemsh766d85b84cc66d4p1cbd01jsn7f589d952702',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    { headers: headers }
  );

  const result = await response.json();

  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const mileageFactor = 2;
  const mileageRate = city_mpg * mileageFactor;

  let basePrice = 1000;
  let price = basePrice + mileageRate;

  if (city_mpg < 10) {
    price += 500;
  } else if (city_mpg < 20) {
    price += 300;
  } else if (city_mpg < 30) {
    price += 100;
  }

  let currentYear = new Date().getFullYear();
  let age = currentYear - year;

  if (age <= 2) {
    price += 500;
  } else if (age <= 4) {
    price += 300;
  } else if (age <= 6) {
    price += 100;
  } else {
    price += 50;
  }

  return price.toLocaleString();
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL('https://cdn.imagin.studio/getimage');

  const { make, year, model } = car;

  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(' ')[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};
