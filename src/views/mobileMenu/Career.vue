<template>
    <div class="mobile-menu">
        <div class="top-link">
            <router-link to="/">Home</router-link>
            <span>></span>
            <span>Career </span>
        </div>
        <div class="content">
            <div class="product">
                <h2>Career Information</h2>

                <div class="items">
                    <div class="item" v-for="(item, i) in items" :key="i">
                        <div class="img">
                            <img :src="item.img" alt="" style="width: 100%; height: 120px; object-fit:cover;">
                        </div>
                        <div class="link" style="height: 35px; margin-top: -1px;">
                            <i class="fa-solid fa-caret-right"></i>
                            <router-link :to="item.link">{{ item.title }}</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import "@/assets/css/mobilemenu.css"
    export default {
        setup() {
            onMounted(() => {
                window.scrollTo(0,0);
            })
            let items = [
                {
                    img: require('@/assets/images/career/apply.jpg'),
                    title: "To Apply",
                    link: "/career/apply"
                },
                {
                    img: require('@/assets/images/career/culture.jpeg'),
                    title: "Our Culture",
                    link: "/career/culture"
                },
                {
                    img: require('@/assets/images/career/recruitment.png'),
                    title: "Recruitment Procedure",
                    link: "/career/recruitment-procedure"
                },
            ];

            return {items}
        }
    }
</script>
<style scoped>
    
</style>
