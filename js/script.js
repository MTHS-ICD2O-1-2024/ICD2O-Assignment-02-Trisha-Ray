// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Trisha Ray
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

function calculateAreaOfParallelogram () {
  // input
  const baselength = parseInt(document.getElementById('base-length').value)
  const heightlength = parseInt(document.getElementById('height-length').value)

  // process
  const areaOfParallelogram = baselength * heightlength

  // output
  document.getElementById('area').innerHTML = 'Area of parallelogram is: ' + areaOfParallelogram + ' cm²'
}
