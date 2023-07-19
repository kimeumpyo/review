import styles from './CSSModule.module.css';

console.log(styles);

const CSSModule = () =>{
    return(
        <div className={`${styles.wrapper} ${styles.inverted}`}>
            안녕하세요!<span className="something">CSS module!</span>
        </div>
    )
}

export default CSSModule;

