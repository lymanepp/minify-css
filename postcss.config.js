import cssnano from 'cssnano';
import purgecss from '@fullhuman/postcss-purgecss';

export default function() {
  const sitePath = process.env.SITE_PATH || '_site';

  return {
    map: {
      inline: false,
      annotation: true,
      sourcesContent: false,
    },
    plugins: [
      purgecss({
        content: [
          `${sitePath}/**/*.html`,
          `${sitePath}/**/*.js`
        ],
        css: [
          `${sitePath}/**/*.css`
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
}