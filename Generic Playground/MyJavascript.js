var stepNumber = 1;
var thing = "ants";

function Test() {
    var reportServer = "http://it-bmorin-d/ReportServer_SQL2016";
    var mainLocale = "/Pages/ReportViewer.aspx?";
    var reportFolder = "/SSRSTesting";
    var report = "/OrdersAndSkus&rs:Command=Render";
    var param = "&Order=" + $("#inputValue").val();
    var turnOffExcess = "&rc:parameters=false&rc:Toolbar=false";
    
    var combined = 
    //"http://it-bmorin-d/ReportServer_SQL2016/Pages/ReportViewer.aspx?/SSRSTesting/OrdersAndSkus&rs:Command=Render" 
    reportServer + mainLocale + reportFolder + report + param + turnOffExcess

    window.open(combined, "MsgWindow", "top=100,left=400,width=400,height=200");
//     ="javascript:void(window.open('" & Globals!ReportServerUrl &
//  "/Pages/ReportViewer.aspx?" & Globals!ReportFolder &
// "/OrdersAndSkus&rs:Command=Render&Order=" & Fields!OrderId.Value &
// "&rc:parameters=false&rc:Toolbar=false', 'MsgWindow', 'top=100,left=400,width=400,height=200'))"
}