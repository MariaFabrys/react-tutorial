import './Perfil.css'
import fotoperfil from '../img/fotoperfil.jpg';
import background from '../img/background.jpg';

const Perfil = () => {
    return (
        <div className='main'>
            <div className='principal'>
                <div className='imgs'>
                    <div className='back'>
                        <img src={background} alt="background"></img>
                    </div>
                    <div className='fotoPerfil'>
                        <img src={fotoperfil} alt="Foto de perfil"></img>
                    </div>
                </div>
                <div className='informationProfile'>
                    <div className='profileName'>
                        <b>Marrom Pitty</b>
                        <p>@marrom123</p>
                    </div>
                    <div className='informationSocialMidia'>
                        <p>Post</p>
                        <p>Followers</p>
                        <p>Following</p>
                        <p>Likes</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Perfil