
	$( document ).ready(function() {

		$("#time").hide();
		$("#id_school").hide();
		$("#id_zocbo").hide();

	});

	function time_sche(){
		$("#id_school").hide();
		$("#time").show();
		$("#id_zocbo").hide();
	}


   function school(){
		$("#id_school").show();
		$("#time").hide();
		$("#id_zocbo").hide();

    }

	function zocbo(){
		$("#id_school").hide();
		$("#time").hide();
		$("#id_zocbo").show();

    }
    function mainpage(){
        $("#id_school").hide();
		$("#time").hide();
		$("#id_zocbo").hide();
    }