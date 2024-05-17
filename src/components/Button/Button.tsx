import React from "react";


export interface ButtonProps{
    label: string;

}

const Button = ( {label}: ButtonProps) => {
    return <button style={{padding:'2rem',backgroundColor:'green',color:'white'}}>{label}</button>
}

export default Button;