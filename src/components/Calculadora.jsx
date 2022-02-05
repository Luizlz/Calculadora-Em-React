/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import "./Calculator.css";
import Box from "@mui/material/Box";
import { styled } from "@material-ui/styles";
import Container from "@mui/material/Container";

//icons
import BackspaceIcon from "@mui/icons-material/Backspace";

const MyBackspaceIcon = styled(BackspaceIcon)({
  color: "white",
  fontSize: 10,
});

export default function Calculator() {
  const [num, setNum] = useState(0);
  const [oldnum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

  function inputNum(e) {
    var input = e.target.value;
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }

  function clear() {
    setNum(0);
  }
  function deleta(a) {
    var str = a.target.value;
    var str2 = str.slice(0, -1);
    setNum(str2);
    
  }

  function porcentage() {
    setNum(num / 100);
  }

  function changeSign() {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  }

  function operatorHandler(e) {
    var operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  }

  function calculate() {
    if (operator === "/") {
      setNum(parseFloat(oldnum) / parseFloat(num));
    } else if (operator === "X") {
      setNum(parseFloat(oldnum) * parseFloat(num));
    } else if (operator === "-") {
      console.log(oldnum);
      console.log(num);
      console.log(oldnum - num);
      setNum(parseFloat(oldnum) - parseFloat(num));
    } else if (operator === "+") {
      setNum(parseFloat(oldnum) + parseFloat(num));
    }
  }

  return (
    <div>
      <Box m={1} />
      <Container maxWidth="xs">
        <div className="CorDeFundoCinzaEscuro">
          <Box m={1} />
          <h1 className="estiloDoResultado">{num}</h1>
          <button className="corDeFundoNumeros letraVermelha " onClick={clear}>
            C
          </button>

          <button className="corDeFundoNumeros " onClick={deleta} value={num}>
            <MyBackspaceIcon />
          </button>

          <button className="corDeFundoNumeros letraAzul" onClick={porcentage}>
            %
          </button>
          <button
            className="corDeFundoNumeros letraAzul"
            onClick={operatorHandler}
            value="/"
          >
            ÷
          </button>
          <button className="CorDeFundoCinzaClaro" onClick={inputNum} value={7}>
            7
          </button>
          <button className="CorDeFundoCinzaClaro" onClick={inputNum} value={8}>
            8
          </button>
          <button className="CorDeFundoCinzaClaro" onClick={inputNum} value={9}>
            9
          </button>
          <button
            className="corDeFundoNumeros letraAzul"
            onClick={operatorHandler}
            value="X"
          >
            X
          </button>
          <button className="CorDeFundoCinzaClaro" onClick={inputNum} value={4}>
            4
          </button>
          <button className="CorDeFundoCinzaClaro" onClick={inputNum} value={5}>
            5
          </button>
          <button className="CorDeFundoCinzaClaro" onClick={inputNum} value={6}>
            6
          </button>
          <button
            className="corDeFundoNumeros letraAzul"
            onClick={operatorHandler}
            value="-"
          >
            -
          </button>
          <button className="CorDeFundoCinzaClaro" onClick={inputNum} value={1}>
            1
          </button>
          <button className="CorDeFundoCinzaClaro" onClick={inputNum} value={2}>
            2
          </button>
          <button className="CorDeFundoCinzaClaro" onClick={inputNum} value={3}>
            3
          </button>

          <button
            className="corDeFundoNumeros letraAzul"
            onClick={operatorHandler}
            value="+"
          >
            +
          </button>
          <button className="CorDeFundoCinzaClaro" onClick={inputNum} value={0}>
            0
          </button>
          <button className="corDeFundoNumeros" onClick={changeSign}>
            +/-
          </button>
          <button className="CorDeFundoCinzaClaro" onClick={inputNum} value={"."}>
            ,
          </button>

          <button className="corDeFundoNumerosAzul" onClick={calculate}>
            =
          </button>
        </div>
      </Container>
    </div>
  );
}
