function checkCharater(name) {
var rgx = /^[a-zA-Z0-9 \s , ! ? = ( ) + - * / # < > ; & ]{1,}$/;
    return rgx.test(name);
}
function sort(){
    var num=0;
    $(".question").each(function(i) {
        $(this).find("b").text(String.fromCharCode(parseInt(65+num)));
        num++;
    });
}
function sortTB(){
    var num=1;
    $("tbody").each(function(i) {
        $(this).find("th").text(parseInt(num));
        num++;
    });
}
function checkVadidate(){
    var tem=true;
    if(checkCharater($(".cauhoi").find("textarea").val().trim())){
        $(".cauhoi").find("p").removeClass("text-danger");
        $(".cauhoi").find("p").addClass("text-primary");
        $(".cauhoi").find("p").text('Nhập hợp lệ')
    }else{
        $(".cauhoi").find("p").removeClass("text-primary");
        $(".cauhoi").find("p").addClass("text-danger");
        $(".cauhoi").find("p").text('Nhập không hợp lệ')
        tem=false;
    }
    
    $(".question").each(function(i) {
        var check=$(this).find("textarea");
        if(!checkCharater(check)){
            $(this).find("p").removeClass("text-danger");
            $(this).find("p").addClass("text-primary");
            $(this).find("p").text('Nhập hợp lệ')
        }else{
            $(this).find("p").removeClass("text-primary");
            $(this).find("p").addClass("text-danger");
            $(this).find("p").text('Nhập  không hợp lệ')
            tem=false;
        }
    });
    return tem;
}
// alert(checkCharater("ajdhajd abda ! ? ;"));
$(document).ready(function () {
    
    $('#addCH').click(function () {
       var tenCH="b";
        const qs=' <div class="question pt-5"><div class="form-group pt-4" ><div class="row"><div class="col-md-6"><label for="exampleFormControlTextarea1" >'+
        'Anser <b class="ten">'+tenCH+'</b> </label></div><div class="col-md-6 float-right"><div style="width: 1.5rem; height: 1.5rem; " class="rounded-circle border float-right"><a href="" class="float-right mr-1 mb-2 xoaCH"><i class="fa fa-close " style="color: #dc3545;"></i></a></div></div></div>'+
        '<textarea class="form-control " id="'+("cautraloi" +tenCH)+'" rows="3" required></textarea>' +'<p class="text-danger cautraloi"></p>'+
        '</div><div class="form-check d-inline"><input class="form-check-input d-inline" type="checkbox" name="iscorect" id="iscorect'+tenCH+'" value="option1" ><label class="form-check-label" for="exampleRadios1">is corect anser</label></div></div>';
        if($('.question').length==0){
            tenCH="a";
            $(".cauhoi").after(qs);
            sort();
            alert("add cusscess")
        }else if($('.question').length==5){
            alert("max")
        }else {
            $(".question").last().after(qs);
            sort();
            alert("add row success");
        }

        $('.xoaCH').click(function (even) {
            if(confirm("Dou you want delete")){
                even.preventDefault();
                $(this).closest('.question').remove();
                var num=0;
                $(".question").each(function(i) {
                    $(this).find("b").text(String.fromCharCode(parseInt(65+num)));
                    num++;
                });
            }
        });
    
    });

     $('.xoaCH').click(function (even) {
        if(confirm("Dou you want delete")){
            even.preventDefault();
            $(this).closest('.question').remove();
            var num=0;
            $(".question").each(function(i) {
                $(this).find("b").text(String.fromCharCode(parseInt(65+num)));
                num++;
            });
        }
    });
    
    $('.removetb').click(function (even) {
        if (confirm('Are you want to delete')) {
            even.preventDefault();
            $(this).closest("tbody ").remove();
           sortTB();
        }
     });

     $("#formsibmit").submit(function (event) {
        event.preventDefault();
        
        if(checkVadidate()){
            if ($("#Singer").is(":checked")) {
                if($(".question").length>=2 || $(".question").length <=5){
                    var check= $('input:checkbox:checked').length;
                    var duaracuahoi = $('#duaracuahoi').val().trim();
                   if( check==1){
                        var index="";
                        var name=0;
                       
                        $(".question").each(function(i) {
                             var texta=$(this).find(" textarea ").val();
                            // alert(texta)
                            if ($(this).find('input:checkbox').is(":checked")) {
                                index+=    
                                '<tr>'    +
                                    '<td colspan="2" class="text-right">' +
                                            '<b style="color: red;">'+(String.fromCharCode(parseInt(name+65)))+'</b>' +
                                    '</td>'+
                                    '<td colspan="2" style="color: red;">'+
                                        // String.fromCharCode(texta) +
    
                                        texta +
                                    ' </td>'+
                                '</tr>' +' '
                            //    alert(name);
                            }else{
                                index+=    
                                '<tr>'+
                                    '<td colspan="2" class="text-right">' +
                                        '<b >'+(String.fromCharCode(parseInt(name+65)))+'</b>' +
                                    '</td>'+
                                    '<td colspan="2">'+
                                    // String.fromCharCode(texta) +
                                    texta+
                                    ' </td>'+
                                '</tr>' +' '
                            }
                            name++;
                        });
                        // alert(index); 
                       var tbody= ' <tbody class="remove">'+
                                        '<tr>'+
                                            '<th scope="row">'+
                                                parseInt($("table tbody").length+1)+
                                            '</th>'+
                                            '<td>Singer choise</td>'+
                                            ' <td>'+duaracuahoi+' </td>'+ 
                                        '<td>'+
                                            '<div style="width: 1.5rem; height: 1.5rem; " class="rounded-circle border float-right">'+
                                                '<a href="" class="float-right mr-1 mb-2 removetb"><i class="fa fa-close"></i></a>'+
                                            '</div>'+
                                        ' </td>'+
                                        ' </tr>'+
                                            index +
                                    ' </tbody>'
                        $('table').append(tbody);
                        alert("add row into table cusscess")
                   }else{
                       alert("The answer must be 1 anser" )
                   }
                }
            }else if($("#Muti").is(":checked")){
                var index="";
                var name=0;
               
                $(".question").each(function(i) {
                     var texta=$(this).find(" textarea ").val();
                    // alert(texta)
                    if ($(this).find('input:checkbox').is(":checked")) {
                        index+=    
                        '<tr>'    +
                            '<td colspan="2" class="text-right">' +
                                    '<b style="color: red;">'+(String.fromCharCode(parseInt(name+65)))+'</b>' +
                            '</td>'+
                            '<td colspan="2" style="color: red;">'+
                                // String.fromCharCode(texta) +
    
                                texta +
                            ' </td>'+
                        '</tr>' +' '
                    //    alert(name);
                    }else{
                        index+=    
                        '<tr>'+
                            '<td colspan="2" class="text-right">' +
                                '<b >'+(String.fromCharCode(parseInt(name+65)))+'</b>' +
                            '</td>'+
                            '<td colspan="2">'+
                            // String.fromCharCode(texta) +
                            texta+
                            ' </td>'+
                        '</tr>' +' '
                    }
                    name++;
                });
                // alert(index); 
                var tbody= ' <tbody class="remove">'+
                                    '<tr>'+
                                        '<th scope="row">'+
                                            parseInt($("table tbody").length+1)+
                                        '</th>'+
                                        '<td>Mutil choise</td>'+
                                        ' <td>'+duaracuahoi+' </td>'+ 
                                    '<td>'+
                                        '<div style="width: 1.5rem; height: 1.5rem; " class="rounded-circle border float-right">'+
                                            '<a href="" class="float-right mr-1 mb-2 removetb"><i class="fa fa-close"></i></a>'+
                                        '</div>'+
                                    ' </td>'+
                                    ' </tr>'+
                                        index +
                                ' </tbody>'
                    $('table').append(tbody);
                    alert("add row into table cusscess")
            }else{
                alert("error you doesn't choose the singer or muti choise")
            }
        }else{
            alert("input errro")
        }
     });


     
 

});

$(document).ready(function () {

    $('.removetb').click(function (even) {
        if (confirm('Are you want to delete')) {
            even.preventDefault();
            $(this).closest("tbody ").remove();
           sortTB();
        }
     });

});
$(document).ready(function () {
    $('.xoaCH').click(function (even) {
        if(confirm("Dou you want delete")){
            even.preventDefault();
            $(this).closest('.question').remove();
            var num=0;
            $(".question").each(function(i) {
                $(this).find("b").text(String.fromCharCode(parseInt(65+num)));
                num++;
            });
        }
    });

});
$(document).ready(function () {
    $('#huy').click(function () {
        if(confirm("Dou you want clear all data input")){
            $('input[type="text"]').val('');
            $('textarea').val('');
            $('input[type="radio"]').prop('checked', false);
            $('input[type="checkbox"]').prop('checked', false);
            $("p .text-danger").val('');
            $("p").remove();
        }
    });
});

   
