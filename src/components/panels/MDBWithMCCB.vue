<template>
  <div class="panel-section">
    <h2>Main Distribution Panel with MCCB</h2>
    <div class="img">
      <vue-image-zoomer regular="/panels/mdb_with_mccb.png" />
    </div>
    <div class="specification mt-5 table-responsive">
      <table class="table table-bordered table-striped">
        <thead class="bg-secondary text-white p-0 m-0">
          <tr data-aos="flip-up">
            <th colspan="4" class="fs-2">Specifications</th>
          </tr>
        </thead>
        <tbody>
          <tr data-aos="flip-up">
            <td>Available Rating Ampere (MCCB)</td>
            <td class="text-center">A</td>
            <td class="text-center" colspan="2">
              100A to 800A (Other Rating Upon Request)
            </td>
          </tr>
          <tr data-aos="flip-up">
            <td>Rated Voltage</td>
            <td class="text-center">V</td>
            <td class="text-center" colspan="2">400V</td>
          </tr>
          <tr data-aos="flip-up">
            <td>Rated Frequency</td>
            <td class="text-center">Hz</td>
            <td class="text-center" colspan="2">50Hz</td>
          </tr>
          <tr data-aos="flip-up">
            <td>Number of Poles</td>
            <td class="text-center">Poles</td>
            <td class="text-center" colspan="2">3 / 4</td>
          </tr>
          <tr data-aos="flip-up">
            <td rowspan="3" class="align-middle">Applied Standard</td>
            <td rowspan="3" class="align-middle text-center">-</td>
            <td>Circuit Breaker</td>
            <td class="text-center">IEC 60947-2</td>
          </tr>
          <tr data-aos="flip-up">
            <td>LV Switchgear & Controlgear</td>
            <td class="text-center">IEC 61439</td>
          </tr>
          <tr data-aos="flip-up">
            <td>Degree of Protection</td>
            <td class="text-center">IEC 60529</td>
          </tr>
          <tr data-aos="flip-up">
            <td>Installation</td>
            <td class="text-center">-</td>
            <td colspan="2" class="text-center">Indoor / Outdoor</td>
          </tr>
          <tr data-aos="flip-up">
            <td>Degree of Protection</td>
            <td class="text-center">-</td>
            <td colspan="2" class="text-center">IP 32 / 44</td>
          </tr>
          <tr data-aos="flip-up">
            <td>Enclosure Material</td>
            <td class="text-center">-</td>
            <td colspan="2" class="text-center">
              Electro Galvanized Iron Steel
            </td>
          </tr>
          <tr data-aos="flip-up">
            <td>Material Sheet Thickness</td>
            <td class="text-center">mm</td>
            <td colspan="2" class="text-center">
              1.5mm / 2mm / 2.3mm (Other Thickness Upon Request)
            </td>
          </tr>
          <tr data-aos="flip-up">
            <td>Coating Colour</td>
            <td class="text-center">-</td>
            <td colspan="2" class="text-center">
              RAL7032 / RAL7035 (Other Colour Upon Request)
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0);
    });
  },
};
</script>
