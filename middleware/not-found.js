const notFound = (req, res) => res.status(404).send('Route dooes not exist')

module.exports = notFound