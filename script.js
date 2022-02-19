anime({
  targets: '#translatex',
  translateX: 230,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine'
});

anime({
  targets: '#translatey',
  translateY: 45,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine'
});

anime({
  targets: '#translatez',
  translateZ: 40,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine'
});

anime({
  targets: '#opacity',
  opacity: ['0','1'],
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine'
});



anime({
  targets: '#rotatex',
  rotateX: 360,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine'
});

anime({
  targets: '#rotatey',
  rotateY: 360,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine'
});

anime({
  targets: '#rotatez',
  rotateZ: 360,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine'
});

anime({
  targets: '#scale',
  scale: 1.3,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine'
});

anime({
  targets: '#scalex',
  scaleX: 1.3,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine'
});

anime({
  targets: '#scaley',
  scaleY: 1.2,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine'
});

anime({
  targets: '#skewx',
  skewX: 20,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine'
});

anime({
  targets: '#skewy',
  skewY: 20,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine'
});

anime({
  targets: '#border',
  borderRadius: 50,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine'
});

anime({
  targets: '#width',
  width: '100%',
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine'
});

anime({
  targets: '#color',
  backgroundColor: ['#8453E3','#FF4B4B'],
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine'
});

anime({
  targets: '#html',
  innerHTML: [0, 100],
  round: 1,
  duration: 10000,
  loop: true,
  direction: 'alternate',
  easing: 'linear',
});

anime({
  targets: '#demo-svg  path',
  strokeDashoffset: [anime.setDashoffset, 1],
  easing: 'easeInOutQuad',
  duration: 2000,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});
