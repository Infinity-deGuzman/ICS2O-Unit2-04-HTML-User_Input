// Copyright (c) 2021 Infinity de Guzman All rights reserved
//
// Created by: Infinity de Guzman
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"

function enterClicked () {
  // this function gets the length and width of the rectangle and shows it back to user

  // input
  const length = parseInt(document.getElementById("rectangle-length").value)
  const width = parseInt(document.getElementById("rectangle-width").value)

  // process
  const area = length * width
  const perimeter = 2 * (length + width)

  // output
  document.getElementById('area').innerHTML = 'The area is: ' + length + ' x ' + width + ' = ' + area + ' cm²'
  document.getElementById('perimeter').innerHTML = 'The perimeter is: 2 x (' + length + ' + ' + width + ') = ' + perimeter + ' cm'
}

const config = {
  scale: {
    mode: Phaser.Scale.FIT,
    // we place it in the middle of the page
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}
