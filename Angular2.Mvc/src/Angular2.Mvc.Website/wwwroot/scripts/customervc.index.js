
$(function () {

    

    renderViewComponent();

    function renderViewComponent() {


        if (!window.location.origin) { // Some browsers (mainly IE) does not have this property, so we need to build it manually...
            window.location.origin = window.location.protocol + '//' + window.location.hostname + (window.location.port ? (':' + window.location.port) : '');
        }
        var getUri = window.location.origin.concat("/", "/Basic/CustomerVc/GetView/");

        $("#ajaxCust").html("");
        $.ajax({
            dataType: "html",
            url: getUri + "?name=Leia",
            success: function (cust) {
                $("#ajaxCust").append(cust);
            }
        })
    }
    
})