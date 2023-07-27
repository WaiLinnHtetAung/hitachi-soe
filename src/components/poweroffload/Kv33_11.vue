<template>
    <div class="kv11">
        <h2><span>(33/11)kV OFF LOAD TAP CHANGER POWER TRANSFORMER</span> <button @click="showSpec" class="border-0"><i class="fa-solid" :class="{'fa-plus': !isShow, 'fa-minus': isShow}"></i></button></h2>
        <div class="spec" :class="{show: isShow}">
            <table class="table table-striped table-responsive">
                <thead>
                    <tr class="text-center ">
                        <th>Brand</th>
                        <th>Phase</th>
                        <th>Power</th>
                        <th>Transformer Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-center">
                        <td>HISEM</td>
                        <td>3 Phases</td>
                        <td>3500kVA(33/11)kV  </td>
                        <td>Off Load Tap Changer Transformer</td>
                    </tr>
                    <tr class="text-center">
                        <td>HISEM</td>
                        <td>3 Phases</td>
                        <td>4000kVA(33/11)kV</td>
                        <td>Off Load Tap Changer Transformer</td>
                    </tr>
                    <tr class="text-center">
                        <td>HISEM</td>
                        <td>3 Phases</td>
                        <td>5000kVA(33/11)kV</td>
                        <td>Off Load Tap Changer Transformer</td>
                    </tr>
                    <tr class="text-center">
                        <td>HISEM</td>
                        <td>3 Phases</td>
                        <td>7500kVA(33/11)kV</td>
                        <td>Off Load Tap Changer Transformer</td>
                    </tr>
                    <tr class="text-center">
                        <td>HISEM</td>
                        <td>3 Phases</td>
                        <td>8000kVA(33/11)kV </td>
                        <td>Off Load Tap Changer Transformer</td>
                    </tr>
                    <tr class="text-center">
                        <td>HISEM</td>
                        <td>3 Phases</td>
                        <td>10000kVA(33/11)kV  </td>
                        <td>Off Load Tap Changer Transformer</td>
                    </tr>
                    <tr class="text-center">
                        <td>HISEM</td>
                        <td>3 Phases</td>
                        <td>15000kVA(33/11)kV  </td>
                        <td>Off Load Tap Changer Transformer</td>
                    </tr>
                    <tr class="text-center">
                        <td>HISEM</td>
                        <td>3 Phases</td>
                        <td>20000kVA(33/11)kV  </td>
                        <td>Off Load Tap Changer Transformer</td>
                    </tr>
                    <tr class="text-center">
                        <td>HISEM</td>
                        <td>3 Phases</td>
                        <td>30000kVA(33/11)kV  </td>
                        <td>Off Load Tap Changer Transformer</td>
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
.kv11 {
    margin-bottom: 20px;
}
.kv11 h2 {
    
    background: #f2f2f2;
    padding: 15px 20px;
    border-radius: 5px 5px 0 0;
    margin-bottom: 0 !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.kv11 h2 span {
    font-size: 15px;
    font-weight: 500;
}

.kv11 button i {
    font-size: 18px;
    transition: .5s ease;
}

.kv11 button {
    background: transparent;
}

.kv11 button:hover {
    background: transparent;
}

.kv11 table th {
    font-size: 15px;
    padding: 15px !important;
}

.kv11 table td {
    font-size: 13px;
    padding: 15px;
}

.kv11 .spec {
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

.kv11 .spec.show {
    height: auto;
    opacity: 1;
    visibility: visible;
    margin-top: 0;
}

@media (max-width:990px) {
    .kv11 h2 {
        background: #f2f2f2;
        padding: 15px 20px;
        border-radius: 5px 5px 0 0;
        margin-bottom: 0 !important;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .kv11 .spec {
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
    .kv11 h2 {
        background: #f2f2f2;
        padding: 15px 20px;
        border-radius: 5px 5px 0 0;
        margin-bottom: 0 !important;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .kv11 h2 span {
        font-size: 12px;
        font-weight: 500;
        line-height: 17px;
    }

    .kv11 button i {
        font-size: 15px;
        transition: .5s ease;
    }

    .kv11 table th {
        font-size: 12px;
        padding: 15px !important;
    }

    .kv11 table td {
        font-size: 10px;
        padding: 12px;
    }

}
</style>