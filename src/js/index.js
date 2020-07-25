import '../css/style.css'

const root = document.querySelector('#root');

const webpack = document.createElement('h1');
webpack.classList.add('webpack-title');

const link = document.createElement('a');
link.classList.add('webpack-link');
link.href='https://webpack.js.org/';
link.textContent="This simple webpack config";

webpack.append(link);
root.append(webpack);

