// import React from 'react'
// import './home.css'
// import logouticon from './images/logout.png'
// import { callApi, errorResponse, getSession, setSession } from './main';
// import menuicon from './images/menu.png'

// const HS1 = {"padding-left" : "5px", "font-weight" : "bold"};
// const HS2 = {"float" : "right", "padding-right" : "5px", "cursor" : "pointer"};
// const HS3 = {"float" : "right", "height" : "16px", "margin-top" : "6px", "cursor" : "pointer"}
// const HS4 = {"float" : "right", "padding-right" : "10px"}

// export function loadMenu(res) {
//     var data = JSON.parse(res);
//     var menuitems = "";
//     for (var x in data) {
//         menuitems += `<li>
//                         <label id='${data[x].mid}L' >${data[x].mtitle}</label>
//                         <div id='${data[x].mid}' class='smenu'></div>
//                       </li>`;
//     }
//     var mlist = document.getElementById('mlist');
//     mlist.innerHTML = menuitems;

//     for (x in data) {
//         document.getElementById(`${data[x].mid}L`).addEventListener("click", showSMenu.bind(null, data[x].mid));
//     }
// }

// export function showSMenu(mid) {
//     var surl = "http://localhost:5000/home/menus";
//     var ipdata = JSON.stringify({
//         mid: mid
//     });
//     callApi("POST", surl, ipdata, loadSMenu, errorResponse);

//     var smenu = document.getElementById(mid);
//     if (smenu.style.display === "block")
//         smenu.style.display = "none";
//     else
//         smenu.style.display = "block";
// }

// export function loadSMenu(res) {
//     var data = JSON.parse(res);
//     var smenuitems = "";
//     for (var x in data) {
//         smenuitems += `<label id='${data[x].smid}'>${data[x].smtitle}</label>`;
//     }
//     var smenu = document.getElementById(`${data[x].mid}`);
//     smenu.innerHTML = smenuitems;

//     for (x in data) {
//         document.getElementById(`${data[x].smid}`).addEventListener("click", loadModule.bind(null, data[x].smid));
//     }
// }

