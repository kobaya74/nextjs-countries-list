# Set up

## Prerequisites

You will need to install the following as prerequisites to getting started:

- [Node Version Manager](https://github.com/nvm-sh/nvm)
- [Yarn (through Corepack)](https://yarnpkg.com/en/docs/install) v4 or higher
- [Node](https://nodejs.org/en/download/) v18 or higher
- A CLOUDSMITH_YOUWE_TOKEN environment variable. See the Cloudsmith section for more details.

## Development

Firstly, make sure you're using the correct version of node

```bash
nvm use
```

...and ensure you are using the most recent version of Yarn

```bash
corepack enable
```

Then install dependencies

```bash
yarn
```

Configure the environment variables in the [configuration](../src/configuration/) folder

Finally, start developing

```bash
yarn dev
```
