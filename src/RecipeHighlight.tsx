interface RecipeHighlightProps {
    title: string;
    description: string[];
    calories: string;
    time: string;
    style: React.CSSProperties;
}

const RecipeHighlight = ({ title, description, calories, time, style }: RecipeHighlightProps) => {
    return (
        <div className="card text-center peperone" style={style}>
            <div className="card-header">
                {title}
            </div>
            <div className="card-body">
                <ul>
                    {description.map((desc, index) => (
                        <li>
                            <p key={index} className="card-text recipe-description-steps">{desc}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="card-footer text-muted">
                {calories}kcal / {time}
            </div>
        </div>

    )
};

export default RecipeHighlight