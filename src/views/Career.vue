<template>
    <div v-if="slug === 'apply'"><Apply></Apply></div>
    <div v-if="slug === 'culture'"><Culture></Culture></div>
    <div v-if="slug === 'recruitment-procedure'"><Recruitment></Recruitment></div>
</template>

<script>
    import Recruitment from '../components/career/Recruitment'
import Culture from '../components/career/Culture'
    import Apply from '../components/career/Apply'
    export default {
        components: {
    Recruitment,
            Culture, Apply },
            props: ['slug'],
    }
</script>

<style scoped>

</style>
