const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

// song titles

const songs = ['Beggin X PATATA  Edit Audio  Mashup', 'Central Cee  Loading', 'Lil Nas X Jack Harlow  INDUSTRY BABY']

//keep track of songs

let songIndex = 2