import React from "react";

const StatCard = ({id,title,count,hendlClick}) => {
    return <div onClick={()=> hendlClick(id) }>
        <span> {count}</span>
        <span>{title}</span>
    </div>
}

export default StatCard;