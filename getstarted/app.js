const app = Vue.createApp({
    data() {
        return {
            
            showBook: true,
            books:[
                {title:'b1',price:'20',url:'#1',isFav:true},
                {title:'b2',price:'40',url:'#2',isFav:true},
                {title:'b3',price:'10',url:'#3',isFav:false},
                {title:'b4',price:'60',url:'#4',isFav:false},
            ],
        }
    },
    methods: {
        changeshow(title) {
            this.title = title;
        },
        handleEvent(e) {
            console.log(e.type);
        },
        handleMousemove(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
    },
    computed:{
        filteredBook(){
            return this.books.filter(book => book.isFav);
        }
    }
});

app.mount('#app');