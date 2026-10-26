1) Base setup for Framework
node --version - system level
npm --version  - system level
npm create vite@latest . -- --template react-ts - project folder
This command asks to select the Linter.
After this dev server starts :  http://localhost:5173/
folder - src created contains assets, app.css, app.tsx, index.css, main.tsx
public folder, node_modules, index.html, package.json, package-lock.json, 
eslint.config.js
tsconfig.app.json, tsconfig.json, tsconfig.node.json, vite.config.ts

2) Initilize git and gitignore

3) environment - production and dev, or more mode required

4) Add files and folders as decided in hld

5) Basic Routing and libraries install
npm install react-router-dom zustand @tanstack/react-query axios formik yup firebase

# css
Possibilities : 
- global/normal -  index.css
- css modules - component-level styling : Button.tsx + button.module.css
    How this works : 

    /* Button.tsx
    <button className={styles.button}>Submit</button> The build system transforms the class into something conceptually like: <button class="Button_button_x7h2k">
    So if another component also has same css, the generated class will be different.

    /* Button.module.css
    button {color : "red"}

- styled-components - is a library for CSS-in-JS, component-level styling. 
- tailwind - How can I style UI quickly without repeatedly writing custom CSS classes and managing lots of CSS files.
- UI library - MUI,Chakra etc.  Already built components.

6) DB and API contract 

7) Choose CSS.
--------------------------------------------


# Starting point : 
index.html -> <script type="module" src="/src/main.tsx"></script> -> main.tsx -> app.tsx 
React itself does NOT decide that main.tsx is the starting point. Vite does. In a vite React project - index.html
Modern React used functional component FOR App.tsx, main.tsx.
App.tsx rendering :
1) modules present are loaded first , except lazy loaded ones
2) component renders.

# Module Selection in Project : 
depends on tooling.  Vite, Parcel, Webpack etc.
React + Vite projects . Vits supports ESM for source modules, while supports cjs dependencies. 

# Export types
Choose any export type . named or default. 

# npm, Build Tools, modes :
npm - manages packages , provide a large repo containing packages for multiple purpose and functionality
how to make our app use npm : npm init
npm run => looks for "scripts" in package.json
    Note : npm start - runs the script defined for start but note start should be present in script, but 
    npm dev - Unknown command "dev" . Because npm start is a special npm shorthand

=> run on specified port : npm run dev --port 3000

Vite: 
React/JSX -> Vite (do transpilation and bundling internally ) ->  browser
Dev script : "vite" 
production build script : "tsc -b && vite build"

Modes in Vite: 
create .env.staging file and containing VITE_APP_ENV=staging
Dev server : "staging": "vite --mode staging"
Production server : "build:staging": "tsc -b && vite build --mode staging"

CRA : uses Webpack and Babel under the hood.
React/JSX -> Babel (transpilation) -> Webpack (bundling/processing modules) ->  browser
Dev script : "react-scripts start"
production build script: "react-scripts build"

# import.meta.env in env.ts file
It is Vite's way of exposing environment variables to your frontend code. Vite only exposes environment variables prefixed with: VITE_   (see in env.ts) 
without the value of appName, appEnv will be undefined.

# Using Typescript 
1) env.ts  :   contains typescript object.
we wrote env as const because if any other noob developer tries to modify it , then during the dev phase only , he will know that this is not meant to modify.

# setup in new machine/system
git clone
npm install

# Framework vs Library
Library - Collection of reusable functions or components . Eg. React
Framework - Complete structure for building an application . Eg. React Native

Latest react version : 19.2 , released in 2025, Oct.
Major changes : performance + developer experience upgrade.
1. <Activity /> (biggest feature) - hide UI without unmounting.
Previous - {isVisible && <Page />}
Current - .

# Bundler
WebPack (only bundling), Parcel (transpile + bundling), Vite (transpile + bundle). 

Responsibilities : 
- Goes to index.html (entry point) and builds a dev build for our app - involves compilation, translation : TS --> JS
- hosts that build to our local server.
- HMR = Hot Module Replacement - refreshing page on save (using File Watching Algo - written in C++). It builts app on every save .
- Caching (parcel-cache folder) - Faster build times : but takes lesser time than before on each save. 495ms is lesser time
- Image optimization - most expensive thing in browser is to load images.
- Minification , Compression(eg. remove white spaces etc.), of files in production build.
- Consistent Hashing
- Code Splitting.
- Differential Bundling - support older browsers.
- Better Error suggestions
- host app with https also. npx parcel 01_Inception/index1.html --https . Parcel (like most dev servers) generates a self-signed SSL certificate for local HTTPS use. But it's not signed by a trusted Certificate Authority (CA), so browsers mark it as not secure or untrusted.
- Tree shaking - remove unused codes, unused exports.

# package.json , package-lock.json

Package.Json is configuration for npm. Require the manage and use the dependencies we imported in our package. keeps the approx version of deps.
package.json : {
name - name of your package/app
version - of app (major.minor.patch)
main - This tells Node.js which file to load if someone runs : require(learn-react) - usually points entry point
}

version of dependency : ^ - means whenever there's available a new minor version of dependency , it will be installed automatically, it in package.json - the value will stay as it is.
~ - means in case of upgrade, our app will install newer major version of dependency automatically.
no symbol - means we don't want any automatic update

package.lock.json - npm install some-package - locks the version of dependencies and keeps the record of exact version of the dependency to which it is upgraded.
intergrity - is a hash stored, which checks the version on local and the production , it should be the same.

# Folders 
 - lib: 
Typically contains shared libraries, SDK initialization, and reusable integrations.

- Utils folder vs custom Hooks vs services : 
  - Utils are meant for writing pure JS Helper functions, it must not import React/use hooks so it does not depend on react state or life cycle.
  - It can be used anywhere frontend, backend, testing logic (eg. loginHelper)
  
  - Hooks are write the react logic which includes managing states, context,refs.
  - Only to use inside React Functional components, other hooks.

  - Services are meant for handling external interactions (like APIs, localStorage, or backend) - can contain code that uses React state

  - features - similar like services but it is code grouped around what user can do 
   auth, donor, patient - can contain code that uses React state

-  public vs src/assets : 
Files in public are copied/served as-is,  we can access it directly using url : localhost/icon.png, can use it without importing, not a part of bundling process done by vite thus no optimization happens for these images. Vite can then optimize/hash the src/asset during the production build, which helps in caching and build optimization.