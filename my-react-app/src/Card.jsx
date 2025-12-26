import profilePic from './assets/profile.jpeg'

function Card(){

    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture" />
            <h2 className='card-title'>Levi</h2>
            <p className='card-text'>I study computer science and play video games and have a girlfriend.</p>
        </div>
    );
}

export default Card