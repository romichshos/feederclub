const data = ["/screens/1.jpg"];

const
    gallery = (state = {dataImg: data}, action) => {
    switch (action.type) {
        case 'INIT':
            return {
              dataImg: null
            }
         default:
            return state
    }
}

export default gallery