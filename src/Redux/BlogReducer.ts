import { MapType } from '../types';

/* pictures imports */

// jpg pictures imports
import coder from '../Component/Blog/picture/coderWithKomp.jpg'
import circle from '../Component/Blog/picture/coder_circle.jpg'
import white from '../Component/Blog/picture/coderWhite.jpg'

// png pictures imports

import black from '../Component/Blog/picture/girl_coder_black.png'
import calendar from '../Component/Blog/picture/calendar.png'
import magazine from '../Component/Blog/picture/magazine.png'
import adidas from '../Component/Blog/picture/adidas.png'
import build from '../Component/Blog/picture/build.png'
import flyer from '../Component/Blog/picture/flyer.png'
import hand from '../Component/Blog/picture/hand.png'
import box from '../Component/Blog/picture/box.png'
import bag from '../Component/Blog/picture/bag.png'

const initialState = {
    maps: {
        one: [
            { id: 1, day: 'April 11, 2018', fileType: 'VIDEO', picture: adidas, title: 'Happy Cover By Kings Road', text: 'What sounds more fun? Filling in spreadsheets with data for eight hours or coming up with new and exciting ideas? I’ll …', view: '527 views' },
            { id: 2, day: 'April 11, 2018', fileType: 'VIDEO', picture: build, title: 'Happy Cover By Kings Road', text: 'What sounds more fun? Filling in spreadsheets with data for eight hours or coming up with new and exciting ideas? I’ll …', view: '527 views' },
            { id: 3, day: 'April 11, 2018', fileType: 'VIDEO', picture: calendar, title: 'Happy Cover By Kings Road', text: 'What sounds more fun? Filling in spreadsheets with data for eight hours or coming up with new and exciting ideas? I’ll …', view: '527 views' },
            { id: 4, day: 'April 11, 2018', fileType: 'VIDEO', picture: hand, title: 'Happy Cover By Kings Road', text: 'What sounds more fun? Filling in spreadsheets with data for eight hours or coming up with new and exciting ideas? I’ll …', view: '527 views' },
            { id: 5, day: 'April 11, 2018', fileType: 'VIDEO', picture: coder, title: 'Happy Cover By Kings Road', text: 'What sounds more fun? Filling in spreadsheets with data for eight hours or coming up with new and exciting ideas? I’ll …', view: '527 views' },
            { id: 6, day: 'April 11, 2018', fileType: 'VIDEO', picture: box, title: 'Happy Cover By Kings Road', text: 'What sounds more fun? Filling in spreadsheets with data for eight hours or coming up with new and exciting ideas? I’ll …', view: '527 views' },
        ] as Array<MapType>,
        two: [
            { id: 1, day: 'April 11, 2018', fileType: 'VIDEO', picture: magazine, title: 'Happy Cover By Kings Road', text: 'What sounds more fun? Filling in spreadsheets with data for eight hours or coming up with new and exciting ideas? I’ll …', view: '527 views' },
            { id: 2, day: 'April 11, 2018', fileType: 'VIDEO', picture: circle, title: 'Happy Cover By Kings Road', text: 'What sounds more fun? Filling in spreadsheets with data for eight hours or coming up with new and exciting ideas? I’ll …', view: '527 views' },
            { id: 3, day: 'April 11, 2018', fileType: 'VIDEO', picture: bag, title: 'Happy Cover By Kings Road', text: 'What sounds more fun? Filling in spreadsheets with data for eight hours or coming up with new and exciting ideas? I’ll …', view: '527 views' },
            { id: 4, day: 'April 11, 2018', fileType: 'VIDEO', picture: black, title: 'Happy Cover By Kings Road', text: 'What sounds more fun? Filling in spreadsheets with data for eight hours or coming up with new and exciting ideas? I’ll …', view: '527 views' },
            { id: 5, day: 'April 11, 2018', fileType: 'VIDEO', picture: flyer, title: 'Happy Cover By Kings Road', text: 'What sounds more fun? Filling in spreadsheets with data for eight hours or coming up with new and exciting ideas? I’ll …', view: '527 views' },
            { id: 6, day: 'April 11, 2018', fileType: 'VIDEO', picture: white, title: 'Happy Cover By Kings Road', text: 'What sounds more fun? Filling in spreadsheets with data for eight hours or coming up with new and exciting ideas? I’ll …', view: '527 views' },
        ] as Array<MapType>,
    }
}

type InitialStateType = typeof initialState

const BlogReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {

        default:
            return state
    }
}

export default BlogReducer

type ActionType = any
