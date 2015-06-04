var myCode = require('./../grader.js');

describe('#letterGrader()', function() {
  it('Returns grade equivalent of a number', function(){
    expect(myCode.letterGrader(96)).toEqual("A+");

  });
});
describe('#averageScore()', function() {
  it('Returns average score of an array', function(){
    expect(myCode.averageScore([90, 95, 87, 60])).toEqual(83);

  });
});

describe('#medianScore()', function() {
  it('Returns the median of an array', function(){
    expect(myCode.medianScore([52,80,80,86,94])).toEqual(80);
   });
  });
  describe('#modeScore()', function() {
    it('Returns the mode of an array', function(){
      expect(myCode.modeScore([82, 92, 75,91, 92, 89, 95, 100, 86])).toEqual(92);
      expect(myCode.modeScore([82,35,35])).toEqual(35);
     });
    });
