import kaboom from 'https://unpkg.com/kaboom@3000.1.17/dist/kaboom.mjs';

const k = kaboom({
    width: 1920,
    height: 1080,
    canvas: document.querySelector('#game'),
});

loadRoot('Resources/');

export default k;