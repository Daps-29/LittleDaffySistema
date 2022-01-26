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
                            <h2>Notificaciones <small>envia una notificacion a todos los usuarios</small></h2>
                            <ul class="nav navbar-right panel_toolbox">
                                <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                                </li>

                            </ul>
                            <div class="clearfix"></div>
                        </div>
                        <div class="x_content">
                            <br />
                            <form action="generar_notificacion.php" method="POST">

                                <div class="item form-group">
                                    <label class="col-form-label col-md-3 col-sm-3 label-align" for="first-name">
                                        Titulo: <span class="required"></span>
                                    </label>
                                    <div class="col-md-6 col-sm-6 ">
                                        <input type="text" id="titulo" name="titulo" required="required"
                                            class="form-control ">
                                    </div>
                                </div>
                                <div class="item form-group">
                                    <label class="col-form-label col-md-3 col-sm-3 label-align" for="last-name">Mensaje:
                                        <span class="required"></span>
                                    </label>
                                    <div class="col-md-6 col-sm-6 ">
                                        <textarea name="mensaje" class="form-control" id="mensaje"
                                            required="required"></textarea>
                                    </div>
                                </div>

                                <div class="item form-group">
                                    <div class="col-md-6 col-sm-6 offset-md-3">
                                        <button type="submit" class="btn btn-success" id="btnGuardar">Guardar</button>

                                    </div>
                                </div>

                            </form>
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





</html>