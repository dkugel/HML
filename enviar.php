<?php    
    session_start();     
	$name = isset($_POST['name2'])? $_POST['name2'] : NULL;
	$email = isset($_POST['email'])? $_POST['email'] : NULL;
	$phone = isset($_POST['phone'])? $_POST['phone'] : NULL;
	$message = isset($_POST['message'])? $_POST['message'] : NULL;
	$topic = isset($_POST['topic'])? $_POST['topic'] : NULL;
    
    
	

    $para = 'info@hmlasesores.com';
    $titulo = 'Nuevo contacto Web';
    $header = 'From: ' .$email;    
    $cuerpo  = "Nombre: $name\n";
    $cuerpo .= "E-Mail: $email\n";
    $cuerpo .= "telefono: $phone\n";      
	$cuerpo .= "Mensaje: $message\n";
	$cuerpo .= "Asunto: $topic\n";
    //$cuerpo .= "Código: $captcha\n";
	
			
	if ( ($_POST['name'] != "")  ){
		// Es un SPAMbot
		echo "<script language='javascript'>
			alert('Eres un bot, intenta nuevamente.');
			window.location.href = 'http://www.promocon.net/contacto.html';
			</script>";

	} else {
		// Es un usuario real, proceder a enviar el formulario.
		if (mail($para, $titulo, $cuerpo, $header)) {
			echo "<script language='javascript'>
			alert('Mensaje enviado, muchas gracias.');
			window.location.href = 'http://www.promocon.net';
			</script>";
			}
		else {
			echo 'Falló el envio';
		}			
	}						
	
	
	

	
	
	
	
	
	
	
	
       
        
       
?>