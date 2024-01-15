<template>
  <div class="panel-section">
    <h2>kWh Meter Panel</h2>
    <div class="img">
      <img src="/panels/meter_panel.png" alt="" />
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
            <td>Available Rating Voltage</td>
            <td class="text-center">&nbsp;</td>
            <td class="text-center" colspan="2">Upon Request</td>
          </tr>
          <tr data-aos="flip-up">
            <td>Installation</td>
            <td>&nbsp;</td>
            <td colspan="2" class="text-center">Indoor / Outdoor</td>
          </tr>
          <tr data-aos="flip-up">
            <td>Degree of Protection</td>
            <td>&nbsp;</td>
            <td colspan="2" class="text-center">IP 54</td>
          </tr>
          <tr data-aos="flip-up">
            <td>Enclosure Material</td>
            <td>&nbsp;</td>
            <td colspan="2" class="text-center">
              Electro Galvanized Iron Steel
            </td>
          </tr>
          <tr data-aos="flip-up">
            <td>Material Sheet Thickness</td>
            <td class="text-center">mm</td>
            <td colspan="2" class="text-center">1.5mm / 2mm / 2.3mm</td>
          </tr>
          <tr data-aos="flip-up">
            <td>Coating Colour</td>
            <td>&nbsp;</td>
            <td colspan="2" class="text-center">RAL7032 / RAL7035</td>
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
