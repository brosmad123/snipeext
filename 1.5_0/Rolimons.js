var parts = window.location.search.substr(1).split("&");
var $_GET = {};
for (var i = 0; i < parts.length; i++) {
    var temp = parts[i].split("=");
    $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
}

if ($_GET.SnipeExtspent) {
if (sessionStorage.getItem("SnipeExtbudget")) {
    sessionStorage.setItem("SnipeExtbudget", Number(sessionStorage.getItem("SnipeExtbudget")) - Number($_GET.SnipeExtspent));
    window.location.replace("https://www.rolimons.com/deals");
}
}

function reloadPageEvery1Hour() {
if (sessionStorage.getItem("SnipeExtbudget")) {
    window.location.reload();
}
}
setInterval(reloadPageEvery1Hour, 3600000);

InternalServerError = "false";
RefreshPopup = "false";
function checkForError() {
if (sessionStorage.getItem("SnipeExtbudget") && InternalServerError == "false") {
var regex = /internal server error/i;
if (regex.test (document.body.innerText)) {
    InternalServerError = "true";
    window.location.reload();
}
}
if (sessionStorage.getItem("SnipeExtbudget") && RefreshPopup == "false") {
    if (document.getElementById("timeout_dialog").classList.contains("show")) {
        RefreshPopup = "true";
        window.location.reload();
    }
if (sessionStorage.getItem("SnipeExtbudget")) {
    if (!document.getElementsByTagName("nav")[0]) {
        window.location.reload();
    }
}
}
}
setInterval(checkForError, 1000);

