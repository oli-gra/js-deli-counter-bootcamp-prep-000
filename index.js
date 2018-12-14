function takeANumber(queue,customer) {
  // test parses a queue: array and a customer: string
  return `Welcome, ${customer}. You are number ${queue} in the line.`
}
function nowServing(katzDeliLine) {
  var nextCustomer
  if (katzDeliLine.length>0) {
    nextCustomer=katzDeliLine[0]
    return nextCustomer
    katzDeliLine.shift()
  } else {
    return "The line is currently empty."
  }
}