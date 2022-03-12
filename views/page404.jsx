const React = require('react')
const Default = require('./layouts/Default')

function page404 () {
    return (
      <Default>
        <h2>The Page You Tried To Visit Is Nowhere To Be Found.</h2>
        <h2>You Are Lost</h2>
        
        <a href="./">Click Here To Go Home</a>
      </Default>
    )
}

module.exports = page404