function redirect_to_full_url(full_path) {
    window.open(full_path)
}

$(function(){
    $.ajax({
        type: 'GET',
        contentType: 'application/json',
        dataType: "json",
        headers: { "Accept": "application/json"},
        url: "http://localhost:8000/url/",
        crossDomain:true,
        success: function(data){
            var event_data = '';
            $.each(data, function(index, value){
                /*console.log(value);*/
                event_data += '<tr>';
                event_data += '<td>'+value.full_path+'</td>';
                event_data += '<td><a href="' + value.full_path + '"> '+value.short_path+'</a></td>';
                event_data += '</tr>';
            });
            $("#table_urls").append(event_data);
        }
    });
});

function createUrl(full_url) {
    var full_url  = document.getElementById("url_input").value;
    $.ajax({
      type: "POST",
      url: "http://localhost:8000/url/",
      data: {"url": full_url},
      dataType: "json",
      success: function(data){
           alert(data.message);
           location.reload();
      },
      error: function(data){
           alert(data.responseJSON.message);
      }
    });
}

//var xhttp = new XMLHttpRequest();
//
//xhttp.onreadystatechange = function() {
//    if (this.readyState == 4 && this.status == 200) {
//       // Typical action to be performed when the document is ready:
//       console.log(xhttp.responseText)
//    }
//};
//xhttp.open("GET", "http://localhost:8000/url", true);
//xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
//xhttp.send();