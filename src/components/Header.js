import React from 'react';

// Destructuring 'message' var from props object.
const Header = ({ message }) => {
    return (
        <h2 className=" Header text-center"> 
            {message}
        </h2>
    );
};

Header.propTypes = {
    message: React.PropTypes.string
};

export default Header;