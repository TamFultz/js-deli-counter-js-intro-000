var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
    if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
    } else {
      return ('Currently serving ' + katzDeliLine.shift() + ".");
    }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
   return "The line is currently empty." ;
 } else {
    var line = []
    katzDeliLine.forEach(function(name,index) {
        var num = index + 1;
         line.push(` ${num}. ${name}`);
       })
       return "The line is currently:" + line;
  }
}
