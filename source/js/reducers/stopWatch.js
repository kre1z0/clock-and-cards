const initialNewsState = {

}

const stopWatch = (state = initialNewsState, action) => {
  switch (action.type) {
    case 'GET_NEWS':
      return {
        ...state,
        news_item: action.news_item,
      }
    default:
      return state
  }
}

export default stopWatch
