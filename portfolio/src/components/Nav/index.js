import { Nav } from 'react-bootstrap';
import { capitalizeFirstLetter } from '../../utils/helpers';

function MyNav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

    const handleClick = (item) => {
        console.log(item);
        return item;
      };

    return(
    <>
        <Nav
        // activeKey="/home"
        // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
        <Nav.Item>
            <Nav.Link href="./About">About Me</Nav.Link>
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

        {categories.map((category) => (
            <li
              className={`mx-1 ${currentCategory.name === category.name}`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}

        </Nav>
    </>
    )
}

export default MyNav;