function testGetClickedButtonIndex () {
    getClickedButtonIndex();

    const tabHead = document.querySelectorAll("tab-head");
    let listenerAddingSuccess;

    tabHead.forEach(tabHead => {
        const hasClickListener = tabHead.onclick;
        if (hasClickListener) {
            listenerAddingSuccess = false;
        } else {
            listenerAddingSuccess = true;
        }
    });

    if (listenerAddingSuccess) {
        console.log("getClickedButtonIndex function is working succesfully.")
    } else {
        console.log("getClickedButtonIndex function is NOT working succesfully.")
    }
}

function testTabSwitch () {
    getClickedButtonIndex();

    const firstTabHead = document.querySelector('tab-head[button-id="first"]');

    if (firstTabHead.getAttribute('state') === 'active-button') {
        console.log("tabSwitch function is working succesfully for the default active button.");
    } else {
        console.log("tabSwitch function is NOT working succesfully for the default active button.")
    }

    const activeContent = document.querySelector('tab-content[state="active-content"]');
    if (activeContent.getAttribute('tab-name') === 'first-tab-content') {
        console.log("tabSwitch function is working succesfully for the default active content.");
    } else {
        console.log("tabSwitch function is NOT working succesfully for the default active content.")
    }

    const secondTabHead = document.querySelector('tab-head[button-id="second"]');
    secondTabHead.click();

    if(secondTabHead.getAttribute('state') === 'active-button') {
        console.log("tabSwitch function is working succesfully for the desired active button.");
    } else {
        console.log("tabSwitch function is NOT working succesfully for the desired active button.")
    }
    
    const secondActiveContent = document.querySelector('tab-content[state="active-content"]');
    if (secondActiveContent.getAttribute('tab-name') === 'second-tab-content') {
        console.log("tabSwitch function is working succesfully for the desired active content.");
    } else {
        console.log("tabSwitch function is NOT working succesfully for the desired active content.")
    }
}

testGetClickedButtonIndex();
testTabSwitch();