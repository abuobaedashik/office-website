import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            {/* Highest Rated Gam section */}
            <div className="my-20 text-center">
                <div className="title text-2xl font-bold">A Glimpse into the World of Highest-Rated Games</div>
                <div className="title text-base font-normal mt-3 mb-6">
                The gaming  add industry has become a massive source of entertainment worldwide. Many games have captured the hearts of gamers due to their storylines, graphics, gameplay, and innovative features.
                </div>
            </div>
        </div>
    );
};

export default Home;