<!DOCTYPE html>
<html lang="en">
     <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Boilerplate</title>
          @vite('resources/js/app.js')
          <!-- Font Awesome CDN -->
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
          {{-- Font Family --}}
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
          <!-- Toastr.js CDN -->
          <link href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" rel="stylesheet">
          <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>

     </head>
     <body class="bg-body-secondary" style="font-family: 'Poppins', sans-serif;">
          <div id="app"></div>
     </body>
</html>