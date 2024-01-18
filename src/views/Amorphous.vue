<template>
  <div class="amorphous">
    <div class="img d-flex justify-content-center my-4">
      <!-- <img src="@/assets/images/amorphous/amorphous.png" alt="" /> -->
      <vue-image-zoomer regular="/amorphous.png" />
    </div>
    <br />
    <br />
    <h3 class="fw-bold">Amorphous Metal Transformer (AMT)</h3>
    <p>
      An amorphous metal transformer (AMT) is a type of energy efficient
      transformer found on electric grids. The magnetic core of this transformer
      is made with a ferromagnetic amorphous in the form of thin (e.g. 25 µm)
      foils. These materials have high magnetic sustainability, very low
      coercivity and high electrical resistance. The high resistance and thin
      foils lead to low losses by eddy currents when subjected to alternating
      magnetic fields. On the downside amorphous alloys have a lower saturation
      induction and often a higher magnetostriction compared to conventional
      crystalline iron-silicon electrical steel.
    </p>
    <br />
    <h3 class="fw-bold">Core Loss and Copper Loss</h3>
    <p>
      In a transformer the no load loss is dominated by the core loss. With an
      amorphous core, this can be 70-80% lower than with traditional crystalline
      materials. The loss under heavy load is dominated by the resistance of the
      copper windings and thus called copper loss. Here the lower saturation
      magnetization of amorphous cores tend to result in a lower efficiency at
      full load. Using more copper and core material it is possible to
      compensate for this. So high efficiency AMTs can be more efficient at low
      and high load, though at a larger size. The more expensive amorphous core
      material, the more difficult handling and the need for more copper
      windings make an AMT more expensive than a traditional transformer.
    </p>
    <br />

    <h3 class="fw-bold">Applications</h3>
    <p>
      The main application of AMTs are the grid distribution transformers rated
      at about 50-1000 kVA. These transformers typically run 24 hours a day and
      at a low load factor (average load divided by nominal load). The no load
      loss of these transformers makes up a significant part of the loss of the
      whole distribution net. Amorphous iron is also used in specialized
      electric motors that operate at high frequencies of perhaps 350 Hz or
      more.
    </p>
    <br />

    <h3 class="fw-bold">Advantages and Disadvantages</h3>
    <p>
      More efficient transformers lead to a reduction of generation requirement
      and, when using electric power generated from fossil fuels, less CO2
      emissions. This technology has been widely adopted by large developing
      countries such as China, India and Japan. AMT are in fact more
      labor-intensive than conventional distribution transformer, a reason that
      explains a very low adoption in the comparable (by size) European market.
      These countries can potentially save 25-30 TWh electricity annually,
      eliminate 6-8 GW generation investment, and reduce 20-30 million tons of
      CO2 emission by fully utilizing this technology.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.amorphous {
  padding: 10px 15%;
}
.amorphous .img img {
  width: 50%;
}

.amorphous p {
  font-size: 19px;
  text-indent: 50px;
  text-align: justify;
  line-height: 30px;
}

@media (max-width: 1600px) {
  .amorphous {
    padding: 10px 9%;
  }
}

@media (max-width: 1250px) {
  .amorphous {
    padding: 10px 5%;
  }

  .amorphous .img img {
    width: 70%;
  }
}

@media (max-width: 700px) {
  .amorphous .img img {
    width: 85%;
  }
}

@media (max-width: 550px) {
  .amorphous .img img {
    width: 100%;
  }
}
</style>
