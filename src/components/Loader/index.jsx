import style from '../Loader/Loader.module.scss'

export default function Loader (){
    return (
        <>
            <div className={style.loaderSpace}>
                <div className={style.loader}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    )
}