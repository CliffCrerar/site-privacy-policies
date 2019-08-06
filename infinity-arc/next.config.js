process.env.NODE_PATH = './';
const withPlugins = require('next-compose-plugins');
const withSourceMaps = require('@zeit/next-source-maps');
const withCSS = require('@zeit/next-css');
const images = require('next-images');
const nextRuntimeDotenv = require('next-runtime-dotenv');
const nextPlugins = [withSourceMaps, withCSS, withSourceMaps, images, nextRuntimeDotenv];
const isProd = process.NODE_PATH === 'production';
const nextConf = {
  assetPrefix: isProd ? 'https://cdn.mydomain.com' : '',
  distDir: isProd ? 'build' : '.next',
  exportMap: async function(){
    return await require('./static/exportmap.json');
  },
  webpack: (config, options) => {
    // path: '.env',
    config.module.rules.push({ test: /\.md$/, use: 'raw-loader' });
    config.module.rules.push({ test: /\.html$/, use: [{ loader: "html-loader" }, { loader: "markdown-loader", options: {} }] });
    //public = ['MY_API_URL'];
    //server = ['GITHUB_TOKEN'];
    // modify the `config` here
    return config;
  },
};


module.exports = withPlugins(nextPlugins, nextConf);

//        return config;


