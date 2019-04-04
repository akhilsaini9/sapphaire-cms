//var data="";
jQuery(document).ready(function ($) {

	myFunction();
	$("#adminRoleId").submit(function (event) {
        // Prevent the form from submitting via the browser.
        event.preventDefault();
        insertToLoginRole();
    });
    
});
		submit = function(){
			
			var user = {
					userName:$("#userName").val(),
					email:$("#email").val()
			};
			
			
			$.ajax({
					type: "POST",
			        url: "saveOrUpdate",
			        data: JSON.stringify(user),
			        contentType: 'application/json',
			        success: function (response) {	
					alert(response.message);
					myFunction();	
				},
				error:function(error){
					alert(error);
				}
			});
		}
		
		/*delete = function(){
			$.ajax({
				url:'delete',
				type:'POST',
				data:{user_id:id},
				success:function(response){
					alert(response.message);
					myFunction();
				}
			});
		}*/
		
		edit = function(index){
			$("#user_id").val(data[index].user_id);
			$("#name").val(data[index].user_name);
			$("#email").val(data[index].email);
		}
		
		  function myFunction(){
			$.ajax({
				url:'list',
				type:'POST',
				success:function(response){
					data = response.data;
					$('.tr').remove();
					for(i=0; i<response.data.length;i++){
						$('#table').append("<tr class='tr'> <td>"+response.data[i].userName+"</td><td>"+response.data[i].email+"</td></tr>");
					}
				},
				error:function(error){
					alert(error);
				}
			});
		}