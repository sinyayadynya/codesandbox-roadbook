import { useState } from 'react';
import { Combobox } from '@headlessui/react';

const places = [
    'Bishkek',
    'Arslanbob village',
    'Tamga',
    'Juku valley',
    'Osh',
];

function SearchBar() {
    const [selectedDeparture, setSelectedDeparture] = useState(places[0]);
    const [query, setQuery] = useState('');

    const filteredPlaces =
        query === ''
            ? places
            : places.filter((departure) => {
                  return departure.toLowerCase().includes(query.toLowerCase());
              });

    return (
        <div className="p-4">
            <Combobox value={selectedDeparture} onChange={setSelectedDeparture}>
                <Combobox.Input
                    onChange={(event) => setQuery(event.target.value)}
                />
                <Combobox.Options>
                    {filteredPlaces.map((departure) => (
                        <Combobox.Option key={departure} value={departure}>
                            {departure}
                        </Combobox.Option>
                    ))}
                </Combobox.Options>
            </Combobox>
        </div>
    );
}
export default SearchBar;
