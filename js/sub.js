import penList from "./data.js";

/*
const nomal_pen = document.querySelector('.nomal_pen')
const quality_pen = document.querySelector('.quality_pen')
const touch_pen = document.querySelector('.touch_pen')
const import_pen = document.querySelector('.import_pen')
const color_pen = document.querySelector('.color_pen')
const character_pen = document.querySelector('.character_pen')
const printing_pen = document.querySelector('.printing_pen')
const fountain_pen = document.querySelector('.fountain_pen')
const necklace_pen = document.querySelector('.necklace_pen')
const highlighter_pen = document.querySelector('.highlighter_pen')
const sign_pen = document.querySelector('.sign_pen')
const sharp_pen = document.querySelector('.sharp_pen')
const ball_pen = document.querySelector('.ball_pen')
const waterB_pen = document.querySelector('.waterB_pen')
const gitSet_pen = document.querySelector('.gitSet_pen')
*/

/*
const pen_new = document.querySelector('.pen_new')
const pen_lowP = document.querySelector('.pen_lowP')
const pen_highP = document.querySelector('.pen_highP')
*/

const pen_best = document.querySelector('.goods')


for(let i=0; i<penList.length; i++) {
  let bestDiv = document.createElement('div')
  bestDiv.setAttribute('class', 'best_box')

  let bestImg = document.createElement('img')
  bestImg.setAttribute('src', penList[i].src)
  bestDiv.appendChild(bestImg)

  let bestNameDiv = document.createElement('div')
  let bestNameText = document.createTextNode(penList[i].name)
  bestNameDiv.appendChild(bestNameText)
  bestDiv.appendChild(bestNameDiv)

  let bestPrice = document.createElement('div')
  let bestPriceText = document.createTextNode(penList[i].price + "원")
  bestPrice.appendChild(bestPriceText)
  bestDiv.appendChild(bestPrice)

  pen_best.appendChild(bestDiv)
}
