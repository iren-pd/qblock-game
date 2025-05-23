import { Link } from 'react-router-dom';
import routes from '../routes/routes';
import Footer from '../components/Footer';
import { FC } from 'react';

const HomePage: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-purple-100 text-purple-900 relative overflow-hidden">
      <div className="bg-white p-10 rounded-3xl shadow-lg flex flex-col items-center">
        <h1 className="text-5xl font-extrabold mb-6 font-[Poppins]">QBlock</h1>
        <p className="text-lg mb-6 text-purple-700">
          Выбери уровень и начни играть!
        </p>
        <Link
          to={routes.game}
          className="bg-purple-400 px-8 py-4 text-lg rounded-full shadow-md hover:bg-purple-500 transition transform hover:scale-105"
        >
          Начать игру
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
