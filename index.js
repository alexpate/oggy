'use strict';

const url = require('url');
const fs = require('fs');
const fabric = require('fabric').fabric;
var request = require('request').defaults({encoding: null});

module.exports = (req, res) => {
  const {pathname, query} = url.parse(req.url, true);

  if (!query.title || !query.author) return '';

  const canvas = fabric.createCanvasForNode(1200, 630);

  const container = new fabric.Rect({
    width: 1200,
    height: 500,
    fill: '#f9fafc',
  });

  const title = new fabric.Textbox(query.title, {
    fontFamily: 'Interface',
    fontSize: 54,
    fontWeight: 500,
    lineHeight: 1,
    fill: '#121212',
    width: 1000,
    left: 100,
  });

  const author = new fabric.Textbox(query.author, {
    fontFamily: 'Interface',
    fontSize: 34,
    fontWeight: 500,
    lineHeight: 1,
    fill: '#121212',
    width: 1000,
    left: 100,
  });

  const textGroup = new fabric.Group([title, author], {
    height: 500,
  });

  author.set({
    top: title.getHeight() / 2 + 10,
  });

  var mainGroup = new fabric.Group([container]);

  const footer = new fabric.Rect({
    width: 1202,
    height: 140,
    top: 630 - 140,
    left: -1,
    fill: '#4141FF',
  });

  canvas.add(mainGroup);
  canvas.add(textGroup);
  canvas.add(footer);

  canvas.createPNGStream().pipe(res);
};
