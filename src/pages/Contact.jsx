import { useState, useEffect } from "react"
import { Input } from "../components/Input";
import { TextArea } from "../components/TextArea";
import { Checkbox } from "../components/Checkbox";
import { Dropdown } from "../components/Dropdown";
import { FaArrowRightLong } from "react-icons/fa6";
import {useNavigate} from 'react-router-dom'

const DROPDOWN_OPTIONS = [
    'Επικοινωνία με το τμήμα προσωπικoύ',
    'Επικοινωνία με το λογιστήριο',
    'Επικοινωνία με την υποστήριξη λογισμικού',
    'Επικοινωνία με την ......',
    'Επικοινωνία με την ......',
    'Επικοινωνία με την ......',
]


const validateForm = (fields) => {
    for (const key in fields) {
      if (fields[key] === '' || (key === 'accepatance' && !fields[key])) {
        return false;
      }
    }
    return true;
  };

export default function Contact() {
    const navigate = useNavigate()
    const [submitted, setSubmitted] = useState(false)
    const [state, setState] = useState({
        department: '',
        name: '',
        surName: '',
        email: '',
        code: '',
        message: '',
        accepatance: false
    }) 

    useEffect(() => {
    }, [submitted])


   

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setState(prev => ({...prev, [name]: value}))
    }

    const handleDropdown = (value) => {
        setState((prev) => ({...prev, department: value}))
    }

    const handleCheck = (e) => {
        const value = e.target.checked
        setState((prev) => ({...prev, accepatance: value}))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const validate = validateForm(state)
        if(!validate) {
            alert('Παρακαλώ συμπληρώστε όλα τα παιδία')
            return;
        }
        setSubmitted(true)
        localStorage.setItem('details',JSON.stringify(state))
        navigate('/submitted')
    }
    return (
        <section className="main-layout">
            <div className="header">
				<img src={require('../assets/logo.png')} />
			</div>
            <div className="sitemap">
                <span>ΑΡΧΙΚΗ / <span className="sitemap-now">ΦΟΡΜΑ ΕΠΙΚΟΙΝΩΝΙΑΣ</span></span>
            </div>
            <div className="contact-header"></div>
            <div className="contact-body">
                <div className="form-container">
                    <h1 className="title">Φόρμα Επικοινωνίας</h1>
                    <form className="form" action="">
                        <Dropdown 
                            options={DROPDOWN_OPTIONS}
                            value={state.department}
                            onChange={handleDropdown}
                        />
                        <div className="input-grid">
                        <Input 
                            label="Όνομα" 
                            type="text" 
                            name="name" 
                            placeholder="Όνομα*"
                            value={state.name} 
                            onChange={handleChange} 
                        />
                        <Input 
                            label="Επώνυμο" 
                            type="text" 
                            name="surName" 
                            placeholder="Επώνυμο*"
                            value={state.surName} 
                            onChange={handleChange} 
                        />
                        <Input 
                            label="Email" 
                            type="text" 
                            name="email" 
                            placeholder="Email*"
                            value={state.email} 
                            onChange={handleChange} 
                        />
                        <Input 
                            label="Όνομα" 
                            type="text" 
                            name="code" 
                            placeholder="Κωδικός Παραγγελίας*"
                            value={state.code} 
                            onChange={handleChange} 
                        />
                        </div>
                        <TextArea
                            label="Μήνυμα"
                            placeholder={'Γράψε μας...'}
                            rows={6}
                            value={state.message}
                            name="message"
                            onChange={handleChange}
                        />
                        <div className="acceptance-container">
                            <span>{`* Όλα τα παιδία είναι υποχρεωτικά`}</span>
                            < Checkbox 
                                checked={state.accepatance}
                                setChecked={ handleCheck }
                                name={"accepance"}
                            />
                        </div>
                        <div className="button-container">
                            <button onClick={onSubmit}>
                                Υποβολή
                                < FaArrowRightLong />
                                </button>
                        </div>
                    </form>
                   
                </div>
            </div>
        </section>
    )
}










