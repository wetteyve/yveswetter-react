/* eslint-disable @typescript-eslint/no-var-requires */
require('@babel/register')({
  presets: ['@babel/env', '@babel/react'],
});

const router = require('./sitemap-routes').default;
const Sitemap = require('react-router-sitemap').default;

function generateSitemap() {
  return new Sitemap(router).build('https://yveswetter.ch').save('./public/sitemap.xml');
}

generateSitemap();
