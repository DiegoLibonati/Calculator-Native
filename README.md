# Numra

## Educational Purpose

This project was created primarily for **educational and learning purposes**.  
While it is well-structured and could technically be used in production, it is **not intended for commercialization**.  
The main goal is to explore and demonstrate best practices, patterns, and technologies in software development.

## Description

**Numra** is a cross-platform calculator application built with React Native and Expo, designed to run on Android, iOS, and Web from a single codebase. It covers the full set of everyday arithmetic operations — addition, subtraction, multiplication, division, and percentage — as well as sign inversion (positive/negative toggle) and a one-tap reset to clear the screen back to zero.

Beyond the math, Numra ships with a dual-theme system. Users can switch at any time between a warm light mode (soft beige tones: `#DBC8AC` / `#EDDBC0`) and a deep dark mode (rich purple tones: `#453C67` / `#6D67E4`), toggled through a switch in the top-left corner. The chosen palette is applied consistently across the background, buttons, and interactive elements, giving the app a cohesive visual identity in both modes.

The codebase is written entirely in TypeScript and follows a component-driven architecture with a clear separation between UI components, screen-level layout, context-based state management (calculator logic and UI state live in independent React contexts), custom hooks, and a centralized theme system. The theme is structured as a two-layer token model: a flat `palette` of raw color values and a semantic `theme` object that maps those colors to roles (`background.light.primary`, `background.dark.secondary`, etc.), making future visual changes straightforward to apply globally.

The project also includes a test suite built with Jest and React Native Testing Library, covering unit and component-level behavior.

## Technologies used

1. React Native
2. TypeScript
3. Expo SDK 54
4. expo-router

## Libraries used

#### Dependencies

```
"expo": "~54.0.0"
"expo-constants": "~18.0.13"
"expo-linking": "~8.0.12"
"expo-router": "~6.0.23"
"expo-status-bar": "~3.0.9"
"react": "19.1.0"
"react-dom": "19.1.0"
"react-native": "0.81.5"
"react-native-safe-area-context": "~5.6.0"
"react-native-screens": "~4.16.0"
"react-native-web": "^0.21.0"
```

#### devDependencies

```
"@babel/core": "^7.20.0"
"@eslint/js": "^9.0.0"
"@testing-library/react-native": "^12.1.2"
"@types/jest": "~29.5.14"
"@types/node": "^22.0.0"
"@types/react": "~19.1.10"
"babel-plugin-module-resolver": "^5.0.2"
"babel-preset-expo": "~54.0.1"
"eslint": "^9.0.0"
"eslint-config-prettier": "^9.0.0"
"eslint-plugin-prettier": "^5.5.5"
"eslint-plugin-react-hooks": "^5.0.0"
"globals": "^15.0.0"
"husky": "^9.0.0"
"jest": "~29.7.0"
"jest-expo": "~54.0.0"
"lint-staged": "^15.0.0"
"prettier": "^3.0.0"
"react-test-renderer": "19.1.0"
"typescript": "^5.2.2"
"typescript-eslint": "^8.0.0"
```

## Getting Started

### Prerequisites

- **Node.js 22** (pinned via [`.nvmrc`](.nvmrc)). If you use `nvm`, run `nvm use` from the project root.
- **npm** (the project ships with `package-lock.json` and `engine-strict=true`).

### Run locally

With the stack in mind, follow these steps to run Numra locally:

1. Clone the repository
2. Navigate to the project folder
3. Execute: `npm install`
4. Execute: `npm start`

