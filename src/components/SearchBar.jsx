const SearchBar = ({ journeys, setSearchResults }) => {
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

    return (
        <header>
            <form className="p-4" onSubmit={handleSubmit}>
                <input
                    className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    type="text"
                    id="search"
                    onChange={handleSearchChange}
                />
            </form>
        </header>
    );
};
export default SearchBar;
