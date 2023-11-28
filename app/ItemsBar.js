import React from "react";

function ItemsBar() {
    return(
        <ul className="itembar mx-5 my-3">
        <div className="row border border-dark" style={{width:"100%",height:"250px"}}>
            <div className="col-sm-2 border border-dark" style={{height:"250px"}}></div>
            <div className="col-sm-2 border border-dark" style={{height:"250px"}}></div>
            <div className="col-sm-2 border border-dark" style={{height:"250px"}}></div>
            <div className="col-sm-2 border border-dark" style={{height:"250px"}}></div>
            <div className="col-sm-2 border border-dark" style={{height:"250px"}}></div>
            <div className="col-sm-2 border border-dark" style={{height:"250px"}}></div>
        </div>
        </ul>
    )
}
export default ItemsBar;
