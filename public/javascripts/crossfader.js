$(function() {
  var iframe = $('#a .widget iframe')[0];

  var center = $('#fader').position().left;
  var divisor = center * 2;

  $('#fader').draggable({axis: 'x', containment: ".bottom", drag: function(event, ui) {
    var parentWidth = $(this).parent().width();
    var faderWidth = $(this).width();
    var span = parentWidth - faderWidth;
    var offset = $(this).offset();
    var position = $(this).position();
    var bVolume = position.left - center;
    var aVolume;

    console.log("span: " + span);
    console.log("offset: " + offset.left);
    console.log("position: " + position.left);
    console.log(event);
    console.log("center: " + center);
    bVolume += (span / 2);
    bVolume /= (span * 0.01);
    bVolume *= 0.01;
    bVolume = Number(bVolume.toString().slice(0, 4));
    aVolume = bVolume;
    if (bVolume >= 0.5) {
      aVolume = 1 - bVolume;
    } else {
      aVolume = 0.5 + bVolume;
    }
    console.log('bVolume: ' + bVolume);
    SC.Widget('b-track').setVolume(bVolume);
    SC.Widget('a-track').setVolume(aVolume);
  }});
});

