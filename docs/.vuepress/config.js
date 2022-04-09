module.exports = {
    // site config
    lang: 'hu-HU',
    title: 'Nem Felejtünk Viktor!',
    description: 'Just an another WordPress Blog.',

    base: '/',
  
    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
      logo: 'https://vuejs.org/images/logo.png',
      sidebar: [
        '/mi-ez.html',
        {
          title: 'Ugyek',
          text:'Ugyek',
          collapsable: true, 
          sidebarDepth: 1,
          children: [
            '/ugyek/paks2.html',
            '/ugyek/pegazus.html'
          ]
        },
        
      ]
    }
  }