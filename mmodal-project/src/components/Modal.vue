<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{sale:theme === 'sale'}">
            <h2>{{ header }} </h2>
            <p>{{ text }}</p>
        </div>
    </div>
</template>

<script>

export default ({
    props: ['header','text','theme'],
    methods:{
        closeModal(){
            this.$emit('close')
        }
    }
})
</script>


<style scoped>
    .modal {
        width:400px;
        padding:20px;
        margin:120px auto;
        background: white;
        border-radius: 5px;
    }
    .backdrop {
        position: fixed;
        top:0;
        background: rgba(0, 0, 0, 0.4);
        width: 100vw;
        height: 100vh;
    }
    .sale {
        background-color: rgb(109, 18, 18);
        color:white;
    }

</style>