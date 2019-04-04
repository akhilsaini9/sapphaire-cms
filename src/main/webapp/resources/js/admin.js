jQuery(document).ready(function($){
	getAllState();
	$("#stateId").change(function () {
        var selectedText = $(this).find("option:selected").text();
        var selectedValue = $(this).val();
        //alert("Selected Text: " + selectedText + " Value: " + selectedValue);
        if(selectedValue==27){
        	getAllDistricts(selectedValue);
        }
    });
	
	$('#districtId').change(function () {
        var selectedText = $(this).find("option:selected").text();
        var selectedValue = $(this).val();
        if(selectedValue==1){
        	getAllAcName(selectedValue);
        }
    });
	
	$('#search').click(function (event) {
        event.preventDefault();
        getCamraDetails();
        
        var videlen = $('.video-play').length;
        for(var i=1;i<=videlen;i++){            
            var b = 'example-video-';            
           var j = b.concat(i);             
           var player = videojs(j);
           player.paused();         
        }
    });
});

function getAllState(){
	$.ajax({
		url: 'statelist',
		type:'get',
		datatype:'json',
		contentType: 'application/json',
		success:function(response){
			data = response.data;
				$('#stateId').html("");
                $('#stateId').html('<option value="" disabled selected>--Select State--</option>');
                for(i=0; i<data.length;i++){
                    $('#stateId').append('<option value="' + data[i].id + '">' + data[i].name + '</option>');
                }
			
		}
	});
}

function getAllDistricts(stateId){
	var stateId = {"stateId": stateId}
	$.ajax({
		url: 'districtlist',
		type: 'post',
		datatype: 'json',
		data: JSON.stringify(stateId),
		contentType: 'application/json',
		success:function(response){
			data = response.data;
			$('#districtId').html("");
            $('#districtId').html('<option value="" disabled selected>--Select District--</option>');
            for(i=0; i<data.length;i++){
                $('#districtId').append('<option value="' + data[i].districtId + '">' + data[i].name + '</option>');
            }
		}
	});
}

function getAllAcName(selectedValue){
	var divisionId = {"districtId": selectedValue}
	$.ajax({
		url: 'acnamelist',
		type: 'post',
		datatype: 'json',
		data: JSON.stringify(divisionId),
		contentType: 'application/json',
		success:function(response){
			data = response.data;
			$('#acNameId').html("");
            $('#acNameId').html('<option value="" disabled selected>--Select ac--</option>');
            for(i=0; i<data.length;i++){
                $('#acNameId').append('<option value="' + data[i].id + '">' + data[i].name + '</option>');
            }
		}
	});
}
function getCamraDetails(){
	var obj = {
			"stateId": $('#stateId').val(),
			"districtId": $('#districtId').val(),
			"id": $('#acNameId').val()
			}
	
	$.ajax({
		async:false,
		url: 'camradetaillist',
		//url: 'camradetaillist_test',
		type: 'post',
		datatype: 'json',
		data: JSON.stringify(obj),
		contentType: 'application/json',
		
		success:function(response){
			
			var data = response.data;
			//alert(data);
			var gridValues = "";
			//$('.dataTable').empty();
			var si=1;
			var len = data.length;
			/*for(d=0;d<len;d++){
				var txt1 = "<div id='myModal"+si+"' class='modal fade' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal'>&times;</button>"+data[d][2]+"</div><div class='video-box'><video id='example-video-"+si+"' width=598 height=280 class='video-play video-js vjs-default-skin' controls><source src='http://13.233.57.161/live/cam"+si+"/playlist.m3u8' type='application/x-mpegURL'></video></div></div></div></div>";        // Create text with HTML
  			  
  			  $("body").append(txt1); 
  			  si++;
			}
			si=1;*/
			$('.dataTable').append(
					"<thead><tr><th>S.No</th><th>state</th><th>District</th><th>AC Name</th><th>Camera No</th><th>Polling booth</th><th>Status</th><th>Play</th></tr></thead>");
            	
			for(i=0; i<len;i++){
                 
    			 gridValues +='<tr><td data-label="siNo">'
            			   + si
            			   + '</td><td data-label="Sate">'
            			   + $("#stateId").find("option:selected").text()
			               + '</td><td data-label="District">'
			 			   + $("#districtId").find("option:selected").text()
			               + '</td><td data-label="AC Name">'
				 		   + $("#acNameId").find("option:selected").text()
			               + '</td><td data-label="Camera No">'
				 		   + data[i][2]
			               + '</td><td data-label="Polling booth">'
				 		   + data[i][3]
			               //+ '</td><td data-label="Status"><a href="#"><img src="resources/images/active.png"></a>Active'
    			 		   + '<td class="status-cam'+si+'" style="background: url(&quot;/resources/images/active.png&quot;) center center no-repeat; min-width: 115px; padding: 5px;"></td>'
			               + '</td><td data-label="Play"><button type="button" data-toggle="modal" data-target="#myModal'+si+'" class="btn btn-primary" href="javascript:;">PLAY</button>'
			               //+ '</td><td data-label="Play"><a data-toggle="modal" data-target="#myModal" class="btn btn-primary" href="javascript:;">PLAY</a>'
			               + '</td></tr>';
			       //---        
    			 var txt1 = "<div id='myModal"+si+"' class='modal fade' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal'>&times;</button>"+data[i][2]+"</div><div class='video-box'><video id='example-video-"+si+"' width=598 height=280 class='video-play video-js vjs-default-skin' controls><source src='http://13.233.57.161/live/cam"+si+"/playlist.m3u8' type='application/x-mpegURL'></video></div></div></div></div>";        // Create text with HTML
     			  
     			  $("body").append(txt1); 
     			  //---
    			  si++
            }
            $('.dataTable').append(gridValues);
            
		}
	
	});
}