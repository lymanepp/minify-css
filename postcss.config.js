const cssnano = require('cssnano');
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = function() {
  const contentPath = process.env.CONTENT_PATH || '_site';
  console.log('Using content path:', contentPath);

  return {
    map: {
      inline: false,
      annotation: true,
      sourcesContent: false,
    },
    plugins: [
      purgecss({
        content: [
          `${contentPath}/**/*.html`,
          `${contentPath}/**/*.js`
        ],
        css: [
          `${contentPath}/**/*.css`
        ],
        keyframes: true,
        fontFace: true,
        variables: true,
        safelist: [],
        blocklist: [],
        rejected: false
      }),
      cssnano({
        preset: [
          'default', {
            discardComments: { removeAll: true },
            normalizeWhitespace: true,
            discardDuplicates: true,
            discardEmpty: true,
            mergeRules: true,
            minifySelectors: true,
            reduceIdents: true,
            reduceTransforms: true,
            mergeLonghand: true,
            zIndex: true
          }
        ]
      })
    ]
  };
};
