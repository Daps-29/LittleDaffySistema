

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
                estado = "Verificado"
            } else {
                estado = "No Verificado"
            }
            tablamascotas.innerHTML += `
            
            <tr>
                <td>
                    <div class="d-flex px-2 py-1">
                        <div>
                            <img src=${mascotaData.foto1}" class="avatar avatar-sm me-3" alt="user1"
                                style="width: 40px; height: 40px;">
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                            <h6 class="mb-0 text-sm">${mascotaData.nombre}</h6>
                            <p class="text-xs text-secondary mb-0">${mascotaData.descripcion}</p>
                        </div>
                    </div>
                </td>
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
                            <img src="${mascotaData.foto1}" class="avatar avatar-sm me-3" alt="user1">
                          </div>
                          <div>
                            <img src="${mascotaData.foto2}" class="avatar avatar-sm me-3" alt="user1">
                          </div>
                          <div>
                            <img src="${mascotaData.foto3}" class="avatar avatar-sm me-3" alt="user1">
                          </div>
                        </div>
                </td>
                <td class="align-middle text-center text-sm">
                    <span>${mascotaData.fecha}</span>
                </td>
                
                <td class="align-middle text-center">
                    <span class="text-secondary text-xs font-weight-bold">${estado}</span>
                </td>
                <td class="align-middle">
                    <button class="btn btn-warning" data-id="${mascotaData.id_mascota}">
                    <i class="fa fa-pencil-alt"></i>
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
                            updateForm['vacunamascota'].value = data.referencia
                            updateForm['categoriamascota'].value = data.categoria
                            updateForm['estadomascota'].value = data.estado
                            // updateForm.options(['verificarestado']) = data.verificacion
                            //  updateForm['verificarestado'].value(data.verificacion)
                            
                            updateForm['txtverificar'].checked = data.verificacion
                           estadoverificar = data.verificacion


                        })
                    const uid = es.target.dataset.id
                    
                    updateForm.addEventListener('submit', (e) => {
                        e.preventDefault()
                        estadoverificar = parseInt(updateForm['txtverificar'].value)
                        
                        if (estadoverificar != 1 || estadoverificar == 0){
                            estadoverificar = 0;
                        }
                        console.log(estadoverificar)
                            firebase.database().ref(`/mascotas/` + uid).update({
                               
                                verificacion: estadoverificar
                                

                            })
                            
                        

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

    
   