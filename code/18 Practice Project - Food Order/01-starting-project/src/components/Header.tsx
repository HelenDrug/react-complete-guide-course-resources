import type {ReactElement} from "react";

export default function Header(): ReactElement {
    return (
        <header id="main-header">
            <div id="title">
                <img src="/logo.jpg" alt='Logo'/>
                <h1>Meals</h1>
            </div>
            <nav>
                <button>Cart (0)</button>
            </nav>
        </header>
    )
}