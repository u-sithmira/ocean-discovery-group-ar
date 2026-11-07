// Member 3 owns this file.
// Workshop-style interaction: tapping the ball switches its material colour.
AFRAME.registerComponent('change-ball-colour', {
  init: function () {
    const colours = ['#2D9CDB', '#F2C94C', '#EB5757', '#27AE60', '#9B51E0'];
    let colourIndex = 0;

    this.el.addEventListener('click', () => {
      colourIndex = (colourIndex + 1) % colours.length;
      this.el.setAttribute('material', 'color', colours[colourIndex]);
    });
  }
});

// New custom interaction: tapping the treasure chest toggles its size.
AFRAME.registerComponent('toggle-grow', {
  init: function () {
    let large = false;

    this.el.addEventListener('click', () => {
      large = !large;
      this.el.setAttribute('animation', {
        property: 'scale',
        to: large ? '1.45 1.45 1.45' : '1 1 1',
        dur: 350,
        easing: 'easeOutQuad'
      });
    });
  }
});
