import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

/* Components ---------------------------*/
import Deets from './Contact/Deets.jsx';
import ContactForm from './Contact/ContactForm.jsx';
// import GoogleMap from './Contact/GoogleMap.jsx';
import Youtube from './Contact/Youtube.jsx';

const Contact = () => {

    return (
        <ContactStyled className='Contact'>
            <Helmet>
                <title>Wonhee // Contact</title>
            </Helmet>
            <div className="nested-wrapper">
                <div className="column column1">
                    <Deets />
                </div>
                <div className="column column2">
                    <ContactForm />
                </div>
            </div>
            <div className="nested-wrapper">
                <Youtube />
            </div>
        </ContactStyled>
    );
}

export default Contact;

const ContactStyled = styled.div`
    .Youtube {
        display: flex;
        padding: 50px;
        align-items: center;
        justify-content: center;
    }
    .nested-wrapper {
        display: flex;

        .column {
            padding: 20px;
        }

        .column1 {
            width: 35%;
            background-color: #212121;
        }
        .column2 {
            width: 65%;
            background-color: #313131;
        }
    }
`;