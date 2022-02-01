

    var firebaseConfig = {
        apiKey: "AIzaSyAPmv5W4DoaBmle8u1rs2_rWc_fGWcPDaM",
        authDomain: "littledaffy-802a2.firebaseapp.com",
        databaseURL: "https://littledaffy-802a2-default-rtdb.firebaseio.com",
        projectId: "littledaffy-802a2",
        storageBucket: "littledaffy-802a2.appspot.com",
        messagingSenderId: "417998320479",
        appId: "1:417998320479:web:d1345154002cd7cc1bbcea",
        measurementId: "G-259CCJ548M"
    };


    const updateForm = document.getElementById('update-form')


    firebase.initializeApp(firebaseConfig);
    var database = firebase.database();
    var storageRef = firebase.storage().ref();

    const mascotasref = firebase.database().ref('mascotas')



    var tablamascotas = document.getElementById('datos');
    window.addEventListener('DOMContentLoaded', async (e) => {
    await mascotasref.on('value', (mascotas) => {
        tablamascotas.innerHTML = ''
        mascotas.forEach((mascota) => {
            let mascotaData = mascota.val()
            var estado = " "
            if (mascotaData.verificacion == 1) {
                estado = `<button type="button" class="btn btn-round btn-success">Verificado</button>`
            } else {
                estado = `<button type="button" class="btn btn-round btn-danger"> No Verificado</button>`
            }
            tablamascotas.innerHTML += `
            
            <tr>
                
                <td>
                    <div class="d-flex px-2 py-1">
                        
                        <div class="d-flex flex-column justify-content-center">
                            <h6 class="mb-0 text-sm">${mascotaData.nombre}</h6>
                            <p class="text-xs text-secondary mb-0">${mascotaData.descripcion}</p>
                        </div>
                    </div>
                </td>
                <td>
                <div class="d-flex px-2 py-1">
                          <div>
                            <img id="myImg" src="${mascotaData.foto1}" alt="user1" width="80" height="80"   class="rounded-pill mx-auto d-block">
                          </div>
                          <div>
                            <img src="${mascotaData.foto2}" width="80" height="80" alt="user1"  class="rounded-pill mx-auto d-block">
                          </div>
                          <div>
                            <img src="${mascotaData.foto3}" width="80" height="80" alt="user1"  class="rounded-pill mx-auto d-block">
                          </div>
                        </div>
                </td>
                <td class="align-middle text-center text-sm">
                    <span>${mascotaData.fecha}</span>
                </td>
                
                <td class="align-middle text-center">
                    
                  ${estado}
                </td>
                <td class="align-middle">
                    <button class="btn btn-warning" data-id="${mascotaData.id_mascota}">
                    <i class="fa fa-pencil"></i>
                    </button>

                    
                </td>
            </tr>

            `
             var estadoverificar;
            const updateButtons = document.querySelectorAll('.btn-warning')
            updateButtons.forEach((button) => {
                button.addEventListener('click', (es) => {
                    const id = es.target.dataset.id
                     console.log(es.target.dataset.id)
                    $('#modal-update').modal('show');
                    firebase.database().ref(`/mascotas/` + id)
                        .once('value')
                        .then((orga) => {
                            const data = orga.val()
                            updateForm['nombremascota'].value = data.nombre
                            updateForm['descripcionmascota'].value = data.descripcion
                            updateForm['ubicacionmascota'].value = data.ubicacion
                            updateForm['razamascota'].value = data.raza
                            updateForm['sexomascota'].value = data.sexo
                            updateForm['edadmascota'].value = data.edad + " " + data.tiempo
                            updateForm['vacunamascota'].value = data.vacuna
                            updateForm['categoriamascota'].value = data.categorias
                            updateForm['estadomascota'].value = data.estadoperdida
                            
                            // updateForm.options(['verificarestado']) = data.verificacion
                            //  updateForm['verificarestado'].value(data.verificacion)
                            
                            updateForm['txtverificar'].value = data.verificacion
                           estadoverificar = data.verificacion


                        }   )
                    const uid = es.target.dataset.id
                    
                    updateForm.addEventListener('submit', (e) => {
                        e.preventDefault()
                        estadoverificar = parseInt(updateForm['txtverificar'].value)
                        
                        
                        //console.log(estadoverificar)
                            firebase.database().ref(`/mascotas/` + uid).update({
                               
                                verificacion: estadoverificar
                                

                            })
                            swal({
                                title: "Excelente!",
                                text: "Cambiaste la verificación de la mascota!",
                                icon: "success",
                              });
                            
                        

                        $('#modal-update').modal('hide');
                        document.getElementById("nombremascota").value = "";
                        document.getElementById("descripcionmascota").value = "";
                        document.getElementById("ubicacionmascota").value = "";
                        document.getElementById("razamascota").value = "";
                        document.getElementById("sexomascota").value = "";
                        document.getElementById("edadmascota").value = "";
                        document.getElementById("vacunamascota").value = "";
                        document.getElementById("categoriamascota").value = "";
                        document.getElementById("estadomascota").value = "";
                        document.getElementById("txtverificar").value = "";
                        
                    })
                })

            })

        })
    })
    })
 

    
   