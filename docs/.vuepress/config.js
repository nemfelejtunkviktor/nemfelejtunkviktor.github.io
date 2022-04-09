module.exports = {
    // site config
    lang: 'hu-HU',
    title: 'Nem Felejtünk Viktor!',
    description: 'Just an another WordPress Blog.',

    base: '/',
  
    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
      contributors: false,
      logo: 'https://vuejs.org/images/logo.png',
      sidebar: [
        '/hogyan-tudsz-segiteni.html',
        {
          title: 'Ügyek',
          text:'Ügyek',
          collapsable: true, 
          sidebarDepth: 1,
          children: [
              '/ugyek/alapitvanyok.html',
              '/ugyek/a-2018-as-valasztasi-torveny.html',
              '/ugyek/a-2022-es-valasztasok.html',
              '/ugyek/kozmedia.html',
              '/ugyek/pegazus.html',
            '/ugyek/paks2.html',
          ]
        },
        
      ]
    }
  }