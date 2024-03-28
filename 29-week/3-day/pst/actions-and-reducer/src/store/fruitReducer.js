const initialState = [{ 1: 'banana', 2: 'pear', 3: 'orange', 4: 'peach' }];

const fruitReducer = (state = initialState, action) => {
    console.log('oh its just little ole fruit me ');

    return state;
};

export default fruitReducer;
