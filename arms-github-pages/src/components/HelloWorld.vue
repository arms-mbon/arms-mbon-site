<template>
  <div class="hello">
    <br>
    <div class="container">
        <br>
        <img alt="ARMS logo" src="../assets/ARMSmainpiccy.png" class="center">
        <h1>{{ msg }}</h1>
        <p>The European ARMS programme (ARMS-MBON) is a network of Autonomous Reef Monitoring Structures (ARMS) placed in the vicinity of marine stations, ports, marinas, and Long-Term Ecological Research (LTER) sites distributed over Europe and polar regions. The aim of ARMS-MBON is to assess the status of, and changes in, hard-bottom communities of near-coast environments, using genetic methods supplemented with image analysis and visual inspection methods.&nbsp;ARMS-MBON is part of GEO BONs<a href="https://marinebon.org/" target="_blank" rel="noopener noreferrer"> Marine Biodiversity Observation Network</a> (MBON).</p>
        <p>ARMS units are passive monitoring systems originally developed during the <a href="https://oceanservice.noaa.gov/facts/marine-census.html" target="_blank" rel="noopener noreferrer">Census of Marine Life</a> project for the collection of marine fauna on and near the sea floor. Similarly to settlement plates, the ARMS units are stacks of plates that mimic the complex structure of the sea bottom. They are deployed on marine substrates and colonised by marine species, and after a period of time they are recovered by a team and taken apart to see who moved in.&nbsp;&nbsp;</p>
        <p>One of our scientific goals is to identify newly arrived Non-Indigenous Species (NIS), facilitating an early warning system, and to track the migration of already known NIS in European continental waters. The data collected by the ARMS-MBON programme has the potential to be used for calculating Essential Biodiversity Variables (EBVs) on the distribution and abundance of benthic and non-indigenous species, as well as for continental-scale research on the community ecology and biogeography of benthic invertebrates.&nbsp;</p>
        <p>The project is primarily funded through the Joint Research Activity (JRA1) of ASSEMBLE Plus, with financial contributions from the <a href="https://www.havochvatten.se/en/swam/our-organization/about-swam.html" target="_blank" rel="noopener noreferrer">Swedish Agency for Marine and Water Management</a>, the Interreg project <a href="https://northsearegion.eu/geans/" target="_blank" rel="noopener noreferrer">GEANS</a> and with considerable in-kind contributions by the participating institutes. The project is an activity of the Genomic observatories network with relations to the European Marine Biological Resource Center (<a href="http://www.embrc.eu/" target="_blank" rel="noopener noreferrer">EMBRC</a>).</p>
        <h1>What do we do?</h1>
        <p>Starting with a test phase in 2018, ARMS-MBON has been&nbsp;working&nbsp;with annual cycles of deployment-retrieval, with each cycle having a design, deployment, and analysis phase. ARMS units are deployed for periods of a few to many months, depending on the local conditions. The network has a current coverage of close to 20 observatories along the European coastline and including a number of arctic stations. The number of deployments and deployment locations is gradually increasing year after year.</p>
        <p><img alt="" src="http://www.assembleplus.eu/sites/assembleplus.eu/files/public/resize/ARMS/ARMS-MBON_sites-1429x450.png" style="width: 90%; height: 22%;"></p>
        <p>ARMS-MBON partners buy, assemble, deploy, retrieve the ARMS units, process them for motile and sessile fractions, and send the samples to HCMR for sequencing. Photos of the plates are also taken. All data and metadata are collected in the data management platform, <a href="https://plutof.ut.ee/#/" target="_blank" rel="noopener noreferrer">PlutoF</a>, to be processed, coordinated, quality controlled, and then analysed&nbsp;and published.&nbsp;</p>
        <h2>Partners</h2>
        <p>Department of Marine Sciences, University of Gothenburg, Sweden<br>
        Institute of Marine Biology, Biotechnology and Aquaculture, Hellenic Centre for Marine Research, Greece<br>
        Marine Biological Association of the UK, UK&lt; br/&gt; British Antarctic Survey, UK<br>
        Department of Ecology and Animal Biology, Universidade de Vigo, Spain<br>
        UVIGO Marine Research Centre (CIM-UVIGO), ECIMAT Marine Station, Spain<br>
        Plentzia Marine Station, University of the Basque Country, Basque Country, Spain<br>
        Sorbonne Université, CNRS, Station Biologique de Roscoff, France<br>
        EMBRC-ERIC headquarters, Sorbonne Université, France<br>
        Flanders Marine Institute (VLIZ), Belgium<br>
        Institute Landesbetrieb für Küstenschutz, Nationalpark und Meeresschutz Schleswig-Holstein, Nationalparkverwaltung, Germany <span style="color:orange;">NEW</span><br>
        Institute of Oceanology of the Polish Academy of Sciences (IOPAN), Poland<br>
        University of Gdansk, Faculty of Oceanography and Geography, Department of Marine Ecosystems Functioning, Poland<br>
        The Interuniversity Institute of Marine Sciences in Eilat, Israel<br>
        National Institute of Biology, Marine Biology Station Piran, Slovenia<br>
        Tvärminne Zoological Station, University of Helsinki, Finland<br>
        Department of Bioscience, Aarhus University, Denmark<br>
        Faculty of Biosciences and Aquaculture, Nord University, Norway<br>
        School of Natural Sciences, Ryan Institute, National University of Ireland Galway, Ireland<br>
        UC Berkeley Gump Research Station, University of California Berkeley, USA<br>
        Department of Invertebrate Zoology, National Museum of Natural History, Smithsonian Institution, USA</p>
        <h2>Supporting Infrastructures and Networks</h2>
        <p><a href="https://www.havochvatten.se/en/swam/our-organization/about-swam.html" target="_blank" rel="noopener noreferrer">Swedish Agency for Marine and Water Management</a><br>
        Genetic tools for Ecosystem health Assessment in the North Sea region (<a href="https://northsearegion.eu/geans/" target="_blank" rel="noopener noreferrer">GEANS</a>)<br>
        European Marine Biological Resource Centre (<a href="http://www.embrc.eu/" target="_blank" rel="noopener noreferrer">EMBRC-ERIC</a>)<br>
        Associated of European Marine Biolocail Laboratories Expanded (<a href="http://www.assembleplus.eu/" target="_blank">ASSEMBLE Plus</a>)<br>
        <a href="https://www.lifewatch.eu/" target="_blank" rel="noopener noreferrer">LifeWatch ERIC</a>&nbsp;<br>
        <a href="http://www.genomicobservatories.org/" target="_blank" rel="noopener noreferrer">Genomics Observatories Network</a><br>
        <a href="https://www.oceanarms.org/" target="_blank" rel="noopener noreferrer">Global ARMS program</a></p>
        <h1>How to join</h1>
        <p><strong>We welcome all newcomers to the&nbsp;ARMS-MBON network!</strong> If you want to learn more about how to join our network, please contact Matthias Obst (see <a href="#"><router-link to="/contact">Contact</router-link></a>). The registration form link is provided in the table in <em>Documentation&nbsp;and forms</em>.&nbsp;</p>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
