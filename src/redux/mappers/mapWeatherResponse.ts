export const mapWeatherResponse = (data: any) => {
  const { temperature, wind, cloudiness, humidity } = data.response;

  return {
    temperature: temperature.air.C,
    wind: wind.speed.m_s,
    cloudiness: cloudiness.type,
    humidity: humidity.percent,
  };
};
