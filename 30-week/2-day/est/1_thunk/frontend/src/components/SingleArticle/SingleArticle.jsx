import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './SingleArticle.css';
import { useEffect, useState } from 'react';

const SingleArticle = () => {
    const { id } = useParams();
    const singleArticle = useSelector(
        (state) => state.articleState.entries[id]
    );
    const [timeCheck, setTimeCheck] = useState(true);

    useEffect(() => {
        let timeout;
        if (!singleArticle) {
            timeout = setTimeout(() => setTimeCheck(false), 3000);
        }

        return () => clearTimeout(timeout);
    }, [singleArticle]);

    if (!singleArticle && timeCheck) return <h1>Loading...</h1>;
    else if (!singleArticle && !timeCheck)
        return <h1>{"Guess we don't got it :("}</h1>;

    return (
        <div className="singleArticle">
            <h1>{singleArticle.title}</h1>
            <img src={singleArticle.imageUrl} alt={singleArticle.title} />
            <p>{singleArticle.body}</p>
        </div>
    );

    // return (
    //     <div className="singleArticle">
    //         <h1>{singleArticle?.title}</h1>
    //         <img src={singleArticle?.imageUrl} alt={singleArticle?.title} />
    //         <p>{singleArticle?.body}</p>
    //     </div>
    // );
};

export default SingleArticle;
