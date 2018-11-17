function multiArray(arraySize, array0Size, array00Size, ...array0nSize) {

  Array.prototype.aFill = function(length) {for(let i = 0; i<this.length; i++){this[i]=new Array(length)} return this};
  Array.prototype.aForEach = function(length) {this.forEach(x=>x.aFill(length))};
  function efe(length) {return x => x.aForEach(length)}
  function ric(fun) {return x => x.forEach(fun)}
  function ricI(el,reps) {let array = [el]; for (var i = 1; i < reps; i++) {array[i]=ric(array[i-1])} return array[reps-1]}

  const arg = arguments.length
  const a = new Array(arraySize)
  if (arg>1) {a.aFill(array0Size)}
  if (arg>2) {a.aForEach(array00Size)}
  if (arg>3) {a.forEach(efe(array0nSize[0]))}
  if (arg>4) {
    let fun;
    for (var i = 1; i < array0nSize.length; i++) {
    fun = efe(array0nSize[i])
    a.forEach(ricI(fun,i))
    }
  }
  return a
}
