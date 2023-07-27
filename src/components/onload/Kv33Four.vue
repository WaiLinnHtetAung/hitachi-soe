<template>
    <div class="kv11">
        <h2><span>(33/0.4)kV ON LOAD TAP CHANGER DISTRIBUTION TRANSFORMER</span> <button @click="showSpec" class="border-0"><i class="fa-solid" :class="{'fa-plus': !isShow, 'fa-minus': isShow}"></i></button></h2>
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
                        <td>100kVA(11/0.4)kV  </td>
                        <td>On Load Tap Changer Transformer</td>
                    </tr>
                    <tr class="text-center">
                        <td>HISEM</td>
                        <td>3 Phases</td>
                        <td>160kVA(11/0.4)kV</td>
                        <td>On Load Tap Changer Transformer</td>
                    </tr>
                    <tr class="text-center">
                        <td>HISEM</td>
                        <td>3 Phases</td>
                        <td>200kVA(11/0.4)kV</td>
                        <td>On Load Tap Changer Transformer</td>
                    </tr>
                    <tr class="text-center">
                        <td>HISEM</td>
                        <td>3 Phases</td>
                        <td>250kVA(11/0.4)kV</td>
                        <td>On Load Tap Changer Transformer</td>
                    </tr>
                    <tr class="text-center">
                        <td>HISEM</td>
                        <td>3 Phases</td>
                        <td>315kVA(11/0.4)kV </td>
                        <td>On Load Tap Changer Transformer</td>
                    </tr>
                    <tr class="text-center">
                        <td>HISEM</td>
                        <td>3 Phases</td>
                        <td>400kVA(11/0.4)kV  </td>
                        <td>On Load Tap Changer Transformer</td>
                    </tr>
                    <tr class="text-center">
                        <td>HISEM</td>
                        <td>3 Phases</td>
                        <td>500kVA(11/0.4)kV  </td>
                        <td>On Load Tap Changer Transformer</td>
                    </tr>
                    <tr class="text-center">
                        <td>HISEM</td>
                        <td>3 Phases</td>
                        <td>630kVA(11/0.4)kV  </td>
                        <td>On Load Tap Changer Transformer</td>
                    </tr>
                    <tr class="text-center">
                        <td>HISEM</td>
                        <td>3 Phases</td>
                        <td>750kVA(11/0.4)kV  </td>
                        <td>On Load Tap Changer Transformer</td>
                    </tr>
                    <tr class="text-center">
                        <td>HISEM</td>
                        <td>3 Phases</td>
                        <td>800kVA(11/0.4)kV  </td>
                        <td>On Load Tap Changer Transformer</td>
                    </tr>
                    <tr class="text-center">
                        <td>HISEM</td>
                        <td>3 Phases</td>
                        <td>1000kVA(11/0.4)kV  </td>
                        <td>On Load Tap Changer Transformer</td>
                    </tr>
                    <tr class="text-center">
                        <td>HISEM</td>
                        <td>3 Phases</td>
                        <td>1250kVA(11/0.4)kV  </td>
                        <td>On Load Tap Changer Transformer</td>
                    </tr>
                    <tr class="text-center">
                        <td>HISEM</td>
                        <td>3 Phases</td>
                        <td>1500kVA(11/0.4)kV  </td>
                        <td>On Load Tap Changer Transformer</td>
                    </tr>
                    <tr class="text-center">
                        <td>HISEM</td>
                        <td>3 Phases</td>
                        <td>2000kVA(11/0.4)kV  </td>
                        <td>On Load Tap Changer Transformer</td>
                    </tr>
                    <tr class="text-center">
                        <td>HISEM</td>
                        <td>3 Phases</td>
                        <td>2500kVA(11/0.4)kV  </td>
                        <td>On Load Tap Changer Transformer</td>
                    </tr>
                    <tr class="text-center">
                        <td>HISEM</td>
                        <td>3 Phases</td>
                        <td>3000kVA(11/0.4)kV  </td>
                        <td>On Load Tap Changer Transformer</td>
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