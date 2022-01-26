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
                            <h2>Publicaciones <small>Mascotas</small></h2>
                            <ul class="nav navbar-right panel_toolbox">
                                <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>

                            </ul>
                            <div class="clearfix"></div>
                        </div>
                        <div class="x_content">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="card-box table-responsive">

                                        <table id="datatable-buttons" class="table table-striped table-bordered"
                                            style="width:100%">
                                            <thead>
                                                <tr>
                                                    <th>Nombre Mascota/Descripcion</th>
                                                    <th>Fotos</th>
                                                    <th>Fecha Publicacion</th>
                                                    <th>Estado</th>
                                                    <th>Verificar</th>
                                                </tr>
                                            </thead>


                                            <tbody id="datos">



                                                <!-- TRAEMOS DATOS -->
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




<!-- Modal Update -->
<div class="modal fade" id="modal-update" name="modal-update" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Actualizar Organizacion</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                    id="closeRegisterModal"></button>
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
                        <div class="form-group">
                            <label for="recipient-name" class="col-form-label">Nombre Mascota:</label>
                            <input type="text" class="form-control" id="nombremascota" readonly>
                        </div>
                        <div class="form-group">
                            <label for="message-text" class="col-form-label">Descripcion:</label>
                            <textarea class="form-control" id="descripcionmascota" readonly></textarea>
                        </div>
                        <div class="form-group">
                            <label for="message-text" class="col-form-label">Ubicacion:</label>
                            <input type="text" class="form-control" id="ubicacionmascota" readonly>
                        </div>
                        <div class="form-group">
                            <label for="message-text" class="col-form-label">Raza:</label>
                            <input type="text" class="form-control" id="razamascota" readonly>
                        </div>
                        <div class="form-group">
                            <label for="message-text" class="col-form-label">Sexo:</label>
                            <input type="text" class="form-control" id="sexomascota" readonly>
                        </div>
                        <div class="form-group">
                            <label for="message-text" class="col-form-label">Edad:</label>
                            <input type="text" class="form-control" id="edadmascota" readonly>
                        </div>
                        <div class="form-group">
                            <label for="message-text" class="col-form-label">Vacunas:</label>
                            <input type="text" class="form-control" id="vacunamascota" readonly>
                        </div>
                        <div class="form-group">
                            <label for="message-text" class="col-form-label">Categoria:</label>
                            <input type="text" class="form-control" id="categoriamascota" readonly>
                        </div>
                        <div class="form-group">
                            <label for="message-text" class="col-form-label">Estado Mascota:</label>
                            <input type="text" class="form-control" id="estadomascota" readonly>
                        </div>
                         
                        <div class="form-group">
                            <label for="message-text" class="col-form-label">Verificar Publicacion:</label>
                            <select id="txtverificar" class="select2_single form-control" tabindex="-1">

                                <option value="1">Aceptar</option>
                                <option value="0">Denegar</option>
                            </select>
                        </div>
                        <div class="col-md-2">
                        </div>
                        <div class="modal-footer mt-3">
                            <button type="submit" class="btn btn-primary"><i class="fa fa-check"></i><span>Actualizar</span></button>
                        </div>
                    </form>



                </div>
            </div>

        </div>
    </div>
</div>

<script src="plantilla/mascota.js"> </script>

</html>