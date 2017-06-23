<!doctype html>
<html <?php language_attributes(); ?>>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width">
<head>
  <title>MetricArts - Inteligencia de negocios</title>
  <link rel="stylesheet" href="<?php echo  get_stylesheet_directory_uri() . '/style.css'; ?>" /> 
</head>

<body <?php body_class(); ?>>
	<div id="inicio" class="header">
		<div class="header__menu page-navigation">
			<div class="header__decorator">
			</div>  
			<img href="<?php echo get_home_url(); ?>">
				<div class="header__menu__logo">
				</div> 
			  <div class="header-right">
                <label for="open">
                    <span class="hidden-desktop"></span>
                </label>
                <input type="checkbox" name="" id="open">
                <nav>
                    <a href="#home">Home</a>
                    <a href="#servicios">Servicios</a>
                    <a href="#nosotros">Nosotros</a>
                    <a href="#noticias">Noticias</a>
					<a href="#clientes">Clientes</a>
                    <a href="#contacto">Contacto</a>
                </nav>
            </div>
	</div>
