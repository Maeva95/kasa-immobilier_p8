import { PropTypes } from 'prop-types'
import style from '../ProfileHost/ProfileHost.module.scss'


export default function ProfileHost ({ name, picture }) {

    
	return (
        <div className= {style.profileHost}>
            <h3>{name}</h3>
            <img src={picture} alt={`hôte ${name}`} />
        </div>
	)
}

ProfileHost.propTypes = {
    name: PropTypes.string,
    picture: PropTypes.string
}