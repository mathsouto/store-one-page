import React, { useRef, useEffect, useState } from 'react';
import Modal from 'react-modal';
import styles from './partsTwoSection.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import helmets from '../../../data/partsTwo.json';
import { LuShoppingCart } from "react-icons/lu";

Modal.setAppElement('#root');

function PartsTwoSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  function openModal(image) {
    setModalImage(image);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
    setModalImage(null);
  }

  return (
    <>
      <div className={styles.mainPartsTwo}>
        <div id='pecas' className={styles.containerPartsTwo}>
          <div className={styles.sliderPartsTwo}>
            <div ref={prevRef} className={styles.arrowLeft}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18L9 12L15 6" />
              </svg>
            </div>
            <div className={styles.contentPartsTwo}>
              {swiperReady && (
                <Swiper
                  modules={[Navigation, Autoplay]}
                  navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  }}
                  onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                  }}
                  spaceBetween={20}
                  slidesPerView={5}
                  autoplay={{
                    delay: 2600,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  loop={true}
                  breakpoints={{
                    330: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    480: {
                      slidesPerView: 2,
                      spaceBetween: 15,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 20,
                    },
                  }}
                >
                  {helmets.map((produto) => (
                    <SwiperSlide key={produto.id}>
                      <div className={styles.itemPartsTwo}>
                          <div className={styles.infoPartsTwo}>
                            <img
                                src={produto.imagem}
                                onClick={() => openModal(produto.imagem)}
                                style={{ cursor: 'pointer' }}
                            />
                            <div className={styles.namePartsTwo}>
                                <p className={styles.markNamePartsTwo}>{produto.marca}</p>
                                <p className={styles.titleNamePartsTwo}>{produto.nome}</p>
                            </div>
                            <div className={styles.pricePartsTwo}>
                                <p className={styles.moedaPartsTwo}>R${produto.preco}</p>
                                <p className={styles.parcelaPartsTwo}>5x de R$X.XX</p>
                            </div>
                        </div>
                        <a
                          className={styles.buttonContainer}
                          href={produto.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className={styles.buttonPartsTwo}><LuShoppingCart /> Comprar</button>
                        </a>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
            <div ref={nextRef} className={styles.arrowRight}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 6L15 12L9 18" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Imagem Ampliada"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            zIndex: 1000,
          },
          content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            maxWidth: '90vw',
            maxHeight: '90vh',
            padding: '10px',
            borderRadius: '8px',
            backgroundColor: '#fff',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          },
        }}
      >
        <button
          onClick={closeModal}
          style={{
            alignSelf: 'flex-end',
            cursor: 'pointer',
            fontSize: '1.5rem',
            border: 'none',
            background: 'none',
          }}
          aria-label="Fechar modal"
        >
          &times;
        </button>
        {modalImage && (
          <img
            src={modalImage}
            style={{
              maxWidth: '100%',
              maxHeight: '80vh',
              objectFit: 'contain',
              userSelect: 'none',
            }}
            draggable={false}
          />
        )}
      </Modal>
    </>
  );
}

export default PartsTwoSection;
