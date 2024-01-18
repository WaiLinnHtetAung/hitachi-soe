<template>
  <div class="kv11">
    <h2>
      <span class="fw-bold"
        >(11/0.4)kV ON LOAD TAP CHANGER DISTRIBUTION TRANSFORMER</span
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
                <div class="col-7">Phase</div>
                <div class="col-5">:&nbsp; 3 Phases</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 d-flex align-items-center main-bg-color">
          <p class="mt-3 mt-lg-0 px-2 px-lg-0">
            Hermetically Sealed Type (On Load Tap Changer) Silicon
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
              <td>100</td>
              <td>300</td>
              <td>1700</td>
              <td>2000</td>
              <td>4</td>
              <td>1.5</td>
              <td>98.57</td>
              <td>98.04</td>
              <td>1.77</td>
              <td>1570</td>
              <td>660</td>
              <td>1050</td>
              <td>280</td>
              <td>770</td>
            </tr>
            <tr>
              <td>2</td>
              <td>160</td>
              <td>400</td>
              <td>2350</td>
              <td>2750</td>
              <td>4</td>
              <td>1.4</td>
              <td>98.78</td>
              <td>98.31</td>
              <td>1.54</td>
              <td>1615</td>
              <td>850</td>
              <td>1080</td>
              <td>350</td>
              <td>1050</td>
            </tr>
            <tr>
              <td>3</td>
              <td>200</td>
              <td>500</td>
              <td>2850</td>
              <td>3350</td>
              <td>4</td>
              <td>1.3</td>
              <td>98.80</td>
              <td>98.35</td>
              <td>1.49</td>
              <td>1640</td>
              <td>820</td>
              <td>1795</td>
              <td>340</td>
              <td>1100</td>
            </tr>
            <tr>
              <td>4</td>
              <td>250</td>
              <td>600</td>
              <td>3400</td>
              <td>4000</td>
              <td>4</td>
              <td>1.3</td>
              <td>98.85</td>
              <td>98.43</td>
              <td>1.43</td>
              <td>1690</td>
              <td>825</td>
              <td>1170</td>
              <td>390</td>
              <td>1200</td>
            </tr>
            <tr>
              <td>5</td>
              <td>315</td>
              <td>700</td>
              <td>4000</td>
              <td>4700</td>
              <td>4</td>
              <td>1.3</td>
              <td>98.93</td>
              <td>98.53</td>
              <td>1.34</td>
              <td>1810</td>
              <td>930</td>
              <td>1200</td>
              <td>435</td>
              <td>1460</td>
            </tr>
            <tr>
              <td>6</td>
              <td>400</td>
              <td>850</td>
              <td>5200</td>
              <td>6050</td>
              <td>4</td>
              <td>1.2</td>
              <td>98.94</td>
              <td>98.51</td>
              <td>1.37</td>
              <td>1805</td>
              <td>1000</td>
              <td>1285</td>
              <td>470</td>
              <td>1630</td>
            </tr>
            <tr>
              <td>7</td>
              <td>500</td>
              <td>950</td>
              <td>5800</td>
              <td>6750</td>
              <td>4</td>
              <td>1.0</td>
              <td>99.05</td>
              <td>98.67</td>
              <td>1.23</td>
              <td>1925</td>
              <td>1160</td>
              <td>1425</td>
              <td>560</td>
              <td>1970</td>
            </tr>
            <tr>
              <td>8</td>
              <td>630</td>
              <td>1100</td>
              <td>7000</td>
              <td>8100</td>
              <td>4</td>
              <td>1.0</td>
              <td>99.10</td>
              <td>98.73</td>
              <td>1.18</td>
              <td>1845</td>
              <td>1080</td>
              <td>1440</td>
              <td>545</td>
              <td>2060</td>
            </tr>
            <tr>
              <td>9</td>
              <td>750</td>
              <td>1250</td>
              <td>9000</td>
              <td>10250</td>
              <td>5</td>
              <td>1.0</td>
              <td>99.08</td>
              <td>98.65</td>
              <td>1.32</td>
              <td>2110</td>
              <td>1265</td>
              <td>1535</td>
              <td>725</td>
              <td>2590</td>
            </tr>
            <tr>
              <td>10</td>
              <td>800</td>
              <td>1300</td>
              <td>9900</td>
              <td>11200</td>
              <td>5</td>
              <td>1.0</td>
              <td>99.07</td>
              <td>98.62</td>
              <td>1.35</td>
              <td>2160</td>
              <td>1285</td>
              <td>1465</td>
              <td>790</td>
              <td>2610</td>
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
<style>
.kv11 {
  margin-bottom: 20px;
}
.kv11 h2 {
  background: #f2f2f2;
  padding: 15px 20px;
  border-radius: 5px 5px 0 0;
  margin-bottom: 0 !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.kv11 h2 span {
  font-size: 15px;
  font-weight: 500;
}

.kv11 button i {
  font-size: 18px;
  transition: 0.5s ease;
}

.kv11 button {
  background: transparent;
}

.kv11 button:hover {
  background: transparent;
}

.kv11 table th {
  font-size: 16px;
  padding: 15px !important;
}

.kv11 table td {
  font-size: 16px;
  padding: 15px;
}

.kv11 .spec {
  background: #f2f2f2;
  border-top: 1px solid #ccc;
  padding: 20px 20px;
  border-radius: 0 0 5px 5px;
  height: 0;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s ease-in-out;
  margin-top: -30px;
}

.kv11 .spec.show {
  height: auto;
  opacity: 1;
  visibility: visible;
  margin-top: 0;
}

@media (max-width: 990px) {
  .kv11 h2 {
    background: #f2f2f2;
    padding: 15px 20px;
    border-radius: 5px 5px 0 0;
    margin-bottom: 0 !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .kv11 .spec {
    background: #f2f2f2;
    border-top: 1px solid #ccc;
    padding: 20px 0px;
    border-radius: 0 0 5px 5px;
    height: 0;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s ease-in-out;
    margin-top: -30px;
  }
}

@media (max-width: 450px) {
  .kv11 h2 {
    background: #f2f2f2;
    padding: 15px 20px;
    border-radius: 5px 5px 0 0;
    margin-bottom: 0 !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .kv11 h2 span {
    font-size: 12px;
    font-weight: 500;
    line-height: 17px;
  }

  .kv11 button i {
    font-size: 15px;
    transition: 0.5s ease;
  }

  .kv11 table th {
    font-size: 12px;
    padding: 15px !important;
  }

  .kv11 table td {
    font-size: 15px;
    padding: 12px;
  }
}
</style>
