<template>
    <div class="acb">
        <h2><span>Production List for 400 V Distribution Panel with Capacitor Bank</span> <button @click="showSpec" class="border-0"><i class="fa-solid" :class="{'fa-plus': !isShow, 'fa-minus': isShow}"></i></button></h2>
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
                        <td>400 V Distribution Panel with 15 kVAR Capacitor Bank</td>
                        <td>4P 100 A, MCCB</td>
                        <td>YES </td>
                        <td>YES</td>
                        <td>50 kVA</td>
                        <td rowspan="7" class="remark">Main Breaker and <br> Sub Breaker <br> (Hitachi - Japan)</td>
                    </tr>
                    <tr class="text-center">
                        <td>2</td>
                        <td>400 V Distribution Panel with 30 kVAR Capacitor Bank</td>
                        <td>4P 150 A, MCCB</td>
                        <td>YES </td>
                        <td>YES</td>
                        <td>100 kVA</td>
                    </tr>
                    <tr class="text-center">
                        <td>3</td>
                        <td>400 V Distribution Panel with 60 kVAR Capacitor Bank</td>
                        <td>4P 250A, MCCB (or) 4P 300A, MCCB</td>
                        <td>YES </td>
                        <td>YES</td>
                        <td>160/200 kVA</td>
                    </tr>
                    <tr class="text-center">
                        <td>4</td>
                        <td>400 V Distribution Panel with 75 kVAR Capacitor Bank</td>
                        <td>4P 400A, MCCB</td>
                        <td>YES </td>
                        <td>YES</td>
                        <td>250 kVA</td>
                    </tr>
                    <tr class="text-center">
                        <td>5</td>
                        <td>400 V Distribution Panel with 100 kVAR Capacitor Bank</td>
                        <td>4P 500A, MCCB</td>
                        <td>YES </td>
                        <td>YES</td>
                        <td>315 kVA</td>
                    </tr>
                    <tr class="text-center">
                        <td>6</td>
                        <td>400 V Distribution Panel with 120 kVAR Capacitor Bank</td>
                        <td>4P 630A, MCCB</td>
                        <td>YES </td>
                        <td>YES</td>
                        <td>400 kVA</td>
                    </tr>
                    <tr class="text-center">
                        <td>7</td>
                        <td>400 V Distribution Panel with 150 kVAR Capacitor Bank</td>
                        <td>4P 800A, MCCB</td>
                        <td>YES </td>
                        <td>YES</td>
                        <td>500 kVA</td>
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