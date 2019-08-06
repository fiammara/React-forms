import React from "react";

const Selected = props => {
    return (
        <div>
            <h3>You selected:</h3>
            {props.selection}
        </div>
    );
};

export default Selected; 