# React + AlternateFutures Starter Kit

![AlternateFutures](https://github.com/alternatefutures/cloud-templates/raw/main/assets/hero-logo.svg)

## 🚀 Project Structure

Inside of your React project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── main.tsx
│   ├── App.tsx
│   └── App.css
├── index.html
├── tsconfig.json
├── vite.config.ts
└── package.json
```

If you want to learn more about `vite` and `react` you can checkout [Vite Documentation](https://vitejs.dev/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`          | Installs dependencies                            |
| `pnpm run dev`          | Starts local dev server at `localhost:3000`      |
| `pnpm run build`        | Build your production site to `./dist/`          |
| `pnpm run preview`      | Preview your build locally, before deploying     |
| `pnpm run lint ...`    | Run Linter |

## ⚡ How to deploy to AlternateFutures

### 1. Create a `af.config` config file:
You can configure this site deployment using [AlternateFutures CLI]() and running:
```
 > af sites init
   WARN! AlternateFutures CLI is in beta phase, use it under your own responsibility
   ? Choose one of the existing sites or create a new one. ›
   ❯ Create a new site
```
It will prompt you for a `name`, `dist` directory location & `build command`
- `name`: How you want to name the site
- `dist`: The output directory where the site is located, for this template it's `dist`
- `build command`: Command to build your site, this will be used to deploy the latest version either by CLI or Github Actions

### 2. Deploy the site
After configuring your `af.config` file, you can deploy the site by running

```
af sites deploy
```
After running it you will get an output like this:
```
 WARN! AlternateFutures CLI is in beta, use it at your own discretion
 > Success! Deployed!
 > Site IPFS CID: QmP1nDyoHqSrRabwUSrxRV3DJqiKH7b9t1tpLcr1NTkm1M

 > You can visit through the gateway:
 > https://ipfs.io/ipfs/QmP1nDyoHqSrRabwUSrxRV3DJqiKH7b9t1tpLcr1NTkm1M
 ```

### Extra features
- **Continuous Integration (CI):** `af sites ci` [Documentation.](https://docs.alternatefutures.ai/services/sites/#continuous-integration-ci)
- **Adding custom domains:** `af domains create` [Documentation.](https://docs.alternatefutures.ai/services/domains/)


### Keep in mind:

This template has been configured to produce a static output.

```js
// vite.config.ts

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
})
```

This means that assets will be pre-fixed with `./`, you can learn more about it in [Vite Documentation](https://vitejs.dev/config/shared-options.html#base)


## 👀 Want to learn more?

Feel free to check [React documentation](https://react.dev/) or [Vite Documentation](https://vitejs.dev/guide/).

## 📄 License

This project is licensed under the **GNU General Public License v3.0** - see the [LICENSE](https://choosealicense.com/licenses/gpl-3.0/) for details.

## 🙏 Acknowledgements

The initial architecture and conceptual foundation of this project were derived from a fork of the Fleek.xyz platform. While we have diverged from the original fork to meet our evolving requirements, we express our gratitude to the Fleek team for their pioneering contributions to decentralized application hosting infrastructure.


