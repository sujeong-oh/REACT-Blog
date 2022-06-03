import { useState } from 'react';
import Modal from './Modal'

function App() {

  const initData = [
    {
      name: "전통주",
      content: "요즘 전통주가 맛있더라구요",
      image: "https://javascript-tau.vercel.app/images/traditional.jpg",
    },
    {
      name: "맥주",
      content: "가끔 간단하게 마셔요",
      image: "https://javascript-tau.vercel.app/images/beer.jpg",
    },
    {
      name: "칵테일",
      content: "칵테일 좋아요~ 친구들과 특별한 날 마셔요",
      image: "https://javascript-tau.vercel.app/images/cocktail.jpeg",
    },
    {
      name: "와인",
      content: "달달한 와인을 좋아해요",
      image: "https://javascript-tau.vercel.app/images/wine.jpg",
    },
    {
      name: "하이볼",
      content: "얼그레이 하이볼이 요새 인기가 많던데 저도 좋아해요ㅋㅋㅋ",
      image: "https://javascript-tau.vercel.app/images/highball.png",
    }
  ];

  const [data, setData] = useState(initData);
  const [openModal, setOpenModal] = useState(false);

  let addItem = (item) => {
    setData([...data, item]);
  };

  let handleModalOpen = (value) => {
    setOpenModal(value);
  };

  return (
    <>
      <header>
        <span className="title">고량주</span>
      </header>

      <main>
        <div className="sidebar">
          <button
            className="add-button"
            onClick={() => { setOpenModal(true) }}>추가</button>
          {data.map((item) => <span key={item.name}>{item.name}</span>)}
        </div>
        <section className="container">
          {data.map((item) => (
            <div className="card" key={item.name}>
              <img src={item.image} alt={item.name} />
              <span>{item.content}</span>
            </div>
          ))}
        </section>
      </main>
     <Modal
      addItem={addItem}
      handleModalOpen={handleModalOpen}
      modalOpen={openModal}
     />
    </>
  );
}

export default App;