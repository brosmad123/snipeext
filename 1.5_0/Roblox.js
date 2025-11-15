var parts = window.location.search.substr(1).split("&");
    var $_GET = {};
    for (var i = 0; i < parts.length; i++) {
        var temp = parts[i].split("=");
        $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
    }

    if ($_GET['SnipeExtmaxPrice']) {
        if (!document.getElementsByClassName("age-bracket-label-username")[0]) {
                alert("Please make sure you are signed in to your Roblox account in order to use SnipeExt.");
                window.location.replace("https://www.roblox.com/");
            }

        function checkResellerContainer() {
        if (!document.getElementsByClassName("reseller-price-container")[1] && document.getElementsByClassName("age-bracket-label-username")[0]) {
            window.location.replace("https://www.rolimons.com/deals?SnipeExtname=" + $_GET.SnipeExtitemName + "&SnipeExtprice=" + Number($_GET.SnipeExtprice));
        }
    }
    setTimeout(checkResellerContainer, 15000);

    function keepRefreshingEvery30Seconds() {
        if (document.getElementsByClassName("age-bracket-label-username")[0]) {
        window.location.replace("https://www.rolimons.com/deals");
        }
    }
    setInterval(keepRefreshingEvery30Seconds, 30000);

    function checkPurchaseButton() {
    if ($_GET['SnipeExtmaxPrice'] && document.getElementsByClassName("age-bracket-label-username")[0]) {
        if (!document.getElementsByClassName("PurchaseButton")[0]) {
            window.location.replace("https://www.rolimons.com/deals");
        }
    }
}
setTimeout(checkPurchaseButton, 20000);
var parentGuest = document.getElementsByClassName("content")[0];
var childGuest = document.createElement("div");
childGuest.id = "SnipeExtRobloxNotification";
parentGuest.insertAdjacentElement("beforebegin", childGuest);

document.getElementById("SnipeExtRobloxNotification").innerHTML = '<div style="text-align:center;position:relative;z-index:99999;background-color:white;border:2px solid black;border-radius:10px;margin-left:auto;margin-right:auto;height:25px;width:80%;"><a style="color:black;">SnipeExt may take a couple of seconds to redirect the page.</a></div>';
    }

