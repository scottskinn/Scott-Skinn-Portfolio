

function Portfolio() {
    return(
        <>
        <div id="My-Work">
        <h2>Group Projects</h2>
        <div class="flex-container">
            <div class="flex-item">
                <a href={'https://askarrizvi.github.io/project1/'} target="_blank"> <img src="./assets/images/pixaradar.jpg" class="imgclass" /></a>
            <span>Group Project: PixaRadar</span>
            </div>

            <div class="flex-item">
                <a href={'https://boiling-bastion-76402.herokuapp.com/'} target="_blank"> <img src="./assets/images/n-Abl project.jpg" class="imgclass" /></a>
            <span>Group Project: n-Abl</span>
            </div>
        </div>
    </div>

    <div id="My-Work">
        <h2>My Work</h2>
        <div class="flex-container">
            <div class="flex-item col-md-10">
                <a href={'https://scottskinn.github.io/run-buddy'} target="_blank"> <img src="./assets/images/Run-buddy.jpg" class="imgclass" /></a>
                <span>RUN BUDDY</span>
            </div>

            <div class="flex-item">
                <a href={'https://scottskinn.github.io/Scott-Password-Generator/'} target="_blank"> <img src="./assets/images/Passwrod-generator.jpg" class="imgclass" /></a>
                
            <span>Password Generator</span>
            </div>

            <div class="flex-item">
                <a href={'https://scottskinn.github.io/taskmaster-pro/'} target="_blank"> <img src="./assets/images/Taskmaster.png" class="imgclass" /></a>
            <span>Taskmaster Pro</span>
            </div>

            <div class="flex-item">
                <a href={'https://scottskinn.github.io/Work-Day-Scheduler/'} target="_blank"> <img src="./assets/images/Work schedular.png" class="imgclass work-img" /></a>
            <span>Work Day Scheduler</span>
            </div>
        </div>
    </div>

    <div id="My-Work">
        <h2>GitHub</h2>
        <div class="flex-container">
            <div class="flex-item">
                <a href={'https://github.com/scottskinn'} target="_blank"> <img src="./assets/images/Github-Screenshot.jpg" class="imgclass" /></a>
            <span>GitHub Profile</span>
            </div>
        </div>
    </div>

    </>
    )
};

export default Portfolio;