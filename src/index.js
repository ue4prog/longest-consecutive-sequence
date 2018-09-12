module.exports = function longestConsecutiveLength(array) {
  if (array.length === 0) {return 0}

  let unique = new Set()

  let maxSeqLen = 1

  array.forEach((number) => {

      unique.add(number)

  })

  for (let i = 0; i < array.length; i++) {

      if (unique.has(array[i] +1)) {

          let sequence = array[i]+1

          let seqLength = 2

          while (unique.has(sequence+1)) {

              seqLength++

              sequence++

          }

          if (seqLength > maxSeqLen) {maxSeqLen = seqLength}

      }

  }



  return maxSeqLen
}
