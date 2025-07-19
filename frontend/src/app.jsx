import React from 'react';
import { useState, useEffect } from 'react';
import Header from './components/header';
import Nav from './components/nav';
import Filters from './components/filters';
import CardList from './components/cardList';
import RegisterModal from './components/registerModal';
import LoginModal from './components/loginModal';
import MazosModal from './components/mazosModal';
import ImageModal from './components/imagenModal';
import Pagination from './components/paginacion';

function App() {
  const [modals, setModals] = useState({
    register: false,
    login: false,
    mazos: false,
    image: false
  });

  const [selectedCardId, setSelectedCardId] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const [selectedEdicion, setSelectedEdicion] = useState('');
  const [selectedTipo, setSelectedTipo] = useState('');
  const [selectedRaza, setSelectedRaza] = useState('');
  const [selectedSubRaza, setSelectedSubRaza] = useState([]);
  const [selectedRareza, setSelectedRareza] = useState('');
  const [page, setPage] = useState(1);

  const [cartas, setCartas] = useState([]);
  const [filtros, setFiltros] = useState({
    ediciones: [],
    tipos: [],
    razas: [],
    subRazas: [],
    rarezas: []
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggleModal = (name, state = true) => {
    setModals(prev => ({ ...prev, [name]: state }));
  };

  // Cargar cartas y filtros desde el backend
  useEffect(() => {

    setLoading(true);

    const params = new URLSearchParams();
    if (selectedEdicion) params.append('edicion', selectedEdicion);
    if (selectedTipo) params.append('tipo', selectedTipo);
    if (selectedRaza) params.append('raza', selectedRaza);
    if (selectedSubRaza.length > 0) {
    selectedSubRaza.forEach(sr => params.append('subRaza', sr));
  }
    if (selectedRareza) params.append('rareza', selectedRareza);
    params.append('page', page);

    const url = `https://backend-bold-feather-1070.fly.dev/api/cartas?${params.toString()}`;

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar los datos');
        return res.json();
      })
      .then(data => {
        setCartas(data.cartas);
        setFiltros({
          ediciones: data.ediciones,
          tipos: data.tipos,
          razas: data.razas,
          subRazas: data.subRazas,
          rarezas: data.rarezas
        });
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [
    selectedEdicion,
    selectedTipo,
    selectedRaza,
    selectedSubRaza,
    selectedRareza,
    page
  ]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

console.log('Modals:', modals, 'Image URL:', imageUrl);

  return (
    <div>
      <Header toggleModal={toggleModal} />
      <Nav />
      <Filters filtros={filtros}
          selectedEdicion={selectedEdicion}
          selectedTipo={selectedTipo}
          selectedRaza={selectedRaza}
          selectedSubRaza={selectedSubRaza}
          selectedRareza={selectedRareza}
          onChangeEdicion={setSelectedEdicion}
          onChangeTipo={setSelectedTipo}
          onChangeRaza={setSelectedRaza}
          onChangeSubRaza={setSelectedSubRaza}
          onChangeRareza={setSelectedRareza}
          onClearFilters={() => {
            setSelectedEdicion('');
            setSelectedTipo('');
            setSelectedRaza('');
            setSelectedSubRaza([]);
            setSelectedRareza('');
            setPage(1);
        }}
      />
      <CardList
        cartas={cartas}
        onAddToMazo={id => {
          setSelectedCardId(id);
          toggleModal('mazos');
        }}
        onShowImage={url => {
          setImageUrl(url);
          toggleModal('image');
        }}
      />
      <Pagination
        currentPage={page}
        totalPages={0}
        onPageChange={newPage => setPage(newPage)}
      />


      <RegisterModal visible={modals.register} onClose={() => toggleModal('register', false)} />
      <LoginModal visible={modals.login} onClose={() => toggleModal('login', false)} />
      <MazosModal
        visible={modals.mazos}
        onClose={() => toggleModal('mazos', false)}
        cartaId={selectedCardId}
      />
      <ImageModal
        visible={modals.image}
        onClose={() => toggleModal('image', false)}
        imageUrl={imageUrl}
      />
    </div>
  );
}

export default App;
