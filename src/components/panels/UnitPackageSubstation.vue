<template>
  <div class="panel-section">
    <h2>Unit Package Substation</h2>
    <div class="img">
      <img src="@/assets/images/panels/unit_package.png" alt="" />
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
            <td>Available Rating Capacity</td>
            <td class="text-center">kVA</td>
            <td class="text-center" colspan="2">50kVA to 1500kVA</td>
          </tr>
          <tr data-aos="flip-up">
            <td>Rated Voltage</td>
            <td class="text-center">KV</td>
            <td class="text-center" colspan="2">6.6kV / 11kV / 6.6~11kV</td>
          </tr>
          <tr data-aos="flip-up">
            <td>Rated Frequency</td>
            <td class="text-center">Hz</td>
            <td class="text-center" colspan="2">50</td>
          </tr>
          <tr data-aos="flip-up">
            <td>Type of Tapchanger</td>
            <td class="text-center">&nbsp;</td>
            <td class="text-center" colspan="2">Off Load / On load</td>
          </tr>
          <tr data-aos="flip-up">
            <td rowspan="5" class="align-middle">Applied Standard</td>
            <td rowspan="5">&nbsp;</td>
            <td>Transformer</td>
            <td class="text-center">IEC 60076</td>
          </tr>
          <tr data-aos="flip-up">
            <td>Lightning Arrester</td>
            <td class="text-center">IEC 60099-4</td>
          </tr>
          <tr data-aos="flip-up">
            <td>Disconnecting Switch</td>
            <td class="text-center">IEC 60129</td>
          </tr>
          <tr data-aos="flip-up">
            <td>HV/LV Prefabricated Substation</td>
            <td class="text-center">IEC 62271-202</td>
          </tr>
          <tr data-aos="flip-up">
            <td>Degree of Protection</td>
            <td class="text-center">IEC 60529</td>
          </tr>
          <tr data-aos="flip-up">
            <td rowspan="2" class="align-middle">Medium Voltage Switch</td>
            <td rowspan="2">&nbsp;</td>
            <td colspan="2" class="text-center">
              LA,DS & Drop Out Fuse (or) Cut Out Fuse (For 50kVA to 400kVA)
            </td>
          </tr>
          <tr data-aos="flip-up">
            <td colspan="2" class="text-center">
              VCB Switchgear (For 500kVA to 1500kVA)
            </td>
          </tr>
          <tr data-aos="flip-up">
            <td rowspan="2" class="align-middle">Low Voltage Switch</td>
            <td rowspan="2">&nbsp;</td>
            <td colspan="2" class="text-center">MCCB (For 50kVA to 500kVA)</td>
          </tr>
          <tr data-aos="flip-up">
            <td colspan="2" class="text-center">ACB (For 500kVA to 1500kVA)</td>
          </tr>
          <tr data-aos="flip-up">
            <td>Installation</td>
            <td>&nbsp;</td>
            <td colspan="2" class="text-center">Indoor / Outdoor</td>
          </tr>
          <tr data-aos="flip-up">
            <td>Degree of Protection</td>
            <td>&nbsp;</td>
            <td colspan="2" class="text-center">IP 23 / IP 44</td>
          </tr>
          <tr data-aos="flip-up">
            <td>Max: Ambient Temperature</td>
            <td>&nbsp;</td>
            <td colspan="2" class="text-center">-25°C to +40°C</td>
          </tr>
          <tr data-aos="flip-up">
            <td>Type of Ventilation</td>
            <td>&nbsp;</td>
            <td colspan="2" class="text-center">Natural Air</td>
          </tr>
          <tr data-aos="flip-up">
            <td>Altitude</td>
            <td>&nbsp;</td>
            <td colspan="2" class="text-center">&lt; 1000m</td>
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
            <td>&nbsp;</td>
            <td colspan="2" class="text-center">2mm / 2.3mm</td>
          </tr>
          <tr data-aos="flip-up">
            <td>Coating Colour</td>
            <td>&nbsp;</td>
            <td colspan="2" class="text-center">RAL7032</td>
          </tr>
          <tr data-aos="flip-up">
            <td colspan="5">
              Complete with Low Voltage Capacitor Bank Compartment For All
              Transformer.
            </td>
          </tr>
          <tr data-aos="flip-up">
            <td colspan="5">
              Complete with OLTC Backup Power Compartment for On Load Tap
              Changer Transformer.
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

<style></style>
