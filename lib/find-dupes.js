// dedupe duplicated packages, or find them in the tree
const dedupe = require('./dedupe.js')
const usageUtil = require('./utils/usage.js')

const usage = usageUtil('find-dupes', 'npm find-dupes')
const completion = (opts, cb) => cb(null, [])
const cmd = (args, cb) => dedupe({ dryRun: true } , cb)

module.exports = Object.assign(cmd, { usage, completion })