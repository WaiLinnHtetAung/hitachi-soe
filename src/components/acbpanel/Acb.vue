<template>
    <div class="acb">
        <h2><span>Low Voltage (ACB Panel)</span> <button @click="showSpec" class="border-0"><i class="fa-solid" :class="{'fa-plus': !isShow, 'fa-minus': isShow}"></i></button></h2>
        <div class="spec" :class="{show: isShow}">
            <table class="table table-striped table-responsive">
                <thead>
                    <tr class="text-center ">
                        <th>No.</th>
                        <th>Type of Capacitor Bank</th>
                        <th>Breaker Amp</th>
                        <th>Indoor</th>
                        <th>Outdoor</th>
                        <th>Transformer</th>
                        <th>Remark</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-center">
                        <td>1</td>
                        <td>400 V Distribution Panel with 250 kVAR Capacitor Bank</td>
                        <td>4P 1250 A, ACB</td>
                        <td>ü </td>
                        <td>ü</td>
                        <td>750 kVA</td>
                        <td rowspan="4" class="remark">(Schneider-India), <br> Capacitor Bank - <br>
                    (ELCO - Malaysia)</td>
                    </tr>
                    <tr class="text-center">
                        <td>2</td>
                        <td>400 V Distribution Panel with 300 kVAR Capacitor Bank</td>
                        <td>4P 1600 A, ACB</td>
                        <td>ü </td>
                        <td>ü</td>
                        <td>1000 kVA</td>
                    </tr>
                    <tr class="text-center">
                        <td>3</td>
                        <td>400 V Distribution Panel with 400 kVAR Capacitor Bank</td>
                        <td>4P 2000 A, ACB</td>
                        <td>ü </td>
                        <td>ü</td>
                        <td>1250 kVA</td>
                    </tr>
                    <tr class="text-center">
                        <td>4</td>
                        <td>400 V Distribution Panel with 600 kVAR Capacitor Bank</td>
                        <td>4P 3200 A, ACB</td>
                        <td>ü </td>
                        <td>ü</td>
                        <td>2000 kVA</td>
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
.acb {
    margin-bottom: 20px;
}
.acb h2 {
    
    background: #f2f2f2;
    padding: 15px 20px;
    border-radius: 5px 5px 0 0;
    margin-bottom: 0 !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.acb h2 span {
    font-size: 15px;
    font-weight: 500;
}

.acb button i {
    font-size: 18px;
    transition: .5s ease;
}

.acb button {
    background: transparent;
}

.acb button:hover {
    background: transparent;
}

.acb table th {
    font-size: 15px;
    padding: 15px !important;
}

.acb table td {
    font-size: 13px;
    padding: 15px;
}

.acb .spec {
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

.acb .spec.show {
    height: auto;
    opacity: 1;
    visibility: visible;
    margin-top: 0;
}

.acb table .remark {
    vertical-align: middle;
    text-align: center;
    font-size: 14px;
}

@media (max-width:990px) {
    .acb h2 {
        background: #f2f2f2;
        padding: 15px 20px;
        border-radius: 5px 5px 0 0;
        margin-bottom: 0 !important;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .acb .spec {
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

    .acb h2 {
        background: #f2f2f2;
        padding: 15px 20px;
        border-radius: 5px 5px 0 0;
        margin-bottom: 0 !important;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .acb h2 span {
        font-size: 12px;
        font-weight: 500;
        line-height: 17px;
    }

    .acb button i {
        font-size: 15px;
        transition: .5s ease;
    }

    .acb table th {
        font-size: 11px;
        font-weight: 600;
        padding: 10px !important;
    }

    .acb table td {
        font-size: 9px;
        padding: 5px;
    }

    .acb table tr .remark {
        font-size: 9px;
    }

    .acb table, .acb th, .acb td {
        border-collapse: collapse;
    }

}
</style>