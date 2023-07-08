import Loader from 'components/Loader/Loader';
import { Suspense, lazy } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('pages/Home'));
const Search = lazy(() => import('pages/Search'));
const Details = lazy(() => import('pages/Details'));

export function App() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts/:postId/*" element={<Details />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}
