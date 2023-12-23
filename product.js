const PORT = 3000;

application.use(express.json());

const products = [
    {
        name: 'เมจิ ไวท์ช็อกมอลต์',
        image: 'https://backend.tops.co.th/media/catalog/product/8/8/8850329104796.jpg' ,
        price: '27.50 ฿',
    },
    {
        name: 'เมจินมสดรสจืด' ,
        image: 'https://backend.tops.co.th/media/catalog/product/8/8/8850329145119_e20-04-2020.jpg' ,
        price: '95 ฿',
    },
    {
        name: 'เอ็มมิลค์ นมพาสเจอร์ไรส์รสจืด',
        image: 'https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/19/88/8859295000019/8859295000019_1-20221129175556-.jpg' ,
        price: '96.75 ฿',
    },
    {
        name: 'ดัชมิลล์ นมโคพาสเจอร์ไรส์',
        image: 'https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/90/88/8851717060090/8851717060090_5.jpg' ,
        price: '47.75 ฿',
    },
    {
        name: 'Goat Milk UHT นมแพะ ศิริชัย',
        image: 'https://down-th.img.susercontent.com/file/8245e4ca170da55c4c3616879ac61f15' ,
        price: '26 ฿',
    },
]
application.get('/product', (req, res) => {
    res.status(200).json(product);
})

application.listen(PORT, () => console.log('Server is running...'))