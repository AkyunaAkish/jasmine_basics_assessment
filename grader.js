module.exports = {
  letterGrader: function(a){
  if(a >= 95 && a <= 100){
    return 'A+';
  }
   if(a >= 85 && a < 90){
    return 'B+';
  }
   if(a >= 75 && a < 80){
    return 'C+';
  }
   if(a >= 65 && a < 70){
    return 'D+';
  }
   if( a < 60){
    return 'F';
  }
   if(a >= 90 && a < 95){
    return 'A-';
  }
   if(a >= 80 && a < 85){
    return 'B-';
  }
   if(a >= 70 && a < 75){
    return 'C-';
  }
   if(a >= 60 && a < 65){
    return 'D-';
  }
},
  averageScore: function(arr){
    var i = 0;
    var sum = 0;
    while(i < arr.length){
      sum = sum + arr[i];
      i++;
    }
    var average = sum / arr.length;
    return average;
  },
  medianScore: function(values) {
    values.sort( function(a,b) {return a - b;} );

    var half = Math.floor(values.length/2);

    if(values.length % 2){
      return values[half];
    }
    else{
      return (values[half-1] + values[half]) / 2.0;
    }
  },
  modeScore: function(arr) {
        var mode = {};
    var max = 0;
    var count = 0;

    arr.forEach(function(e) {
        if (mode[e]) { mode[e]++; }
        else { mode[e] = 1; } 

        if (count<mode[e]) { 
            max = e;
            count = mode[e];
        }
    });
    
    return max;
}
}
