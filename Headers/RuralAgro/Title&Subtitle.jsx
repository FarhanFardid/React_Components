// Send the main and sub title through props value.
// Change styling as necessary.

const Title = ({main,sub}) => {
    return (
        <div className="text-center">
            <h2 className="text-2xl md:text-5xl font-bold text-green-800 py-2 md:py-3">{main}</h2>
            <h5 className="text-xs md:text-xl font-medium text-amber-800 py-1 md:py-3">{sub}</h5>
        </div>
    );
};

export default Title;