import Validate from './validate';

export default {
  name: 'topcoat-{{name}}',
  description: new Validate({exist: true}),
  style: 'src/topcoat-{{name}}',
  directories: new Validate({exist: false}),
  scripts: {
    test: 'ava',
    pretest: 'npm run build',
    prepublish: 'npm run topdoc',
    'semantic-release': 'semantic-release pre && npm publish && semantic-release post',
  },
  repository: {
    type: 'git',
    url: 'https://github.com/topcoat/{{name}}.git',
  },
  keywords: new Validate({exist: true}),
  author: new Validate({test: /^([^<(]+?)?[ \t]*(?:<([^>(]+?)>)?[ \t]*(?:\(([^)]+?)\)|$)/gm }),
  contributors: new Validate({test: /^([^<(]+?)?[ \t]*(?:<([^>(]+?)>)?[ \t]*(?:\(([^)]+?)\)|$)/gm, exist: 'optional', type: 'Array'}),
  license: 'Apache-2.0',
  bugs: {
    url: 'https://github.com/topcoat/topcoat/issues',
  },
  homepage: 'http://topcoat.io/{{name}}',
  config: {
    commitizen: {
      path: './node_modules/cz-customizable',
    }
  }
};