function setFilters() {
    allFiltersSuccessful = "false";
    filterFailed1 = "true";
    filterFailed2 = "true";
    filterFailed3 = "true";
    filterFailed4 = "true";
    if (Number(document.getElementById("SnipeExtbudgetInput").value) > 0 && Number(document.getElementById("SnipeExtmaxPriceInput").value) > 0 && Number(document.getElementById("SnipeExtdealInput").value) >= 0 && document.getElementById("SnipeExtdealInput").value !== "" && document.getElementById("SnipeExtdealInput").value <= 100) {
    if (!document.getElementById("SnipeExtbudgetInput").value.includes(".")) {
    if (!document.getElementById("SnipeExtbudgetInput").value.includes("-")) {
    if (!document.getElementById("SnipeExtbudgetInput").value.startsWith("0")) {
        filterFailed1 = "false";
    }
}
    }

    if (Number(document.getElementById("SnipeExtminPriceInput").value) > 0) {
        if (!document.getElementById("SnipeExtminPriceInput").value.includes(".")) {
        if (!document.getElementById("SnipeExtminPriceInput").value.includes("-")) {
        if (!document.getElementById("SnipeExtminPriceInput").value.startsWith("0")) {
            filterFailed2 = "false";
    }
}
        }
    }

    if (Number(document.getElementById("SnipeExtminPriceInput").value) == 0) {
        if (!document.getElementById("SnipeExtminPriceInput").value.includes(".")) {
        if (!document.getElementById("SnipeExtminPriceInput").value.includes("-")) {
        if (Number(document.getElementById("SnipeExtminPriceInput").value.length) == 1) {
            filterFailed2 = "false";
        }
    }
}
    }

    if (Number(document.getElementById("SnipeExtminPriceInput").value) == "") {
        if (!document.getElementById("SnipeExtminPriceInput").value.includes(".")) {
        if (!document.getElementById("SnipeExtminPriceInput").value.includes("-")) {
        if (!document.getElementById("SnipeExtminPriceInput").value.startsWith("0")) {
        if (Number(document.getElementById("SnipeExtminPriceInput").value.length) == 0) {
        filterFailed2 = "false";
        }
    }
    }
}
    }
    
    if (!document.getElementById("SnipeExtmaxPriceInput").value.includes(".")) {
    if (!document.getElementById("SnipeExtmaxPriceInput").value.includes("-")) {
    if (!document.getElementById("SnipeExtmaxPriceInput").value.startsWith("0")) {
    if (filterFailed2 == "false") {
        filterFailed3 = "false";
    }
    }
}
    }

    if (!document.getElementById("SnipeExtdealInput").value.includes(".")) {
        if (!document.getElementById("SnipeExtdealInput").value.includes("-")) {
            invalidZero = "false";
        if (document.getElementById("SnipeExtdealInput").value.startsWith("0")) {
            if (document.getElementById("SnipeExtdealInput").value.length > 1) {
                invalidZero = "true";
            }
        }
        if (invalidZero == "false") {
        if (document.getElementById("SnipeExtdealInput").value.length < 4) {
            filterFailed4 = "false";
        }
        }
    }
        }

        if (filterFailed1 == "false" && filterFailed2 == "false" && filterFailed3 == "false" && filterFailed4 == "false") {
            allFiltersSuccessful = "true";
        sessionStorage.setItem("SnipeExtbudget", document.getElementById("SnipeExtbudgetInput").value);
        sessionStorage.setItem("SnipeExtoriginalBudget", document.getElementById("SnipeExtbudgetInput").value);
    document.getElementById("SnipeExtbudgetInput").value = sessionStorage.getItem("SnipeExtbudget");
document.getElementById("SnipeExtrobuxRemaining").innerHTML = 'Remaining: <a style="color:green;">R$' + sessionStorage.getItem("SnipeExtbudget") + '</a>';
document.getElementById("SnipeExtoriginalRobux").innerHTML = 'Original amount: <a style="color:green;">R$' + sessionStorage.getItem("SnipeExtoriginalBudget") + '</a>';
if (Number(document.getElementById("SnipeExtminPriceInput").value) > 0) {
sessionStorage.setItem("SnipeExtminPrice", document.getElementById("SnipeExtminPriceInput").value);
    document.getElementById("SnipeExtminPriceInput").value = sessionStorage.getItem("SnipeExtminPrice");
}
    if (Number(document.getElementById("SnipeExtminPriceInput").value) == 0 || document.getElementById("SnipeExtminPriceInput").value == "") {
        if (sessionStorage.getItem("SnipeExtminPrice")) {
        sessionStorage.removeItem("SnipeExtminPrice");
        }
    }

        sessionStorage.setItem("SnipeExtmaxPrice", document.getElementById("SnipeExtmaxPriceInput").value);
    document.getElementById("SnipeExtmaxPriceInput").value = sessionStorage.getItem("SnipeExtmaxPrice");
    sessionStorage.setItem("SnipeExtdealPercent", document.getElementById("SnipeExtdealInput").value);
        document.getElementById("SnipeExtdealInput").value = sessionStorage.getItem("SnipeExtdealPercent");
        window.location.replace("https://www.rolimons.com/deals");

        }
    }
    if (allFiltersSuccessful == "false") {
            if (sessionStorage.getItem("SnipeExtbudget")) {
                sessionStorage.removeItem("SnipeExtbudget");
                }
            if (sessionStorage.getItem("SnipeExtoriginalBudget")) {
                    sessionStorage.removeItem("SnipeExtoriginalBudget");
                }
            if (sessionStorage.getItem("SnipeExtminPrice")) {
                sessionStorage.removeItem("SnipeExtminPrice");
                }
            if (sessionStorage.getItem("SnipeExtmaxPrice")) {
                sessionStorage.removeItem("SnipeExtmaxPrice");
                }
            if (sessionStorage.getItem("SnipeExtdealPercent")) {
                sessionStorage.removeItem("SnipeExtdealPercent");
                }
                alert("You set one or more filter values that are not allowed. All of the filters have been reset. Please try again.");
                window.location.replace("https://www.rolimons.com/deals");

        }
}

