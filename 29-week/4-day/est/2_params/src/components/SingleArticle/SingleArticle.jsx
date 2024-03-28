import './SingleArticle.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// const SingleArticle = () => {
//     const { id } = useParams();
//     const selectedArticle = useSelector((store) =>
//         store.articleState.entries.find((el) => el.id === id)
//     );

//     if (!selectedArticle) return <h1>Error</h1>;

//     return (
//         <div className="singleArticle">
//             <h1>{selectedArticle.title}</h1>
//             <img src={selectedArticle.imageUrl} alt={selectedArticle.title} />
//             <p>{selectedArticle.body}</p>
//         </div>
//     );

//     // return (
//     //     <div className="singleArticle">
//     //         <h1>{selectedArticle?.title}</h1>
//     //         <img src={selectedArticle?.imageUrl} alt={selectedArticle?.title} />
//     //         <p>{selectedArticle?.body}</p>
//     //     </div>
//     // );
// };

const SingleArticle = () => {
    const { id } = useParams();
    const { title, imageUrl, body } = useSelector((store) => {
        const chosenArticle = store.articleState.entries.find(
            (el) => el.id === id
        );

        if (chosenArticle) return chosenArticle;
        else
            return {
                title: 'Article Not Found',
                imageUrl:
                    'data:image/jpeg;base64,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',
                body: "We have no clue what you're looking for bruh",
            };
    });

    return (
        <div className="singleArticle">
            <h1>{title}</h1>
            <img src={imageUrl} alt={title} />
            <p>{body}</p>
        </div>
    );
};

export default SingleArticle;
