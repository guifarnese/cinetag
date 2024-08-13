import Cabecalho from "Componentes/Cabecalho";
import Container from "Componentes/Container";
import Rodape from "Componentes/Rodape";
import FavoritosProvider from "Contextos/Favoritos";
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import Player from "pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
        <Cabecalho />
        <Container>
            <FavoritosProvider>
            <Routes>
                 <Route path="/" element={<Inicio />} />
                 <Route path="/favoritos" element={<Favoritos />} />
                 <Route path="videos/:id" element={<Player />} />
            </Routes>
            </FavoritosProvider>
        </Container>
        <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes;