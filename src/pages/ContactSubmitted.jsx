import { useEffect, useState } from "react"
import {useNavigate} from 'react-router-dom'
export default function ContactSubmitted() {
    const navigate = useNavigate();
    const [state, setState] = useState()
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("details"))
        setState(data)
    }, [])
    return (
        <section>
              <div className="header header_shadow">
				<img src={require('../assets/logo.png')} />
			</div>
            <div className="submitted_wrapper">
            <div className="submited-container">
                    <h2 className="title">Yποβληθέντα Στοιχεία</h2>
                    <div className="submitted-info">
                        <span>{state?.name}</span>
                        <span>{state?.surName}</span>
                        <span>{state?.email}</span>
                        <span>{`#${state?.code}`}</span>
                    </div>
                    <div className="submitted-message">
                        <h3>Mήνυμα</h3>
                        <p>{state?.message}</p>
                    </div>
                    <div className="submitted-button">
                        <button onClick={() => navigate('/')}>Επιστροφή</button>
                    </div>
                </div>
            </div>
            
        </section>
    )
}