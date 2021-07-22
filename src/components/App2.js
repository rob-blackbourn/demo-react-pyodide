import React, { Component } from 'react'

export default class App extends Component {
  pyodideLoadedHandler = (pyodide) => {
    console.log('Loaded', pyodide)
    console.log(
      pyodide.runPython(`
import sys
sys.version
  `)
    )
  }

  componentDidMount() {
    console.log('here')
    this.script = document.createElement('script')
    this.script.src = 'https://cdn.jsdelivr.net/pyodide/v0.17.0/full/pyodide.js'
    this.script.async = true
    this.script.onload = () => this.onScriptLoad()
    document.body.appendChild(this.script)
  }

  onScriptLoad = () => {
    console.log('here')
    const loadPyodide = window.loadPyodide
    const promise = loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.17.0/full/' })
    promise
      .then((response) => {
        this.pyodideLoadedHandler(response)
      })
      .catch((error) => {
        console.log(error)
      })
    console.log('there')
  }

  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
      </div>
    )
  }
}
