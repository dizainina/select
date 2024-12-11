// пример множественного селекта
import './App.css';
import Select, {OnChangeValue} from 'react-select'
import {useState} from "react";
import {IOption} from "./app.interface";
import makeAnimated from 'react-select/animated';
// вариант только для множественного селекта
const animatedComponents = makeAnimated();
const options:IOption[] = [{
    value: "south-korea",
    label: "Южная Корея"
    },
    {
        value: "ukraine",
        label: "Украина"
    },
    {
        value: "russia",
        label: "Россия"
    },
    {
        value: "canada",
        label: "Канада"
    },
    {
        value: "japan",
        label: "Япония"
    }
]
function App() {
    const [currentCountries, setCountCountries] = useState(['south-korea','japan'])

    const onChangeCountry = (newValue: OnChangeValue<IOption, boolean>) => {
        setCountCountries((newValue as IOption[]).map(v => v.value))
    }
    const getValue = () => {
        return currentCountries
            ? options.filter(c => currentCountries.indexOf(c.value) >= 0)
            : []
    }
  return (
    <div className="App">
        <h1>Выбрать страну:</h1>
        <Select
            classNamePrefix='custom-select' //дает возмжность добавить свои стили
            onChange={onChangeCountry}
            value={getValue()}
            options={options}
            placeholder='Выберите страну'
            isMulti
            components={animatedComponents}
        />
    </div>
  );
}

export default App;
