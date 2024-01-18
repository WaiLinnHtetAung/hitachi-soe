<template>
  <div class="kv11">
    <h2>
      <span class="fw-bold"
        >(66/33)kV, (66/11)KV, (66/6.6)KV ON LOAD TAP CHANGER POWER
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
                <div class="col-7 col-lg-6">Rated primary voltage</div>
                <div class="col-5 col-lg-6">:&nbsp; 66000 V</div>
              </div>
              <div class="row mb-3 mb-lg-0">
                <div class="col-7 col-lg-6">Rated Secondary voltage</div>
                <div class="col-5 col-lg-6">
                  :&nbsp; 33000 V - 11000 V ~ 6600 V
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-5">
              <div class="row mb-3">
                <div class="col-7">Frequency</div>
                <div class="col-5">:&nbsp; 50 Hz</div>
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
              <td>4000</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>4220</td>
              <td>3220</td>
              <td>3980</td>
              <td>6800</td>
              <td>18400</td>
            </tr>
            <tr>
              <td>2</td>
              <td>5000</td>
              <td>5000</td>
              <td>38500</td>
              <td>43500</td>
              <td>7.5</td>
              <td>0.3</td>
              <td>99.42</td>
              <td>99.14</td>
              <td>1.05</td>
              <td>5500</td>
              <td>3280</td>
              <td>3860</td>
              <td>8500</td>
              <td>22000</td>
            </tr>
            <tr>
              <td>3</td>
              <td>7500</td>
              <td>7800</td>
              <td>62000</td>
              <td>69800</td>
              <td>8.5</td>
              <td>0.3</td>
              <td>99.38</td>
              <td>99.08</td>
              <td>1.18</td>
              <td>4950</td>
              <td>3500</td>
              <td>3850</td>
              <td>10560</td>
              <td>26000</td>
            </tr>
            <tr>
              <td>4</td>
              <td>10000</td>
              <td>9800</td>
              <td>73000</td>
              <td>82800</td>
              <td>9</td>
              <td>0.2</td>
              <td>99.44</td>
              <td>99.18</td>
              <td>1.13</td>
              <td>5800</td>
              <td>3400</td>
              <td>3950</td>
              <td>9700</td>
              <td>31300</td>
            </tr>
            <tr>
              <td>5</td>
              <td>15000</td>
              <td>12000</td>
              <td>98000</td>
              <td>110000</td>
              <td>9</td>
              <td>0.2</td>
              <td>99.52</td>
              <td>99.27</td>
              <td>1.06</td>
              <td>6000</td>
              <td>4350</td>
              <td>4300</td>
              <td>13000</td>
              <td>41900</td>
            </tr>
            <tr>
              <td>6</td>
              <td>20000</td>
              <td>15000</td>
              <td>125000</td>
              <td>140000</td>
              <td>10</td>
              <td>0.2</td>
              <td>99.54</td>
              <td>99.30</td>
              <td>1.12</td>
              <td>6360</td>
              <td>4470</td>
              <td>4450</td>
              <td>14050</td>
              <td>49200</td>
            </tr>
            <tr>
              <td>7</td>
              <td>30000</td>
              <td>21000</td>
              <td>165000</td>
              <td>186000</td>
              <td>11</td>
              <td>0.2</td>
              <td>99.59</td>
              <td>99.38</td>
              <td>1.15</td>
              <td>6680</td>
              <td>4950</td>
              <td>4750</td>
              <td>17800</td>
              <td>61400</td>
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
