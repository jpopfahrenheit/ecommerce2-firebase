import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavBar } from "./components/NavBar"
import { ItemListContainer } from "./components/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer"
import { ErrorURL } from "./components/ErrorURL"

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/categoria/:id" element={<ItemListContainer />} />
                <Route path="/genero/:id" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="*" element={<ErrorURL />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App
