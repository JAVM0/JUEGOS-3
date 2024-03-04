import kaboom from 'https://unpkg.com/kaboom@3000.1.17/dist/kaboom.mjs';

const k = kaboom({
    width: 1280,
    height: 720,
    canvas: document.querySelector('#game')
})

export default k;