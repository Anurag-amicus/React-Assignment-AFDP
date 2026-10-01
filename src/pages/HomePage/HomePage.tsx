import CtaGrid from '../../components/CtaGrid/CtaGrid';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import FeaturedCarousel from '../../components/FeaturedCarousel/FeaturedCarousel';
import CategoryGrid from '../../components/CategoryGrid/CategoryGrid';
import Footer from '../../components/Footer/Footer';

function HomePage() {
    return (
        <div className="w-full min-h-screen bg-white">

            <Header />

            <main className="w-full">

                <Hero />

                <CtaGrid />

                <FeaturedCarousel />

                <CategoryGrid />

            </main>

            <Footer />

        </div>
    );
}

export default HomePage;