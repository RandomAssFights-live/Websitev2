import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import FHS from './Pages/FHS';
import OCHS from './Pages/OCHS';

export default function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/Schools/Districts/FHS' element={<FHS />} />
                <Route path='/Schools/Districts/OCHS' element={<OCHS />} />
            </Route>
        </Routes>
        </BrowserRouter>
    );
}

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);