// export function loadModule(smid) {
//     var titlebar = document.getElementById('titlebar');
//     var module = document.getElementById('module');
//     switch (smid) {
//         case "M01103":
//             module.src = "/changepassword";
//             titlebar.innerText = "Change Password";
//             break;
//         case "M002":
//             module.src = "/Hevents";
//             titlebar.innerText = "Historical Events";
//             break;
//         case "M01102":
//                 module.src = "/myprofile";
//                 titlebar.innerText = "My Profile";
//                 break;
//         case "Z00101":
//                 module.src = "/andhra";
//                 titlebar.innerText = "Andhra Pradhesh";
//                 break;
//         case "Z00102":
//                 module.src = "/aruna";
//                 titlebar.innerText = "Arunachal Pradhesh";
//                 break;
//         case "Z00104":
//                 module.src = "/Bihar";
//                 titlebar.innerText = "Bihar";
//                 break;
//         case "Z00103":
//                 module.src = "/Assam";
//                 titlebar.innerText = "Assam";
//                 break;
//         case "Z00105":
//                 module.src = "/Chhattisgarh";
//                 titlebar.innerText = "Chhattisgarh";
//                 break;
//         case "Z00106":
//                 module.src = "/Goa";
//                 titlebar.innerText = "Goa";
//                 break;
//                 case "Z00107":
//                     module.src = "/Gujarat";
//                     titlebar.innerText = "Gujarat";
//                     break;
//                     case "Z00108":
//                         module.src = "/Haryana";
//                         titlebar.innerText = "Haryana";
//                         break;
//                         case "Z00109":
//                             module.src = "/HimachalPradesh";
//                             titlebar.innerText = "Himachal Pradesh";
//                             break;
//                             case "Z00110":
//                                 module.src = "/JammuAndKashmir";
//                                 titlebar.innerText = "Jammu And Kashmir";
//                                 break;
//                                 case "Z00111":
//                                     module.src = "/Jharkhand";
//                                     titlebar.innerText = "Jharkhand";
//                                     break;
//                                     case "Z00112":
//                                         module.src = "/Karnataka";
//                                         titlebar.innerText = "Karnataka";
//                                         break;
//                                         case "Z00113":
//                                             module.src = "/Kerala";
//                                             titlebar.innerText = "Kerala";
//                                             break;
//                                             case "Z00114":
//                                                 module.src = "/MadhyaPradesh";
//                                                 titlebar.innerText = "Madhya Pradesh";
//                                                 break;
//                                                 case "Z00115":
//                                                     module.src = "/Maharashtra";
//                                                     titlebar.innerText = "Maharashtra";
//                                                     break;
//                                                     case "Z00116":
//                                                         module.src = "/Manipur";
//                                                         titlebar.innerText = "Manipur";
//                                                         break;
//                                                         case "Z00117":
//                                                             module.src = "/Meghalaya";
//                                                             titlebar.innerText = "Meghalaya";
//                                                             break;
//                                                             case "Z00118":
//                                                             module.src = "/Mizoram";
//                                                             titlebar.innerText = "Mizoram";
//                                                             break;
//                                                             case "Z00119":
//                                                             module.src = "/Nagaland";
//                                                             titlebar.innerText = "Nagaland";
//                                                             break;
//                                                             case "Z00120":
//                                                             module.src = "/Odisha";
//                                                             titlebar.innerText = "Odisha";
//                                                             break;
//                                                             case "Z00121":
//                                                             module.src = "/Punjab";
//                                                             titlebar.innerText = "Punjab";
//                                                             break;
//                                                             case "Z00122":
//                                                             module.src = "/Rajasthan";
//                                                             titlebar.innerText = "Rajasthan";
//                                                             break;
//                                                             case "Z00123":
//                                                             module.src = "/Sikkim";
//                                                             titlebar.innerText = "Sikkim";
//                                                             break;
//                                                             case "Z00124":
//                                                             module.src = "/Tamilnadu";
//                                                             titlebar.innerText = "Tamil nadu";
//                                                             break;
//                                                             case "Z00125":
//                                                             module.src = "/Telangana";
//                                                             titlebar.innerText = "Telangana";
//                                                             break;
//                                                             case "Z00126":
//                                                             module.src = "/Tripura";
//                                                             titlebar.innerText = "Tripura";
//                                                             break;
//                                                             case "Z00127":
//                                                             module.src = "/UttarPradesh";
//                                                             titlebar.innerText = "Uttar Pradesh";
//                                                             break;
//                                                             case "Z00128":
//                                                             module.src = "/Uttarakhand";
//                                                             titlebar.innerText = "Uttarakhand";
//                                                             break;
//                                                             case "Z00129":
//                                                             module.src = "/WestBengal";
//                                                             titlebar.innerText = "West Bengal";
//                                                             break;                
//         case "M00101": // New case for Book Appointment
//             module.src = "/Diwali1";
//             titlebar.innerText = "Diwali";
//             break;
//         case "M00102": // New case for Book Appointment
//             module.src = "/Holi";
//             titlebar.innerText = "Holi";
//             break;
//         case "M00103": // New case for Book Appointment
//             module.src = "/Ramzan";
//             titlebar.innerText = "Ramzan";
//             break;
//         case "M00104": // New case for Book Appointment
//             module.src = "/Christmas";
//             titlebar.innerText = "Christmas";
//             break;
//         case "M00105": // New case for Book Appointment
//             module.src = "/FestivalCalender";
//             titlebar.innerText = "Festival Calender";
//             break;
//         case "M10101": // New case for Book Appointment
//             module.src = "/tajmahal";
//             titlebar.innerText = "Taj Mahal";
//             break;
//         case "M10102": // New case for Book Appointment
//             module.src = "/redfort";
//             titlebar.innerText = "Red Fort";
//             break;
//         case "M10103": // New case for Book Appointment
//             module.src = "/jamamasjid";
//             titlebar.innerText = "Jama Masjid";
//             break;
//         case "M10104": // New case for Book Appointment
//             module.src = "/basilica_of_bom_jesus";
//             titlebar.innerText = "Basilica of Bom Jesus";
//             break;
//         case "M10105": // New case for Book Appointment
//             module.src = "/viewall";
//             titlebar.innerText = "View All";
//             break;
    
//         default:
//             module.src = "";
//             titlebar.innerText = "";
//     }
// }



// class Home extends React.Component
// {
//     constructor()
//     {
//         super();
//         this.sid = getSession("sid");
//         //alert(this.sid);
//         if(this.sid === "")
//             window.location.replace("/");