Install **Expo Go** on your device ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) / [iOS](https://apps.apple.com/app/expo-go/id982107779)) and scan the QR code that appears in the terminal. To run on the web, execute `npm run web`.

## Testing

Once the app runs, you can verify its behavior with the included test suite (Jest + React Native Testing Library):

1. Navigate to the project folder
2. Execute: `npm test`

For coverage report:

```bash
npm run test:coverage
```

## Continuous Integration

The repository ships with a **GitHub Actions** pipeline defined in [`.github/workflows/ci.yml`](.github/workflows/ci.yml). It runs automatically on every `push` and `pull_request` targeting the `main` branch, validating the codebase end-to-end on a fresh Ubuntu runner before anything reaches `main`.

### Pipeline overview

```
                      ┌─── PR or push to main ───┐
                      ▼                          ▼
┌──────────────────────┐  ┌──────────────────┐  ┌──────────────────────┐
│    lint-and-audit    │─▶│      testing     │─▶│        bundle        │
│ eslint · tsc · format│  │ jest (rn + ts)   │  │ expo export (all)    │
└──────────────────────┘  └──────────────────┘  └──────────────────────┘
                                                          │
                                                          ▼
                                                ┌──────────────────────┐
                                                │      expo-doctor     │
                                                │ SDK & deps health    │
                                                └──────────────────────┘
```

Each job declares `needs: <previous>`, so the pipeline short-circuits on the first failure and never wastes minutes building or doctoring a broken commit.

### Validation jobs

1. **`lint-and-audit`** — runs `npm run lint` (ESLint over `src`, `app`, `__tests__`), `npm run typecheck` (`tsc -p tsconfig.app.json --noEmit`) and `npm run format:check` (Prettier in check mode).
2. **`testing`** — runs the full Jest suite via `npm run test`, using `jest-expo` as the preset and `@testing-library/react-native` for component-level assertions.
3. **`bundle`** — runs `npx expo export --platform all` to produce a static bundle for Android, iOS and Web. The resulting `dist/` directory is uploaded as a workflow artifact named `expo-dist` with a 7-day retention.
4. **`expo-doctor`** — runs `npm run doctor` (`npx expo-doctor`) to verify SDK compatibility, dependency version drift and configuration health.

### Node version alignment

The Node.js version is pinned via [`.nvmrc`](.nvmrc) (currently `22`) and consumed by `actions/setup-node` through `node-version-file: .nvmrc`, so CI and local environments always agree. The same file is used locally with `nvm use`, and [`.npmrc`](.npmrc) sets `engine-strict=true` so a mismatched Node version fails fast on `npm install` instead of surfacing as a confusing runtime error later.

### Where the build outputs live

| Output                                                   | Location                                                           |
| -------------------------------------------------------- | ------------------------------------------------------------------ |
| Validation logs (lint, typecheck, format, tests, doctor) | **Actions** tab on GitHub                                          |
| `dist/` bundle produced by `expo export`                 | Uploaded as the `expo-dist` artifact on each run (7-day retention) |
| Native binaries (`.apk` / `.aab` / `.ipa`)               | Not produced by CI — built on demand via EAS Build                 |

> **Note:** GitHub's **Packages** section is for package registries (npm, PyPI, Docker, etc.) and does not host Expo bundles. Static web/native bundles always live under the workflow run's **Artifacts** sidebar.

### Running the same checks locally

```bash
# lint-and-audit
npm run lint
npm run typecheck
npm run format:check

# testing
npm run test

# bundle
npx expo export --platform all

# expo-doctor
npm run doctor
```

## Security Audit

Beyond functional tests, the project ships with tooling to audit dependency health and SDK compatibility.

### npm audit

Check for vulnerabilities in dependencies:

```bash
npm audit
```

### Expo Doctor

Run a full health check on the project (dependency versions, SDK compatibility, configuration):

```bash
npm run doctor
```

## Known Issues

Some warnings reported by the audit tools above are expected and tracked upstream — details below.

Running `npm audit` reports 9 vulnerabilities (5 low, 4 moderate) in `@tootallnate/once` and `postcss`. Both are transitive dependencies of Expo's internal toolchain:

- `@tootallnate/once` — reached through `jest-expo` → `jest-environment-jsdom` → `jsdom` → `http-proxy-agent`.
- `postcss` — reached through `expo` → `@expo/cli` → `@expo/metro-config`.

None of these packages are included in the app bundle delivered to end users; they run exclusively on the developer's machine during build and test.

The suggested fix (`npm audit fix --force`) would downgrade `jest-expo` to v47.0.1 and force `expo` to v55.0.25, both of which are breaking changes incompatible with the current SDK 54 setup. Do not run it.

This is a known limitation of the Expo ecosystem tracked upstream. The vulnerabilities will be resolved when Expo updates its internal dependencies. No action is required on the project side.

## Portfolio Link

[`https://www.diegolibonati.com.ar/#/project/numra`](https://www.diegolibonati.com.ar/#/project/numra)
