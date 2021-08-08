<template>
    <div class=" block " @click="stopTimer" v-show="showBlock"> 
        click now
    </div>
</template>

<script>
export default {
    name:"Block",
    props:['delay'],
    data(){
        return {
            showBlock:false,
            timer:null,
            reactionTime:0,
        }
    },
    mounted(){
        setTimeout(() => {
            this.showBlock = true;
            this.startTimer();
        }, this.delay);
    },
    methods:{
        startTimer(){
            this.timer = setInterval(()=>{
                this.reactionTime +=10;
            },10);
        },
        stopTimer(){
            clearInterval(this.timer);
            this.$emit('endGame',this.reactionTime);
        }
    }
}
</script>

<style scoped>
    .block {
        width:20rem;
        height: 10rem;
        background: tomato;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        color:white;
        margin:32px auto;
        box-shadow: 3px 6px 4px rgba(0, 0, 0, 0.1);
    }
</style>