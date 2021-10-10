# Step by step

## App shell

create app shell (aka root) `npx create-single-spa --moduleType root-config`

app shell running on `http://localhost:9000`

## Parcels

- create a react parcel `npx create-single-spa --moduleType app-parcel`

run 'rc' micro frontend `yarn start --port 8500`

- create a react parcel `npx create-single-spa --moduleType app-parcel`

run 'bpm' micro frontend `yarn start --port 8501`

- create a react parcel `npx create-single-spa --moduleType app-parcel`

run 'header' micro frontend `yarn start --port 8502`

- create an svelte `npx create-single-spa --moduleType app-parcel`

run 'dd' micro frontend `yarn start --port 5000`

## Prepare the app shell

edit `index.ejs` and add the following imports

```
"react": "https://cdn.jsdelivr.net/npm/react@16.13.1/umd/react.production.min.js",
"react-dom": "https://cdn.jsdelivr.net/npm/react-dom@16.13.1/umd/react-dom.production.min.js"
"@dmi/rc": "http://localhost:8500/dmi-rc.js",
"@dmi/bpm": "http://localhost:8501/dmi-bpm.js",
"@dmi/header": "http://localhost:5000/dmi-dd.js",
```

update `microfrontend-layout.html`

- remove `<application name="@single-spa/welcome"></application>`
- add your parcels there
