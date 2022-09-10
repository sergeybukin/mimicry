const get = [
  {
    route: "/api/v1/forecast/",
    getUrl: (params) =>
      `forecast/?latitude=${params.latitude}&longitude=${params.longitude}&days=${params.days}&lang=${params.lang}`,
  },
  {
    route: "/api/v1/current/",
    getUrl: (params) =>
      `current/?latitude=${params.latitude}&longitude=${params.longitude}&lang=${params.lang}`,
  },
];

module.exports = { get };
