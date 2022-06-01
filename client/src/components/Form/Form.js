import axios from "axios";
import { useState } from "react";
const Form = () => {
  const [datas, setDatas] = useState({});
  const formModele = [{ type: "text" }, { type: "email" }, { type: "date" }];

  const axiosCall = async () => {
    const response = await axios({
      method: "POST",
      url: "traitement.php",
    });
    setDatas(response.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosCall();
    console.log(datas);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      {formModele.map((el) => (
        <input type={el.type} />
      ))}
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default Form;
