let Body = document.querySelector('body');
let Icon = document.querySelector('.TPGIcon');
let TPG = document.querySelector('.TPG');
let Tabs = document.querySelectorAll('.TNTab');
let CTabs = document.querySelectorAll('.TNCTab');
// ////////////////////////////////////////////
Body.addEventListener('mousemove',function(e) {
    let MWidth = Math.floor( (e.clientX - Icon.offsetLeft) / (-Body.offsetWidth) * ((TPG.offsetHeight-100)/2))
    let MHeight = Math.floor( (e.clientY - Icon.offsetTop) / (-Body.offsetHeight) * ((TPG.offsetHeight-100)/2))

    Icon.style.filter =`
        drop-shadow(${MWidth*0.5}px ${MHeight*0.5}px 0 rgba(0, 0, 0, 0.2))
        drop-shadow(${MHeight}px ${MWidth}px 0 rgba(0, 0, 0, 0.2))
        drop-shadow(${MWidth*-0.5}px ${MHeight*-0.5}px 0 rgba(0, 0, 0, 0.2))
        drop-shadow(${MHeight*-1}px ${MWidth*-1}px 0 rgba(0, 0, 0, 0.2))
        drop-shadow(${MWidth*-1}px ${MHeight}px 0 rgba(0, 0, 0, 0.2))
        drop-shadow(${MHeight*-1}px ${MWidth}px 0 rgba(0, 0, 0, 0.2))
        drop-shadow(${MWidth}px ${MHeight*-1}px 0 rgba(0, 0, 0, 0.2))
        drop-shadow(${MHeight}px ${MWidth*-1}px 0 rgba(0, 0, 0, 0.2))`
});

Tabs.forEach(SelectedTab => {
    SelectedTab.addEventListener('click', () => {
        Tabs.forEach(Tab => {
            Tab.classList.remove('active');
        });
        SelectedTab.classList.add('active');
        CTabs.forEach(Tab => {
            Tab.classList.remove('active');
            if ((SelectedTab.getAttribute('data-TNav')) == (Tab.getAttribute('data-TNav')))Tab.classList.add('active');
        })
    });
});
