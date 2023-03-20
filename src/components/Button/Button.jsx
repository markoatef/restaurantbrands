import React from 'react'

 const Button = (props) => {
     const classes = "btn " + props.className;
    return (
        <div className="btn"> 
            <button className={classes}>Shop Now</button>
        </div>
    )
}
export default Button ;