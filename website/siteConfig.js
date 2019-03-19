const siteConfig = {
  title: 'Agile Brazil', 
  city: 'Belo Horizonte',
  year: '2019',
  tagline: 'Belo Horizonte, 2019',
  url: 'https://www.agilebrazil.com', 
  baseUrl: '/2019/', 
  projectName: 'agile-brazil-hotsite',
  organizationName: 'agile-alliance-brazil',
  headerLinks: [
    {doc: 'faq', label: 'FAQ'},
    { href: "http://agilealliance.org/pt/", label: "Agile Alliance" },
    { href: "http://agilealliance.org/pt/membresia/", label: "Membresia"},
    { languages: true }
  ],
  headerIcon: 'img/logo-agile-brazil.svg',
  favicon: 'img/favicon.png',
  colors: {
    primaryColor: '#5C95B6',
    secondaryColor: '#006c84',
  },
  stylesheets: ['css/main.css'],
  highlight: {
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  onPageNav: 'separate',
  cleanUrl: true,
  gaTrackingId: 'UA-134176117-1',
  gaGtag: true,
  enableUpdateTime: true,
  enableUpdateBy: true,
};

module.exports = siteConfig;
