import { Link } from 'react-router-dom'
import style from './Card.module.scss'
import { PropTypes } from 'prop-types'

export default function Card ({ id, title, cover }) {

	return (
        <>
            <Link to={'/apartment/' + id} className={style.card}>
                <div className={style.card__mask}>
                    <img src={cover} alt={`${title} cover`} />
                </div>
                <h2 className={style.card__heading}>{title}</h2>
            </Link>
        </>
	)
}

Card.propTypes = {
    apartment: PropTypes.node,
    title: PropTypes.node,
    cover: PropTypes.node,
    id: PropTypes.node
    }