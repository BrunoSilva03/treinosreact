import styles from './InputComFoto.module.css';

import { useEffect } from 'react';

import imagem from './images/victor.jpg'
import camera from './images/camera (2).png'

function InputComFoto() {
    'use strict'

    useEffect(() => {
        let input = document.getElementById('flImage');
        let photo = document.getElementById('image');

        //Código dentro do useEffect para não dar erro.
        //Se o input type estiver abrindo mais de uma vez exclua o StrictMode no index.js
        //Ele simula o comportamento de montagem e desmontagem do componente e as vezes ele duplica algumas paradas e ações.
        photo.addEventListener('click', () => {
            input.click();
        });

        input.addEventListener('change', (event) => {
            let reader = new FileReader();

            reader.onload = () => {
                photo.src = reader.result;
            }

            //Aqui busca todos os arquivos selecionados se tiver mais de um(imagens selecionadas)
            //e retorna o que estiver na posição zero...
            reader.readAsDataURL(input.files[0]);
        })
    }, [])

    return(
    <div className={styles.main}>

    <h1>InputComFoto</h1>
    <br/><br/><br/>

    <div className={styles.container}>

        <div className={styles.divInputImage}>
            <img src={camera} alt="imagem" className={styles.imagem} id="image"/>
        </div>

    <input type="file" id="flImage" name="flImage" accept="images/*" />
    </div>


    </div>
    )
}

export default InputComFoto;