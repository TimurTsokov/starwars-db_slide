import React from 'react'
import './spinner.scss'

const Spinner = () => {
    const style = {
        width: 100,
        height: 100
    };
    return (
        <div className="lds-css ng-scope">
            <div className="lds-double-ring" style={style}>
                <div></div>
                <div></div>
            </div>
        </div>
    )
};
export default Spinner;




