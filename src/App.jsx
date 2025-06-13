import style from './app.module.css';
import WhatsappButton from './components/WhatsappButton/WhatsappButton';
import Header from './components/Header/Header';
import PromotionsSection from './components/Main/PromotionsSection/PromotionsSection';
import CategorySection from './components/Main/CategorySection/CategorySection';
import HelmetsSection from './components/Main/HelmetsSection/HelmetsSection';
import BrandsSection from './components/Main/BrandsSection/BrandsSection'
import ClothingSection from './components/Main/ClothingSection/ClothingSection';
import CTASection from './components/Main/CTASection/CTASection';
import PartsOneSection from './components/Main/PartsOneSection/PartsOneSection';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className={style.containerApp}>
      <Header />
      <div className={style.wrapperApp}>
        <WhatsappButton />
        <PromotionsSection />
        <CategorySection />
        <HelmetsSection />
        <BrandsSection />
        <ClothingSection />
        <CTASection />
        <PartsOneSection />
      </div>
      <Footer />
    </div>
  );
};

export default App;