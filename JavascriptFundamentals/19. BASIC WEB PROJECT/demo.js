const data = require('./someModule');
const fs = require('fs');
const express = require('express');

console.log(data.name);
console.log(data.secondName);

let content = fs.readFileSync('c:/Users/dstoi/Desktop/GitHub Repository/SoftUni/JavascriptFundamentals/19. BASIC WEB PROJECT/text.js', { encoding: 'utf-8' });
console.log(content);