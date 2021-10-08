import { Nav } from 'react-bootstrap';

function MyNav() {
    return(
    <>
        <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
        <Nav.Item>
            <Nav.Link href="/home">About Me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-1">My Work</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-2">Contact Me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-2">Resume</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>

        </Nav>
    </>
    )
}

export default MyNav;