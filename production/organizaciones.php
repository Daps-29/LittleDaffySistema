<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="images/favicon.ico" type="image/ico" />

    <?php include "plantilla/header.php";?>

</head>

<body class="nav-md">
    <div class="container body">
        <div class="main_container">
            <?php include "plantilla/nav.php"; ?>
            <!-- page content -->
            <div class="right_col" role="main">

                <div class="col-md-12 col-sm-12 ">
                    <div class="x_panel">
                        <div class="x_title">
                            <h2>Lista de <small>Organizaciones </small></h2>

                            <ul class="nav navbar-right panel_toolbox">
                                <!-- Button modal -->
                                <button type="button" class="btn btn-primary" id="OpenRegisterModal"
                                    data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Registrar organización
                                </button>
                                <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                                </li>
                            </ul>
                            <div class="clearfix"></div>
                        </div>
                        <div class="x_content">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="card-box table-responsive">
                                        <p class="text-muted font-13 m-b-30">
                                            Crear y validar todas las organizaciones
                                        </p>
                                        <table id="datatable-buttons" class="table table-striped table-bordered"
                                            style="width:100%">
                                            <thead>
                                                <tr>
                                                    <th>Nombre y contacto</th>
                                                    <th>Horarios</th>
                                                    <th>Direccion</th>
                                                    <th>Descripcion</th>
                                                    <th>Foto</th>
                                                    <th>Estado</th>
                                                    <th class="text-secondary opacity-7">Acciones</th>
                                                </tr>
                                            </thead>

                                            <tbody id="tabla">

                                            </tbody>

                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <!-- /page content -->



            <!-- /footer content -->
            <footer>
                <?php include "plantilla/footer.php"; ?>
            </footer>
            <!-- /footer content end-->

        </div>
    </div>

    <?php include "plantilla/scripts.php"; ?>


</body>

