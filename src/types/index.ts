export type optionType = {
  name: string
  lat: number
  lon: number
  counrty: string
}

export type forecastType = {
  name: string
  counrty: string
  sunrise: number
  sinset: number
  list: [
    {
      dt: number
      main: {
        feels_like: number
        humidity: number
        pressure: number
        temp: number
        temp_max: number
        temp_min: number
      }
      weather: [
        {
          main: string
          icon: string
          description: string
        }
      ]
      wind: {
        speed: number
        gust: number
        deg: number
      }
      clouds: {
        all: number
      }
      pop: number
      visibility: number
    }
  ]
}
