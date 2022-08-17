const a = {
  route: "/api/v1/forecast/",
  getUrl: (params) =>
    `forecast/?latitude=${params.latitude}&longitude=${params.longitude}&days=${params.days}`,
};

console.log(a.getUrl({ latitude: 1, longitude: 2, days: 10 }));
