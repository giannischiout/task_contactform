import { Link } from "react-router-dom";
export const Checkbox = ({checked, setChecked, name}) => {
    return (
        <div className="checkbox">
                <input 
                    onChange={setChecked} 
                    type="checkbox" 
                    checked={checked} 
                    name={name}
                    />
                <span>
                    Αποδέχομαι τους 
                    <Link> Όρους Χρήσης</Link>
                </span>
        </div>
    )
}