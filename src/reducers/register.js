const data = ["/screens/1.jpg","/screens/2.jpg","/screens/3.jpg","/screens/4.jpg","/screens/5.jpg","/screens/6.jpg"];

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