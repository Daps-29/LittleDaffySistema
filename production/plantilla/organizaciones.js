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


const openModal = document.getElementById('OpenRegisterModal')
const modal = document.getElementById('exampleModal')
const showRegisterModal = () => {
    $('#exampleModal').modal('show');
}
openModal.addEventListener('click', showRegisterModal)
const closeModal = document.getElementById('cerrarModal')
closeModal.addEventListener('click', () => {
    $('#exampleModal').modal('hide');
    document.getElementById("register-form").reset();
})

const closeUpdateModal = document.getElementById('cerrarUpdateModal')
closeUpdateModal.addEventListener('click', () => {
    $('#modal-update').modal('hide');
    document.getElementById("update-form").reset();
})

const registerForm = document.getElementById('register-form')
const updateForm = document.getElementById('update-form')





firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var storageRef = firebase.storage().ref();

const organizacionesRef = firebase.database().ref('organizaciones')

const deleteOrganizacion = (uid) => {
    firebase.database().ref(`/organizaciones/` + uid).remove()
}

var fotoedit;
var fotoedit_portada;
var tablaorganizaciones = document.getElementById('tabla');
window.addEventListener('DOMContentLoaded', async (e) => {
    await organizacionesRef.on('value', (organizaciones) => {
        tablaorganizaciones.innerHTML = ''
        organizaciones.forEach((organizacion) => {
            let organizacionData = organizacion.val()
            var estado = " "
            if (organizacionData.estado_organizacion == 1) {
                estado = "ACTIVO"
            } else {
                estado = "INACTIVO"
            }
            tablaorganizaciones.innerHTML += `

            <tr>
                <td>
                    <div class="d-flex px-2 py-1">
                        <div>
                            <img src=${organizacionData.foto_portada}" class="avatar avatar-sm me-3" alt="user1"
                                style="width: 40px; height: 40px;">
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                            <h6 class="mb-0 text-sm">${organizacionData.nombre}</h6>
                            <p class="text-xs text-secondary mb-0">${organizacionData.contacto}</p>
                        </div>
                    </div>
                </td>
                <td>
                    <p class="text-xs font-weight-bold mb-0">${organizacionData.horaen}</p>
                    <p class="text-xs text-secondary mb-0">${organizacionData.horafin}</p>
                </td>
                <td class="align-middle text-center text-sm">
                    <span>${organizacionData.direccion_literal}</span>
                </td>
                <td class="align-middle text-center">
                    <span class="text-secondary text-xs font-weight-bold">${organizacionData.descripcion}</span>
                </td>
                <td class="align-middle text-center">
                <div>
                <img src=${organizacionData.foto}" class="avatar avatar-sm me-3" alt="user1"
                    style="width: 40px; height: 40px;">
            </div>
                <td class="align-middle text-center">
                    <span class="text-secondary text-xs font-weight-bold">${estado}</span>
                </td>
                <td class="align-middle">
                    <button class="btn btn-warning" data-id="${organizacionData.id_organizacion}">
                    <i class="fa fa-pencil-square-o"></i>
                    </button>
                    <button class="btn btn-danger" data-id="${organizacionData.id_organizacion}">
                    <i class="fa fa-trash"></i>
                    </button>
                </td>
            </tr>

            `

            const updateButtons = document.querySelectorAll('.btn-warning');
            updateButtons.forEach((button) => {
                button.addEventListener('click', (es) => {
                    const id = es.target.dataset.id
                    // console.log(es.target.dataset.id)
                    $('#modal-update').modal('show');
                    firebase.database().ref(`organizaciones/` + id)
                        .once('value')
                        .then((orga) => {
                            const data = orga.val()
                            updateForm['txtNombre'].value = data.nombre
                            updateForm['txtContacto'].value = data.contacto
                            updateForm['txtDescripcion'].value = data.descripcion
                            fotoedit = data.foto
                            fotoedit_portada = data.foto_portada
                            if (data.lunes == "Si") {
                                updateForm['txtLunes'].checked = data.lunes
                            }
                            if (data.martes == "Si") {
                                updateForm['txtMartes'].checked = data.martes
                            }
                            if (data.miercoles == "Si") {
                                updateForm['txtMiercoles'].checked = data.miercoles
                            }
                            if (data.jueves == "Si") {
                                updateForm['txtJueves'].checked = data.jueves
                            }
                            if (data.viernes == "Si") {
                                updateForm['txtViernes'].checked = data.viernes
                            }
                            if (data.sabado == "Si") {
                                updateForm['txtSabado'].checked = data.sabado
                            }
                            if (data.domingo == "Si") {
                                updateForm['txtDomingo'].checked = data.domingo
                            }
                            updateForm['txtHoraen'].value = data.horaen
                            updateForm['txtHorafin'].value = data.horafin
                            updateForm['txtDireccionLiteral'].value = data.direccion_literal
                            updateForm['txtReferencia'].value = data.referencia
                            updateForm['txtLatitud'].value = data.latitud
                            updateForm['txtLngitud'].value = data.longitud


                            var vMarker
                            var map
                            map = new google.maps.Map(document.getElementById('map_canvas-edit'), {
                                zoom: 14,
                                center: new google.maps.LatLng(data.latitud, data.longitud),
                                mapTypeId: google.maps.MapTypeId.ROADMAP
                            });
                            vMarker = new google.maps.Marker({
                                position: new google.maps.LatLng(data.latitud, data.longitud),
                                draggable: true
                            });
                            google.maps.event.addListener(vMarker, 'dragend', function (evt) {
                                $("#txtLatitud").val(evt.latLng.lat().toFixed(6));
                                $("#txtLngitud").val(evt.latLng.lng().toFixed(6));

                                map.panTo(evt.latLng);
                            });
                            map.setCenter(vMarker.position);
                            vMarker.setMap(map);
                            $("#txtCiudad, #txtEstado, #txtDireccion").change(function () {
                                movePin();
                            });

                            function movePin() {
                                var geocoder = new google.maps.Geocoder();
                                var textSelectM = $("#txtCiudad").val();
                                var textSelectE = $("#txtEstado").val();
                                var inputAddress = $("#txtDireccion").val() + ' ' + textSelectM + ' ' + textSelectE;
                                geocoder.geocode({
                                    "address": inputAddress
                                }, function (results, status) {
                                    if (status == google.maps.GeocoderStatus.OK) {
                                        vMarker.setPosition(new google.maps.LatLng(results[0].geometry.location.lat(), results[0]
                                            .geometry.location.lng()));
                                        map.panTo(new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry
                                            .location.lng()));
                                        $("#txtLat").val(results[0].geometry.location.lat());
                                        $("#txtLng").val(results[0].geometry.location.lng());
                                    }

                                });
                            }

                        })
                    const uid = es.target.dataset.id
                    updateForm.addEventListener('submit', (e) => {
                        e.preventDefault()
                        const nombre = updateForm['txtNombre'].value
                        const contacto = parseInt(updateForm['txtContacto'].value)
                        const descripcion = updateForm['txtDescripcion'].value
                        const lunesChec = updateForm['txtLunes'].checked
                        var lunes, martes, miercoles, jueves, viernes, sabado, domingo;
                        if (lunesChec) {
                            lunes = "Si"
                        } else {
                            lunes = "No"
                        }
                        const martesChec = updateForm['txtMartes'].checked
                        if (martesChec) {
                            martes = "Si"
                        } else {
                            martes = "No"
                        }
                        const miercolesChec = updateForm['txtMiercoles'].checked
                        if (miercolesChec) {
                            miercoles = "Si"
                        } else {
                            miercoles = "No"
                        }
                        const juevesChec = updateForm['txtJueves'].checked
                        if (juevesChec) {
                            jueves = "Si"
                        } else {
                            jueves = "No"
                        }
                        const viernesChec = updateForm['txtViernes'].checked
                        if (viernesChec) {
                            viernes = "Si"
                        } else {
                            viernes = "No"
                        }
                        const sabadoChec = updateForm['txtSabado'].checked
                        if (sabadoChec) {
                            sabado = "Si"
                        } else {
                            sabado = "No"
                        }
                        const domingoChec = updateForm['txtDomingo'].checked
                        if (domingoChec) {
                            domingo = "Si"
                        } else {
                            domingo = "No"
                        }
                        const horaen = updateForm['txtHoraen'].value
                        const horafin = updateForm['txtHorafin'].value
                        const direccion_literal = updateForm['txtDireccionLiteral'].value
                        const referencia = updateForm['txtReferencia'].value
                        const latitud = updateForm['txtLatitud'].value
                        const longitud = updateForm['txtLngitud'].value
                        var foto_portada = updateForm['txtFotoPortada'].files[0]
                        var foto = updateForm['txtFoto'].files[0]
                        if (foto != null && foto_portada != null) {

                            const subirImg = storageRef.child('organizaciones/' + foto.name).put(foto);
                            const subirImg2 = storageRef.child('organizaciones/' + foto_portada.name).put(foto_portada);

                            subirImg.then(snapshot => snapshot.ref.getDownloadURL()).then(
                                url => {
                                    subirImg2.then(snapshot => snapshot.ref.getDownloadURL()).then(
                                        url2 => {
                                            firebase.database().ref(`/organizaciones/` + uid).update({
                                                nombre: nombre,
                                                contacto: contacto,
                                                descripcion: descripcion,
                                                foto: url,
                                                foto_portada: url2,
                                                lunes: lunes,
                                                martes: martes,
                                                miercoles: miercoles,
                                                jueves: jueves,
                                                viernes: viernes,
                                                sabado: sabado,
                                                domingo: domingo,
                                                horaen: horaen,
                                                horafin: horafin,
                                                direccion_literal: direccion_literal,
                                                referencia: referencia,
                                                latitud: latitud,
                                                longitud: longitud,

                                            })
                                        })
                                }
                            )
                        } else if (foto != null && foto_portada == null) {

                            const subirImg = storageRef.child('organizaciones/' + foto.name).put(foto);
                            subirImg.then(snapshot => snapshot.ref.getDownloadURL()).then(
                                url => {
                                    firebase.database().ref(`/organizaciones/` + uid).update({
                                        nombre: nombre,
                                        contacto: contacto,
                                        descripcion: descripcion,
                                        foto: url,
                                        lunes: lunes,
                                        martes: martes,
                                        miercoles: miercoles,
                                        jueves: jueves,
                                        viernes: viernes,
                                        sabado: sabado,
                                        domingo: domingo,
                                        horaen: horaen,
                                        horafin: horafin,
                                        direccion_literal: direccion_literal,
                                        referencia: referencia,
                                        latitud: latitud,
                                        longitud: longitud,

                                    })
                                }
                            )
                        } else if (foto == null && foto_portada != null) {

                            const subirImg2 = storageRef.child('organizaciones/' + foto_portada.name).put(foto_portada);
                            subirImg2.then(snapshot => snapshot.ref.getDownloadURL()).then(
                                url2 => {
                                    firebase.database().ref(`/organizaciones/` + uid).update({
                                        nombre: nombre,
                                        contacto: contacto,
                                        descripcion: descripcion,
                                        foto_portada: url2,
                                        lunes: lunes,
                                        martes: martes,
                                        miercoles: miercoles,
                                        jueves: jueves,
                                        viernes: viernes,
                                        sabado: sabado,
                                        domingo: domingo,
                                        horaen: horaen,
                                        horafin: horafin,
                                        direccion_literal: direccion_literal,
                                        referencia: referencia,
                                        latitud: latitud,
                                        longitud: longitud,

                                    })
                                })

                        } else {
                            firebase.database().ref(`organizaciones/` + uid).update({
                                nombre: nombre,
                                contacto: contacto,
                                descripcion: descripcion,
                                lunes: lunes,
                                martes: martes,
                                miercoles: miercoles,
                                jueves: jueves,
                                viernes: viernes,
                                sabado: sabado,
                                domingo: domingo,
                                horaen: horaen,
                                horafin: horafin,
                                direccion_literal: direccion_literal,
                                referencia: referencia,
                                latitud: latitud,
                                longitud: longitud,
                            })
                        }
                        $('#modal-update').modal('hide');
                        document.getElementById("update-form").reset();
                        swal({
                            title: "Excelente!",
                            text: "Organización actualizada exitosamente!",
                            icon: "success",
                        });
                        document.getElementById("txtNombre").value = "";
                        document.getElementById("txtContacto").value = "";
                        document.getElementById("txtDescripcion").value = "";
                        document.getElementById("txtHoraen").value = "";
                        document.getElementById("txtHorafin").value = "";
                        document.getElementById("txtDireccionLiteral").value = "";
                        document.getElementById("txtReferencia").value = "";
                        document.getElementById("txtLatitud").value = "";
                        document.getElementById("txtLngitud").value = "";
                        document.getElementById("txtFotoPortada").value = "";
                        document.getElementById("txtFoto").value = "";
                    })
                })

            })

            const deleteButtons = document.querySelectorAll('.btn-danger')
            deleteButtons.forEach((button) => {
                button.addEventListener('click', (e) => {
                    const uid = e.target.dataset.id
                    estado_organizacion = 0
                    firebase.database().ref(`/organizaciones/` + uid).update({
                        estado_organizacion: estado_organizacion

                    })
                })
            })
        })

    })
})

