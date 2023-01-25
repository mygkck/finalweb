import {useState,useEffect} from 'react';

import CardList from "./components/card-list/card-list.component";
import SearchBox from './components/search-box/search-box.component';

import './App.css';

const App = () => {
  console.log("render");
  const [searchField,setSearchField] = useState('');
  const [uniler,UniAyarla] = useState([]);
  const [filteredUnies,setFilteredUnies] = useState(uniler);

  useEffect(()=>{
    fetch('http://universities.hipolabs.com/search?country=Turkey')
      .then(response => response.json())
      .then((users) => UniAyarla(users))
  },[])

  useEffect(()=>{
    const newFilteredUnies = uniler.filter((uniler) => {
      return uniler.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredUnies(newFilteredUnies)
  },[uniler,searchField])
  
  const onSearchChange = (event) => {
    const arama = event.target.value.toLocaleLowerCase();
    setSearchField(arama);
  }

  return (
    <div className="App">
      <h1 className='app-title'> Türkiye'deki Üniversiteler</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder='Üniversite Ara'
        className='search-box' />
      <CardList uniler={filteredUnies} />
    </div>
  );
}

export default App;

