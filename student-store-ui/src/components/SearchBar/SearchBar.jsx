import * as React from "react"
import "./SearchBar.css"
import ""

export default function SearchBar() {
    return (
        <div>
            <form className="search">
                <input type="text" placeholder="Search" size={90} id="bar"/>
                <button id="search-button"><img src="glass2.png"/></button>
            </form>
        </div>
    )
}