const data = [
    {
        id :1,
        title : 'The way to do something 1',
        description :'the one thing u need to do some thing is',
        date: '2018',
        view: '3512'
    },{
        id : 2,
        title : 'The way to do something 2',
        description :'the one thing u need to do some thing is',
        date: '2020',
        view: '342'
    },{
        id : 3,
        title : 'The way to do something 3',
        description :'the one thing u need to do some thing is',
        date: '2017',
        view: '54531'
    },{
        id : 4,
        title : 'The way to do something 4',
        description :'the one thing u need to do some thing is',
        date: '2017',
        view: '542'
    }
];
function sort(e,compareAsc,compareDesc) {
    const sortTypes= document.getElementsByClassName('sortType');
    const sortIcons = document.getElementsByClassName('sortIcon');
    if(e.target.classList.contains('asc')){
        data.sort(compareDesc);
        e.target.classList.remove('asc');
        e.target.classList.add('desc');
    }
    else{
        Object.keys(sortTypes).map((v)=>{
            sortTypes[v].classList.remove('desc','asc');
        })
        Object.keys(sortIcons).map((v)=>{
            sortIcons[v].classList.remove('fa','fa-sort');
        })
        e.target.classList.add('asc');
        e.target.childNodes[1].classList.add('fa','fa-sort');
        data.sort(compareAsc);
    }
    render(data);
}
function sortView(e){
    let type ='view';
    function compareAsc(a,b) {
        return parseInt(a[type]) - parseInt(b[type]);
    }
    function compareDesc(a,b) {
        return parseInt(b[type]) - parseInt(a[type]);
    }
    sort(e,compareAsc,compareDesc);
}
function sortDate(e){
    let type ='date';
    function compareAsc(a,b) {
        return parseInt(a[type]) - parseInt(b[type]);
    }
    function compareDesc(a,b) {
        return parseInt(b[type]) - parseInt(a[type]);
    }
    sort(e,compareAsc,compareDesc);
}
function sortAz(e){
    let type ='title';
    function compareAsc(a,b) {
        if(a[type] < b[type]) return -1;
        if(a[type] > b[type]) return 1;
        return 0;
    }
    function compareDesc(a,b) {
        if(a[type] > b[type]) return -1;
        if(a[type] < b[type]) return 1;
        return 0;
    }
    sort(e,compareAsc,compareDesc);
}
function subcribe(e) {
    let subCountView = document.getElementsByClassName('subText')[0];
    if(e.target.checked){
        subCount+=1;
    }
    else{
        subCount-=1;
    }
    subCountView.innerText=subCount;
}

function render(data) {
    const listpost = document.getElementsByClassName('listpost')[0];
    datahtml = data.map((v,i)=>{
        return `<div class="postcontainer" >
        <h1 class="posttitle">${v.title}</h1>
        <p class="postdescription">t${v.description}</p>
        <div class="postimg">
            <img src="./img/user-avatar-icon-sign-symbol-vector-4001945.jpg" alt="">
            <p>
                <span>source:</span><span class="postimgsrc">google</span>
            </p>
        </div>
        <div class="poststat">
            <span class='postview'>View: ${v.view}</span>
            <span class="postdate">${v.date}</span>
        </div>
    </div>`
    })
    listpost.innerHTML = datahtml.reduce((pre,cur)=>{
        return pre + cur;
    },'')
}

var subCount = 3534;
window.onload = ()=>{
    document.getElementById('sortView').addEventListener('click',sortView);
    document.getElementById('sortNewest').addEventListener('click',sortDate);
    document.getElementById('sortAz').addEventListener('click',sortAz);
    document.getElementsByClassName('subButtonCb')[0].onchange = subcribe;

    let subCountView = document.getElementsByClassName('subText')[0];
    subCountView.innerText= subCount;

    render(data);
}