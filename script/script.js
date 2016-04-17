$(document).ready(function(){
    
    //--------------------------------------------------------------------------------------------------------------
    
    $("#itemsMenu").accordion({
        collapsible: true, 
        active: false
    });
    
    //--------------------------------------------------------------------------------------------------------------
   
    $("#infos").draggable({
        
    });
    
    //--------------------------------------------------------------------------------------------------------------
    
    $(".item").draggable({ 
        helper: 'clone', 
        revert: false, 
        appendTo: "#main",
        start: function(event, ui) {
            var divItem = ui.helper[0];
            divItem.style.border = "0";            
        },
        stop: function(event, ui) {                          

        }
    });
    
    //--------------------------------------------------------------------------------------------------------------
    
    var paragraph;
    $("#head").droppable({ 
        drop: function(event, ui) {
            var equipmentDOM = ui.helper[0]; //Captura imagem
            
            console.log(equipmentDOM);
            
            if(equipmentDOM.id === "infos") return false;
            
            var img = equipmentDOM.childNodes[0];            
            img.style.position = "absolute";
            img.style.width = "90px";
            img.style.height = "90px";
            img.style.top = "-15px";
            img.style.left = "-15px";                        
            $(img).appendTo("#head");                        
            
            $(equipmentDOM).remove();
            
            var $p = document.createElement("p");
            var equipType = equipmentDOM.attributes[1].textContent;
            var equipName = equipmentDOM.title;
            $p.appendChild(document.createTextNode(equipName));
            $p.style.position = "absolute";
            $p.style.margin = 5 + 'px';

            var camp;
            if(equipType === "helm") {
                camp = $(".field:nth-child(2)");
            } else if(equipType === "chest") {
                camp = $(".field:nth-child(3)");
            } else if(equipType === "arms") {
                camp = $(".field:nth-child(4)");
            } else if(equipType === "greaves") {
                camp = $(".field:nth-child(5)");
            } else if(equipType === "boots") {
                camp = $(".field:nth-child(6)");
            }

            if(paragraph === equipName) {                
                var insertedObjects = document.getElementById("main").getElementsByClassName("item");
                for(var i = 0; i < insertedObjects.length; ++i) {
                    if(insertedObjects[i] === object)
                        insertedObjects[i+1].remove();
                }

            } else if(paragraph !== equipName || paragraph === "undefined") { 
                camp[0].innerText = "";
                $(camp).append($p);
                paragraph = camp.text();

                var toRemove = ui.helper;
                for(var i = 0; i < toRemove.length; ++i) {
                    if(toRemove[i].attributes[1].value !== camp.text()) {

                    }
                }
            }                                               
            
        }
    });
    
    //--------------------------------------------------------------------------------------------------------------
    
    /*var squaresInserted = document.getElementById("main").getElementsByClassName("item");
    var interval = setInterval(function() {
        if(squaresInserted.length >= 0) {
            $("#main img").click(function() {
                $(this).remove();
            });
        } else {
            clearInterval(interval);
        }
    }, 10);*/
    
    //--------------------------------------------------------------------------- 
    
    $("#infos, .holder").on("mousedown mouseup", function(event) {
        if(event.type == "mousedown") {        
            $(this).css("cursor", "-webkit-grabbing");
            $(this).css("cursor", "-moz-grabbing");
        } else {
            $(this).css("cursor", "-webkit-grab");
            $(this).css("cursor", "-moz-grab");
        }
    });
    
    //--------------------------------------------------------------------------- ALTERA O CURSOR AO CLICAR NA CAIXA DE INFORMAÇÕES
});
