//Javascript is completed here for you to study
$(document).ready(function(){
    $("#addButton").click(function(){
        var num1 = parseInt($("#a").val());  
        var num2 = parseInt($("#b").val());
        $.ajax({
            type:"GET",
            dataType:'json',
            url: 'http://192.168.43.169:3000/add',
            data: {
                "a": num1,
                "b": num2
            },
            success: function(data){
                if(data){
                    $("#result").text(data);
                }else{
                    alert('Something is fucked up');
                }
                
            }
        });
    })
});