//         var url = "http://localhost:5000/home/uname";
//         var data = JSON.stringify({
//             emailid : this.sid
//         });
//         callApi("POST", url, data, this.loadUname, errorResponse);

//         url = "http://localhost:5000/home/menu";
//         callApi("POST", url, "", loadMenu, errorResponse);
//     }

//     loadUname(res)
//     {
//         var data = JSON.parse(res);
//         var HL1 = document.getElementById("HL1");
//         HL1.innerText = `${data[0].firstname} ${data[0].lastname}`
//     }

//     logout()
//     {
//         setSession("sid", "", -1);
//         window.location.replace("/");
//     }

//     render()
//     {
//         return(
//             <div className='full-height'>
//                 <div className='header'>
//                     <label style={HS1}>KL University | Indian Culture Management System</label>
//                     <label style={HS2} onClick={this.logout}>Logout</label>
//                     <img src={logouticon} alt='' style={HS3} onClick={this.logout} />
//                     <label id='HL1' style={HS4}></label>
//                 </div>
//                 <div className='content'>
//                     <div className='menubar'>
//                         <div className='menuheader'>
//                             <img src={menuicon} alt='' />
//                             <label>MENU</label>
//                         </div>
//                         <div className='menu'>
//                             <nav><ul id='mlist' className='mlist'></ul></nav>
//                         </div>
//                     </div>
//                     <div className='outlet'>
//                         <div id='titlebar'></div>
//                         <iframe id='module' src="" ></iframe>
//                     </div>
//                 </div>
//                 <div className='footer'>
//                     Copyright @ KL University. All rights reserved.
//                 </div>
//             </div>
//         );
//     }
// }

// export default Home;


import React from 'react';
import './home.css';
import logouticon from './images/logout.png';
import searchicon from './images/si.jpg'; // Add your search icon image path here
import { callApi, errorResponse, getSession, setSession } from './main';
import menuicon from './images/menu.png';

const HS1 = {"paddingLeft": "5px", "fontWeight": "bold"};
const HS2 = {"float": "right", "paddingRight": "5px", "cursor": "pointer"};
const HS3 = {"float": "right", "height": "16px", "marginTop": "6px", "cursor": "pointer"};
const HS4 = {"float": "right", "paddingRight": "10px"};
const HS5 = {"float": "right", "marginRight": "10px", "marginTop": "8px"};

export function loadMenu(res) {
    var data = JSON.parse(res);
    var menuitems = ""; 
    for (var x in data) {
        const submenus = data[x].submenus || []; // Check if submenus is defined
        menuitems += `<li>
                        <label id='${data[x].mid}L' >${data[x].mtitle}</label>
                        <div id='${data[x].mid}' class='smenu'></div>
                      </li>`;
    }
    var mlist = document.getElementById('mlist');
    mlist.innerHTML = menuitems;

    for (var y in data) {
        document.getElementById(`${data[y].mid}L`).addEventListener("click", showSMenu.bind(null, data[y].mid));
    }

    // Search functionality
    const searchInput = document.querySelector('input[type="text"]');
    searchInput.addEventListener('input', function(event) {
        const searchValue = event.target.value.toLowerCase();
        const filteredData = data.filter(item => item.mtitle.toLowerCase().includes(searchValue) || (item.submenus && item.submenus.some(submenu => submenu.smtitle.toLowerCase().includes(searchValue))));
        renderFilteredMenu(filteredData);
    });
}

function renderFilteredMenu(filteredData) {
    var menuitems = ""; 
    for (var x in filteredData) {
        menuitems += `<li>
                        <label id='${filteredData[x].mid}L' >${filteredData[x].mtitle}</label>
                        <div id='${filteredData[x].mid}' class='smenu'></div>
                      </li>`;
    }
    var mlist = document.getElementById('mlist');
    mlist.innerHTML = menuitems;

    for (var y in filteredData) {
        document.getElementById(`${filteredData[y].mid}L`).addEventListener("click", showSMenu.bind(null, filteredData[y].mid));
    }
}

export function showSMenu(mid) {
    var surl = "http://localhost:5000/home/menus";
    var ipdata = JSON.stringify({
        mid: mid
    });
    callApi("POST", surl, ipdata, loadSMenu, errorResponse);

    var smenu = document.getElementById(mid);
    if (smenu.style.display === "block")
        smenu.style.display = "none";
    else
        smenu.style.display = "block";
}

