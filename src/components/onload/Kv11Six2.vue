<template>
  <div class="kv11">
    <h2>
      <span class="fw-bold"
        >(11-6.6/0.4)kV ON LOAD TAP CHANGER DISTRIBUTION TRANSFORMER</span
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
                <div class="col-8 col-lg-7">Phase</div>
                <div class="col-4 col-lg-5">:&nbsp; 3 Phases</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 d-flex align-items-center main-bg-color">
          <p class="mt-3 mt-lg-0 px-2 px-lg-0">
            Open Type With Conservator (On Load Tap Changer) Silicon
            <span class="text-warning">Steel</span> Core Transformer
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
              <td>1000</td>
              <td>1500</td>
              <td>11000</td>
              <td>12500</td>
              <td>6</td>
              <td>0.8</td>
              <td>99.16</td>
              <td>98.77</td>
              <td>1.27</td>
              <td>2440</td>
              <td>1250</td>
              <td>2060</td>
              <td>970</td>
              <td>3330</td>
            </tr>
            <tr>
              <td>2</td>
              <td>1250</td>
              <td>1800</td>
              <td>14500</td>
              <td>16300</td>
              <td>6</td>
              <td>0.7</td>
              <td>99.14</td>
              <td>98.71</td>
              <td>1.33</td>
              <td>2555</td>
              <td>1310</td>
              <td>2155</td>
              <td>1210</td>
              <td>4140</td>
            </tr>
            <tr>
              <td>3</td>
              <td>1500</td>
              <td>2000</td>
              <td>17000</td>
              <td>19000</td>
              <td>6</td>
              <td>0.5</td>
              <td>99.17</td>
              <td>98.75</td>
              <td>1.31</td>
              <td>2850</td>
              <td>1360</td>
              <td>2200</td>
              <td>1250</td>
              <td>4430</td>
            </tr>
            <tr>
              <td>4</td>
              <td>2000</td>
              <td>2400</td>
              <td>22000</td>
              <td>24400</td>
              <td>6</td>
              <td>0.5</td>
              <td>99.22</td>
              <td>98.79</td>
              <td>1.27</td>
              <td>2870</td>
              <td>1540</td>
              <td>2440</td>
              <td>2130</td>
              <td>6620</td>
            </tr>
            <tr>
              <td>5</td>
              <td>2500</td>
              <td>2800</td>
              <td>23000</td>
              <td>25800</td>
              <td>6</td>
              <td>0.3</td>
              <td>99.32</td>
              <td>98.98</td>
              <td>1.10</td>
              <td>2910</td>
              <td>1560</td>
              <td>2550</td>
              <td>2300</td>
              <td>8130</td>
            </tr>
            <tr>
              <td>6</td>
              <td>3000</td>
              <td>3400</td>
              <td>27000</td>
              <td>30400</td>
              <td>7</td>
              <td>0.3</td>
              <td>99.33</td>
              <td>99.00</td>
              <td>1.14</td>
              <td>3050</td>
              <td>1600</td>
              <td>2510</td>
              <td>2540</td>
              <td>9220</td>
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
