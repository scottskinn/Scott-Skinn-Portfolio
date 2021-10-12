import bioPic from '../../assets/images/head shot.jpg';

function About () {
    return(
        <>
            <p>
            Hello everyone!
            My name is Scott and welcome to my profile page! I am currently enrolled at Carlton University in one of their coding boot camps. I have been learning to code and all the other aspects that come with it for a couple months now. So far I am really enjoying it! Previously, I was working as a machinist for approximately ten years. I have always loved making things but wanted a different career for myself. Thus far, web development seems like it could be a good fit for me. Here is a showcase of my work so far.
            </p> 
            <img src={bioPic} className='my-2' style={{ width: '25%' }} alt='cover' />
        </>
    )
}

export default About;