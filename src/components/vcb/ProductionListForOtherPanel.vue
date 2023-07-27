<template>
    <div class="vcb">
        <h2><span>Production List for Other Panels</span> <button @click="showSpec" class="border-0"><i class="fa-solid" :class="{'fa-plus': !isShow, 'fa-minus': isShow}"></i></button></h2>
        <div class="spec" :class="{show: isShow}">
            <table class="table table-striped table-responsive">
                <thead>
                    <tr class="text-center ">
                        <th>No.</th>
                        <th>Description</th>
                        <th>Indoor</th>
                        <th>Outdoor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-center">
                        <td>1</td>
                        <td>11kV 630A/1250A Cable In/Out Switchgear Panel (Hybrid Type VCB)</td>
                        <td>ü </td>
                        <td>ü</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
    export default {
        setup() {
            let isShow = ref(false);

            let showSpec = () => {
                isShow.value = !isShow.value;
            }


            return {showSpec, isShow}
        }
    }
</script>
<style>
.vcb {
    margin-bottom: 20px;
}
.vcb h2 {
    
    background: #f2f2f2;
    padding: 15px 20px;
    border-radius: 5px 5px 0 0;
    margin-bottom: 0 !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.vcb h2 span {
    font-size: 15px;
    font-weight: 500;
}

.vcb button i {
    font-size: 18px;
    transition: .5s ease;
}

.vcb button {
    background: transparent;
}

.vcb button:hover {
    background: transparent;
}

.vcb table th {
    font-size: 15px;
    padding: 15px !important;
}

.vcb table td {
    font-size: 13px;
    padding: 15px;
}

.vcb .spec {
    background: #f2f2f2;
    border-top: 1px solid #ccc;
    padding: 20px 20px;
    border-radius: 0 0 5px 5px;
    height: 0 ;
    opacity: 0;
    visibility: hidden;
    transition: .3s ease-in-out;
    margin-top: -30px;
}

.vcb .spec.show {
    height: auto;
    opacity: 1;
    visibility: visible;
    margin-top: 0;
}

.vcb table .remark {
    vertical-align: middle;
    text-align: center;
    font-size: 14px;
}

@media (max-width:990px) {
    .vcb h2 {
        background: #f2f2f2;
        padding: 15px 20px;
        border-radius: 5px 5px 0 0;
        margin-bottom: 0 !important;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .vcb .spec {
        background: #f2f2f2;
        border-top: 1px solid #ccc;
        padding: 20px 0px;
        border-radius: 0 0 5px 5px;
        height: 0 ;
        opacity: 0;
        visibility: hidden;
        transition: .3s ease-in-out;
        margin-top: -30px;
    }
}

@media (max-width:450px) {

    th:nth-child(1), td:nth-child(1) { display: none; };

    .vcb h2 {
        background: #f2f2f2;
        padding: 15px 20px;
        border-radius: 5px 5px 0 0;
        margin-bottom: 0 !important;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .vcb h2 span {
        font-size: 12px;
        font-weight: 500;
        line-height: 17px;
    }

    .vcb button i {
        font-size: 15px;
        transition: .5s ease;
    }

    .vcb table th {
        font-size: 11px;
        font-weight: 600;
        padding: 10px !important;
    }

    .vcb table td {
        font-size: 9px;
        padding: 5px;
    }

    .vcb table tr .remark {
        font-size: 9px;
    }

    .vcb table, .vcb th, .vcb td {
        border-collapse: collapse;
    }

}
</style>