function resetFilters() {
    if (sessionStorage.getItem("SnipeExtbudget")) {
    sessionStorage.removeItem("SnipeExtbudget");
    }
    if (sessionStorage.getItem("SnipeExtoriginalBudget")) {
        sessionStorage.removeItem("SnipeExtoriginalBudget");
        }
    if (sessionStorage.getItem("SnipeExtminPrice")) {
    sessionStorage.removeItem("SnipeExtminPrice");
    }
    if (sessionStorage.getItem("SnipeExtmaxPrice")) {
    sessionStorage.removeItem("SnipeExtmaxPrice");
    }
    if (sessionStorage.getItem("SnipeExtdealPercent")) {
        sessionStorage.removeItem("SnipeExtdealPercent");
        }
    window.location.replace("https://www.rolimons.com/deals");
}

if ($_GET['SnipeExtreset']) {
    resetFilters();
}

var parentGuest1 = document.getElementsByClassName("justify-content-between")[0];
var childGuest1 = document.createElement("div");
childGuest1.id = "SnipeExtDiv";
parentGuest1.insertAdjacentElement("afterend", childGuest1);
document.getElementById("SnipeExtDiv").appendChild(document.createElement("div")).outerHTML = '<div style="text-align:center;background-color:white;color:black;">Thanks for using SnipeExt!</div>';
document.getElementById("SnipeExtDiv").appendChild(document.createElement("div")).id = "SnipeExtrobuxRemaining";
document.getElementById("SnipeExtDiv").appendChild(document.createElement("div")).id = "SnipeExtoriginalRobux";
document.getElementById("SnipeExtDiv").appendChild(document.createElement("div")).id = "SnipeExtfilters";
document.getElementById("SnipeExtfilters").innerHTML = '<input id="SnipeExtbudgetInput" placeholder="budget*" type="number" style="color:black;" min="0" onkeypress="return event.charCode >= 48 && event.charCode <= 57"></input><input id="SnipeExtminPriceInput" placeholder="min price" type="number" style="color:black;" min="0" onkeypress="return event.charCode >= 48 && event.charCode <= 57"></input><input id="SnipeExtmaxPriceInput" type="number" placeholder="max price*" style="color:black;" min="0" onkeypress="return event.charCode >= 48 && event.charCode <= 57"></input><input id="SnipeExtdealInput" placeholder="deal percent*" type="number" style="color:black;width:167px;" min="0" max="100" onkeypress="return event.charCode >= 48 && event.charCode <= 57"></input><br><button onclick="setFilters()">Set</button><button onclick="resetFilters()">Reset</button>';
if (sessionStorage.getItem("SnipeExtbudget") && document.getElementById("SnipeExtbudgetInput").value == "") {document.getElementById("SnipeExtbudgetInput").value = sessionStorage.getItem("SnipeExtbudget");}
if (sessionStorage.getItem("SnipeExtminPrice") && document.getElementById("SnipeExtminPriceInput").value == "") {document.getElementById("SnipeExtminPriceInput").value = sessionStorage.getItem("SnipeExtminPrice");}
if (sessionStorage.getItem("SnipeExtmaxPrice") && document.getElementById("SnipeExtmaxPriceInput").value == "") {document.getElementById("SnipeExtmaxPriceInput").value = sessionStorage.getItem("SnipeExtmaxPrice");}
if (sessionStorage.getItem("SnipeExtdealPercent") && document.getElementById("SnipeExtdealInput").value == "") {document.getElementById("SnipeExtdealInput").value = sessionStorage.getItem("SnipeExtdealPercent");}

document.getElementById("SnipeExtrobuxRemaining").style.textAlign = "center";
document.getElementById("SnipeExtrobuxRemaining").style.fontSize = "50px";
document.getElementById("SnipeExtrobuxRemaining").innerHTML = 'Remaining: <a style="color:green;">R$0</a>';

