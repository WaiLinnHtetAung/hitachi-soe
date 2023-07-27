<template>
    <div class="package">
        <h2><span>Capacitor Bank Panel</span> <button @click="showSpec" class="border-0"><i class="fa-solid" :class="{'fa-plus': !isShow, 'fa-minus': isShow}"></i></button></h2>
        <div class="spec" :class="{show: isShow}" >
            <table class="table table-striped table-responsive" >
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
                        <td>YES </td>
                        <td>YES</td>
                        <td>50 kVA</td>
                        <td rowspan="15" class="remark">Capacitor Bank, <br> Power Factor Controller <br> (ELCO - Malaysia) <br> Breaker-(Hitachi - Japan)</td>
                    </tr>
                    <tr class="text-center">
                        <td>2</td>
                        <td>30 kVAR Capacitor Bank</td>
                        <td>YES </td>
                        <td>YES</td>
                        <td>100 kVA</td>
                    </tr>
                    <tr class="text-center">
                        <td>3</td>
                        <td>60 kVAR Capacitor Bank</td>
                        <td>YES </td>
                        <td>YES</td>
                        <td>200 kVA</td>
                    </tr>
                    <tr class="text-center">
                        <td>4</td>
                        <td>75 kVAR Capacitor Bank</td>
                        <td>YES </td>
                        <td>YES</td>
                        <td>250 kVA</td>
                    </tr>
                    <tr class="text-center">
                        <td>5</td>
                        <td>100 kVAR Capacitor Bank</td>
                        <td>YES </td>
                        <td>YES</td>
                        <td>315 kVA</td>
                    </tr><tr class="text-center">
                        <td>6</td>
                        <td>120 kVAR Capacitor Bank</td>
                        <td>YES </td>
                        <td>YES</td>
                        <td>400 kVA</td>
                    </tr><tr class="text-center">
                        <td>7</td>
                        <td>135 kVAR Capacitor Bank</td>
                        <td>YES </td>
                        <td>YES</td>
                        <td>400 kVA</td>
                    </tr><tr class="text-center">
                        <td>8</td>
                        <td>150 kVAR Capacitor Bank</td>
                        <td>YES </td>
                        <td>YES</td>
                        <td>500 kVA</td>
                    </tr><tr class="text-center">
                        <td>9</td>
                        <td>200 kVAR Capacitor Bank</td>
                        <td>YES </td>
                        <td>YES</td>
                        <td>630 kVA</td>
                    </tr><tr class="text-center">
                        <td>10</td>
                        <td>250 kVAR Capacitor Bank</td>
                        <td>YES </td>
                        <td>YES</td>
                        <td>750 kVA</td>
                    </tr><tr class="text-center">
                        <td>11</td>
                        <td>300 kVAR Capacitor Bank</td>
                        <td>YES </td>
                        <td>YES</td>
                        <td>1000 kVA</td>
                    </tr><tr class="text-center">
                        <td>12</td>
                        <td>400 kVAR Capacitor Bank</td>
                        <td>YES </td>
                        <td>YES</td>
                        <td>1250 kVA</td>
                    </tr><tr class="text-center">
                        <td>13</td>
                        <td>500 kVAR Capacitor Bank</td>
                        <td>YES </td>
                        <td>YES</td>
                        <td>1500 kVA</td>
                    </tr><tr class="text-center">
                        <td>14</td>
                        <td>600 kVAR Capacitor Bank</td>
                        <td>YES </td>
                        <td>YES</td>
                        <td>2000 kVA</td>
                    </tr><tr class="text-center">
                        <td>15</td>
                        <td>750 kVAR Capacitor Bank</td>
                        <td>YES </td>
                        <td>YES</td>
                        <td>2500 kVA</td>
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