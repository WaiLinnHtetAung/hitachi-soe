<template>
    <div class="mobile-menu">
        <div class="top-link">
            <router-link to="/">Home</router-link>
            <span>></span>
            <span>Products & Services</span>
        </div>
        <div class="content">
            <div class="product">
                <h2>Transformers</h2>

                <div class="items">
                    <div class="item" v-for="(item, i) in transformers" :key="i">
                        <div class="img">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="link">
                            <i class="fa-solid fa-caret-right"></i>
                            <router-link :to="item.link">{{ item.title }}</router-link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="product">
                <h2>Panels</h2>

                <div class="items">
                    <div class="item" v-for="(item, i) in panels" :key="i">
                        <div class="img">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="link">
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
            let transformers = [
                {
                    img: require('@/assets/images/offload/offload.jpg'),
                    title: "Distribution Off Load",
                    link: "/products/offload"
                },
                {
                    img: require('@/assets/images/onload/onload.jpg'),
                    title: "Distribution On Load",
                    link: "/products/onload"
                },
                {
                    img: require('@/assets/images/poweroff/poweroff.jpg'),
                    title: "Power Off Load",
                    link: "/products/powerOffLoad"
                },

                {
                    img: require('@/assets/images/poweron/poweron.jpg'),
                    title: "Power On Load",
                    link: "/products/powerOnLoad"
                },
            ];

            let panels = [
                {
                    img: require('@/assets/images/panel/panel.jpg'),
                    title: "Main Distribution Panel",
                    link: "/products/panels/main-distribution-panel"
                },
                {
                    img: require('@/assets/images/ACB/ACB.jpg'),
                    title: "ACB",
                    link: "/products/panels/acb"
                },
                {
                    img: require('@/assets/images/PackageSubstation/PackageSubstation.jpg'),
                    title: "PackageSubstation",
                    link: "/products/panels/package-substation"
                },
                {
                    img: require('@/assets/images/vcb/vcb.jpg'),
                    title: "VCB",
                    link: "/products/panels/vcb"
                },
            ]

            return {transformers, panels}
        }
    }
</script>


