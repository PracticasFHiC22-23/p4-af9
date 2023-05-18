<script>
export default {
  data() {
    return {
      dialogm1: '',
      dialog: false,
      date: new Date()
    }
  },

  methods: {}
}
</script>

<template>
  <div class="book-detall">
    <div
      style="
        font-weight: 600;
        font-size: 24px;
        margin-bottom: 20px;
        margin-top: 20px;
        text-align: center;
      "
    >
      Examenes Programació I
    </div>

    <div style="display: flex; justify-content: space-evenly; flex-wrap: wrap">
      <div style="cursor: pointer; margin-top: 20px">
        <v-dialog v-model="dialog" width="800">
          <template v-slot:activator="{ props }">
            <div>
              <img
                src="https://cdn01.segre.com/uploads/imagenes/bajacalidad/2021/08/22/_6850142_1501f502.jpg?8838f0acbbec5fc3cae22b9e6ae1ee23"
                width="140"
                alt=""
                @click="dialog = true"
              />
              <div style="font-size: 18px; text-align: center; font-weight: 600">Exam parcal 1</div>
            </div>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">Examenes de programació</span>
            </v-card-title>
            <v-card-text>
              ante ornare lacus sem. Neque magna mauris, commodo quisque, praesent semper suscipit
              lobortis nam. Justo malesuada cursus ac nunc litora nunc. Tellus ac, in lobortis nunc,
              montes lectus purus fermentum. Ac sit wisi. Sodales aliquam, sed vestibulum nullam
              arcu sit risus arcu, id luctus vitae lorem nibh, integer nec nullam class cursus mi,
              purus arcu lectus. Vel ante suscipit volutpat potenti mattis sed, wisi eu placerat
              ullamcorper. In sit per mi sed sed, mi vestibulum mus nam, morbi mauris neque vitae
              aliquam proin senectus. Ac amet arcu mollis ante congue elementum, inceptos eget optio
              ula in ac sed massa vivamus, rutrum elit, ultricies metus volutpat. Semper wisi et,
              sollicitudin nunc vestibulum, cursus accumsan nunc pede tempus mi ipsum, ligula sed.
              Non condimentum ac dolor sit. Mollis eu aliquam, vel mattis mollis massa ut dolor
              ante, tempus lacinia arcu. Urna vestibulum lorem, nulla fermentum, iaculis ut congue
              ac vivamus. Nam libero orci, pulvinar nulla, enim pellentesque consectetuer leo,
              feugiat rhoncus rhoncus vel. Magna sociosqu donec, dictum cursus ullamcorper viverra.
              Ultricies quis orci lorem, suspendisse ut vestibulum integer, purus sed lorem pulvinar
              habitasse turpis. + ante ornare lacus sem. Neque magna mauris, commodo quisque,
              praesent semper suscipit lobortis nam. Justo malesuada cursus ac nunc litora nunc.
              Tellus ac, in lobortis nunc, montes lectus purus fermentum. Ac sit wisi. Sodales
              aliquam, sed vestibulum nullam arcu sit risus arcu, id luctus vitae lorem nibh,
              integer nec nullam class cursus mi, purus arcu lectus. Vel ante suscipit volutpat
              potenti mattis sed, wisi eu placerat ullamcorper. In sit per mi sed sed, mi vestibulum
              mus nam, morbi mauris neque vitae aliquam proin senectus. Ac amet arcu mollis ante
              congue elementum, inceptos eget optio ula in ac sed massa vivamus, rutrum elit,
              ultricies metus volutpat. Semper wisi et, sollicitudin nunc vestibulum, cursus
              accumsan nunc pede tempus mi ipsum, ligula sed. Non condimentum ac dolor sit. Mollis
              eu aliquam, vel mattis mollis massa ut dolor ante, tempus lacinia arcu. Urna
              vestibulum lorem, nulla fermentum, iaculis ut congue ac vivamus. Nam libero orci,
              pulvinar nulla, enim pellentesque consectetuer leo, feugiat rhoncus rhoncus vel. Magna
              sociosqu donec, dictum cursus ullamcorper viverra. Ultricies quis orci lorem,
              suspendisse ut vestibulum integer, purus sed lorem pulvinar habitasse turpis. + ante
              ornare lacus sem. Neque magna mauris, commodo quisque, praesent semper suscipit
              lobortis nam. Justo malesuada cursus ac nunc litora nunc. Tellus ac, in lobortis nunc,
              montes lectus purus fermentum. Ac sit wisi. Sodales aliquam, sed vestibulum nullam
              arcu sit risus arcu, id luctus vitae lorem nibh, integer nec nullam class cursus mi,
              purus arcu lectus. Vel ante suscipit volutpat potenti mattis sed, wisi eu placerat
              ullamcorper. In sit per mi sed sed, mi vestibulum mus nam, morbi mauris neque vitae
              aliquam proin senectus. Ac amet arcu mollis ante congue elementum, inceptos eget optio
              ula in ac sed massa vivamus, rutrum elit, ultricies metus volutpat. Semper wisi et,
              sollicitudin nunc vestibulum, cursus accumsan nunc pede tempus mi ipsum, ligula sed.
              Non condimentum ac dolor sit. Mollis eu aliquam, vel mattis mollis massa ut dolor
              ante, tempus lacinia arcu. Urna vestibulum lorem, nulla fermentum, iaculis ut congue
              ac vivamus. Nam libero orci, pulvinar nulla, enim pellentesque consectetuer leo,
              feugiat rhoncus rhoncus vel. Magna sociosqu donec, dictum cursus ullamcorper viverra.
              Ultricies quis orci lorem, suspendisse ut vestibulum integer, purus sed lorem pulvinar
              habitasse turpis. + ante ornare lacus sem. Neque magna mauris, commodo quisque,
              praesent semper suscipit lobortis nam. Justo malesuada cursus ac nunc litora nunc.
              Tellus ac, in lobortis nunc, montes lectus purus fermentum. Ac sit wisi. Sodales
              aliquam, sed vestibulum nullam arcu sit risus arcu, id luctus vitae lorem nibh,
              integer nec nullam class cursus mi, purus arcu lectus. Vel ante suscipit volutpat
              potenti mattis sed, wisi eu placerat ullamcorper. In sit per mi sed sed, mi vestibulum
              mus nam, morbi mauris neque vitae aliquam proin senectus. Ac amet arcu mollis ante
              congue elementum, inceptos eget optio ula in ac sed massa vivamus, rutrum elit,
              ultricies metus volutpat. Semper wisi et, sollicitudin nunc vestibulum, cursus
              accumsan nunc pede tempus mi ipsum, ligula sed. Non condimentum ac dolor sit. Mollis
              eu aliquam, vel mattis mollis massa ut dolor ante, tempus lacinia arcu. Urna
              vestibulum lorem, nulla fermentum, iaculis ut congue ac vivamus. Nam libero orci,
              pulvinar nulla, enim pellentesque consectetuer leo, feugiat rhoncus rhoncus vel. Magna
              sociosqu donec, dictum cursus ullamcorper viverra. Ultricies quis orci lorem,
              suspendisse ut vestibulum integer, purus sed lorem pulvinar habitasse turpis. +
            </v-card-text>
          </v-card>
        </v-dialog>
      </div>
      <div style="cursor: pointer; margin-top: 20px">
        <v-dialog v-model="dialog" width="800">
          <template v-slot:activator="{ props }">
            <div>
              <img
                src="https://cdn01.segre.com/uploads/imagenes/bajacalidad/2021/08/22/_6850142_1501f502.jpg?8838f0acbbec5fc3cae22b9e6ae1ee23"
                width="140"
                alt=""
                @click="dialog = true"
              />
              <div style="font-size: 18px; text-align: center; font-weight: 600">Exam parcal 1</div>
            </div>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">Examenes de programació</span>
            </v-card-title>
            <v-card-text>
              ante ornare lacus sem. Neque magna mauris, commodo quisque, praesent semper suscipit
              lobortis nam. Justo malesuada cursus ac nunc litora nunc. Tellus ac, in lobortis nunc,
              montes lectus purus fermentum. Ac sit wisi. Sodales aliquam, sed vestibulum nullam
              arcu sit risus arcu, id luctus vitae lorem nibh, integer nec nullam class cursus mi,
              purus arcu lectus. Vel ante suscipit volutpat potenti mattis sed, wisi eu placerat
              ullamcorper. In sit per mi sed sed, mi vestibulum mus nam, morbi mauris neque vitae
              aliquam proin senectus. Ac amet arcu mollis ante congue elementum, inceptos eget optio
              ula in ac sed massa vivamus, rutrum elit, ultricies metus volutpat. Semper wisi et,
              sollicitudin nunc vestibulum, cursus accumsan nunc pede tempus mi ipsum, ligula sed.
              Non condimentum ac dolor sit. Mollis eu aliquam, vel mattis mollis massa ut dolor
              ante, tempus lacinia arcu. Urna vestibulum lorem, nulla fermentum, iaculis ut congue
              ac vivamus. Nam libero orci, pulvinar nulla, enim pellentesque consectetuer leo,
              feugiat rhoncus rhoncus vel. Magna sociosqu donec, dictum cursus ullamcorper viverra.
              Ultricies quis orci lorem, suspendisse ut vestibulum integer, purus sed lorem pulvinar
              habitasse turpis. + ante ornare lacus sem. Neque magna mauris, commodo quisque,
              praesent semper suscipit lobortis nam. Justo malesuada cursus ac nunc litora nunc.
              Tellus ac, in lobortis nunc, montes lectus purus fermentum. Ac sit wisi. Sodales
              aliquam, sed vestibulum nullam arcu sit risus arcu, id luctus vitae lorem nibh,
              integer nec nullam class cursus mi, purus arcu lectus. Vel ante suscipit volutpat
              potenti mattis sed, wisi eu placerat ullamcorper. In sit per mi sed sed, mi vestibulum
              mus nam, morbi mauris neque vitae aliquam proin senectus. Ac amet arcu mollis ante
              congue elementum, inceptos eget optio ula in ac sed massa vivamus, rutrum elit,
              ultricies metus volutpat. Semper wisi et, sollicitudin nunc vestibulum, cursus
              accumsan nunc pede tempus mi ipsum, ligula sed. Non condimentum ac dolor sit. Mollis
              eu aliquam, vel mattis mollis massa ut dolor ante, tempus lacinia arcu. Urna
              vestibulum lorem, nulla fermentum, iaculis ut congue ac vivamus. Nam libero orci,
              pulvinar nulla, enim pellentesque consectetuer leo, feugiat rhoncus rhoncus vel. Magna
              sociosqu donec, dictum cursus ullamcorper viverra. Ultricies quis orci lorem,
              suspendisse ut vestibulum integer, purus sed lorem pulvinar habitasse turpis. + ante
              ornare lacus sem. Neque magna mauris, commodo quisque, praesent semper suscipit
              lobortis nam. Justo malesuada cursus ac nunc litora nunc. Tellus ac, in lobortis nunc,
              montes lectus purus fermentum. Ac sit wisi. Sodales aliquam, sed vestibulum nullam
              arcu sit risus arcu, id luctus vitae lorem nibh, integer nec nullam class cursus mi,
              purus arcu lectus. Vel ante suscipit volutpat potenti mattis sed, wisi eu placerat
              ullamcorper. In sit per mi sed sed, mi vestibulum mus nam, morbi mauris neque vitae
              aliquam proin senectus. Ac amet arcu mollis ante congue elementum, inceptos eget optio
              ula in ac sed massa vivamus, rutrum elit, ultricies metus volutpat. Semper wisi et,
              sollicitudin nunc vestibulum, cursus accumsan nunc pede tempus mi ipsum, ligula sed.
              Non condimentum ac dolor sit. Mollis eu aliquam, vel mattis mollis massa ut dolor
              ante, tempus lacinia arcu. Urna vestibulum lorem, nulla fermentum, iaculis ut congue
              ac vivamus. Nam libero orci, pulvinar nulla, enim pellentesque consectetuer leo,
              feugiat rhoncus rhoncus vel. Magna sociosqu donec, dictum cursus ullamcorper viverra.
              Ultricies quis orci lorem, suspendisse ut vestibulum integer, purus sed lorem pulvinar
              habitasse turpis. + ante ornare lacus sem. Neque magna mauris, commodo quisque,
              praesent semper suscipit lobortis nam. Justo malesuada cursus ac nunc litora nunc.
              Tellus ac, in lobortis nunc, montes lectus purus fermentum. Ac sit wisi. Sodales
              aliquam, sed vestibulum nullam arcu sit risus arcu, id luctus vitae lorem nibh,
              integer nec nullam class cursus mi, purus arcu lectus. Vel ante suscipit volutpat
              potenti mattis sed, wisi eu placerat ullamcorper. In sit per mi sed sed, mi vestibulum
              mus nam, morbi mauris neque vitae aliquam proin senectus. Ac amet arcu mollis ante
              congue elementum, inceptos eget optio ula in ac sed massa vivamus, rutrum elit,
              ultricies metus volutpat. Semper wisi et, sollicitudin nunc vestibulum, cursus
              accumsan nunc pede tempus mi ipsum, ligula sed. Non condimentum ac dolor sit. Mollis
              eu aliquam, vel mattis mollis massa ut dolor ante, tempus lacinia arcu. Urna
              vestibulum lorem, nulla fermentum, iaculis ut congue ac vivamus. Nam libero orci,
              pulvinar nulla, enim pellentesque consectetuer leo, feugiat rhoncus rhoncus vel. Magna
              sociosqu donec, dictum cursus ullamcorper viverra. Ultricies quis orci lorem,
              suspendisse ut vestibulum integer, purus sed lorem pulvinar habitasse turpis. +
            </v-card-text>
          </v-card>
        </v-dialog>
      </div>
      <div style="cursor: pointer; margin-top: 20px">
        <v-dialog v-model="dialog" width="800">
          <template v-slot:activator="{ props }">
            <div>
              <img
                src="https://cdn01.segre.com/uploads/imagenes/bajacalidad/2021/08/22/_6850142_1501f502.jpg?8838f0acbbec5fc3cae22b9e6ae1ee23"
                width="140"
                alt=""
                @click="dialog = true"
              />
              <div style="font-size: 18px; text-align: center; font-weight: 600">Exam parcal 1</div>
            </div>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">Examenes de programació</span>
            </v-card-title>
            <v-card-text>
              ante ornare lacus sem. Neque magna mauris, commodo quisque, praesent semper suscipit
              lobortis nam. Justo malesuada cursus ac nunc litora nunc. Tellus ac, in lobortis nunc,
              montes lectus purus fermentum. Ac sit wisi. Sodales aliquam, sed vestibulum nullam
              arcu sit risus arcu, id luctus vitae lorem nibh, integer nec nullam class cursus mi,
              purus arcu lectus. Vel ante suscipit volutpat potenti mattis sed, wisi eu placerat
              ullamcorper. In sit per mi sed sed, mi vestibulum mus nam, morbi mauris neque vitae
              aliquam proin senectus. Ac amet arcu mollis ante congue elementum, inceptos eget optio
              ula in ac sed massa vivamus, rutrum elit, ultricies metus volutpat. Semper wisi et,
              sollicitudin nunc vestibulum, cursus accumsan nunc pede tempus mi ipsum, ligula sed.
              Non condimentum ac dolor sit. Mollis eu aliquam, vel mattis mollis massa ut dolor
              ante, tempus lacinia arcu. Urna vestibulum lorem, nulla fermentum, iaculis ut congue
              ac vivamus. Nam libero orci, pulvinar nulla, enim pellentesque consectetuer leo,
              feugiat rhoncus rhoncus vel. Magna sociosqu donec, dictum cursus ullamcorper viverra.
              Ultricies quis orci lorem, suspendisse ut vestibulum integer, purus sed lorem pulvinar
              habitasse turpis. + ante ornare lacus sem. Neque magna mauris, commodo quisque,
              praesent semper suscipit lobortis nam. Justo malesuada cursus ac nunc litora nunc.
              Tellus ac, in lobortis nunc, montes lectus purus fermentum. Ac sit wisi. Sodales
              aliquam, sed vestibulum nullam arcu sit risus arcu, id luctus vitae lorem nibh,
              integer nec nullam class cursus mi, purus arcu lectus. Vel ante suscipit volutpat
              potenti mattis sed, wisi eu placerat ullamcorper. In sit per mi sed sed, mi vestibulum
              mus nam, morbi mauris neque vitae aliquam proin senectus. Ac amet arcu mollis ante
              congue elementum, inceptos eget optio ula in ac sed massa vivamus, rutrum elit,
              ultricies metus volutpat. Semper wisi et, sollicitudin nunc vestibulum, cursus
              accumsan nunc pede tempus mi ipsum, ligula sed. Non condimentum ac dolor sit. Mollis
              eu aliquam, vel mattis mollis massa ut dolor ante, tempus lacinia arcu. Urna
              vestibulum lorem, nulla fermentum, iaculis ut congue ac vivamus. Nam libero orci,
              pulvinar nulla, enim pellentesque consectetuer leo, feugiat rhoncus rhoncus vel. Magna
              sociosqu donec, dictum cursus ullamcorper viverra. Ultricies quis orci lorem,
              suspendisse ut vestibulum integer, purus sed lorem pulvinar habitasse turpis. + ante
              ornare lacus sem. Neque magna mauris, commodo quisque, praesent semper suscipit
              lobortis nam. Justo malesuada cursus ac nunc litora nunc. Tellus ac, in lobortis nunc,
              montes lectus purus fermentum. Ac sit wisi. Sodales aliquam, sed vestibulum nullam
              arcu sit risus arcu, id luctus vitae lorem nibh, integer nec nullam class cursus mi,
              purus arcu lectus. Vel ante suscipit volutpat potenti mattis sed, wisi eu placerat
              ullamcorper. In sit per mi sed sed, mi vestibulum mus nam, morbi mauris neque vitae
              aliquam proin senectus. Ac amet arcu mollis ante congue elementum, inceptos eget optio
              ula in ac sed massa vivamus, rutrum elit, ultricies metus volutpat. Semper wisi et,
              sollicitudin nunc vestibulum, cursus accumsan nunc pede tempus mi ipsum, ligula sed.
              Non condimentum ac dolor sit. Mollis eu aliquam, vel mattis mollis massa ut dolor
              ante, tempus lacinia arcu. Urna vestibulum lorem, nulla fermentum, iaculis ut congue
              ac vivamus. Nam libero orci, pulvinar nulla, enim pellentesque consectetuer leo,
              feugiat rhoncus rhoncus vel. Magna sociosqu donec, dictum cursus ullamcorper viverra.
              Ultricies quis orci lorem, suspendisse ut vestibulum integer, purus sed lorem pulvinar
              habitasse turpis. + ante ornare lacus sem. Neque magna mauris, commodo quisque,
              praesent semper suscipit lobortis nam. Justo malesuada cursus ac nunc litora nunc.
              Tellus ac, in lobortis nunc, montes lectus purus fermentum. Ac sit wisi. Sodales
              aliquam, sed vestibulum nullam arcu sit risus arcu, id luctus vitae lorem nibh,
              integer nec nullam class cursus mi, purus arcu lectus. Vel ante suscipit volutpat
              potenti mattis sed, wisi eu placerat ullamcorper. In sit per mi sed sed, mi vestibulum
              mus nam, morbi mauris neque vitae aliquam proin senectus. Ac amet arcu mollis ante
              congue elementum, inceptos eget optio ula in ac sed massa vivamus, rutrum elit,
              ultricies metus volutpat. Semper wisi et, sollicitudin nunc vestibulum, cursus
              accumsan nunc pede tempus mi ipsum, ligula sed. Non condimentum ac dolor sit. Mollis
              eu aliquam, vel mattis mollis massa ut dolor ante, tempus lacinia arcu. Urna
              vestibulum lorem, nulla fermentum, iaculis ut congue ac vivamus. Nam libero orci,
              pulvinar nulla, enim pellentesque consectetuer leo, feugiat rhoncus rhoncus vel. Magna
              sociosqu donec, dictum cursus ullamcorper viverra. Ultricies quis orci lorem,
              suspendisse ut vestibulum integer, purus sed lorem pulvinar habitasse turpis. +
            </v-card-text>
          </v-card>
        </v-dialog>
      </div>
      <div style="cursor: pointer; margin-top: 20px">
        <v-dialog v-model="dialog" width="800">
          <template v-slot:activator="{ props }">
            <div>
              <img
                src="https://cdn01.segre.com/uploads/imagenes/bajacalidad/2021/08/22/_6850142_1501f502.jpg?8838f0acbbec5fc3cae22b9e6ae1ee23"
                width="140"
                alt=""
                @click="dialog = true"
              />
              <div style="font-size: 18px; text-align: center; font-weight: 600">Exam parcal 1</div>
            </div>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">Examenes de programació</span>
            </v-card-title>
            <v-card-text>
              ante ornare lacus sem. Neque magna mauris, commodo quisque, praesent semper suscipit
              lobortis nam. Justo malesuada cursus ac nunc litora nunc. Tellus ac, in lobortis nunc,
              montes lectus purus fermentum. Ac sit wisi. Sodales aliquam, sed vestibulum nullam
              arcu sit risus arcu, id luctus vitae lorem nibh, integer nec nullam class cursus mi,
              purus arcu lectus. Vel ante suscipit volutpat potenti mattis sed, wisi eu placerat
              ullamcorper. In sit per mi sed sed, mi vestibulum mus nam, morbi mauris neque vitae
              aliquam proin senectus. Ac amet arcu mollis ante congue elementum, inceptos eget optio
              ula in ac sed massa vivamus, rutrum elit, ultricies metus volutpat. Semper wisi et,
              sollicitudin nunc vestibulum, cursus accumsan nunc pede tempus mi ipsum, ligula sed.
              Non condimentum ac dolor sit. Mollis eu aliquam, vel mattis mollis massa ut dolor
              ante, tempus lacinia arcu. Urna vestibulum lorem, nulla fermentum, iaculis ut congue
              ac vivamus. Nam libero orci, pulvinar nulla, enim pellentesque consectetuer leo,
              feugiat rhoncus rhoncus vel. Magna sociosqu donec, dictum cursus ullamcorper viverra.
              Ultricies quis orci lorem, suspendisse ut vestibulum integer, purus sed lorem pulvinar
              habitasse turpis. + ante ornare lacus sem. Neque magna mauris, commodo quisque,
              praesent semper suscipit lobortis nam. Justo malesuada cursus ac nunc litora nunc.
              Tellus ac, in lobortis nunc, montes lectus purus fermentum. Ac sit wisi. Sodales
              aliquam, sed vestibulum nullam arcu sit risus arcu, id luctus vitae lorem nibh,
              integer nec nullam class cursus mi, purus arcu lectus. Vel ante suscipit volutpat
              potenti mattis sed, wisi eu placerat ullamcorper. In sit per mi sed sed, mi vestibulum
              mus nam, morbi mauris neque vitae aliquam proin senectus. Ac amet arcu mollis ante
              congue elementum, inceptos eget optio ula in ac sed massa vivamus, rutrum elit,
              ultricies metus volutpat. Semper wisi et, sollicitudin nunc vestibulum, cursus
              accumsan nunc pede tempus mi ipsum, ligula sed. Non condimentum ac dolor sit. Mollis
              eu aliquam, vel mattis mollis massa ut dolor ante, tempus lacinia arcu. Urna
              vestibulum lorem, nulla fermentum, iaculis ut congue ac vivamus. Nam libero orci,
              pulvinar nulla, enim pellentesque consectetuer leo, feugiat rhoncus rhoncus vel. Magna
              sociosqu donec, dictum cursus ullamcorper viverra. Ultricies quis orci lorem,
              suspendisse ut vestibulum integer, purus sed lorem pulvinar habitasse turpis. + ante
              ornare lacus sem. Neque magna mauris, commodo quisque, praesent semper suscipit
              lobortis nam. Justo malesuada cursus ac nunc litora nunc. Tellus ac, in lobortis nunc,
              montes lectus purus fermentum. Ac sit wisi. Sodales aliquam, sed vestibulum nullam
              arcu sit risus arcu, id luctus vitae lorem nibh, integer nec nullam class cursus mi,
              purus arcu lectus. Vel ante suscipit volutpat potenti mattis sed, wisi eu placerat
              ullamcorper. In sit per mi sed sed, mi vestibulum mus nam, morbi mauris neque vitae
              aliquam proin senectus. Ac amet arcu mollis ante congue elementum, inceptos eget optio
              ula in ac sed massa vivamus, rutrum elit, ultricies metus volutpat. Semper wisi et,
              sollicitudin nunc vestibulum, cursus accumsan nunc pede tempus mi ipsum, ligula sed.
              Non condimentum ac dolor sit. Mollis eu aliquam, vel mattis mollis massa ut dolor
              ante, tempus lacinia arcu. Urna vestibulum lorem, nulla fermentum, iaculis ut congue
              ac vivamus. Nam libero orci, pulvinar nulla, enim pellentesque consectetuer leo,
              feugiat rhoncus rhoncus vel. Magna sociosqu donec, dictum cursus ullamcorper viverra.
              Ultricies quis orci lorem, suspendisse ut vestibulum integer, purus sed lorem pulvinar
              habitasse turpis. + ante ornare lacus sem. Neque magna mauris, commodo quisque,
              praesent semper suscipit lobortis nam. Justo malesuada cursus ac nunc litora nunc.
              Tellus ac, in lobortis nunc, montes lectus purus fermentum. Ac sit wisi. Sodales
              aliquam, sed vestibulum nullam arcu sit risus arcu, id luctus vitae lorem nibh,
              integer nec nullam class cursus mi, purus arcu lectus. Vel ante suscipit volutpat
              potenti mattis sed, wisi eu placerat ullamcorper. In sit per mi sed sed, mi vestibulum
              mus nam, morbi mauris neque vitae aliquam proin senectus. Ac amet arcu mollis ante
              congue elementum, inceptos eget optio ula in ac sed massa vivamus, rutrum elit,
              ultricies metus volutpat. Semper wisi et, sollicitudin nunc vestibulum, cursus
              accumsan nunc pede tempus mi ipsum, ligula sed. Non condimentum ac dolor sit. Mollis
              eu aliquam, vel mattis mollis massa ut dolor ante, tempus lacinia arcu. Urna
              vestibulum lorem, nulla fermentum, iaculis ut congue ac vivamus. Nam libero orci,
              pulvinar nulla, enim pellentesque consectetuer leo, feugiat rhoncus rhoncus vel. Magna
              sociosqu donec, dictum cursus ullamcorper viverra. Ultricies quis orci lorem,
              suspendisse ut vestibulum integer, purus sed lorem pulvinar habitasse turpis. +
            </v-card-text>
          </v-card>
        </v-dialog>
      </div>
      <div style="cursor: pointer; margin-top: 20px">
        <v-dialog v-model="dialog" width="800">
          <template v-slot:activator="{ props }">
            <div>
              <img
                src="https://cdn01.segre.com/uploads/imagenes/bajacalidad/2021/08/22/_6850142_1501f502.jpg?8838f0acbbec5fc3cae22b9e6ae1ee23"
                width="140"
                alt=""
                @click="dialog = true"
              />
              <div style="font-size: 18px; text-align: center; font-weight: 600">Exam parcal 1</div>
            </div>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">Examenes de programació</span>
            </v-card-title>
            <v-card-text>
              ante ornare lacus sem. Neque magna mauris, commodo quisque, praesent semper suscipit
              lobortis nam. Justo malesuada cursus ac nunc litora nunc. Tellus ac, in lobortis nunc,
              montes lectus purus fermentum. Ac sit wisi. Sodales aliquam, sed vestibulum nullam
              arcu sit risus arcu, id luctus vitae lorem nibh, integer nec nullam class cursus mi,
              purus arcu lectus. Vel ante suscipit volutpat potenti mattis sed, wisi eu placerat
              ullamcorper. In sit per mi sed sed, mi vestibulum mus nam, morbi mauris neque vitae
              aliquam proin senectus. Ac amet arcu mollis ante congue elementum, inceptos eget optio
              ula in ac sed massa vivamus, rutrum elit, ultricies metus volutpat. Semper wisi et,
              sollicitudin nunc vestibulum, cursus accumsan nunc pede tempus mi ipsum, ligula sed.
              Non condimentum ac dolor sit. Mollis eu aliquam, vel mattis mollis massa ut dolor
              ante, tempus lacinia arcu. Urna vestibulum lorem, nulla fermentum, iaculis ut congue
              ac vivamus. Nam libero orci, pulvinar nulla, enim pellentesque consectetuer leo,
              feugiat rhoncus rhoncus vel. Magna sociosqu donec, dictum cursus ullamcorper viverra.
              Ultricies quis orci lorem, suspendisse ut vestibulum integer, purus sed lorem pulvinar
              habitasse turpis. + ante ornare lacus sem. Neque magna mauris, commodo quisque,
              praesent semper suscipit lobortis nam. Justo malesuada cursus ac nunc litora nunc.
              Tellus ac, in lobortis nunc, montes lectus purus fermentum. Ac sit wisi. Sodales
              aliquam, sed vestibulum nullam arcu sit risus arcu, id luctus vitae lorem nibh,
              integer nec nullam class cursus mi, purus arcu lectus. Vel ante suscipit volutpat
              potenti mattis sed, wisi eu placerat ullamcorper. In sit per mi sed sed, mi vestibulum
              mus nam, morbi mauris neque vitae aliquam proin senectus. Ac amet arcu mollis ante
              congue elementum, inceptos eget optio ula in ac sed massa vivamus, rutrum elit,
              ultricies metus volutpat. Semper wisi et, sollicitudin nunc vestibulum, cursus
              accumsan nunc pede tempus mi ipsum, ligula sed. Non condimentum ac dolor sit. Mollis
              eu aliquam, vel mattis mollis massa ut dolor ante, tempus lacinia arcu. Urna
              vestibulum lorem, nulla fermentum, iaculis ut congue ac vivamus. Nam libero orci,
              pulvinar nulla, enim pellentesque consectetuer leo, feugiat rhoncus rhoncus vel. Magna
              sociosqu donec, dictum cursus ullamcorper viverra. Ultricies quis orci lorem,
              suspendisse ut vestibulum integer, purus sed lorem pulvinar habitasse turpis. + ante
              ornare lacus sem. Neque magna mauris, commodo quisque, praesent semper suscipit
              lobortis nam. Justo malesuada cursus ac nunc litora nunc. Tellus ac, in lobortis nunc,
              montes lectus purus fermentum. Ac sit wisi. Sodales aliquam, sed vestibulum nullam
              arcu sit risus arcu, id luctus vitae lorem nibh, integer nec nullam class cursus mi,
              purus arcu lectus. Vel ante suscipit volutpat potenti mattis sed, wisi eu placerat
              ullamcorper. In sit per mi sed sed, mi vestibulum mus nam, morbi mauris neque vitae
              aliquam proin senectus. Ac amet arcu mollis ante congue elementum, inceptos eget optio
              ula in ac sed massa vivamus, rutrum elit, ultricies metus volutpat. Semper wisi et,
              sollicitudin nunc vestibulum, cursus accumsan nunc pede tempus mi ipsum, ligula sed.
              Non condimentum ac dolor sit. Mollis eu aliquam, vel mattis mollis massa ut dolor
              ante, tempus lacinia arcu. Urna vestibulum lorem, nulla fermentum, iaculis ut congue
              ac vivamus. Nam libero orci, pulvinar nulla, enim pellentesque consectetuer leo,
              feugiat rhoncus rhoncus vel. Magna sociosqu donec, dictum cursus ullamcorper viverra.
              Ultricies quis orci lorem, suspendisse ut vestibulum integer, purus sed lorem pulvinar
              habitasse turpis. + ante ornare lacus sem. Neque magna mauris, commodo quisque,
              praesent semper suscipit lobortis nam. Justo malesuada cursus ac nunc litora nunc.
              Tellus ac, in lobortis nunc, montes lectus purus fermentum. Ac sit wisi. Sodales
              aliquam, sed vestibulum nullam arcu sit risus arcu, id luctus vitae lorem nibh,
              integer nec nullam class cursus mi, purus arcu lectus. Vel ante suscipit volutpat
              potenti mattis sed, wisi eu placerat ullamcorper. In sit per mi sed sed, mi vestibulum
              mus nam, morbi mauris neque vitae aliquam proin senectus. Ac amet arcu mollis ante
              congue elementum, inceptos eget optio ula in ac sed massa vivamus, rutrum elit,
              ultricies metus volutpat. Semper wisi et, sollicitudin nunc vestibulum, cursus
              accumsan nunc pede tempus mi ipsum, ligula sed. Non condimentum ac dolor sit. Mollis
              eu aliquam, vel mattis mollis massa ut dolor ante, tempus lacinia arcu. Urna
              vestibulum lorem, nulla fermentum, iaculis ut congue ac vivamus. Nam libero orci,
              pulvinar nulla, enim pellentesque consectetuer leo, feugiat rhoncus rhoncus vel. Magna
              sociosqu donec, dictum cursus ullamcorper viverra. Ultricies quis orci lorem,
              suspendisse ut vestibulum integer, purus sed lorem pulvinar habitasse turpis. +
            </v-card-text>
          </v-card>
        </v-dialog>
      </div>
      <div style="cursor: pointer; margin-top: 20px">
        <v-dialog v-model="dialog" width="800">
          <template v-slot:activator="{ props }">
            <div>
              <img
                src="https://cdn01.segre.com/uploads/imagenes/bajacalidad/2021/08/22/_6850142_1501f502.jpg?8838f0acbbec5fc3cae22b9e6ae1ee23"
                width="140"
                alt=""
                @click="dialog = true"
              />
              <div style="font-size: 18px; text-align: center; font-weight: 600">Exam parcal 1</div>
            </div>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">Examenes de programació</span>
            </v-card-title>
            <v-card-text>
              ante ornare lacus sem. Neque magna mauris, commodo quisque, praesent semper suscipit
              lobortis nam. Justo malesuada cursus ac nunc litora nunc. Tellus ac, in lobortis nunc,
              montes lectus purus fermentum. Ac sit wisi. Sodales aliquam, sed vestibulum nullam
              arcu sit risus arcu, id luctus vitae lorem nibh, integer nec nullam class cursus mi,
              purus arcu lectus. Vel ante suscipit volutpat potenti mattis sed, wisi eu placerat
              ullamcorper. In sit per mi sed sed, mi vestibulum mus nam, morbi mauris neque vitae
              aliquam proin senectus. Ac amet arcu mollis ante congue elementum, inceptos eget optio
              ula in ac sed massa vivamus, rutrum elit, ultricies metus volutpat. Semper wisi et,
              sollicitudin nunc vestibulum, cursus accumsan nunc pede tempus mi ipsum, ligula sed.
              Non condimentum ac dolor sit. Mollis eu aliquam, vel mattis mollis massa ut dolor
              ante, tempus lacinia arcu. Urna vestibulum lorem, nulla fermentum, iaculis ut congue
              ac vivamus. Nam libero orci, pulvinar nulla, enim pellentesque consectetuer leo,
              feugiat rhoncus rhoncus vel. Magna sociosqu donec, dictum cursus ullamcorper viverra.
              Ultricies quis orci lorem, suspendisse ut vestibulum integer, purus sed lorem pulvinar
              habitasse turpis. + ante ornare lacus sem. Neque magna mauris, commodo quisque,
              praesent semper suscipit lobortis nam. Justo malesuada cursus ac nunc litora nunc.
              Tellus ac, in lobortis nunc, montes lectus purus fermentum. Ac sit wisi. Sodales
              aliquam, sed vestibulum nullam arcu sit risus arcu, id luctus vitae lorem nibh,
              integer nec nullam class cursus mi, purus arcu lectus. Vel ante suscipit volutpat
              potenti mattis sed, wisi eu placerat ullamcorper. In sit per mi sed sed, mi vestibulum
              mus nam, morbi mauris neque vitae aliquam proin senectus. Ac amet arcu mollis ante
              congue elementum, inceptos eget optio ula in ac sed massa vivamus, rutrum elit,
              ultricies metus volutpat. Semper wisi et, sollicitudin nunc vestibulum, cursus
              accumsan nunc pede tempus mi ipsum, ligula sed. Non condimentum ac dolor sit. Mollis
              eu aliquam, vel mattis mollis massa ut dolor ante, tempus lacinia arcu. Urna
              vestibulum lorem, nulla fermentum, iaculis ut congue ac vivamus. Nam libero orci,
              pulvinar nulla, enim pellentesque consectetuer leo, feugiat rhoncus rhoncus vel. Magna
              sociosqu donec, dictum cursus ullamcorper viverra. Ultricies quis orci lorem,
              suspendisse ut vestibulum integer, purus sed lorem pulvinar habitasse turpis. + ante
              ornare lacus sem. Neque magna mauris, commodo quisque, praesent semper suscipit
              lobortis nam. Justo malesuada cursus ac nunc litora nunc. Tellus ac, in lobortis nunc,
              montes lectus purus fermentum. Ac sit wisi. Sodales aliquam, sed vestibulum nullam
              arcu sit risus arcu, id luctus vitae lorem nibh, integer nec nullam class cursus mi,
              purus arcu lectus. Vel ante suscipit volutpat potenti mattis sed, wisi eu placerat
              ullamcorper. In sit per mi sed sed, mi vestibulum mus nam, morbi mauris neque vitae
              aliquam proin senectus. Ac amet arcu mollis ante congue elementum, inceptos eget optio
              ula in ac sed massa vivamus, rutrum elit, ultricies metus volutpat. Semper wisi et,
              sollicitudin nunc vestibulum, cursus accumsan nunc pede tempus mi ipsum, ligula sed.
              Non condimentum ac dolor sit. Mollis eu aliquam, vel mattis mollis massa ut dolor
              ante, tempus lacinia arcu. Urna vestibulum lorem, nulla fermentum, iaculis ut congue
              ac vivamus. Nam libero orci, pulvinar nulla, enim pellentesque consectetuer leo,
              feugiat rhoncus rhoncus vel. Magna sociosqu donec, dictum cursus ullamcorper viverra.
              Ultricies quis orci lorem, suspendisse ut vestibulum integer, purus sed lorem pulvinar
              habitasse turpis. + ante ornare lacus sem. Neque magna mauris, commodo quisque,
              praesent semper suscipit lobortis nam. Justo malesuada cursus ac nunc litora nunc.
              Tellus ac, in lobortis nunc, montes lectus purus fermentum. Ac sit wisi. Sodales
              aliquam, sed vestibulum nullam arcu sit risus arcu, id luctus vitae lorem nibh,
              integer nec nullam class cursus mi, purus arcu lectus. Vel ante suscipit volutpat
              potenti mattis sed, wisi eu placerat ullamcorper. In sit per mi sed sed, mi vestibulum
              mus nam, morbi mauris neque vitae aliquam proin senectus. Ac amet arcu mollis ante
              congue elementum, inceptos eget optio ula in ac sed massa vivamus, rutrum elit,
              ultricies metus volutpat. Semper wisi et, sollicitudin nunc vestibulum, cursus
              accumsan nunc pede tempus mi ipsum, ligula sed. Non condimentum ac dolor sit. Mollis
              eu aliquam, vel mattis mollis massa ut dolor ante, tempus lacinia arcu. Urna
              vestibulum lorem, nulla fermentum, iaculis ut congue ac vivamus. Nam libero orci,
              pulvinar nulla, enim pellentesque consectetuer leo, feugiat rhoncus rhoncus vel. Magna
              sociosqu donec, dictum cursus ullamcorper viverra. Ultricies quis orci lorem,
              suspendisse ut vestibulum integer, purus sed lorem pulvinar habitasse turpis. +
            </v-card-text>
          </v-card>
        </v-dialog>
      </div>
    </div>
  </div>
</template>

<style scoped>
.book-detall {
  padding-top: 16px;
  margin-left: 12px;
}
</style>
