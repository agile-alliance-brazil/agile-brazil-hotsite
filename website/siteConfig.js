/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/docusaurus.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Agile Brazil', 
  city: 'Belo Horizonte',
  year: '2019',
  tagline: 'Belo Horizonte, 2019',
  dates: '11,12 e 13 de setembro',
  url: 'http://staging.agilebrazil.com', 
  baseUrl: '/2019/', 
  projectName: 'agile-brazil-hotsite',
  organizationName: 'agile-alliance-brazil',
  headerLinks: [
    { href: "http://agilealliance.org/pt/", label: "Agile Alliance" },
    { href: "http://agilealliance.org/pt/membresia/", label: "Membresia"},
    { languages: true }
  ],
  headerIcon: 'img/logo-agile-brazil.svg',
  footerIcon: 'img/docusaurus.svg',
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
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',
};

module.exports = siteConfig;
