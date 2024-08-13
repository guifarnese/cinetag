import Banner from 'Componentes/Banner';
import Card from 'Componentes/Card';
import Titulo from 'Componentes/Titulo';
import videos from 'json/db.json';
import styles from './Inicio.module.css'



function Inicio() {
    return (
        <>
            <Banner imagem="home" />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
        </>
    )
}

export default Inicio;