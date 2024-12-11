// пример множественного селекта
import './App.css';
import Select from 'react-select'
import {useState} from "react";

// представим, что у нас приходя пропсы из вне, а getValue вынесено в отдельный компонент, чтобы подходило и для одиночного селекта, и для множественного
const isMulti = true

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
function MultiSelect() {
    const [currentCountries, setCountCountries] = useState<any>(['south-korea'])

    const onChangeCountry = (newValue: any) => {
        setCountCountries(isMulti ? newValue.map((v:any) => v.value) : newValue.value)
    }
    const getValue = () => {
        if (currentCountries) {
            return isMulti ? options.filter(c => currentCountries.indexOf(c.value) >= 0) : options.find(c => c.value === currentCountries)
        }else {
            return isMulti ? [] : ''
        }
    }
    return (
        <div className="App">
            <h1>Выбрать страны:</h1>
            <Select
                onChange={onChangeCountry}
                value={getValue()}
                options={options}
                isMulti={isMulti}
                isLoading={false} //включить лоадер
                isSearchable={true} //отключить поиск в строке
                placeholder='Выберите страны'
            />
        </div>
    );
}

export default MultiSelect;
