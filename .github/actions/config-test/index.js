const actions = require('@actions/core')
const fs = require('fs')
const { promisify } = require('util')
const path = require('path')

async function run() {
    console.log(process.env.INPUT_TEST)
}

run()