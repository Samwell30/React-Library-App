import React from "react";

const Highlight = ({ icon, title, para }) => {
    return (
        <div className="highlights">
            <div className="highlight__img">
                {icon}
            </div>
            <h3 className="hightlight__subtitle">{title}</h3>
            <p className="hightlight__para">
                {para}
            </p>
        </div>        
    )
}

export default Highlight