<script type="text/javascript"
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCSXjcXrUS51vLsXfqeU30p0wWhyIicac8">
</script>
<!-- Modal Create -->
<div class="modal fade" id="exampleModal" name="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Registrar Organizacion</h5>
                <button type="button" class="btn btn-close" data-bs-dismiss="modal" aria-label="Close"
                    id="cerrarModal"><i class="fa fa-close"></i></button>
            </div>
            <div class="modal-body">
                <h2 class="modal-title" id="exampleModalLabel"> * Todos los campos son obligatorios</h2>
                <div class="container d-flex w-100 h-100 p-3 mx-auto flex-column">
                    <div class="inner">
                        <div class="nav nav-masthead justify-content-center">
                            <div class="row">
                                <div class="col-md-4">
                                    <input type="hidden" id="txtDireccion" class="form-control" placeholder="direccion">

                                </div>
                                <div class="col-md-4">
                                    <input type="hidden" id="txtCiudad" class="form-control" placeholder="ciudad">
                                </div>
                                <div class="col-md-4">

                                    <input type="hidden" id="txtEstado" class="form-control" placeholder="estado">
                                </div>
                            </div>

                        </div>
                    </div>
                    <form id="register-form">
                        <div class="row  mb-2">
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label class="control-label col-md-6 col-sm-3 col-xs-3">Nombre:</label>
                                    <div class="col-md-12 col-sm-9 col-xs-9">
                                        <input type="text" class="form-control" id="txtNombre" name="txtNombre"
                                            placeholder="Nombre organización" required>
                                        <span class="fa fa-user form-control-feedback right" aria-hidden="true"></span>
                                    </div>
                                </div>


                            </div>
                            <div class="col-md-6">
                                <div class="form-group row">
                                    <label class="control-label col-md-6 col-sm-3 col-xs-3">Número celular: (+591)</label>
                                    <div class="col-md-12 col-sm-9 col-xs-9">
                                        <input type="number" class="form-control" id="txtContacto" name="txtContacto"
                                            placeholder="71234568" maxlength="8" oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" required>
                                        <span class="fa fa-user form-control-feedback right" aria-hidden="true"></span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-12 mb-2">
                            <div class="form-group row">
                                <label class="control-label col-md-12 col-sm-3 col-xs-3">Descripcion:</label>
                                <div class="col-md-12 col-sm-9 col-xs-9">
                                    <textarea id="txtDescripcion" name="txtDescripcion" class="form-control"
                                        placeholder="Ingrese descripcion de la organizacion" required></textarea>
                                    <span class="fa fa-user form-control-feedback right" aria-hidden="true"></span>
                                </div>
                            </div>
                        </div>
                        <div class="row  mb-2">
                            <div class="col-md-6">

                                <label class="label">Foto responsable:</label>
                                <input type="file" id="txtFoto" value="" name="txtFoto" class="form-control"
                                    placeholder="Foto" required>

                            </div>
                            <div class="col-md-6">

                                <label class="label">Foto portada:</label>
                                <input type="file" id="txtFotoPortada" value="" name="txtFotoPortada"
                                    class="form-control" placeholder="Foto" required>

                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="control-label col-md-12 col-sm-3 col-xs-3 mb-2">Días de atención:</label>
                            <div class="col-md-12 col-sm-9 col-xs-9">
                                <div class="col-md-2">

                                    <label class="label">Lunes</label>
                                    <input type="checkbox" id="txtLunes" name="txtLunes">

                                </div>
                                <div class="col-md-2">
        
                                    <label class="label">Martes</label>
                                    <input type="checkbox" id="txtMartes" name="txtMartes">
        
                                </div>
                                <div class="col-md-2">
        
                                    <label class="label">Miercoles</label>
                                    <input type="checkbox" id="txtMiercoles" name="txtMiercoles">
        
                                </div>
                                <div class="col-md-2">
        
                                    <label class="label">Jueves</label>
                                    <input type="checkbox" id="txtJueves" name="txtJueves">
        
                                </div>
                                <div class="col-md-2">
        
                                    <label class="label">Viernes</label>
                                    <input type="checkbox" id="txtViernes" name="txtViernes">
        
                                </div>
                                <div class="col-md-2">
        
                                    <label class="label">Sábado</label>
                                    <input type="checkbox" id="txtSabado" name="txtSabado">
        
                                </div>
                                <div class="col-md-2">
        
                                    <label class="label">Domingo</label>
                                    <input type="checkbox" id="txtDomingo" name="txtDomingo">
                                </div>
                            </div>
                        </div>

                        <div class="row  mb-2">
                            <div class="col-md-6">

                                <label class="label">Hora entrada:</label>
                                <input type="time" id="txtHoraen" name="txtHoraen" class="form-control"
                                    placeholder="Hora entrada (Ej. 13:30)" required>

                            </div>
                            <div class="col-md-6">

                                <label class="label">Hora salida:</label>
                                <input type="time" id="txtHorafin" name="txtHorafin" class="form-control"
                                    placeholder="Hora salida (Ej. 20:30)" required>

                            </div>
                        </div>
                        <div class="col-md-12 mb-2">

                            <label class="label">Direccion Literal:</label>
                            <input type="text" id="txtDireccionLiteral" name="txtDireccionLiteral" class="form-control"
                                placeholder="Direccion (ej. calle 10 de obrajes)" required>

                        </div>
                        <div class="col-md-12 mb-2">

                            <label class="label">Referencia de ubicacion:</label>
                            <input type="text" id="txtReferencia" name="txtReferencia" class="form-control"
                                placeholder="Direccion (ej. a lado del megacenter)" required>

                        </div>

                        <label class="label">Direccion</label>
                        <main role="main" class="inner cover">
                            <div class="row mb-2">
                                <div class="col-md-4">
                                    <input type="hidden" id="txtLat" name="txtLat" class="form-control" required
                                        placeholder="latitude">

                                </div>
                                <div class="col-md-4">
                                    <input type="hidden" id="txtLng" name="txtLng" class="form-control" required
                                        placeholder="longitud">

                                </div>
                            </div>
                            <div id="map_canvas" style="height:350px">

                            </div>
                        </main>

                        <div class="modal-footer mt-3">
                            <button type="submit" class="btn btn-primary"><i class="fa fa-save"></i><span> Registrar</span></button>
                        </div>
                    </form>



                </div>
            </div>

        </div>
    </div>
</div>

