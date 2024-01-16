<template>
  <div class="panel-section">
    <h2>OLTC Backup Power Panel</h2>
    <div class="img">
      <vue-image-zoomer regular="/panels/backup_power.png" />
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
            <td class="text-center">kV</td>
            <td class="text-center" colspan="2">
              6.6kV /11kV / 33kV Transformer
            </td>
          </tr>
          <tr data-aos="flip-up">
            <td>Control Voltage</td>
            <td class="text-center">V</td>
            <td class="text-center" colspan="2">Up to 400VAC</td>
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
          <tr data-aos="flip-up">
            <td colspan="4">&nbsp;</td>
          </tr>
          <tr data-aos="flip-up" class="bg-secondary m-0 p-0">
            <td colspan="4" class="fs-4 text-white">UPS (Pure Sine Wave)</td>
          </tr>
          <tr data-aos="flip-up">
            <td>Power Rating</td>
            <td class="text-center">VA</td>
            <td colspan="2" class="text-center">1500VA</td>
          </tr>
          <tr data-aos="flip-up">
            <td>Nominal Grid Voltage</td>
            <td class="text-center">VAC</td>
            <td colspan="2" class="text-center">230VAC</td>
          </tr>
          <tr data-aos="flip-up">
            <td>Nominal Output Voltage</td>
            <td class="text-center">VAC</td>
            <td colspan="2" class="text-center">220±8%</td>
          </tr>
          <tr data-aos="flip-up">
            <td>Operating DC Voltage</td>
            <td class="text-center">VDC</td>
            <td colspan="2" class="text-center">24VDC</td>
          </tr>
          <tr data-aos="flip-up">
            <td>Rated Frequency</td>
            <td class="text-center">Hz</td>
            <td colspan="2" class="text-center">50Hz</td>
          </tr>
          <tr data-aos="flip-up">
            <td>Output Waveform</td>
            <td class="text-center">&nbsp;</td>
            <td colspan="2" class="text-center">Pure Sine Wave</td>
          </tr>
          <tr data-aos="flip-up">
            <td colspan="4">&nbsp;</td>
          </tr>
          <tr data-aos="flip-up" class="bg-secondary m-0 p-0">
            <td colspan="4" class="fs-4 text-white">Battery</td>
          </tr>
          <tr data-aos="flip-up">
            <td>Type</td>
            <td class="text-center">&nbsp;</td>
            <td colspan="2" class="text-center">
              Valved Regulated Sealed GEL Battery
            </td>
          </tr>
          <tr data-aos="flip-up">
            <td>Nominal Voltage</td>
            <td class="text-center">VDC</td>
            <td colspan="2" class="text-center">12 VDC</td>
          </tr>
          <tr data-aos="flip-up">
            <td>Nominal Capacity</td>
            <td class="text-center">AH</td>
            <td colspan="2" class="text-center">65 AH</td>
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
