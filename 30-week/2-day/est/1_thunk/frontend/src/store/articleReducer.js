// import articles from '../data/data.json';

const LOAD_ARTICLES = 'article/loadArticles';
const ADD_ARTICLE = 'article/addArticle';

export const loadArticles = (articles) => {
    return {
        type: LOAD_ARTICLES,
        articles,
    };
};

export const addArticle = (article) => {
    return {
        type: ADD_ARTICLE,
        article,
    };
};

export const loadArticlesThunk = () => async (dispatch) => {
    // const res = await fetch('/backend/articles');
    const res = await fetch('/api/articles');

    const data = await res.json();

    dispatch(loadArticles(data));

    // if (res.ok) {
    //     // handle the success here
    // } else {
    //     // handle the error here
    // }
};

export const addArticleThunk = (newArticle) => async (dispatch) => {
    const res = await fetch('/api/articles', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newArticle),
    });

    if (res.ok) {
        const data = await res.json();
        dispatch(addArticle(data));

        return 'No errors here!';
    } else {
        const error = await res.json();

        //! If there's an error, DON'T DISPATCH IT!!!!

        return error; //? This line returns...
    }
};

const initialState = { entries: {}, isLoading: true };

const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ARTICLES: {
            const normalizedEntries = {};

            action.articles.forEach((currArticle) => {
                // console.log(
                // '________________________________________________________________________________'
                // );
                // console.log(currArticle);

                normalizedEntries[currArticle.id] = { ...currArticle };

                // console.log(normalizedEntries);
            });

            return { ...state, entries: normalizedEntries };
        }
        case ADD_ARTICLE:
            return {
                ...state,
                entries: {
                    ...state.entries,
                    [action.article.id]: action.article,
                },
            };

        // case ADD_ARTICLE: {
        //     const normalizedEntries = { ...state.entries };

        //     normalizedEntries[action.article.id] = action.article;

        //     return { ...state, entries: normalizedEntries };
        // }
        default:
            return state;
    }
};

export default articleReducer;
