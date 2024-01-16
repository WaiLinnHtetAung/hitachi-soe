<template>
  <div class="panel-section">
    <h2>OLTC Control Panel</h2>
    <div class="img hybrid-vcb">
      <vue-image-zoomer regular="/panels/power_control.png" />
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
            <td class="text-center">-</td>
            <td class="text-center" colspan="2">
              33kV / 66kV Power Transformer
            </td>
          </tr>
          <tr data-aos="flip-up">
            <td>Control Voltage</td>
            <td class="text-center">V</td>
            <td class="text-center" colspan="2">
              Up to 400VAC (or) 110Vdc (Other Rating Upon Request)
            </td>
          </tr>
          <tr data-aos="flip-up">
            <td>Rated Frequency</td>
            <td class="text-center">Hz</td>
            <td class="text-center" colspan="2">50Hz</td>
          </tr>
          <tr data-aos="flip-up">
            <td>Installation</td>
            <td class="text-center">-</td>
            <td colspan="2" class="text-center">Indoor / Outdoor</td>
          </tr>
          <tr data-aos="flip-up">
            <td>Degree of Protection</td>
            <td class="text-center">-</td>
            <td colspan="2" class="text-center">IP 43</td>
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
