export const fTelAvivCur = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(TelAvivCur);
  }, 1000);
});

export const TelAvivCur = `[
    {
        "LocalObservationDateTime": "2019-12-29T14:46:00+02:00",
        "EpochTime": 1577623560,
        "WeatherText": "Partly sunny",
        "WeatherIcon": 3,
        "HasPrecipitation": false,
        "PrecipitationType": null,
        "IsDayTime": true,
        "Temperature": {
            "Metric": {
                "Value": 19.1,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": 66.0,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
    }
]`;