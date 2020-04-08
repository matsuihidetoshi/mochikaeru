module.exports = {
  pwa: {
    name: 'Mochikaeru',
    themeColor: '#eb3f25',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'default',

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'dev/sw.js',
      // ...other Workbox options...
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}