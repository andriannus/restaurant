module.exports = {
  chainWebpack(config) {
    config.plugin("html").tap((options) => {
      options[0].title = "We The Food";
      return options;
    });
  },
};
