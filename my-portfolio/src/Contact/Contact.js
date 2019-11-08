import React from 'react';
import './Contact.css';

const contact = () => {
    //StyledComponents
    //CSSJS
    return (
        <div className="Global-Background Contact-Content">
            <div className="Global-Content">
                <div className="Contact-Description--Links">
                    <p> <a href="mailto:hey@denisken.com"> hey@denisken.com </a> </p>
                    <br></br>
                    <p><a href="https://www.linkedin.com/in/denisken/">linkedin.com/denisken</a></p>
                    <br></br>
                    <p> <a href="https://www.github.com/DenisKen"> github.com/denisKen</a></p>
                </div>
                <div className="Contact-Description--Rights">
                    <p> Site created by Denis Ken. </p>
                </div>
            </div>
        </div>
    )
}
 export default contact;