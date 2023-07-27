<template>
    <div class="package">
        <h2><span>Production List for Transformer Package Type Substation</span> <button @click="showSpec" class="border-0"><i class="fa-solid" :class="{'fa-plus': !isShow, 'fa-minus': isShow}"></i></button></h2>
        <div class="spec" :class="{show: isShow}">
            <table class="table table-striped table-responsive">
                <thead>
                    <tr class="text-center ">
                        <th>No.</th>
                        <th>Type of Transformer Package Type Substation</th>
                        <th colspan="2">Rated Voltage</th>
                        <th>Indoor</th>
                        <th>Outdoor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-center">
                        <td>1</td>
                        <td>50 kVA Transformer Package Type Substaion</td>
                        <td>11/0.4</td>
                        <td>11-6.6/0.4</td>
                        <td>ü</td>
                        <td>ü</td>
                    </tr>
                    <tr class="text-center">
                        <td>2</td>
                        <td>100 kVA Transformer Package Type Substaion </td>
                        <td>11/0.4</td>
                        <td>11-6.6/0.4</td>
                        <td>ü</td>
                        <td>ü</td>
                    </tr>
                    <tr class="text-center">
                        <td>3</td>
                        <td>160 kVA Transformer Package Type Substaion</td>
                        <td>11/0.4</td>
                        <td>11-6.6/0.4</td>
                        <td>ü</td>
                        <td>ü</td>
                    </tr>
                    <tr class="text-center">
                        <td>4</td>
                        <td>200 kVA Transformer Package Type Substaion</td>
                        <td>11/0.4</td>
                        <td>11-6.6/0.4</td>
                        <td>ü</td>
                        <td>ü</td>
                    </tr>
                    <tr class="text-center">
                        <td>5</td>
                        <td>250 kVA Transformer Package Type Substaion</td>
                        <td>11/0.4</td>
                        <td>11-6.6/0.4</td>
                        <td>ü</td>
                        <td>ü</td>
                    </tr>
                    <tr class="text-center">
                        <td>6</td>
                        <td>315 kVA Transformer Package Type Substaion</td>
                        <td>11/0.4</td>
                        <td>11-6.6/0.4</td>
                        <td>ü</td>
                        <td>ü</td>
                    </tr>
                    <tr class="text-center">
                        <td>7</td>
                        <td>400 kVA Transformer Package Type Substaion</td>
                        <td>11/0.4</td>
                        <td>11-6.6/0.4</td>
                        <td>ü</td>
                        <td>ü</td>
                    </tr>
                    <tr class="text-center">
                        <td>8</td>
                        <td>500 kVA Transformer Package Type Substaion</td>
                        <td>11/0.4</td>
                        <td>11-6.6/0.4</td>
                        <td>ü</td>
                        <td>ü</td>
                    </tr>
                    <tr class="text-center">
                        <td>9</td>
                        <td>630 kVA Transformer Package Type Substaion</td>
                        <td>11/0.4</td>
                        <td>11-6.6/0.4</td>
                        <td>ü</td>
                        <td>ü</td>
                    </tr>
                    <tr class="text-center">
                        <td>10</td>
                        <td>750 kVA Transformer Package Type Substaion</td>
                        <td>11/0.4</td>
                        <td>11-6.6/0.4</td>
                        <td>ü</td>
                        <td>ü</td>
                    </tr>
                    <tr class="text-center">
                        <td>11</td>
                        <td>800 kVA Transformer Package Type Substaion</td>
                        <td>11/0.4</td>
                        <td>11-6.6/0.4</td>
                        <td>ü</td>
                        <td>ü</td>
                    </tr>
                    <tr class="text-center">
                        <td>12</td>
                        <td>1000 kVA Transformer Package Type Substaion</td>
                        <td>11/0.4</td>
                        <td>11-6.6/0.4</td>
                        <td>ü</td>
                        <td>ü</td>
                    </tr>
                    <tr class="text-center">
                        <td>13</td>
                        <td>1250 kVA Transformer Package Type Substaion</td>
                        <td>11/0.4</td>
                        <td>11-6.6/0.4</td>
                        <td>ü</td>
                        <td>ü</td>
                    </tr>
                    <tr class="text-center">
                        <td>14</td>
                        <td>1500 kVA Transformer Package Type Substaion</td>
                        <td>11/0.4</td>
                        <td>11-6.6/0.4</td>
                        <td>ü</td>
                        <td>ü</td>
                    </tr>
                    <tr class="text-center">
                        <td>15</td>
                        <td>2000 kVA Transformer Package Type Substaion</td>
                        <td>11/0.4</td>
                        <td>11-6.6/0.4</td>
                        <td>ü</td>
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
.package {
    margin-bottom: 20px;
}
.package h2 {
    
    background: #f2f2f2;
    padding: 15px 20px;
    border-radius: 5px 5px 0 0;
    margin-bottom: 0 !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.package h2 span {
    font-size: 15px;
    font-weight: 500;
}

.package button i {
    font-size: 18px;
    transition: .5s ease;
}

.package button {
    background: transparent;
}

.package button:hover {
    background: transparent;
}

.package table th {
    font-size: 15px;
    padding: 15px !important;
}

.package table td {
    font-size: 13px;
    padding: 15px;
}

.package .spec {
    background: #f2f2f2;
    border-top: 1px solid #ccc;
    padding: 20px 20px;
    border-radius: 0 0 5px 5px;
    height: 0 ;
    opacity: 0;
    visibility: hidden;
    transition: .3s ease-in-out;
    margin-top: -30px;
    overflow-x: scroll;
}

.package .spec.show {
    height: auto;
    opacity: 1;
    visibility: visible;
    margin-top: 0;
}

.package table .remark {
    vertical-align: middle;
    text-align: center;
    font-size: 14px;
}

@media (max-width:990px) {
    .package h2 {
        background: #f2f2f2;
        padding: 15px 20px;
        border-radius: 5px 5px 0 0;
        margin-bottom: 0 !important;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .package .spec {
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

    .package h2 {
        background: #f2f2f2;
        padding: 15px 20px;
        border-radius: 5px 5px 0 0;
        margin-bottom: 0 !important;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .package h2 span {
        font-size: 12px;
        font-weight: 500;
        line-height: 17px;
    }

    .package button i {
        font-size: 15px;
        transition: .5s ease;
    }

    .package table th {
        font-size: 11px;
        font-weight: 600;
        padding: 10px !important;
    }

    .package table td {
        font-size: 9px;
        padding: 5px;
    }

    .package table tr .remark {
        font-size: 9px;
    }

    .package table, .package th, .package td {
        border-collapse: collapse;
    }

}
</style>