import React, { useRef } from 'react';
import style from './style.module.css';

const Products = ({ data }) => {
    const carouselRef = useRef(null);

    // Function to scroll to the left by 224px
    const handlePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -224,
                behavior: 'smooth', // Smooth scroll
            });
        }
    };

    // Function to scroll to the right by 224px
    const handleNext = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: 224,
                behavior: 'smooth', // Smooth scroll
            });
        }
    };

    return (
        <div
            style={{
                flex: 1,
                display: 'flex',
                overflowX: 'auto',
                padding: '0 10px',
                position: 'relative',
            }}
            className={style.container}
        >
            <button
                className={`btn position-absolute top-50 start-0 ${style.button_prev}`}
                onClick={handlePrev}
            >
                {"<"}
            </button>

            {/* Next Button */}
            <button
                className={`btn position-absolute top-50 end-0 ${style.button_next}`}
                onClick={handleNext}
            >
                {">"}
            </button>

            <div className={style.caroussel} ref={carouselRef}>
                {/* Products */}
                {data.map((product, index) => (
                    <div key={index} className={style.product}>
                        <div>
                            <div className={style.imageContainer}>
                                <img
                                    src={require(`../../assets/${product.img}`)}
                                    alt={product.name}
                                    className={style.categoryImage}
                                />
                                <div className={style.overlay}></div>
                                <div className={style.buttons}>
                                    <button className='btn rounded-circle'>
                                        <i className="fa-thin fa-heart"></i>
                                    </button>
                                    <button className='btn rounded-circle'>
                                        <i className="fa-thin fa-arrows-cross"></i>
                                    </button>
                                    <button className='btn rounded-circle'>
                                        <i className="fa-thin fa-eye"></i>
                                    </button>
                                    <button className='btn rounded-circle'>
                                        <i className="fa-thin fa-bag-shopping"></i>
                                    </button>
                                </div>
                            </div>
                            <p className='text-start'>{product.name}</p>
                        </div>

                        <div className="p-3 text-start d-flex flex-column justify-content-between">
                            <div className='mt-auto'>
                                <hr />
                                <div style={{ padding: "10px 0px" }}>
                                    <p
                                        className='m-0'
                                        style={{
                                            color: "#999",
                                            textDecorationLine: "line-through",
                                            fontSize: "14px",
                                            fontWeight: "400",
                                        }}
                                    >
                                        {product.oldPrice} DT
                                    </p>
                                    <p
                                        className='m-0'
                                        style={{
                                            color: "#ec6e25",
                                            font: "600 18px / 1.35 Montserrat, Helvetica Neue, Verdana, Arial, sans-serif",
                                        }}
                                    >
                                        {product.price} DT
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
