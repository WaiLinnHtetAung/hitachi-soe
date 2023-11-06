<template>
    <div class="main_panel">
        <h2><span>Capacitor Bank Panel</span> <button @click="showSpec" class="border-0"><i class="fa-solid" :class="{'fa-plus': !isShow, 'fa-minus': isShow}"></i></button></h2>
        <div class="spec" :class="{show: isShow}">
            <table class="table table-striped table-responsive">
                <thead>
                    <tr class="text-center ">
                        <th>No.</th>
                        <th>Type of Capacitor Bank</th>
                        <th>Indoor</th>
                        <th>Outdoor</th>
                        <th>Transformer</th>
                        <th>Remark</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-center">
                        <td>1</td>
                        <td>15 kVAR Capacitor Bank</td>
                        <td>ü </td>
                        <td>ü</td>
                        <td>50 kVA</td>
                        <td rowspan="15" class="remark">Capacitor Bank, <br> Power Factor Controller</td>
                    </tr>
                    <tr class="text-center">
                        <td>2</td>
                        <td>30 kVAR Capacitor Bank</td>
                        <td>ü </td>
                        <td>ü</td>
                        <td>100 kVA</td>
                    </tr>
                    <tr class="text-center">
                        <td>3</td>
                        <td>60 kVAR Capacitor Bank</td>
                        <td>ü </td>
                        <td>ü</td>
                        <td>200 kVA</td>
                    </tr>
                    <tr class="text-center">
                        <td>4</td>
                        <td>75 kVAR Capacitor Bank</td>
                        <td>ü </td>
                        <td>ü</td>
                        <td>250 kVA</td>
                    </tr>
                    <tr class="text-center">
                        <td>5</td>
                        <td>100 kVAR Capacitor Bank</td>
                        <td>ü </td>
                        <td>ü</td>
                        <td>315 kVA</td>
                    </tr><tr class="text-center">
                        <td>6</td>
                        <td>120 kVAR Capacitor Bank</td>
                        <td>ü </td>
                        <td>ü</td>
                        <td>400 kVA</td>
                    </tr><tr class="text-center">
                        <td>7</td>
                        <td>135 kVAR Capacitor Bank</td>
                        <td>ü </td>
                        <td>ü</td>
                        <td>400 kVA</td>
                    </tr><tr class="text-center">
                        <td>8</td>
                        <td>150 kVAR Capacitor Bank</td>
                        <td>ü </td>
                        <td>ü</td>
                        <td>500 kVA</td>
                    </tr><tr class="text-center">
                        <td>9</td>
                        <td>200 kVAR Capacitor Bank</td>
                        <td>ü </td>
                        <td>ü</td>
                        <td>630 kVA</td>
                    </tr><tr class="text-center">
                        <td>10</td>
                        <td>250 kVAR Capacitor Bank</td>
                        <td>ü </td>
                        <td>ü</td>
                        <td>750 kVA</td>
                    </tr><tr class="text-center">
                        <td>11</td>
                        <td>300 kVAR Capacitor Bank</td>
                        <td>ü </td>
                        <td>ü</td>
                        <td>1000 kVA</td>
                    </tr><tr class="text-center">
                        <td>12</td>
                        <td>400 kVAR Capacitor Bank</td>
                        <td>ü </td>
                        <td>ü</td>
                        <td>1250 kVA</td>
                    </tr><tr class="text-center">
                        <td>13</td>
                        <td>500 kVAR Capacitor Bank</td>
                        <td>ü </td>
                        <td>ü</td>
                        <td>1500 kVA</td>
                    </tr><tr class="text-center">
                        <td>14</td>
                        <td>600 kVAR Capacitor Bank</td>
                        <td>ü </td>
                        <td>ü</td>
                        <td>2000 kVA</td>
                    </tr><tr class="text-center">
                        <td>15</td>
                        <td>750 kVAR Capacitor Bank</td>
                        <td>ü </td>
                        <td>ü</td>
                        <td>2500 kVA</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
    export default {
        setup() {
            let isShow = ref(false);

            let showSpec = () => {
                isShow.value = !isShow.value;
            }

            onMounted(() => {
                window.scrollTo(0,0);
            })

            return {showSpec, isShow}
        }
    }
</script>
<style>
.main_panel {
    margin-bottom: 20px;
}
.main_panel h2 {
    
    background: #f2f2f2;
    padding: 15px 20px;
    border-radius: 5px 5px 0 0;
    margin-bottom: 0 !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.main_panel h2 span {
    font-size: 15px;
    font-weight: 500;
}

.main_panel button i {
    font-size: 18px;
    transition: .5s ease;
}

.main_panel button {
    background: transparent;
}

.main_panel button:hover {
    background: transparent;
}

.main_panel table th {
    font-size: 15px;
    padding: 15px !important;
}

.main_panel table td {
    font-size: 13px;
    padding: 15px;
}

.main_panel .spec {
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

.main_panel .spec.show {
    height: auto;
    opacity: 1;
    visibility: visible;
    margin-top: 0;
}

.main_panel table .remark {
    vertical-align: middle;
    text-align: center;
    font-size: 14px;
}

@media (max-width:990px) {
    .main_panel h2 {
        background: #f2f2f2;
        padding: 15px 20px;
        border-radius: 5px 5px 0 0;
        margin-bottom: 0 !important;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .main_panel .spec {
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

    .main_panel h2 {
        background: #f2f2f2;
        padding: 15px 20px;
        border-radius: 5px 5px 0 0;
        margin-bottom: 0 !important;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .main_panel h2 span {
        font-size: 12px;
        font-weight: 500;
        line-height: 17px;
    }

    .main_panel button i {
        font-size: 15px;
        transition: .5s ease;
    }

    .main_panel table th {
        font-size: 11px;
        font-weight: 600;
        padding: 10px !important;
    }

    .main_panel table td {
        font-size: 10px;
        padding: 5px;
    }

    .main_panel table tr .remark {
        font-size: 10px;
    }

    .main_panel table, .main_panel th, .main_panel td {
        border-collapse: collapse;
    }

}
</style>