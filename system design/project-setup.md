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

src/
│
├── app/
│   ├── App.tsx
│   ├── routes.tsx
│   └── providers/
│       ├── QueryProvider.tsx
│       └── AuthProvider.tsx
│
├── assets/
│
├── components/
│   ├── ui/
│   └── common/
│
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── services/
│   │   └── types.ts
│   │
│   ├── donor/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   └── types.ts
│   │
│   ├── patient/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   └── types.ts
│   │
│   └── emergency/
│       ├── components/
│       ├── pages/
│       ├── hooks/
│       ├── services/
│       └── types.ts
│
├── hooks/
│   └── ...
│
├── layouts/
│   ├── AuthLayout.tsx
│   ├── DonorLayout.tsx
│   └── PatientLayout.tsx
│
├── lib/
│   ├── firebase.ts
│   ├── axios.ts
│   └── queryClient.ts
│
├── services/
│   ├── api/
│   └── socket/
│
├── store/
│   ├── authStore.ts
│   └── appStore.ts
│
├── types/
│   └── common.ts
│
├── utils/
│   └── ...
│
├── main.tsx
└── index.css
--------------------------------------------
# public vs src/assets : 
Files in public are copied/served as-is,  we can access it directly using url : localhost/icon.png, can use it without importing, not a part of bundling process done by vite thus no optimization happens for these images. Vite can then optimize/hash the src/asset during the production build, which helps in caching and build optimization.

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

# Builds :
npm run dev -> Vite -> development server -> .env.development -> src/config/env -> React 
and similarly npm run build for production.
How this works.
Vite looks for scripts inside the package.json with npm run

# Export types
Choose any export type . named or default. 

# import.meta.env in env.ts file
It is Vite's way of exposing environment variables to your frontend code. Vite only exposes environment variables prefixed with: VITE_   (see in env.ts) 
without the value of appName, appEnv will be undefined.

# Using Typescript 
1) env.ts  :   contains typescript object.
we wrote env as const because if any other noob developer tries to modify it , then during the dev phase only , he will know that this is not meant to modify.
 
# running dev on a specified port 
npm run dev -- --port 3000

# Adding modes
vite mode --staging - if Vite is installed globally , npx vite mode --staging
OR 
add inside package.json scripts : "staging": "vite --mode staging"

Add .env.staging if need.

npm run staging will start a dev server but with staging creds.
npm build staging will create a prod build but with staging creds.

# setup in new machine/system
git clone
npm install
