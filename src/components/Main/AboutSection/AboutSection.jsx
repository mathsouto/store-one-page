import styles from './aboutSection.module.css';

function AboutSection () {
    return(
        <div className={styles.mainAbout}>
            <div className={styles.containerAbout}>
                <div className={styles.titleAbout}>
                    <h2>Sobre nós</h2>
                </div>
                <div className={styles.contentAbout}>
                    <div className={styles.textAbout}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dignissimos voluptas molestias adipisci ea dolorum distinctio ex ut alias ab est soluta, facere ipsa voluptatibus nam id corrupti earum nulla iusto? Ullam ducimus reiciendis similique alias maxime suscipit nulla! Itaque blanditiis quo molestias ad tenetur, voluptas cum deserunt corrupti sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, accusamus.</p>
                    </div>
                    <div className={styles.imageAbout}>
                        {/* <img src="/images/promotions/1.jpg" alt="" /> */}
                        <p>Imagem</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;