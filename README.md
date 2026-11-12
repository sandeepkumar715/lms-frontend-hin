#LMS Frontend

### setup instruction
1.clone the project
```
    git clone https://github.com/sandeepkumar715/lms-frontend-hin.git
```
2.move into the directory
```
    cd client lms-frontend
```
3.install dependencies

```
    npm i
```
4.run the server
```
    npm run dev
```
### setup instruction for tailwind 

[tailwind official instruction doc ](https://v3.tailwindcss.com/docs/installation)

1.install tailwindcss
```
   npm install -D tailwindcss

```
2.create tailwind config file
```
    npx tailwindcss init
```
3.Add file extension to tailwind config file in the contents property
```
    "./src/**/*.{html,js,jsx,ts,tsx}"
```
4.Add the tailwind directives at the top of the `index.css`
```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

### Adding plugins and dependecies

```
    npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```
### configure auto import sort esline

1. Install simple import sort
```
    npm i  -D eslint-plugin-simple-import-sort

```
2. Add Rule in 'eslint.config.js'
```
     'simple-import-sort/imports': 'error',
```
3. Add simple-import sort plugin in 'eslint.config.js'

```
   plugins: {
      'simple-import-sort': simpleImportSort,
    }
```
4. To enable auto import sort on file save in vs code

    -Open `settings.json`
    -add the following config

```
        "files.autoSave": "afterDelay",
    "files.autoSaveDelay": 1000,

    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "always"
    },
```