if ($_GET['SnipeExtmaxPrice']) {
function script() {
    if ($_GET['SnipeExtmaxPrice']) {
        if (document.getElementsByClassName("text-robux-lg")[0]) {
        itemPrice = document.getElementsByClassName("text-robux-lg")[0].innerText;
        if (itemPrice.includes(",")) {
            itemPrice = itemPrice.replaceAll(",", "");
        }
        if (itemPrice.includes("(")) {
            itemPrice = itemPrice.replace(/\(.*$/, "");
        }
    }
    }
    
    if ($_GET['SnipeExtmaxPrice'] && document.getElementsByClassName("text-robux-lg")[0]) {
    if ($_GET['SnipeExtmaxPrice'] && !$_GET.SnipeExtminPrice && itemPrice && document.getElementsByClassName("age-bracket-label-username")[0]) {
        sessionStorage.setItem("SnipeExtpurchased", "false");
        if (Number($_GET.SnipeExtprice) >= Number(itemPrice)) {
        if (Number(itemPrice) <= Number($_GET['SnipeExtmaxPrice'])) {
            if (document.getElementsByClassName("reseller-price-container")[1]) {
                var subtractDealPercent = 110 - Number($_GET.SnipeExtdealPercent);
                var dealPercentAsDecimal = parseFloat(subtractDealPercent) / 100.0;
                otherResellerPrice = document.getElementsByClassName("reseller-price-container")[1].innerText;
                if (otherResellerPrice.includes(",")) {
                    otherResellerPrice = otherResellerPrice.replaceAll(",", "");
                }
                if (otherResellerPrice.includes("(")) {
                    otherResellerPrice = otherResellerPrice.replace(/\(.*$/, "");
                }

                if (document.getElementsByClassName("text-robux-lg")[0]) {
            if (Number(otherResellerPrice) * Number(dealPercentAsDecimal) >= Number(document.getElementsByClassName("text-robux-lg")[0].innerText.replaceAll(",", ""))) {
                document.getElementsByClassName("PurchaseButton")[0].click();
                if (document.getElementsByClassName("modal-button")[0]) {
            if (!document.getElementsByClassName("modal-button")[0].innerText.includes("Robux")) {
                sessionStorage.setItem("SnipeExtpurchased", "true");
            sessionStorage.removeItem("SnipeExtpurchased");
        document.getElementsByClassName("modal-button")[0].click();
        setTimeout(confirmPurchase, 5000);
        function confirmPurchase() {
        if (document.getElementsByClassName("modal-button")[0].innerText == "Customize") {
    window.location.replace("https://www.rolimons.com/deals?SnipeExtname=" + $_GET.SnipeExtitemName + "&SnipeExtprice=" + Number($_GET.SnipeExtprice) + "&SnipeExtspent=" + Number($_GET.SnipeExtprice));
        }
        if (!document.getElementsByClassName("modal-button")[0].innerText == "Customize") {
            window.location.replace("https://www.rolimons.com/deals?SnipeExtname=" + $_GET.SnipeExtitemName + "&SnipeExtprice=" + Number($_GET.SnipeExtprice));
        }
    }
    }
    }
            }
        }
    }
        }
                }
                if (sessionStorage.getItem("SnipeExtpurchased")) {
                if (sessionStorage.getItem("SnipeExtpurchased") == "false") {
                    setTimeout(replacePage, 5000);
            function replacePage() {
                    sessionStorage.removeItem("SnipeExtpurchased");
        window.location.replace("https://www.rolimons.com/deals?SnipeExtname=" + $_GET.SnipeExtitemName + "&SnipeExtprice=" + Number($_GET.SnipeExtprice));
            }
                }
            }
    }
    if ($_GET['SnipeExtmaxPrice'] && $_GET.SnipeExtminPrice && itemPrice && document.getElementsByClassName("age-bracket-label-username")[0]) {
        sessionStorage.setItem("SnipeExtpurchased", "false");
        if (Number(itemPrice) <= Number($_GET['SnipeExtmaxPrice'])) {
            if (Number(itemPrice) >= Number($_GET.SnipeExtminPrice)) {
            if (Number($_GET.SnipeExtprice) >= Number(itemPrice)) {
            if (document.getElementsByClassName("reseller-price-container")[1]) {
                var subtractDealPercent = 110 - Number($_GET.SnipeExtdealPercent);
                var dealPercentAsDecimal = parseFloat(subtractDealPercent) / 100.0;
                otherResellerPrice = document.getElementsByClassName("reseller-price-container")[1].innerText;
                if (otherResellerPrice.includes(",")) {
                    otherResellerPrice = otherResellerPrice.replaceAll(",", "");
                }
                if (otherResellerPrice.includes("(")) {
                    otherResellerPrice = otherResellerPrice.replace(/\(.*$/, "");
                }

                if (document.getElementsByClassName("text-robux-lg")[0]) {
            if (Number(otherResellerPrice) * Number(dealPercentAsDecimal) >= Number(document.getElementsByClassName("text-robux-lg")[0].innerText.replaceAll(",", ""))) {
                document.getElementsByClassName("PurchaseButton")[0].click();
            if (document.getElementsByClassName("modal-button")[0]) {
                if (!document.getElementsByClassName("modal-button")[0].innerText.includes("Robux")) {
                    sessionStorage.setItem("SnipeExtpurchased", "true");
                        sessionStorage.removeItem("SnipeExtpurchased");
                    document.getElementsByClassName("modal-button")[0].click();
                    setTimeout(confirmPurchase2, 5000);
                    function confirmPurchase2() {
                    if (document.getElementsByClassName("modal-button")[0].innerText == "Customize") {
                window.location.replace("https://www.rolimons.com/deals?SnipeExtname=" + $_GET.SnipeExtitemName + "&SnipeExtprice=" + Number($_GET.SnipeExtprice) + "&SnipeExtspent=" + Number($_GET.SnipeExtprice));
                    }
                    if (!document.getElementsByClassName("modal-button")[0].innerText == "Customize") {
                        window.location.replace("https://www.rolimons.com/deals?SnipeExtname=" + $_GET.SnipeExtitemName + "&SnipeExtprice=" + Number($_GET.SnipeExtprice));
                    }
                }
                }
    }
            }
        }
    }
                }
            }
        }
        if (sessionStorage.getItem("SnipeExtpurchased")) {
        if (sessionStorage.getItem("SnipeExtpurchased") == "false") {
            setTimeout(replacePage2, 5000);
            function replacePage2() {
            sessionStorage.removeItem("SnipeExtpurchased");
window.location.replace("https://www.rolimons.com/deals?SnipeExtname=" + $_GET.SnipeExtitemName + "&SnipeExtprice=" + Number($_GET.SnipeExtprice));
            }
        }
    }
        
    }
    }

    if ($_GET['SnipeExtmaxPrice'] && !document.getElementsByClassName("text-robux-lg")[0] && document.getElementsByClassName("age-bracket-label-username")[0]) {
        if ($_GET.SnipeExtitemName) {
        window.location.replace("https://www.rolimons.com/deals?SnipeExtname=" + $_GET.SnipeExtitemName);
        }
        if (!$_GET.SnipeExtitemName) {
            window.location.replace("https://www.rolimons.com/deals");
        }
    }
    }
    
      var interval;
      
      function checkElements() {
        if (document.getElementsByClassName("PurchaseButton")[0] && document.getElementsByClassName("reseller-price-container")[1]) {
          clearInterval(interval);
          script();
        }
      }
      
      interval = setInterval(checkElements, 100);
    }