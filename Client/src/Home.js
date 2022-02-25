import { useFetchData } from './utils/useFetchData';
const apiUrl = '/api/welcome';

const Home = () => {
  const state = useFetchData(apiUrl);

  return (
    <div>
      <p>Welcome to:</p>
      <h1 data-testid="hero">{state}</h1>
    </div>
  )
};

export default Home;