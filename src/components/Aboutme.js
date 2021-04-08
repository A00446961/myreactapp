import React, { Component } from "react"
import myimage from './me.png'
class Aboutme extends Component {
    render() {
        return (
            <div>
        <h1> Hello , I'm Deepan Munjal </h1>
        <p> I am a student at Saint Mary's University in Halifax, Nova Scotia   </p>
        <p>  I joined MCDA program because I wanted to become Data Scientist. </p>
        <img src={myimage} />
            </div>
        )
    }
}

/**
 * Topics you might also like:
 *      - Array.map() -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */

export default Aboutme;