<!-- Modal Update -->
<div class="modal fade" id="modal-update" name="modal-update" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Actualizar Organizacion</h5>
                <button type="button" class="btn btn-close" data-bs-dismiss="modal" aria-label="Close"
                    id="cerrarUpdateModal"><i class="fa fa-close"></i></button>
            </div>
            <div class="modal-body">
                <div class="container d-flex w-100 h-100 p-3 mx-auto flex-column">
                    <div class="inner">
                        <div class="nav nav-masthead justify-content-center">
                            <div class="row">
                                <div class="col-md-4">
                                    <input type="hidden" id="txtDireccion" class="form-control" placeholder="direccion">

                                </div>
                                <div class="col-md-4">
                                    <input type="hidden" id="txtCiudad" class="form-control" placeholder="ciudad">
                                </div>
                                <div class="col-md-4">

                                    <input type="hidden" id="txtEstado" class="form-control" placeholder="estado">
                                </div>
                            </div>

                        </div>
                    </div>
                    <form id="update-form">
                        <div class="row  mb-2">
                            <div class="col-md-6">

                                <label class="label">Nombre:</label>
                                <input type="text" id="txtNombre" name="txtNombre" class="form-control"
                                    placeholder="Ingrese el nombre de la Organizacion">

                            </div>
                            <div class="col-md-6">

                                <label class="label">Contacto:</label>
                                <input type="number" id="txtContacto" name="txtContacto" class="form-control"
                                    placeholder="+59176215311">

                            </div>
                        </div>
                        <div class="col-md-12 mb-2">

                            <label class="label">Descripcion:</label>
                            <textarea id="txtDescripcion" name="txtDescripcion" class="form-control"
                                placeholder="Ingrese descripcion de la organizacion"></textarea>

                        </div>
                        <div class="row  mb-2">
                            <div class="col-md-6">

                                <label class="label">Foto responsable:</label>
                                <input type="file" id="txtFoto" name="txtFoto" class="form-control" placeholder="Foto">

                            </div>
                            <div class="col-md-6">

                                <label class="label">Foto portada:</label>
                                <input type="file" id="txtFotoPortada" name="txtFotoPortada" class="form-control"
                                    placeholder="Foto">

                            </div>
                        </div>
                        <div class="row  mb-2">
                            <label class="label">Dias de atención:</label>
                            <div class="col-md-2">

                                <label class="label">Lunes</label>
                                <input type="checkbox" id="txtLunes" name="txtLunes" value="Si">

                            </div>
                            <div class="col-md-2">

                                <label class="label">Martes</label>
                                <input type="checkbox" id="txtMartes" name="txtMartes" value="Si">

                            </div>
                            <div class="col-md-2">

                                <label class="label">Miercoles</label>
                                <input type="checkbox" id="txtMiercoles" name="txtMiercoles" value="Si">

                            </div>
                            <div class="col-md-2">

                                <label class="label">Jueves</label>
                                <input type="checkbox" id="txtJueves" name="txtJueves" value="Si">

                            </div>
                            <div class="col-md-2">

                                <label class="label">Viernes</label>
                                <input type="checkbox" id="txtViernes" name="txtViernes" value="Si">

                            </div>
                            <div class="col-md-2">

                                <label class="label">Sábado</label>
                                <input type="checkbox" id="txtSabado" name="txtSabado" value="Si">

                            </div>
                            <div class="col-md-2">

                                <label class="label">Domingo</label>
                                <input type="checkbox" id="txtDomingo" name="txtDomingo" value="Si">
                            </div>
                        </div>
                        <div class="row  mb-2">
                            <div class="col-md-6">

                                <label class="label">Hora entrada:</label>
                                <input type="time" id="txtHoraen" name="txtHoraen" class="form-control"
                                    placeholder="Hora entrada (Ej. 13:30)" required>

                            </div>
                            <div class="col-md-6">

                                <label class="label">Hora salida:</label>
                                <input type="time" id="txtHorafin" name="txtHorafin" class="form-control"
                                    placeholder="Hora salida (Ej. 20:30)" required>

                            </div>
                        </div>
                        <div class="col-md-12 mb-2">

                            <label class="label">Direccion Literal:</label>
                            <input type="text" id="txtDireccionLiteral" name="txtDireccionLiteral" class="form-control"
                                placeholder="Direccion (ej. calle 10 de obrajes)">

                        </div>
                        <div class="col-md-12 mb-2">

                            <label class="label">Referencia de ubicacion:</label>
                            <input type="text" id="txtReferencia" name="txtReferencia" class="form-control"
                                placeholder="Direccion (ej. a lado del megacenter)">

                        </div>

                        <label class="label">Direccion</label>
                        <main role="main" class="inner cover">
                            <div class="row mb-2">
                                <div class="col-md-4">
                                    <input type="hidden" id="txtLatitud" name="txtLatitud" class="form-control"
                                        placeholder="latitude">

                                </div>
                                <div class="col-md-4">
                                    <input type="hidden" id="txtLngitud" name="txtLngitud" class="form-control"
                                        placeholder="longitud">

                                </div>
                            </div>
                            <div id="map_canvas-edit" style="height:350px">

                            </div>
                        </main>

                        <div class="modal-footer mt-3">
                            <button type="submit" class="btn btn-primary"><i class="fa fa-save"></i><span> Actualizar</span></button>
                        </div>
                    </form>



                </div>
            </div>

        </div>
    </div>
</div>
<script>
    var vMarker
    var map
    map = new google.maps.Map(document.getElementById('map_canvas'), {
        zoom: 14,
        center: new google.maps.LatLng(-16.491698, -68.142456),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    vMarker = new google.maps.Marker({
        position: new google.maps.LatLng(-16.491698, -68.142456),
        draggable: true
    });
    google.maps.event.addListener(vMarker, 'dragend', function (evt) {
        $("#txtLat").val(evt.latLng.lat().toFixed(6));
        $("#txtLng").val(evt.latLng.lng().toFixed(6));

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
</script>
<script src="plantilla/organizaciones.js"> </script>

</html>