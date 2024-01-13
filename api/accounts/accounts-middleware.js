exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  console.log('middleware')
  next()
  // or use the Yup library (not currently installed)
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
console.log('middleware')
next()
}

exports.checkAccountId = (req, res, next) => {
  console.log('middleware')// DO YOUR MAGIC
  next()
}
