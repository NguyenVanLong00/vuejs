<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal box" :class="{sale:theme === 'sale'}">
            <slot></slot>
            <div class="actions">
                <slot name="links"></slot>
            </div>
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
        background-color: rgb(170, 104, 104);
        color:white;
    }

</style>