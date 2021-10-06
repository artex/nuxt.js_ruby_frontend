<template>
    <div class="container">
        <h2 class="header">Your Data Sent Successfully!!</h2>
        <div class="btns">
            <div class="btn btn-primary" @click="doneApplicant">Done</div>
        </div>
    </div>
</template>

<script>
export default {
    auth: false,
    methods: {
        doneApplicant() {
            this.$router.push({ name: 'index' })
        },
    },
}
</script>

<style  scoped>
.btns {
    text-align: center;
}
.header {
    color: #17a2b8;
    text-align: center;
}
</style>>