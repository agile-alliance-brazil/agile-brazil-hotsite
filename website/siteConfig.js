var siteConfig = {
  title: 'Agile Brazil', 
  city: 'Belo Horizonte',
  year: '2019',
  tagline: 'Belo Horizonte, 2019',
  baseUrl: '/2019/', 
  projectName: 'agile-brazil-hotsite',
  organizationName: 'agile-alliance-brazil',
  defaultLanguage: 'pt',
  headerLinks: [
    {doc: 'faq', label: 'FAQ'},
    {doc: 'volunteers', label: 'Volunteers'},
    {page: 'program', label: 'Program'},
    {doc: 'wbma/index', label: 'WBMA'},
    {doc: 'accommodation', label: 'Accommodation'},
    { href: "http://agilealliance.org/pt/", label: "Agile Alliance" },
    { href: "https://www.agilealliance.org/agilealliancebrazil/membresia/", label: "Membresia"},
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
  enableUpdateTime: true
};

if (process.env.NODE_ENV == 'production') {
  siteConfig.url = 'https://www.agilebrazil.com';
  siteConfig.gaTrackingId = 'UA-134176117-1';
  siteConfig.gaGtag = true;
} else {
  siteConfig.url = 'http://staging.agilebrazil.com';
}

module.exports = siteConfig;
