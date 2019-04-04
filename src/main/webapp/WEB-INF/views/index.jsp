<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%session.getServletContext().setAttribute("ctxPath", request.getContextPath());%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<html lang="en">

<head>
    <title>Sapphire CMS</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
 	<link href='/resources/css/font-awesome.min.css' rel='stylesheet' type='text/css'>	
 	<link href="/resources/css/bootstrap.min.css" rel="stylesheet">
    <link href="/resources/css/owl.carousel.min.css" rel="stylesheet">
    <link href="/resources/css/custom.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600" rel="stylesheet">
</head>
<body>
 <header>
     <div class="container">
<h1>Sapphire CMS</h1>
     </div>
</header> 
 <div class="content">
     <div class="container">
         <div class="row">
         <div class="col-md-6">
             <div class="ec-logo">
             <img src="/resources/images/Election_Commission_of_India_Logo.png" alt="">
                 </div>
             </div>
             <div class="col-md-6">
             <div class="login-form">
     <h2>User Login</h2>
     	<c:if test="${not empty error}"><div>${error}</div></c:if>
		<c:if test="${not empty message}"><div>${message}</div></c:if>
       <form method="post" role="form" action="/login">
        <div class="form-group">
        <input type="text" class="form-control" name="username" id="username" placeholder="Enter Username" required>   
        </div>
           <div class="form-group">
        <input type="password" class="form-control" name="password" id="password" placeholder="Enter Password" required>  
        <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
        </div>
           <div class="login-btn">
             <button type="submit" name="login" class="btn btn-primary">Login</button>
           </div>
       </form>
   </div>
             </div>
         </div>
   
         </div>
</div> 
    
    <script src="/resources/js/jquery.min.js"></script>
    <script src="/resources/js/bootstrap.min.js"></script>
    
</body>

</html>