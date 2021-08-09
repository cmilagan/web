function modifyString(str, num) {
    var char1 = String.fromCharCode(str.charCodeAt(0) + num);
    var char2 = String.fromCharCode(str.charCodeAt(1) + num);
    // strings are immutable, create new string with modified chars
    let modified = char1 + char2;
    return modified;
}


// TODO: Modify this function
function generateShortCode(storeId, transactionId) {
    // Logic goes here
  
    // first getting the current date
    var dateInit = new Date();
    let date = dateInit.getDate() + 1;
    // in order to fit all the information needed into 9 characters, we can convert the dates & id's to hexadecimal representations
    // at base 16 such that each piece of information is 2 characters.
    let hexStoreId = storeId.toString(16);
    let hexTransactionId = transactionId.toString(16);
    let hexDate = date.toString(16);
    // now that we have all our information in the form of 2 characters, we can improve the complexity by modifiying each character in our id's/date
    // to another ASCII character to make the code more unreadable to hackers/cheaters.
    
    // generate a pseudo-random number from 0-9 to add randomness to string modification
    var num = Math.floor(Math.random() * 10);
    let newStoreId = modifyString(hexStoreId, num);
    let newTransactionId = modifyString(hexTransactionId, num);
    let newDate = modifyString(hexDate, num);
    // save num for decoding purposes
    let code = newStoreId+newTransactionId+newDate+num;
    
    return code;
}

// TODO: Modify this function
function decodeShortCode(shortCode) {
    // Logic goes here

    store = shortCode.substring(0, 3);
    transaction = shortCode.subString(3,5);
    dateTmp = shortCode.subString(5,7);
    randNum = - parseInt(shortCode.slice(-1));
    storeId = parseInt(modifyString(store, randNum), 16);
    transactionId = parseInt(modifyString(transaction, randNum), 16);
    date = parseInt(modifyString(dateTmp, randNum), 16);
    return {
        storeId: storeId, // store id goes here,
        shopDate: date, // the date the customer shopped,
        transactionId: transactionId, // transaction id goes here
    };
}

// ------------------------------------------------------------------------------//
// --------------- Don't touch this area, all tests have to pass --------------- //
// ------------------------------------------------------------------------------//
function RunTests() {

    var storeIds = [175, 42, 0, 9]
    var transactionIds = [9675, 23, 123, 7]

    storeIds.forEach(function (storeId) {
        transactionIds.forEach(function (transactionId) {
            var shortCode = generateShortCode(storeId, transactionId);
            var decodeResult = decodeShortCode(shortCode);
            $("#test-results").append("<div>" + storeId + " - " + transactionId + ": " + shortCode + "</div>");
            AddTestResult("Length <= 9", shortCode.length <= 9);
            AddTestResult("Is String", (typeof shortCode === 'string'));
            AddTestResult("Is Today", IsToday(decodeResult.shopDate));
            AddTestResult("StoreId", storeId === decodeResult.storeId);
            AddTestResult("TransId", transactionId === decodeResult.transactionId);
        })
    })
}

function IsToday(inputDate) {
    // Get today's date
    var todaysDate = new Date();
    // call setHours to take the time out of the comparison
    return (inputDate.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0));
}

function AddTestResult(testName, testResult) {
    var div = $("#test-results").append("<div class='" + (testResult ? "pass" : "fail") + "'><span class='tname'>- " + testName + "</span><span class='tresult'>" + testResult + "</span></div>");
}