import './SingleArticle.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const SingleArticle = () => {
    const { id } = useParams();
    const { title, imageUrl, body } = useSelector((state) => {
        const selectedArticle = state.articleState.entries.find(
            (el) => el.id === id
        );

        if (selectedArticle) return selectedArticle;
        else
            return {
                title: "Whoops, couldn't find that article!",
                imageUrl:
                    'https://t3.ftcdn.net/jpg/02/61/08/76/360_F_261087622_8eRI0TAwDAyabS1b0Uifx1wKqHzA41r3.jpg',
                body: 'Sorry, but idk wtf happened here bruh',
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

// const SingleArticle = () => {
//     const { id } = useParams();
//     const selectedArticle = useSelector((state) =>
//         state.articleState.entries.find((el) => el.id === id)
//     );

//     if (!selectedArticle) return <h1>Not Found</h1>;

//     return (
//         <div className="singleArticle">
//             <h1>{selectedArticle.title}</h1>
//             <img src={selectedArticle.imageUrl} alt={selectedArticle.title} />
//             <p>{selectedArticle.body}</p>
//         </div>
//     );

//     // return (
//     //     <div className="singleArticle">
//     //         {selectedArticle && (
//     //             <>
//     //                 <h1>{selectedArticle.title}</h1>
//     //                 <img
//     //                     src={selectedArticle.imageUrl}
//     //                     alt={selectedArticle.title}
//     //                 />
//     //                 <p>{selectedArticle.body}</p>
//     //             </>
//     //         )}
//     //         {!selectedArticle && <h1>Not Found</h1>}
//     //     </div>
//     // );
// };

export default SingleArticle;
