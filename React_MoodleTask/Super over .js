import React from "react";
function Superover() {
    let imgcsk = "https://assets.ccbp.in/frontend/react-js/rcb-img.png";
    let imgrcb = "https://assets.ccbp.in/frontend/react-js/csk-img.png";

    return (
        <div class="containerSuper">
            <h1>super over league</h1>
            <img src={imgcsk} className="responsive-img"></img>
            <img src={imgrcb} className="responsive-img"></img>
        </div>)
}
export default Superover
