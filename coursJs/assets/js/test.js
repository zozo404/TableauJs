//code theo
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script>
    Count = 10;



    $( function() {
    $( "#empl1" ).draggable({ revert: "valid" });
    $( "#empl2" ).draggable({ revert: "valid" });
    $( "#empl3" ).draggable({ revert: "valid" });

    $( ".droppable" ).droppable({
    drop: function( event, ui ) {
    //ui va contenir des trucs
    //ui.draggable c'est le noeud html qui est déplacé
    classOrigine=$(ui.draggable).attr("id");


    $( this )
    .addClass( classOrigine );

}
});
} );
</script>

//mon code
/*
<script src="assets/js/jquery.draggableTouch.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
        <!-- <script src="/path/to/cdn/jquery.slim.min.js"></script> -->
        <script>
            $(document).ready(function() {
                $("#enable").click(function() {
                    $(".draggable").draggableTouch();
                });
                $("#enable-transform").click(function() {
                    $(".draggable").draggableTouch({useTransform:true});
                });
                $("#disable").click(function() {
                    $(".draggable").draggableTouch("disable");
                });

                $(".draggable").bind("dragstart", function(e, pos) {
                    console.log("dragstart:", this, pos.left + "," + pos.top);
                }).bind("dragend", function(e, pos) {
                    console.log("dragend:", this, pos.left + "," + pos.top);
                });
            });

            // if this is a touch device, we assume we don't have a visible console and use
            // a crappy homemade one :)
            if ("ontouchstart" in document.documentElement) {
                window.console = {
                    log: function(a, b, c) {
                        if (a && b && c)
                            $("<div>" + a + " " + b + " " + c + "</div>").appendTo($("#console"));
                        else if (a && b)
                            $("<div>" + a + " " + b + "</div>").appendTo($("#console"));
                        else if (a)
                            $("<div>" + a + "</div>").appendTo($("#console"));
                    }
                };
            }
        </script>
 */

