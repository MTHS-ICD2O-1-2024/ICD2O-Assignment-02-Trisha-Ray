// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Trisha Ray
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

function calculateAreaOfParallelogram () {
  // input
  const baselength = parseFloat(document.getElementById('base-length').value)
  const heightlength = parseFloat(document.getElementById('height-length').value)

  // process
  const areaOfParallelogram = baselength * heightlength

  // output
  document.getElementById('area').innerHTML = 'Area of parallelogram is: ' + areaOfParallelogram + ' cm²'
}