//REGISTRAR UNA ORGANIZACION
registerForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const nombre = registerForm['txtNombre'].value
    const contacto = parseInt(registerForm['txtContacto'].value)
    const descripcion = registerForm['txtDescripcion'].value
    const foto = registerForm['txtFoto'].files[0];
    const foto_portada = registerForm['txtFotoPortada'].files[0];
    const lunesChec = registerForm['txtLunes'].checked
    if (lunesChec) {
        var lunes = "Si"
    } else {
        lunes = "No"
    }
    const martesChec = registerForm['txtMartes'].checked
    if (martesChec) {
        var martes = "Si"
    } else {
        martes = "No"
    }
    const miercolesChec = registerForm['txtMiercoles'].checked
    if (miercolesChec) {
        var miercoles = "Si"
    } else {
        miercoles = "No"
    }
    const juevesChec = registerForm['txtJueves'].checked
    if (juevesChec) {
        var jueves = "Si"
    } else {
        jueves = "No"
    }
    const viernesChec = registerForm['txtViernes'].checked
    if (viernesChec) {
        var viernes = "Si"
    } else {
        viernes = "No"
    }
    const sabadoChec = registerForm['txtSabado'].checked
    if (sabadoChec) {
        var sabado = "Si"
    } else {
        sabado = "No"
    }
    const domingoChec = registerForm['txtDomingo'].checked
    if (domingoChec) {
        var domingo = "Si"
    } else {
        domingo = "No"
    }
    const horaen = registerForm['txtHoraen'].value
    const horafin = registerForm['txtHorafin'].value
    const direccion_literal = registerForm['txtDireccionLiteral'].value
    const referencia = registerForm['txtReferencia'].value
    const latitud = registerForm['txtLat'].value
    const longitud = registerForm['txtLng'].value
    const id_organizacion = firebase.database().ref().child('organizaciones').push().key;
    const estado_organizacion = 1
    console.log(lunes)
    console.log(miercoles)

    if ((nombre == null || nombre == "") || (contacto == null || contacto == "") || (descripcion == null || descripcion == "") ||
        (foto == null || foto == "" || foto == undefined) || (foto_portada == null || foto_portada == "" || foto_portada == undefined) || (horaen == null || horaen == "") || (horafin == null || horafin == "") ||
        (direccion_literal == null || direccion_literal == "") || (referencia == null || referencia == "")) {
        alert('Por favor completar todos los campos')
    } else if ((latitud == null || latitud == "") || (longitud == null || longitud == "")) {
        alert("Por favor completar la direccion")
    } else if (contacto.length < 8) {
        alert("Ingresar un número valido para whatsapp")
    } else {
        const subirImg = storageRef.child('organizaciones/' + foto.name).put(foto);
        const subirImg2 = storageRef.child('organizaciones/' + foto_portada.name).put(foto_portada);

        subirImg.then(snapshot => snapshot.ref.getDownloadURL()).then(
            url => {
                subirImg2.then(snapshot => snapshot.ref.getDownloadURL()).then(
                    url2 => {
                        var fotourl = url2;
                        firebase.database().ref('organizaciones/' + id_organizacion).set({
                            nombre: nombre,
                            contacto: contacto,
                            descripcion: descripcion,
                            foto: url,
                            foto_portada: fotourl,
                            lunes: lunes,
                            martes: martes,
                            miercoles: miercoles,
                            jueves: jueves,
                            viernes: viernes,
                            sabado: sabado,
                            domingo: domingo,
                            horaen: horaen,
                            horafin: horafin,
                            direccion_literal: direccion_literal,
                            referencia: referencia,
                            latitud: latitud,
                            longitud: longitud,
                            id_organizacion: id_organizacion,
                            estado_organizacion: estado_organizacion
                        })
                        $('#exampleModal').modal('hide');
                        document.getElementById("register-form").reset();
                        swal({
                            title: "Excelente!",
                            text: "Organización creada exitosamente!",
                            icon: "success",
                        });

                    })
            })

    }

})