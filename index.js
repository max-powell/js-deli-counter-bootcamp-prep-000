var count = 0

function takeANumber(line) {
  count += 1
  line.push(count)
  /*if (line.length === 0) {
    line.push(1)
  } else {
    line.push(line[-1]+1)
  }
  line.push(name);*/
  return `Welcome. You are number ${count}.`
}

function nowServing(line) {
  if (line.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    var nextCustomer = line[0]
    line.shift()
    return `Currently serving ${nextCustomer}.`
  }
}
function currentLine(line) {
  if (line.length === 0) {
    return 'The line is currently empty.'
  } else {
    var output = 'The line is currently: '
    for (var i=0; i < line.length; i++) {
      output += `${i+1}. ${line[i]}, `
    }
  }
  return output.slice(0,-2)
}
