import React, { useState } from 'react';
import Nav from '../Nav';

function Header() {
    const [contactSelected, setContactSelected] = useState(false)
    return(
        <>
            <h1>
                Scott Skinn
            </h1>
            <Nav>
            contactSelected={contactSelected}
            setContactSelected={setContactSelected}
            </Nav>
        </>
        
    )
}

export default Header;