# web-messaging-service

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]

[npm-image]: https://badge.fury.io/js/%40testeditor%2Fmessaging-service.svg
[npm-url]: https://www.npmjs.com/package/@testeditor/messaging-service
[travis-image]: https://travis-ci.org/test-editor/web-messaging-service.svg?branch=master
[travis-url]: https://travis-ci.org/test-editor/web-messaging-service

Angular service for component communication.

## Setup development

Make sure to have a working [nix](https://nixos.org/nix/) installation. Please ensure that the `nixpkgs-unstable` channel is available. It
can be added with `nix-channel --add https://nixos.org/channels/nixpkgs-unstable`.

To enter the development environment, execute `NIXPKGS_ALLOW_UNFREE=1 nix-shell` in this repos root directory. For even more convenience,
please install [direnv](https://github.com/direnv/direnv) which will enter the development environment automatically for you.

Once within the development environment, run `yarn install`  to resolve all necessary dependencies.

## Build

    yarn install
    npm run build

## Development

For developing the library run

    npm run start

### Release process

In order to create a release, the version needs to be increased and tagged. This is done easily using `npm version`, for example:

```
npm version minor
```

After the commit and tag is pushed Travis will automatically deploy the tagged version.

### Gotchas

When adding or using a new Angular dependency it must be added in the rollup configuration in the `build.js` so that it's not included in the output bundle.
