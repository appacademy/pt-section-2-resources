import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { postArticleThunk } from '../../store/articleReducer';
import './ArticleInput.css';

const ArticleInput = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newArticle = {
            //   id: nanoid(),
            title,
            body,
            imageUrl,
        };
        const checkErrors = await dispatch(postArticleThunk(newArticle)); //? Right here!

        if (checkErrors === 'No errors!') {
            console.log('Article created successfully!');
        } else {
            console.log('Showing errors...', checkErrors);
            alert(checkErrors.errors.join(' \n'));
        }

        reset();
    };

    const reset = () => {
        setTitle('');
        setImageUrl('');
        setBody('');
    };

    return (
        <div className="inputBox">
            <h1>Create Article</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    placeholder="Title"
                    name="title"
                />
                {/* {<p className="errors">{errors.title}</p>} */}
                <input
                    type="text"
                    onChange={(e) => setImageUrl(e.target.value)}
                    value={imageUrl}
                    placeholder="Image URL"
                    name="imageUrl"
                />
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    name="body"
                    placeholder="Add your entry"
                    rows="10"
                ></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ArticleInput;
