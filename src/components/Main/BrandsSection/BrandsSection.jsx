import styles from './brandsSection.module.css';

function BrandsSection () {
    return (
        <div className={styles.mainBrands}>
            <div className={styles.containerBrands}>
                <div className={styles.iconsBrands}>
                    <img src="/images/brands/givi.png"/>
                    <img src="/images/brands/gvs.png"/>
                    <img src="/images/brands/tmac.png"/>
                    <img src="/images/brands/protork.png"/>
                    <img src="/images/brands/protork.png"/>
                </div>
            </div>
        </div>
    )
}

export default BrandsSection;