import { useEffect, useRef, useState } from 'react'
import style from '../Collapse/Collapse.module.scss'
import expand from '../../assets/images/Expand.svg'
import { PropTypes } from 'prop-types'


export default function Collapse (props) {
    const [hidden, visible] = useState(false)
    const [contentHeight, setContentHeight] = useState('0px')
    const containerHeight = useRef()

    useEffect(() => {
        setContentHeight(`${containerHeight.current.scrollHeight}px`)
    }, [])

    const handleDropdownClick = () =>
        visible(!hidden)

    return (
        <div className={hidden ? style.collapseClose : style.collapseClose}>
            <button onClick={handleDropdownClick}>
                <h2>{props.title}</h2>
                <img src={expand} alt='icone show hide' className={hidden ? style.collapseIcon__close : style.collapseIcon__open} />
            </button>
            <div className={style.collapseContent} ref={containerHeight} style={{height: hidden ? `${contentHeight}` : '0px'}}>{props.detail}</div>
        </div>
    )
}

Collapse.propTypes = {
    props: PropTypes.node,
    title: PropTypes.node,
    detail: PropTypes.node
}

