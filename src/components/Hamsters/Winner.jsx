import React from 'react';




function Winner({ match }) {

    return (
        <div className="winner">
            <>
                <div>{match.name}</div>
            </>
        </div>
    );
}

export default Winner;
