import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Layout from './pages/layout';
import Home from './pages/home';
import FHS from './pages/fhs';
import OCHS from './pages/ochs';

export default function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='fhs' element={<FHS />} />
                <Route path='ochs' element={<OCHS />} />
            </Route>
        </Routes>
        </BrowserRouter>
    );
}

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);