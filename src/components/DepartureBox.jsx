import { useState } from 'react';
import { Combobox } from '@headlessui/react';
import { MapPinIcon } from '@heroicons/react/24/outline';
import places from '../data/places';

const DepartureBox = ({ journeys, setSearchResults }) => {
    const handleSubmit = (e) => e.preventDefault();

    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(journeys);

        const resultsArray = journeys.filter(
            (journey) =>
                // journey.arr.toLowerCase().includes(e.target.value) ||
                journey.dep.toLowerCase().includes(e.target.value)
        );

        setSearchResults(resultsArray);
    };

    const [query, setQuery] = useState('')

    const filteredPlaces = query
        ? places.filter((place) => place.name.toLowerCase().includes(query.toLowerCase()))
        : []

    return (
        // <header>
        //     <form className="p-4" onSubmit={handleSubmit}>
        //         <input
        //             className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        //             type="text"
        //             id="search"
        //             onChange={handleSearchChange}
        //         />
        //     </form>
        // </header>

        <div className="m-4">
            <Combobox
                onChange={(place) => {
                    // TODO: onChange={handleSearchChange}
                    handleSearchChange
                }}
                as="div"
                className="relative max-w-xl rounded-md ring-1 ring-black/5 divide-y divide-gray-100 overflow-hidden"
            >
                <div className='flex items-center px-2'>
                    <MapPinIcon className="h-6 w-6 text-gray-500" />
                    <Combobox.Input
                        onChange={(event) => {
                            setQuery(event.target.value)
                        }}
                        className="w-full h-10 bg-transparent border-0 focus:ring-0 text-sm text-gray-800 placeholder:text-gray-400"
                        placeholder='Select Departure Place...'
                    />
                </div>
                {filteredPlaces.length > 0 && (
                    <Combobox.Options className="py-4 text-sm max-h-40 overflow-y-auto">
                        {filteredPlaces.map((place) => (
                            <Combobox.Option key={place.id} value={place}>
                                {({ active }) => (
                                    <div className={`space-x-1 px-4 py-2 ${active ? 'bg-indigo-600' : 'bg-white'}`}>
                                        <span className={`font-medium ${active ? 'text-white' : 'text-gray-900'}`}>{place.name}</span>
                                        <span className={`font-medium ${active ? 'text-indigo-200' : 'text-gray-400'}`}>in {place.id}</span>
                                    </div>
                                )}
                            </Combobox.Option>
                        ))}
                    </Combobox.Options>
                )}
                {
                    query && filteredPlaces && filteredPlaces.length === 0 && (
                        <p className='p-4 text-sm text-gray-500'>No places found.</p>
                    )
                }
            </Combobox>
        </div>
    );
};
export default DepartureBox;
