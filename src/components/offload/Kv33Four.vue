<template>
  <div class="kv11">
    <h2>
      <span class="fw-bold"
        >(33/0.4)kV OFF LOAD TAP CHANGER DISTRIBUTION TRANSFORMER</span
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
                <div class="col-4">:&nbsp; 33000V</div>
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
            Hermetically Sealed Type (Off Load Tap Changer) Silicon
            <span class="text-warning">Steel</span> Core Transformer
          </p>
        </div>
      </div>
      <div class="table-responsive">
        <table class="table table-striped table-bordered table-responsive">
          <thead>
            <tr class="text-center">
              <th>Sr</th>
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
              <th>No</th>
              <th>kVA</th>
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
              <td>200</td>
              <td>1050</td>
              <td>1300</td>
              <td>4</td>
              <td>1.5</td>
              <td>97.99</td>
              <td>97.47</td>
              <td>2.16</td>
              <td>990</td>
              <td>650</td>
              <td>1500</td>
              <td>335</td>
              <td>810</td>
            </tr>
            <tr>
              <td>2</td>
              <td>100</td>
              <td>350</td>
              <td>1600</td>
              <td>1950</td>
              <td>4</td>
              <td>1.5</td>
              <td>98.52</td>
              <td>98.09</td>
              <td>1.67</td>
              <td>1150</td>
              <td>700</td>
              <td>1490</td>
              <td>375</td>
              <td>1010</td>
            </tr>
            <tr>
              <td>3</td>
              <td>160</td>
              <td>500</td>
              <td>2500</td>
              <td>3000</td>
              <td>4</td>
              <td>1.4</td>
              <td>98.61</td>
              <td>98.16</td>
              <td>1.63</td>
              <td>1300</td>
              <td>820</td>
              <td>1550</td>
              <td>425</td>
              <td>1220</td>
            </tr>
            <tr>
              <td>4</td>
              <td>200</td>
              <td>600</td>
              <td>2850</td>
              <td>3450</td>
              <td>4</td>
              <td>1.3</td>
              <td>98.70</td>
              <td>98.30</td>
              <td>1.49</td>
              <td>1280</td>
              <td>740</td>
              <td>1590</td>
              <td>470</td>
              <td>1310</td>
            </tr>
            <tr>
              <td>5</td>
              <td>250</td>
              <td>700</td>
              <td>3400</td>
              <td>4000</td>
              <td>4</td>
              <td>1.3</td>
              <td>98.78</td>
              <td>98.39</td>
              <td>1.43</td>
              <td>1350</td>
              <td>780</td>
              <td>1600</td>
              <td>525</td>
              <td>1520</td>
            </tr>
            <tr>
              <td>6</td>
              <td>315</td>
              <td>800</td>
              <td>4150</td>
              <td>4950</td>
              <td>4</td>
              <td>1.3</td>
              <td>98.85</td>
              <td>98.45</td>
              <td>1.39</td>
              <td>1415</td>
              <td>836</td>
              <td>1685</td>
              <td>600</td>
              <td>1660</td>
            </tr>
            <tr>
              <td>7</td>
              <td>400</td>
              <td>900</td>
              <td>5000</td>
              <td>5900</td>
              <td>4</td>
              <td>1.2</td>
              <td>98.94</td>
              <td>98.55</td>
              <td>1.32</td>
              <td>1430</td>
              <td>840</td>
              <td>1760</td>
              <td>590</td>
              <td>1930</td>
            </tr>
            <tr>
              <td>8</td>
              <td>500</td>
              <td>1100</td>
              <td>5700</td>
              <td>6800</td>
              <td>4</td>
              <td>1.0</td>
              <td>99.00</td>
              <td>98.66</td>
              <td>1.21</td>
              <td>1640</td>
              <td>1060</td>
              <td>1700</td>
              <td>670</td>
              <td>2300</td>
            </tr>
            <tr>
              <td>9</td>
              <td>630</td>
              <td>1300</td>
              <td>6700</td>
              <td>8000</td>
              <td>4</td>
              <td>1.0</td>
              <td>99.06</td>
              <td>98.75</td>
              <td>1.14</td>
              <td>1630</td>
              <td>980</td>
              <td>1810</td>
              <td>800</td>
              <td>2690</td>
            </tr>
            <tr>
              <td>10</td>
              <td>750</td>
              <td>1400</td>
              <td>8000</td>
              <td>9400</td>
              <td>5</td>
              <td>1.0</td>
              <td>99.10</td>
              <td>98.76</td>
              <td>1.19</td>
              <td>1850</td>
              <td>1170</td>
              <td>1750</td>
              <td>830</td>
              <td>2840</td>
            </tr>
            <tr>
              <td>11</td>
              <td>800</td>
              <td>1400</td>
              <td>8500</td>
              <td>9900</td>
              <td>5</td>
              <td>0.7</td>
              <td>99.13</td>
              <td>98.78</td>
              <td>1.18</td>
              <td>1870</td>
              <td>1190</td>
              <td>1820</td>
              <td>830</td>
              <td>2960</td>
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

<style></style>
