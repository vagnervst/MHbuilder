$(document).ready(function ( ) {
        
    $("#itemsMenu").accordion({
            collapsible: true, 
            active: false
    });
    
    //-------------------------------------------------------- ACCORDION
    
    
    $(".item").draggable({
        helper: "clone",
        reverse: true,
        appendTo: "#character"
    });
    
    //-------------------------------------------------------- ITEM DRAGGABLE
    
    $("#character").droppable({
        drop: function(event, ui) {
            
            if(ui.helper[0].id === "infos") return;
            
            var equipmentImg = ui.helper[0].childNodes[0]; //Capture equipment image
            
            equipmentType = equipmentImg.getAttribute("value"); //Capture value attribute of image tag            
            
            var targetInfo; //Capture the text field to be changed, according to the equipment type
            var characterPart; //Capture the part of the body being equipped
            if(equipmentType === "helm") {
                characterPart = $("#head")[0];
                targetInfo = $(".field")[0];
            } else if(equipmentType === "chest") {
                characterPart = $("#body")[0];
                targetInfo = $(".field")[1];
            } else if(equipmentType === "arms") {
                characterPart = $("#arms")[0];
                targetInfo = $(".field")[2];
            } else if(equipmentType === "coil") {
                characterPart = $("#middle")[0];
                targetInfo = $(".field")[3];
            } else if(equipmentType === "greaves") {
                characterPart = $("#legs")[0];
                targetInfo = $(".field")[4];
            }
            
            if(targetInfo.childNodes.length > 0) 
            //Checks if there is a text already written in the equipment text field
            {
                targetInfo.removeChild(targetInfo.childNodes[0]);
            }
            
            var equipmentName = equipmentImg.getAttribute("title");
                                    
            var infoTextNode = document.createElement("p");
            infoTextNode.appendChild( document.createTextNode(equipmentName) );
            targetInfo.appendChild(infoTextNode);
                                    
            var imgEquiped = characterPart.getElementsByTagName("img");
            if(imgEquiped.length > 0) {
                $(characterPart.getElementsByTagName("img")[0]).remove();
            }
            
            characterPart.appendChild(equipmentImg);
        }
    });
    
    //-------------------------------------------------------- CHARACTER DROPPABLE
    
    $(".item").click(function() {
        
        $(this).animate({
            backgroundColor: "black",
            borderRadius: "50px"
        }, 120, function() {
            $(this).animate({
                backgroundColor: "#D9CDBF",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "10px",
                borderBottomLeftRadius: "0px"
            }, 120)
        })
        
        var equipImg = (this.getElementsByTagName("img")[0]);
        var equipType = equipImg.getAttribute("value");
        
        var characterPart, targetInfo;
        if(equipType === "helm") {
            characterPart = $("#head")[0];
            targetInfo = $(".field")[0];
        } else if(equipType === "chest") {
            characterPart = $("#body")[0];
            targetInfo = $(".field")[1];
        } else if(equipType === "arms") {
            characterPart = $("#arms")[0];
            targetInfo = $(".field")[2];
        } else if(equipType === "coil") {
            characterPart = $("#middle")[0];
            targetInfo = $(".field")[3];
        } else if(equipType === "greaves") {
            characterPart = $("#legs")[0];
            targetInfo = $(".field")[4];
        }
        
        var equipmentName = document.createElement("p");
        equipmentName.appendChild(document.createTextNode(equipImg.getAttribute("title")));
        
        if(targetInfo.childNodes.length > 0) {
            targetInfo.removeChild(targetInfo.childNodes[0]);
        }
        
        targetInfo.appendChild(equipmentName);
        
        var imgEquiped = characterPart.getElementsByTagName("img");
        if(imgEquiped.length > 0) {
            $(characterPart.getElementsByTagName("img")[0]).remove();
        }
        
        $(equipImg).clone().appendTo(characterPart);
    });
    
    //-------------------------------------------------------- CLICK ADD
    
    
    $("#head, #body, #arms, #middle, #legs").click(function() {
        var bodyPart = this.id;
        
        var partInfo;
        if(bodyPart === "head") {
            partInfo = $(".field")[0];
        } else if(bodyPart === "body") {
            partInfo = $(".field")[1];
        } else if(bodyPart === "arms") {
            partInfo = $(".field")[2];
        } else if(bodyPart === "middle") {
            partInfo = $(".field")[3];
        } else if(bodyPart === "legs") {
            partInfo = $(".field")[4];
        }
        
        console.log(this);
        
        partInfo.removeChild(partInfo.childNodes[0]);
        console.log(this.getElementsByTagName("img"));        
        $(this.getElementsByTagName("img")[0]).remove();                                
    });
    
    //-------------------------------------------------------- REMOVE EQUIPMENT FUNCTION
    
    $("#infos").draggable({
        helper: 'none'
    });
    
    
    $("#infos").on("mouseup mousedown", function(event) { // CHANGE CURSOR WHEN HOVER
        
        if(event.type === "mousedown") {
            $(this).css("cursor", "-webkit-grabbing");
            $(this).css("cursor", "-moz-grabbing");
        } else if(event.type === "mouseup") {
            $(this).css("cursor", "-webkit-grab");
            $(this).css("cursor", "-moz-grab");
        }
        
    });
    
    //-------------------------------------------------------- INFO BOX DRAGGABLE
    
    var slideImages = document.getElementsByClassName("banner");
    var slideIndex = 0;
    
    (function repeater() {
        
        if(slideIndex >= slideImages.length) {
            slideIndex = 0;
        }
        
        for( var i = 0; i < slideImages.length; ++i ) {
            if( i === slideIndex ) {
              slideImages[i].style.display = "block";  
            } else { 
                slideImages[i].style.display = "none";
            }
        }
        
        ++slideIndex;
        setTimeout(repeater, 5000);
    })();
});