import { getJourneys } from './api/axios';
import { useState, useEffect } from 'react';
// import SearchBar from './components/SearchBar';
import DepartureBox from './components/DepartureBox';
import ListPage from './components/ListPage';
import places from './data/places';

function App() {
    const [journeys, setJourneys] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        getJourneys().then((json) => {
            setJourneys(json);
            setSearchResults(json);
        });
    }, []);

    // useEffect(() => {
    //     setAutoResults(
    //         autoSearch
    //             ? filter((item) => item.type.id === autoSearch.value, items)
    //             : items
    //     );
    // }, [autoSearch, items]);

    return (
        <>
            <DepartureBox
                places={places}
                journeys={journeys}
                setSearchResults={setSearchResults}
            />
            <ListPage searchResults={searchResults} />
        </>
    );
}

export default App;
