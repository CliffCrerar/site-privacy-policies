process.env.NODE_PATH = './';
const withCSS = require('@zeit/next-css');
const marked = require("marked");
const renderer = new marked.Renderer();
module.exports = withCSS({
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.md$/,
            use: [
                {
                    loader: 'html-loader'
                },
                {
                    loader: "markdown-loader",
                    options: {
                        /* your options here */
                        
                        renderer
                    }
                }
            ]
        })
        return config;
}})

