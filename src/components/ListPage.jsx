import Card from './Card';

const ListPage = ({ searchResults }) => {
    const results = searchResults.map((journey) => (
        <Card key={journey.id} journey={journey} />
    ));

    const content = results?.length ? (
        results
    ) : (
        <article>
            <p>No Matching Journeys</p>
        </article>
    );

    return <main className='p-4 space-y-4'>{content}</main>;
};
export default ListPage;
