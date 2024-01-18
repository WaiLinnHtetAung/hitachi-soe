<template>
  <div class="kv11">
    <h2>
      <span class="fw-bold"
        >(11-6.6/0.4)kV OFF LOAD TAP CHANGER HIGH EFFICIENT DISTRIBUTION
        TRANSFORMER</span
      >
      <button @click="showSpec" class="border-0">
        <i
          class="fa-solid"
          :class="{ 'fa-plus': !isShow, 'fa-minus': isShow }"
        ></i>
      </button>
    </h2>
    <div class="spec" :class="{ show: isShow }">
      <div class="row text-white fw-bold px-3 mb-4">
        <div class="col-12 col-md-8 bg-info py-3 ps-3">
          <div class="row">
            <div class="col-12 col-lg-7">
              <div class="row mb-3">
                <div class="col-8">Rated primary voltage</div>
                <div class="col-4">:&nbsp; 11000V ~ 6600 V</div>
              </div>
              <div class="row mb-3 mb-lg-0">
                <div class="col-8">Rated Secondary voltage</div>
                <div class="col-4">:&nbsp; 400/230 V</div>
              </div>
            </div>
            <div class="col-12 col-lg-5">
              <div class="row mb-3">
                <div class="col-8 col-lg-7">Frequency</div>
                <div class="col-4 col-lg-5">:&nbsp; 50 Hz</div>
              </div>
              <div class="row mb-3 mb-lg-0">
                <div class="col-7">Phase</div>
                <div class="col-5">:&nbsp; 3 Phases</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 d-flex align-items-center main-bg-color">
          <p class="mt-3 mt-lg-0 px-2 px-lg-0">
            Hermetically Sealed Type Single Pole Mounted (Off Load Tap Changer)
            Silicon
            <span class="text-warning">Steel</span> Core High Efficient
            Transformer
          </p>
        </div>
      </div>
      <div class="table-responsive">
        <table class="table table-striped table-bordered table-responsive">
          <thead>
            <tr class="text-center">
              <th>No</th>
              <th>Capacity</th>
              <th>No load losses</th>
              <th rowspan="2">Load losses at 75&deg;C PK (W)</th>
              <th rowspan="2">Total losses at 75&deg;C (W)</th>
              <th rowspan="2">Imped-ance at 75&deg;C lz%</th>
              <th rowspan="2">No load Current lo%</th>
              <th colspan="2">
                Efficiency <br />
                P.F = 1
              </th>
              <th rowspan="2">
                Voltage Regulation <br />
                P.F = 1
              </th>
              <th colspan="3">Outline Dimension Approx.(mm)</th>
              <th rowspan="2">Oil Quantity (litres)</th>
              <th rowspan="2">Total Weight (kgs)</th>
            </tr>
            <tr>
              <th>Sr</th>
              <th>(KVA)</th>
              <th>Po(W)</th>
              <th>1/2 load %</th>
              <th>Full load %</th>
              <th>L</th>
              <th>W</th>
              <th>H</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>50</td>
              <td>135</td>
              <td>720</td>
              <td>855</td>
              <td>4</td>
              <td>1.5</td>
              <td>98.76</td>
              <td>98.32</td>
              <td>1.51</td>
              <td>1010</td>
              <td>830</td>
              <td>1155</td>
              <td>190</td>
              <td>650</td>
            </tr>
            <tr>
              <td>2</td>
              <td>100</td>
              <td>220</td>
              <td>1280</td>
              <td>1500</td>
              <td>4</td>
              <td>1.5</td>
              <td>98.93</td>
              <td>98.52</td>
              <td>1.35</td>
              <td>1050</td>
              <td>830</td>
              <td>1270</td>
              <td>240</td>
              <td>830</td>
            </tr>
            <tr>
              <td>3</td>
              <td>200</td>
              <td>400</td>
              <td>2100</td>
              <td>2500</td>
              <td>4</td>
              <td>1.2</td>
              <td>99.08</td>
              <td>98.77</td>
              <td>1.12</td>
              <td>1240</td>
              <td>860</td>
              <td>1330</td>
              <td>320</td>
              <td>1200</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let isShow = ref(false);

    let showSpec = () => {
      isShow.value = !isShow.value;
    };

    return { showSpec, isShow };
  },
};
</script>
