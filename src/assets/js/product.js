
import language from '@/assets/js/language'
const { localStorage: { language: windowLang } } = window
const langKey = windowLang || 'Chinese'
const systemLang = language[langKey].product

const product = [
    {
        name: systemLang[0].name,
        mainImg: require('@/assets/img/product/1/main.png'),
        subImg: [
            require('@/assets/img/product/1/img1.png'),
            require('@/assets/img/product/1/img2.jpg'),
        ],
        desc: systemLang[0].desc,
    },
    {
        name: systemLang[1].name,
        mainImg: require('@/assets/img/product/2/main.jpg'),
        subImg: [
            require('@/assets/img/product/2/img1.jpg'),
            require('@/assets/img/product/2/img2.jpg'),
        ],
        desc: systemLang[1].desc,
    },
    {
        name: systemLang[2].name,
        mainImg: require('@/assets/img/product/3/main.jpg'),
        subImg: [
            require('@/assets/img/product/3/img1.jpg'),
            require('@/assets/img/product/3/img2.jpg'),
        ],
        desc: systemLang[2].desc,
    },
    {
        name: systemLang[3].name,
        mainImg: require('@/assets/img/product/4/main.png'),
        subImg: [
            require('@/assets/img/product/4/img1.png'),
        ],
        desc: systemLang[3].desc,
    },
    {
        name: systemLang[4].name,
        mainImg: require('@/assets/img/product/5/main.jpg'),
        subImg: [
            require('@/assets/img/product/5/img1.png'),
            require('@/assets/img/product/5/img2.png'),
        ],
        desc: systemLang[4].desc,
    },
    {
        name: systemLang[5].name,
        mainImg: require('@/assets/img/product/6/main.jpg'),
        subImg: [
            require('@/assets/img/product/6/img1.png'),
            require('@/assets/img/product/6/img2.png'),
            require('@/assets/img/product/6/img3.png'),
        ],
        desc: systemLang[5].desc,
    },
    {
        name: systemLang[6].name,
        mainImg: require('@/assets/img/product/7/main.jpg'),
        subImg: [
            require('@/assets/img/product/7/img1.png'),
            require('@/assets/img/product/7/img2.png'),
        ],
        desc: systemLang[6].desc,
    },
    {
        name: systemLang[7].name,
        mainImg: '',
        subImg: [],
        desc: systemLang[7].desc,
    },
    {
        name: systemLang[8].name,
        mainImg: '',
        subImg: [],
        desc: systemLang[8].desc,
    },
    {
        name: systemLang[9].name,
        mainImg: '',
        subImg: [],
        desc: systemLang[9].desc,
    },
]

export default product