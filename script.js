function getClickedButtonIndex () {
    const  tabHeads=  document.querySelectorAll("tab-head");
    for (let i = 0; i < tabHeads.length; i++) {
        tabHeads[i].addEventListener("click", tabSwitch)
    }
}

function tabSwitch () {
    const clickedButtonID = this.getAttribute("button-id");
    
    const activeButton = document.querySelectorAll('tab-head[state="active-button"]');
    if(activeButton.length > 0) {
        activeButton[0].removeAttribute('state');
    }
    this.setAttribute('state', 'active-button');

    const activeContent = document.querySelectorAll('tab-content[state="active-content"]');
    if(activeContent.length > 0) {
        activeContent[0].removeAttribute('state');
    }

    const toBeActiveContent = document.querySelector(`tab-content[tab-name="${clickedButtonID}-tab-content"]`);
    toBeActiveContent.setAttribute('state', 'active-content');
}

const tabSwitcher = new getClickedButtonIndex();