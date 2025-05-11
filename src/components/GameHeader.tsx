import { FC } from 'react';

export const GameHeader: FC = () => {
  // const score = useSelector((state: RootState) => state.score);
  // const time = useSelector((state: RootState) => state.time);

  // const format = (value: number) => String(value).padStart(2, '0');
  // const formattedTime = `${time.hours}:${format(time.minutes)}:${format(
  //   time.seconds
  // )}`;

  return (
    <header className="w-full fixed top-0 left-0 flex justify-around items-center px-8 py-4 bg-white shadow-md z-50">
      <div className="text-xl font-bold text-purple-500">Score: 0</div>
      <div className="text-xl font-bold text-purple-500">Time: 0:00:00</div>
    </header>
  );
};

