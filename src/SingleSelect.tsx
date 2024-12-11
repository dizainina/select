import './App.css';
import Select from 'react-select'
import {useState} from "react";

const options = [{
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
function SingleSelect() {
    const [currentCountry, setCountCountry] = useState('south-korea')

    const onChangeCountry = (newValue: any) => {
        setCountCountry(newValue.value)
    }
    // по хорошему, надо выносить в отдельный компонент
    const getValue = () => {
        return currentCountry ? options.find(c => c.value === currentCountry) : ''
    }
    return (
        <div className="App">
            <h1>Выбрать страну:</h1>
            <Select onChange={onChangeCountry} value={getValue()} options={options}/>
        </div>
    );
}

export default SingleSelect;