export function loadSMenu(res) {
    var data = JSON.parse(res);
    var smenuitems = "";
    for (var x in data) {
        smenuitems += `<label id='${data[x].smid}'>${data[x].smtitle}</label>`;
    }
    var smenu = document.getElementById(data[0].mid);
    smenu.innerHTML = smenuitems;

    for (var y in data) {
        document.getElementById(`${data[y].smid}`).addEventListener("click", loadModule.bind(null, data[y].smid));
    }
}

export function loadModule(smid) {
    var titlebar = document.getElementById('titlebar');
    var module = document.getElementById('module');
    switch (smid) {
        case "M01103":
            module.src = "/changepassword";
            titlebar.innerText = "Change Password";
            break;
        case "M002":
            module.src = "/Hevents";
            titlebar.innerText = "Historical Events";
            break;
        case "M01102":
                module.src = "/myprofile";
                titlebar.innerText = "My Profile";
                break;
        case "Z00101":
                module.src = "/andhra";
                titlebar.innerText = "Andhra Pradhesh";
                break;
        case "Z00102":
                module.src = "/aruna";
                titlebar.innerText = "Arunachal Pradhesh";
                break;
        case "Z00104":
                module.src = "/Bihar";
                titlebar.innerText = "Bihar";
                break;
        case "Z00103":
                module.src = "/Assam";
                titlebar.innerText = "Assam";
                break;
        case "Z00105":
                module.src = "/Chhattisgarh";
                titlebar.innerText = "Chhattisgarh";
                break;
        case "Z00106":
                module.src = "/Goa";
                titlebar.innerText = "Goa";
                break;
                case "Z00107":
                    module.src = "/Gujarat";
                    titlebar.innerText = "Gujarat";
                    break;
                    case "Z00108":
                        module.src = "/Haryana";
                        titlebar.innerText = "Haryana";
                        break;
                        case "Z00109":
                            module.src = "/HimachalPradesh";
                            titlebar.innerText = "Himachal Pradesh";
                            break;
                            case "Z00110":
                                module.src = "/JammuAndKashmir";
                                titlebar.innerText = "Jammu And Kashmir";
                                break;
                                case "Z00111":
                                    module.src = "/Jharkhand";
                                    titlebar.innerText = "Jharkhand";
                                    break;
                                    case "Z00112":
                                        module.src = "/Karnataka";
                                        titlebar.innerText = "Karnataka";
                                        break;
                                        case "Z00113":
                                            module.src = "/Kerala";
                                            titlebar.innerText = "Kerala";
                                            break;
                                            case "Z00114":
                                                module.src = "/MadhyaPradesh";
                                                titlebar.innerText = "Madhya Pradesh";
                                                break;
                                                case "Z00115":
                                                    module.src = "/Maharashtra";
                                                    titlebar.innerText = "Maharashtra";
                                                    break;
                                                    case "Z00116":
                                                        module.src = "/Manipur";
                                                        titlebar.innerText = "Manipur";
                                                        break;
                                                        case "Z00117":
                                                            module.src = "/Meghalaya";
                                                            titlebar.innerText = "Meghalaya";
                                                            break;
                                                            case "Z00118":
                                                            module.src = "/Mizoram";
                                                            titlebar.innerText = "Mizoram";
                                                            break;
                                                            case "Z00119":
                                                            module.src = "/Nagaland";
                                                            titlebar.innerText = "Nagaland";
                                                            break;
                                                            case "Z00120":
                                                            module.src = "/Odisha";
                                                            titlebar.innerText = "Odisha";
                                                            break;
                                                            case "Z00121":
                                                            module.src = "/Punjab";
                                                            titlebar.innerText = "Punjab";
                                                            break;
                                                            case "Z00122":
                                                            module.src = "/Rajasthan";
                                                            titlebar.innerText = "Rajasthan";
                                                            break;
                                                            case "Z00123":
                                                            module.src = "/Sikkim";
                                                            titlebar.innerText = "Sikkim";
                                                            break;
                                                            case "Z00124":
                                                            module.src = "/Tamilnadu";
                                                            titlebar.innerText = "Tamil nadu";
                                                            break;
                                                            case "Z00125":
                                                            module.src = "/Telangana";
                                                            titlebar.innerText = "Telangana";
                                                            break;
                                                            case "Z00126":
                                                            module.src = "/Tripura";
                                                            titlebar.innerText = "Tripura";
                                                            break;
                                                            case "Z00127":
                                                            module.src = "/UttarPradesh";
                                                            titlebar.innerText = "Uttar Pradesh";
                                                            break;
                                                            case "Z00128":
                                                            module.src = "/Uttarakhand";
                                                            titlebar.innerText = "Uttarakhand";
                                                            break;
                                                            case "Z00129":
                                                            module.src = "/WestBengal";
                                                            titlebar.innerText = "West Bengal";
                                                            break;                
        case "M00101": // New case for Book Appointment
            module.src = "/Diwali1";
            titlebar.innerText = "Diwali";
            break;
        case "M00102": // New case for Book Appointment
            module.src = "/Holi";
            titlebar.innerText = "Holi";
            break;
        case "M00103": // New case for Book Appointment
            module.src = "/Ramzan";
            titlebar.innerText = "Ramzan";
            break;
        case "M00104": // New case for Book Appointment
            module.src = "/Christmas";
            titlebar.innerText = "Christmas";
            break;
        case "M00105": // New case for Book Appointment
            module.src = "/FestivalCalender";
            titlebar.innerText = "Festival Calender";
            break;
        case "M10101": // New case for Book Appointment
            module.src = "/tajmahal";
            titlebar.innerText = "Taj Mahal";
            break;
        case "M10102": // New case for Book Appointment
            module.src = "/redfort";
            titlebar.innerText = "Red Fort";
            break;
        case "M10103": // New case for Book Appointment
            module.src = "/jamamasjid";
            titlebar.innerText = "Jama Masjid";
            break;
        case "M10104": // New case for Book Appointment
            module.src = "/basilica_of_bom_jesus";
            titlebar.innerText = "Basilica of Bom Jesus";
            break;
        case "M10105": // New case for Book Appointment
            module.src = "/viewall";
            titlebar.innerText = "View All";
            break;
        case "S00102":
            module.src = "/Hevents";
            titlebar.innerText = "Historical Events";
            break;
        case "Y00102":
            module.src = "/aboutus";
            titlebar.innerText = "About US";
            break;
        case "Y00101":
            module.src = "/Faqs";
            titlebar.innerText = "FAQ's";
            break;
        case "S00101":
            module.src = "/contemporaryEvents";
            titlebar.innerText = "Contemporary Events";
            break;
    
        default:
            module.src = "";
            titlebar.innerText = "";
    }
}


