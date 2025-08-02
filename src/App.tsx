import PromoBanner from "./components/advertisements/PromoBanner";
import Footer from "./components/Footer";
import Hero from "./components/hero/hero";
import Navbar from "./components/navigation/Navbar";

function App() {
    return (
        <main className="bg-primary-50 font-exo min-h-dvh">
            <PromoBanner />
            <Navbar />
            <Hero />
            <Footer />
        </main>
    );
}

export default App;
