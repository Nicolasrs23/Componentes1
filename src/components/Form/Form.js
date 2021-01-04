import { useState } from "react";
import { Button } from "react-bootstrap";
export const Form = ({ addOrder }) => {
  const [saveName, setSaveName] = useState("");
  const [saveMail, setSaveMail] = useState("");
  const [saveMail2, setSaveMail2] = useState("");
  const [savePhone, setSavePhone] = useState(0);
  const disabled = "";

  const submitHandler = (event) => {
    let buyer = {
      name: saveName,
      email: saveMail,
      email2: saveMail2,
      phone: savePhone,
    };

    if (saveName.length > 1 && saveMail === saveMail2 && savePhone.length > 1) {
      addOrder(buyer);
      event.preventDefault();
    } else {
      alert("validacion fallida Corroborar que todos los datos sean correctos");
      event.preventDefault();
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label>
        <input
          type="text"
          placeholder="nombre"
          onChange={(event) => setSaveName(event.target.value)}
        />
      </label>
      <label>
        <input
          type="email"
          placeholder="email"
          onChange={(event) => setSaveMail(event.target.value)}
        />
      </label>
      <label>
        <input
          type="email"
          placeholder="re ingrese su email"
          onChange={(event) => setSaveMail2(event.target.value)}
        />
      </label>
      <label>
        <input
          type="number"
          placeholder="cellphone number"
          onChange={(event) => setSavePhone(event.target.value)}
        ></input>
      </label>
      <Button variant="success" id="btnBuy" type="submit" disabled={disabled}>
        Comprar
      </Button>
    </form>
  );
};
