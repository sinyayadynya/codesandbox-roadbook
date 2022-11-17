const Card = ({ journey }) => {
    return (
        <article>
            <h2>{journey.name}</h2>
            <p>
                {journey.dep} - {journey.arr}
            </p>
            <p>Journey ID: {journey.id}</p>
        </article>
    );
};
export default Card;
