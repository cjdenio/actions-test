const actions = require('@actions/core')
const fs = require('fs')
const { promisify } = require('util')
const path = require('path')

async function run() {
    const writeFile = promisify(fs.writeFile)

    await writeFile(path.join(process.env.GITHUB_WORKSPACE, 'README.md'), new Date().toString())
}

run()