import React from 'react';
import { useHistory } from 'react-router-dom';
import '../PropertyFormNav';
import { Button } from '@mui/material';

function BasicsOption({ allowBasics }) {
    const history = useHistory();

    function toBasics() {
        history.push('/basics')
    }

    return (allowBasics) ? (
        <>
            <div className="indicatorCtnr">
                    <div className="indicator allow">
                        <Button onClick={toBasics}></Button>
                    </div>
                    <p>Basics</p>
            </div>
        </>
    ) : (
        <>
            <div className="indicatorCtnr">
                    <div className="indicator restrict"></div>
                    <p className="restricted">Basics</p>
            </div>
        </>
    ) 
}

export default BasicsOption;