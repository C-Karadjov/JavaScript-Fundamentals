function solve(args) {
  var currentSequence = 1,
    maxSequence = 0,
    i;
  args.splice(0, 1);

  for (var i = 1; i < args.length; i += 1) {
    if (+args[i + 1] > +args[i]) {
      currentSequence += 1;
      if (currentSequence > maxSequence) {
        maxSequence = currentSequence;
      }
    } else {
      currentSequence = 1;
    }
  }
  console.log(maxSequence);
}
solve(['8', '7', '3', '2', '3', '4', '2', '2', '4']);