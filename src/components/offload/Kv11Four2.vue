<template>
  <div class="kv11">
    <h2>
      <span class="fw-bold"
        >(11/0.4) kV OFF LOAD TAP CHANGER DISTRIBUTION TRANSFORMER</span
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
                <div class="col-4">:&nbsp; 11000V</div>
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
            Open Type With Conservator (Off Load Tap Changer) Silicon
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
              <td>2420</td>
              <td>1280</td>
              <td>1910</td>
              <td>775</td>
              <td>3290</td>
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
              <td>2520</td>
              <td>1360</td>
              <td>2210</td>
              <td>1200</td>
              <td>4000</td>
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
              <td>2700</td>
              <td>1460</td>
              <td>2090</td>
              <td>1140</td>
              <td>4500</td>
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
              <td>2660</td>
              <td>1490</td>
              <td>2410</td>
              <td>1530</td>
              <td>6010</td>
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
              <td>2930</td>
              <td>1560</td>
              <td>2545</td>
              <td>2020</td>
              <td>7520</td>
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
              <td>3040</td>
              <td>1530</td>
              <td>2660</td>
              <td>2300</td>
              <td>8470</td>
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
