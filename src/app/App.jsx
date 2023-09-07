import { useEffect, useState } from "react";
import { Header } from "../layot/Header/Header";
import { Input } from "../ui/Input/Input";
import { Select } from "../ui/Select/Select";
import { Card } from "../components/Card/Card";
import "./App.css";
function App() {
  const [inputValue, setInputValue] = useState("");
  const [select, setSelect] = useState("");
  const [data, setData] = useState([]);
  const [like, setLike] = useState([])
  useEffect(() => {
    fetch(`https://hp-api.onrender.com/api/characters`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, [inputValue]);

    const handlerInput = (evt) => {
    setInputValue(evt.target.value);
  };
  const handlerSelect = (evt) => {
    setSelect(evt.target.value);
  };
  const toggleLike = (id) => {
    setLike((prev) => {
      if (prev.includes(id)) {
        return prev.filter((cardId) => cardId !== id);
      } else {
        return [...prev, id];
      }
    });
  };
  return (
    <>
      <Header />
      <div className="search">
        <Input handler={handlerInput} type="text" placeholder="Введите имя" />
        <Select handler={handlerSelect} />
      </div>
      <div className="line"></div>
      <div className="cards">
        {data
          .filter(
            (el) =>
              el.name.toLowerCase().includes(inputValue.toLowerCase().trim()) &&
              el.house.toLowerCase().includes(select.toLowerCase().trim())
          )
          .map((el, i) => (
            <Card
              isLiked={like.includes(el.id)}
              handlerBtn={() => toggleLike(el.id)}
              key={i}
              image={el.image}
              alt={el.name}
              name={el.name}
              actor={el.actor}
              gender={el.gender}
              house={el.house}
              core={el.wand.core}
              alive={el.alive ? "yes" : "no"}
            />
          ))}
      </div>
    </>
  );
}

export default App;
