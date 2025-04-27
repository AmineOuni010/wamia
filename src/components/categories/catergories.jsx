import React from 'react'
import style from './style.module.css'
const Categories = () => {
    const [categories, setCategories] = React.useState([{
        name: "Panneau mural",
        img: 'image1.jpg',
    },
    {
        name: "Bagagerie",
        img: 'image2.jpg',
    },
    {
        name: "Appareils de cuisson",
        img: 'image3.jpg',
    },
    {
        name: "Vaisselle",
        img: 'image4.jpg',
    },
    {
        name: "Maquillage",
        img: 'image5.jpg',
    },
    {
        name: "Téléviseur",
        img: 'image6.jpg',
    },
    {
        name: "Jeux desociété",
        img: 'image7.jpg',
    },
    {
        name: "Vêtements Femme",
        img: 'image8.jpg',
    },
    {
        name: "Ouitillage à main",
        img: 'image9.jpg',
    },
    {
        name: "Batterie de cuisine",
        img: 'image10.jpg',
    }
    ])

    return (
        <div className={`container-fluid d-flex flex-column align-items-center  ${style.categories}`}>
            <div className='text-start'>
                <h3 >Achetez par catégorie</h3>
                <div className='d-flex mx-auto justify-content-center w-100'>
                    {categories.map((category, index) => (
                        <div key={index} className={`category-item d-flex flex-column align-items-center my-2 ${style.categorie}`}>
                            <img src={require(`../../assets/${category.img}`)} alt={category.name} className="category-image me-2 rounded-3 border border-0" width={130} />
                            <span >{category.name}</span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Categories
