let header = document.querySelector('#intro');
let anim = [
    { t: "{ }", ms: 200 },
    { t: "{_}", ms: 200 },
    { t: "{ }", ms: 200 },
    { t: "{_}", ms: 200 },
    { t: "{P_}", ms: 100 },
    { t: "{PE_}", ms: 100 },
    { t: "{PER_}", ms: 100 },
    { t: "{PERR_}", ms: 100 },
    { t: "{PERRY_}", ms: 200 },
    { t: "{PERRYC_}", ms: 100 },
    { t: "{PERRYCH_}", ms: 100 },
    { t: "{PERRYCHR_}", ms: 100 },
    { t: "{PERRYCHRI_}", ms: 100 },
    { t: "{PERRYCHRIS_}", ms: 100 },
    { t: "{PERRYCHRISN_}", ms: 100 },
    { t: "{PERRYCHRISNI_}", ms: 100 },
    { t: "{PERRYCHRISNIE_}", ms: 100 },
    { t: "{PERRYCHRISNIES_}", ms: 200 },
    { t: "{PERRYCHRISNIES }", ms: 200 },
    { t: "{PERRYCHRISNIES_}", ms: 200 },
    { t: "{PERRYCHRISNIES}", ms: 200 },
    { t: "{PERRYCHRISNIES}", ms: 200 }
];
let stepDenominator = 1;
if (window.localStorage.stepDenominator)
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
    let step = anim[i];
    header.innerText = step.t;
    i++;

    if (i < anim.length)
        setTimeout(update, step.ms / stepDenominator);
    else {
        header.classList.add('top');
        setTimeout(() => {
            document.getElementById('main').style.opacity = 1;
            initGlobe();
        }, 500);
        window.localStorage.stepDenominator = 2;
    }
}
update();