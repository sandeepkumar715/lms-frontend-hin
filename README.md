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

'''
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