document.getElementById("SnipeExtoriginalRobux").style.textAlign = "center";
document.getElementById("SnipeExtoriginalRobux").style.paddingBottom = "10px";
document.getElementById("SnipeExtoriginalRobux").innerHTML = 'Original amount: <a style="color:green;">R$0</a>';
if (sessionStorage.getItem("SnipeExtbudget") && document.getElementById("SnipeExtrobuxRemaining").innerHTML == 'Remaining: <a style="color:green;">R$0</a>') {document.getElementById("SnipeExtrobuxRemaining").innerHTML = 'Remaining: <a style="color:green;">R$' + sessionStorage.getItem("SnipeExtbudget") + '</a>';}
if (sessionStorage.getItem("SnipeExtoriginalBudget") && document.getElementById("SnipeExtoriginalRobux").innerHTML == 'Original amount: <a style="color:green;">R$0</a>') {document.getElementById("SnipeExtoriginalRobux").innerHTML = 'Original amount: <a style="color:green;">R$' + sessionStorage.getItem("SnipeExtoriginalBudget") + '</a>';}

function snipe() {
    if (document.querySelectorAll('[class*="mix_item"]')[0]) {
    if (sessionStorage.getItem("SnipeExtmaxPrice")) {
    if (document.querySelectorAll('[class*="mix_item"]')[0].getElementsByTagName("a")[0] && document.querySelectorAll('[class*="mix_item"]')[0].getElementsByTagName("a")[0].target == "_blank") {
    document.querySelectorAll('[class*="mix_item"]')[0].getElementsByTagName("a")[0].target = "_self";
    }
}
    if (sessionStorage.getItem("SnipeExtmaxPrice") && sessionStorage.getItem("SnipeExtdealPercent") && document.querySelectorAll('[class*="stat-data"]')[0] && !sessionStorage.getItem("SnipeExtminPrice") && document.querySelectorAll('[class*="mix_item"]')[0].getElementsByTagName("a")[0] && document.querySelectorAll('[class*="deal-title"]')[0] && !document.querySelectorAll('[class*="mix_item"]')[0].getElementsByTagName("a")[0].href.includes("?SnipeExtmaxPrice")) {document.querySelectorAll('[class*="mix_item"]')[0].getElementsByTagName("a")[0].href = document.querySelectorAll('[class*="mix_item"]')[0].getElementsByTagName("a")[0].href + "?SnipeExtmaxPrice=" + sessionStorage.getItem("SnipeExtmaxPrice") + "&SnipeExtprice=" + Number(document.querySelectorAll('[class*="stat-data"]')[0].innerText.replaceAll(",", "")) + "&SnipeExtdealPercent=" + sessionStorage.getItem("SnipeExtdealPercent") + "&SnipeExtitemName=" + document.querySelectorAll('[class*="deal-title"]')[0].innerText.replace(/[^a-zA-Z]/g, '');}
if (sessionStorage.getItem("SnipeExtmaxPrice") && sessionStorage.getItem("SnipeExtdealPercent") && document.querySelectorAll('[class*="stat-data"]')[0] && sessionStorage.getItem("SnipeExtminPrice") && document.querySelectorAll('[class*="mix_item"]')[0].getElementsByTagName("a")[0] && document.querySelectorAll('[class*="deal-title"]')[0] && !document.querySelectorAll('[class*="mix_item"]')[0].getElementsByTagName("a")[0].href.includes("?SnipeExtmaxPrice")) {
    document.querySelectorAll('[class*="mix_item"]')[0].getElementsByTagName("a")[0].href = document.querySelectorAll('[class*="mix_item"]')[0].getElementsByTagName("a")[0].href + "?SnipeExtmaxPrice=" + sessionStorage.getItem("SnipeExtmaxPrice") + "&SnipeExtminPrice=" + sessionStorage.getItem("SnipeExtminPrice") + "&SnipeExtprice=" + Number(document.querySelectorAll('[class*="stat-data"]')[0].innerText.replaceAll(",", "")) + "&SnipeExtdealPercent=" + sessionStorage.getItem("SnipeExtdealPercent") + "&SnipeExtitemName=" + document.querySelectorAll('[class*="deal-title"]')[0].innerText.replace(/[^a-zA-Z]/g, '');
}
    if (sessionStorage.getItem("SnipeExtbudget") && document.querySelectorAll('[class*="stat-data"]')[2]) {
        dealPercentTextDiv = "";
if (document.querySelectorAll('[class*="stat-data"]')[2].innerText.includes("%")) {dealPercentTextDiv = document.querySelectorAll('[class*="stat-data"]')[2];}
if (!document.querySelectorAll('[class*="stat-data"]')[2].innerText.includes("%")) {dealPercentTextDiv = document.querySelectorAll('[class*="stat-data"]')[3];}
    }
    if (sessionStorage.getItem("SnipeExtbudget") && sessionStorage.getItem("SnipeExtmaxPrice") && sessionStorage.getItem("SnipeExtdealPercent")) {if (document.querySelectorAll('[class*="stat-data"]')[0] && Number(document.querySelectorAll('[class*="stat-data"]')[0].innerText.replaceAll(",", "")) <= Number(sessionStorage.getItem("SnipeExtbudget")) && Number(document.querySelectorAll('[class*="stat-data"]')[0].innerText.replaceAll(",", "")) <= Number(sessionStorage.getItem("SnipeExtmaxPrice")) && Number(dealPercentTextDiv.innerText.replaceAll("%", "")) >= Number(sessionStorage.getItem("SnipeExtdealPercent"))) {
        if (sessionStorage.getItem("SnipeExtminPrice")) {
            if (document.querySelectorAll('[class*="stat-data"]')[0] && Number(document.querySelectorAll('[class*="stat-data"]')[0].innerText.replaceAll(",", "")) >= Number(sessionStorage.getItem("SnipeExtminPrice"))) {
                alreadyClicked = "false";
                if (document.querySelectorAll('[class*="deal-title"]')[0].innerText.replace(/[^a-zA-Z]/g, '') == $_GET['SnipeExtname']) {
                if (Number($_GET.SnipeExtprice) == Number(document.querySelectorAll('[class*="stat-data"]')[0].innerText.replaceAll(",", ""))) {
                    alreadyClicked = "true";
                }
            }
                if (alreadyClicked == "false") {
                if (!document.querySelectorAll('[class*="mix_item"]')[0].getElementsByTagName("a")[0].classList.contains("SnipeExtclicked")) {
                document.querySelectorAll('[class*="mix_item"]')[0].getElementsByTagName("a")[0].click();
                document.querySelectorAll('[class*="mix_item"]')[0].getElementsByTagName("a")[0].classList.add("SnipeExtclicked");
                }
            }
        }
    }
        if (!sessionStorage.getItem("SnipeExtminPrice")) {
            alreadyClicked = "false";
                if (document.querySelectorAll('[class*="deal-title"]')[0].innerText.replace(/[^a-zA-Z]/g, '') == $_GET['SnipeExtname']) {
                if (Number($_GET.SnipeExtprice) == Number(document.querySelectorAll('[class*="stat-data"]')[0].innerText.replaceAll(",", ""))) {
                    alreadyClicked = "true";
                }
            }
                if (alreadyClicked == "false") {
                if (!document.querySelectorAll('[class*="mix_item"]')[0].getElementsByTagName("a")[0].classList.contains("SnipeExtclicked")) {
            document.querySelectorAll('[class*="mix_item"]')[0].getElementsByTagName("a")[0].click();
            document.querySelectorAll('[class*="mix_item"]')[0].getElementsByTagName("a")[0].classList.add("SnipeExtclicked");
                }
            }
        }
    }
  }
}
 }
setInterval(snipe,1);