import { Template } from './template';

const basicTemplate: Template = {
  name: 'basic',
  dependencies: ['husky', 'kaots', 'tslib', 'typescript'],
  packageJson: {
    // name: safeName,
    version: '0.1.0',
    license: 'MIT',
    // author: author,
    main: 'dist/index.js',
    // module: `dist/${safeName}.esm.js`,
    typings: `dist/index.d.ts`,
    files: ['dist', 'src'],
    engines: {
      node: '>=10',
    },
    scripts: {
      start: 'kaots watch',
      build: 'kaots build',
      test: 'kaots test',
      lint: 'kaots lint',
      prepare: 'kaots build',
    },
    peerDependencies: {},
    husky: {
      hooks: {
        'pre-commit': 'kaots lint',
      },
    },
    prettier: {
      printWidth: 80,
      semi: true,
      singleQuote: true,
      trailingComma: 'es5',
    },
  },
};

export default basicTemplate;
