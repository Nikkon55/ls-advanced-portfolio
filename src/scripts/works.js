import Vue from 'vue';



const preview = {
    template:'#slider-preview',
    props: ["works","currentWork"]
};

const btns = {
    template:'#slider-btns'
   
};

const display = {
    template:'#slider-display',
    components: {
        preview, btns
    },
    props: ["works","currentWork","currentIndex"],
    computed: {
        reversedWorks(){
            return [...this.works].reverse();
        }
    }
    
};


const tags = {
    template:'#slider-tags',
    props: ["tags"]
};

const info = {
    template:'#slider-info',
    components: {tags},
    props: ["currentWork"],
    computed: {
        tagsArray() {
            return this.currentWork.skills.split(', ');
            
        }
    }
};


new Vue ({
    el: '#slider-component',
    template:'#slider-container',
    components: {
        display, info
    },

    data() {
        return{
            works: [],
            currentIndex: 0
        }
    },
    computed:{
        currentWork(){
            return this.works[this.currentIndex]
        }
    },
    methods:{
        makeArrayWithRequiredImages(data){
            return data.map(item=>{
                const requiredPic = require(`../images/content/${item.photo}`);
                item.photo = requiredPic;
                return item;
            })
        },
        
        handleSlide(direction){
            switch(direction){
                case "next":
                    this.currentIndex++;
                    break;
                case "prev":
                    this.currentIndex--;
                    break;
            }
        },
        makeLoopForIndex(value){
            const worksAmountComputerCounted = this.works.length -1;
            if (value > worksAmountComputerCounted) this.currentIndex=0;
            if (value<0) this.currentIndex = worksAmountComputerCounted;
        }
        
    },
    watch: {
        currentIndex(value) {
            this.makeLoopForIndex(value)
        }
    },
    created(){
        const data = require('../data/works.json');
        this.works = this.makeArrayWithRequiredImages(data);
        
    }
})