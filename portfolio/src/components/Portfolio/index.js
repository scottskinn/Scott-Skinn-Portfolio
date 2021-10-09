// import images from '../../assets/images'

function Portfolio() {
    return(
        <>
        <div id="My-Work">
        <h2>Group Projects</h2>
        <div className="flex-container">
            <div className="flex-item">
                <a href={'https://askarrizvi.github.io/project1/'} target="_blank" rel="noreferrer"> <img src={require(`../../assets/images/pixaradar.jpg`)} className="imgclass" alt='' /></a>
            <span>Group Project: PixaRadar</span>
            </div>

            <div className="flex-item">
                <a href={'https://boiling-bastion-76402.herokuapp.com/'} target="_blank" rel="noreferrer"> <img src="./assets/images/n-Abl project.jpg" className="imgclass" alt='' /></a>
            <span>Group Project: n-Abl</span>
            </div>
        </div>
    </div>

    <div id="My-Work">
        <h2>My Work</h2>
        <div className="flex-container">
            <div className="flex-item col-md-10">
                <a href={'https://scottskinn.github.io/run-buddy'} target="_blank" rel="noreferrer"> <img src="./assets/images/Run-buddy.jpg" className="imgclass" alt='' /></a>
                <span>RUN BUDDY</span>
            </div>

            <div className="flex-item">
                <a href={'https://scottskinn.github.io/Scott-Password-Generator/'} target="_blank" rel="noreferrer"> <img src="./assets/images/Passwrod-generator.jpg" className="imgclass" alt='' /></a>
                
            <span>Password Generator</span>
            </div>

            <div className="flex-item">
                <a href={'https://scottskinn.github.io/taskmaster-pro/'} target="_blank" rel="noreferrer"> <img src="./assets/images/Taskmaster.png" className="imgclass" alt='' /></a>
            <span>Taskmaster Pro</span>
            </div>

            <div className="flex-item">
                <a href={'https://scottskinn.github.io/Work-Day-Scheduler/'} target="_blank" rel="noreferrer"> <img src="./assets/images/Work schedular.png" className="imgclass work-img" alt='' /></a>
            <span>Work Day Scheduler</span>
            </div>
        </div>
    </div>

    <div id="My-Work">
        <h2>GitHub</h2>
        <div className="flex-container">
            <div className="flex-item">
                <a href={'https://github.com/scottskinn'} target="_blank" rel="noreferrer"> <img src="./assets/images/Github-Screenshot.jpg" className="imgclass" alt='' /></a>
            <span>GitHub Profile</span>
            </div>
        </div>
    </div>

    </>
    )
};

export default Portfolio;