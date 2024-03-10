// component.jsx
let allSpots = useSelector(state => state.spots)
// store.js
allSpotSelector = (state) => state.spots
//component.jsx
allSpots = useSelector(allSpotSelector)

// component.jsx
let spot = useSelector(state => state.spots[spotId])
// store.js
spotByIdSelector = spotId => state => state.spot[spotId]
// component.jsx
spot = useSelector(spotByIdSelector(spotId))
