import CarouselComponent from "../../Components/Carousel/Carousel"
import image6 from "../../Images/carousel/6.jpg"

function Home() {

    return (
        <main className="homePage">
            <section className="top">
                <h1 className="top--title">Julia Coulon</h1>
                <h2 className="top--sub"> Diététicienne-Nutritionniste Spécialisée en micronutrition et addictologie</h2>
                <img src={image6} alt="accueil" />
            </section>
            <CarouselComponent></CarouselComponent>
        </main>
    )
}

export default Home