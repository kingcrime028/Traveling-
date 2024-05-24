function openSlideMenu () {
    document.getElementById('menu').style.width = '250px';
    document.getElementById('content').style.marginLeft = '250px';
  }
  
  function closeSlideMenu () {
    document.getElementById('menu').style.width = '0';
    document.getElementById('content').style.marginLeft = '0';
  }
  





function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var num=document.getElementById("num_row"+no);
 var country=document.getElementById("country_row"+no);
 var numofT=document.getElementById("numberofTourists_row"+no);
	
 var number_data=num.innerHTML;
 var country_data=country.innerHTML;
 var numberofTourists_data=numofT.innerHTML;
	
 num.innerHTML="<input type='text' id='num_text"+no+"' value='"+number_data+"'>";
 country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
 numofT.innerHTML="<input type='text' id='numberofT_text"+no+"' value='"+numberofTourists_data+"'>";
}

function save_row(no)
{
 var num_val=document.getElementById("num_text"+no).value;
 var country_val=document.getElementById("country_text"+no).value;
 var numberofT_val=document.getElementById("numberofT_text"+no).value;

 document.getElementById("num_row"+no).innerHTML=num_val;
 document.getElementById("country_row"+no).innerHTML=country_val;
 document.getElementById("numberofTourists_row"+no).innerHTML=numberofT_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_num=document.getElementById("num").value;
 var new_country=document.getElementById("country").value;
 var new_Tdata=document.getElementById("#ofT").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_num+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td id='age_row"+table_len+"'>"+new_Tdata+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("num").value="";
 document.getElementById("country").value="";
 document.getElementById("#ofT").value="";
}