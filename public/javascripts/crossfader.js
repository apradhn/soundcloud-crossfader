$(function() {
  var iframe = $('#a .widget iframe')[0]; 
  var aWidget = SC.Widget(iframe);
  var bWidget = SC.Widget(iframe);  
  var center = $('#fader').position().left;
  var divisor = center * 2;

  $('#fader').draggable({axis: 'x', containment: ".bottom", drag: function(event, ui) {
    var parentWidth = $(this).parent().width();
    var faderWidth = $(this).width();
    var span = parentWidth - faderWidth;
    var offset = $(this).offset();
    var position = $(this).position();
    var diff = position.left - center;

    console.log("span: " + span);
    console.log("offset: " + offset.left);
    console.log("position: " + position.left);
    console.log(event);
    console.log("center: " + center);
    diff += (span / 2);
    diff /= (span * 0.01);
    console.log('diff: ' + diff);
  }});

  // $('#fader').click(function(event) {
  //   console.log(event);
  //   console.log($(this).position().left);
  // });
});