class Home extends React.Component {
    constructor() {
        super();
        this.sid = getSession("sid");
        //alert(this.sid);
        if(this.sid === "")
            window.location.replace("/");

        var url = "http://localhost:5000/home/uname";
        var data = JSON.stringify({
            emailid: this.sid
        });
        callApi("POST", url, data, this.loadUname, errorResponse);

        url = "http://localhost:5000/home/menu";
        callApi("POST", url, "", loadMenu, errorResponse);
    }

    loadUname(res) {
        var data = JSON.parse(res);
        var HL1 = document.getElementById("HL1");
        HL1.innerText = `${data[0].firstname} ${data[0].lastname}`;
    }

    logout() {
        setSession("sid", "", -1);
        window.location.replace("/");
    }

    render() {
        return (
            <div className='full-height'>
                <div className='header'>
                    <label style={HS1}>KL University | Indian Culture Management System</label>
                    <input type="text" placeholder="Search..." style={HS5} /> {/* Added search input */}
                    <label style={HS2} onClick={this.logout}>Logout</label>
                    <img src={logouticon} alt='' style={HS3} onClick={this.logout} />
                    <label id='HL1' style={HS4}></label>
                </div>
                <div className='content'>
                    <div className='menubar'>
                        <div className='menuheader'>
                            <img src={menuicon} alt='' />
                            <label>MENU</label>
                        </div>
                        <div className='menu'>
                            <nav><ul id='mlist' className='mlist'></ul></nav>
                        </div>
                    </div>
                    <div className='outlet'>
                        <div id='titlebar'></div>
                        <iframe id='module' src="" ></iframe>
                    </div>
                </div>
                <div className='footer'>
                    Copyright @ KL University. All rights reserved.
                </div>
            </div>
        );
    }
}

export default Home;