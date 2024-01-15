import styles from './InputComFoto.module.css';

import imagem from './images/victor.jpg'

function InputComFoto() {
    return(
    <div className={styles.main}>

    <h1>InputComFoto</h1>
    <br/><br/><br/>

    <div className={styles.container}>
        <div className={styles.divInputImage}>
            <img src={imagem} alt="imagem" className={styles.imagem}/>
        </div>
    </div>
    </div>
    )
}

export default InputComFoto;