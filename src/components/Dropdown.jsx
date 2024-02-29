import { useState, useEffect } from "react"
import { IoIosArrowDown } from "react-icons/io";


export const Dropdown = ({
    options, 
    value, 
    onChange
}) => {
    const [show, setShow] = useState(false)
    const handleShow = () => {setShow(prev => !prev)}

    return (
        <div onClick={ handleShow} className="dropdown-container">
            <div className="">
                <span>{value ? value : options[0]}</span>
                <IoIosArrowDown />
            </div>
            {
                show ? (
                    <div>
                       {options.map((option, index) => {
                        return (
                           <p 
                            key={index}
                            onClick={() => onChange(option)}  
                            className={`option ${index !== options.length - 1 ? 'border' : null }`} 
                            
                            >{option}</p>
                        )
                       })}
                    </div>
                ) : null
            }
        </div>
    )
}