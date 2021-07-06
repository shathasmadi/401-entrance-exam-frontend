import React from 'react';
import Nav from 'react-bootstrap/Nav';

 class Header extends React.Component{
    render() {
        return (
            <div>
                <Nav defaultActiveKey="/Main" as="ul">
                    <Nav.Item as="li">
                        <Nav.Link href="/Main">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="/Favorite">Favorite</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        )
    }
}

export default Header;
