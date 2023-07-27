<template>
    <div class="main_panel">
        <h2><span>LA-DS Panel with DOF/Cutout Fuse</span> <button @click="showSpec" class="border-0"><i class="fa-solid" :class="{'fa-plus': !isShow, 'fa-minus': isShow}"></i></button></h2>
        <div class="spec" :class="{show: isShow}">
            <table class="table table-striped table-responsive">
                <thead>
                    <tr class="text-center ">
                        <th>No.</th>
                        <th>Description</th>
                        <th>Indoor</th>
                        <th>Outdoor</th>
                        <th>Remark</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-center">
                        <td>1</td>
                        <td>6.6 kV LA, DS & DOF Panel (Drop Out Fuse)</td>
                        <td>ü </td>
                        <td>ü</td>
                        <td rowspan="10" class="remark"> ACB (Schneider-India), <br> Breaker (Hitachi-Japan)</td>
                    </tr>
                    <tr class="text-center">
                        <td>2</td>
                        <td>11 kV LA, DS & DOF Panel (Drop Out Fuse)</td>
                        <td>ü </td>
                        <td>ü</td>
                    </tr>
                    <tr class="text-center">
                        <td>3</td>
                        <td>6.6 kV LA, DS & COF (Cut Out Fuse)</td>
                        <td>ü </td>
                        <td>ü</td>
                    </tr>
                    <tr class="text-center">
                        <td>4</td>
                        <td>11 kV LA, DS & COF (Cut Out Fuse)</td>
                        <td>ü </td>
                        <td>ü</td>
                    </tr>
                    <tr class="text-center">
                        <td>5</td>
                        <td>11 kV OLTC Backup Power Panel</td>
                        <td>ü </td>
                        <td>ü</td>
                    </tr><tr class="text-center">
                        <td>6</td>
                        <td>33 kV OLTC Backup Power Panel</td>
                        <td>ü </td>
                        <td>ü</td>
                    </tr><tr class="text-center">
                        <td>7</td>
                        <td>Auto Transfer Switch (ATS) Panel</td>
                        <td>ü </td>
                        <td>ü</td>
                    </tr><tr class="text-center">
                        <td>8</td>
                        <td>400 V Main Distribution Panel</td>
                        <td>ü </td>
                        <td>ü</td>
                    </tr><tr class="text-center">
                        <td>9</td>
                        <td>400 V Air Circuit Breaker Panel (4P 1250A, 4P 1600A, 4P 3200A, 4P 4000A & 4P 6300A)</td>
                        <td>ü </td>
                        <td>ü</td>
                    </tr><tr class="text-center">
                        <td>10</td>
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