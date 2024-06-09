import React from "react";
import ReactDOM from "react-dom";
import SelectCity from "./components/SelectCity";
import Calculator from "./components/Calculator";
import NumberSystemsCalculator from "./components/NumberSystemsCalculator";
import BirthdayTimer from "./components/BirthdayTimer";
import NumberList from "./components/NumberList";
import RegistrationForm from "./components/RegistrationForm";
import ProfileEditForm from "./components/ProfileEditForm";

function App() {
   return (
      <div>
         <h1>React Forms & Validation Lab</h1>

         <h2>Селектор городов</h2>
         <SelectCity />

         <h2>Калькулятор</h2>
         <Calculator />

         <h2>Калькулятор систем счисления</h2>
         <NumberSystemsCalculator />

         <h2>Прожитые секунды</h2>
         <BirthdayTimer />

         <h2>Список чисел с фильтрацией</h2>
         <NumberList />

         <h2>Форма регистрации</h2>
         <RegistrationForm />

         <h2>Форма редактирования профиля</h2>
         <ProfileEditForm />
      </div>
   );
}

ReactDOM.render(<App />, document.getElementById("root"));
