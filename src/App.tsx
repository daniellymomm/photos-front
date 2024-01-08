import { useState } from 'react'
import './App.css'
import { Card } from './components/card/card';
import { PhotoData } from './interface/PhotoData';
import { usePhotoData } from './hooks/usePhotoData';
import { CreateModal } from './components/create-modal/create-modal';

function App() {
  const { data } = usePhotoData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className="container">
      <h1>Catalogo</h1>
      <div className="card-grid">
        {data?.map(photoData => 
          <Card
            price={photoData.price} 
            title={photoData.title} 
            image={photoData.image}
          />
        )}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>novo</button>
    </div>
  )
}

export default App
