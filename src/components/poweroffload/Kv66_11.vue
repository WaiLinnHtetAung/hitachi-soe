<template>
    <div class="kv11">
        <h2><span>(66/11)kV OFF LOAD TAP CHANGER POWER TRANSFORMER</span> <button @click="showSpec" class="border-0"><i class="fa-solid" :class="{'fa-plus': !isShow, 'fa-minus': isShow}"></i></button></h2>
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
                        <td>1000kVA(66/11)kV  </td>
                        <td>Off Load Tap Changer Transformer</td>
                    </tr>
                    <tr class="text-center">
                        <td>HISEM</td>
                        <td>3 Phases</td>
                        <td>2000kVA(66/11)kV  </td>
                        <td>Off Load Tap Changer Transformer</td>
                    </tr>
                    <tr class="text-center">
                        <td>HISEM</td>
                        <td>3 Phases</td>
                        <td>3000kVA(66/11)kV  </td>
                        <td>Off Load Tap Changer Transformer</td>
                    </tr>
                    <tr class="text-center">
                        <td>HISEM</td>
                        <td>3 Phases</td>
                        <td>5000kVA(66/11)kV</td>
                        <td>Off Load Tap Changer Transformer</td>
                    </tr>
                    <tr class="text-center">
                        <td>HISEM</td>
                        <td>3 Phases</td>
                        <td>7500kVA(66/11)kV</td>
                        <td>Off Load Tap Changer Transformer</td>
                    </tr>
                    <tr class="text-center">
                        <td>HISEM</td>
                        <td>3 Phases</td>
                        <td>8000kVA(66/11)kV </td>
                        <td>Off Load Tap Changer Transformer</td>
                    </tr>
                    <tr class="text-center">
                        <td>HISEM</td>
                        <td>3 Phases</td>
                        <td>10000kVA(66/11)kV  </td>
                        <td>Off Load Tap Changer Transformer</td>
                    </tr>
                    <tr class="text-center">
                        <td>HISEM</td>
                        <td>3 Phases</td>
                        <td>15000kVA(66/11)kV  </td>
                        <td>Off Load Tap Changer Transformer</td>
                    </tr>
                    <tr class="text-center">
                        <td>HISEM</td>
                        <td>3 Phases</td>
                        <td>20000kVA(66/11)kV  </td>
                        <td>Off Load Tap Changer Transformer</td>
                    </tr>
                    <tr class="text-center">
                        <td>HISEM</td>
                        <td>3 Phases</td>
                        <td>30000kVA(66/11)kV  </td>
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
