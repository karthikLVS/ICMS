import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './login';
import Home from './home'
import Changepassword from './changepassword'
import Diwali from './Diwali1'
import MyProfile from './myprofile';
import TajMahal from './tajmahal';
import RedFort from './redfort';
import JamaMasjid from './jamamasjid';
import BasilicaOfBomJesus from './basilica_of_bom_jesus';
import ViewAll from './viewall';
import Holi from './Holi';
import Ramzan from './Ramzan';
import Christmas from './Christmas';
import FestivalCalendar from './festivalcalendar';
import AP1 from './andhra';
import APP1 from './aruna';
import Bihar1 from './Bihar';
import Assam1 from './Assam';
import Chhattisgarh from './Chhattisgarh';
import Gujarat from './Gujarat';
import Goa from './Goa';
import HimachalPradesh from './HimachalPradesh';
import JammuAndKashmir from './JammuAndKashmir';
import Jharkhand from './Jharkhand';
import Karnataka from './Karnataka';
import Kerala from './Kerala';
import MadhyaPradesh from './MadhyaPradesh';
import Maharashtra from './Maharashtra';
import Telangana from './Telangana';
import Tamilnadu from './Tamilnadu';
import UttarPradesh from './UttarPradesh';
import Uttarakhand from './Uttarakhand';
import WestBengal from './WestBengal';
import Rajasthan from './Rajasthan';
import Punjab from './Punjab';
import Odisha from './Odisha';
import Meghalaya from './Meghalaya';
import Manipur from './Manipur';
import Hevents from './Hevents';
import AboutUs from './aboutus';
import Faqs from './Faqs';
import ContemporaryEvents from './contemporaryEvents';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function Website(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path='/home' element={<Home/>} />
        <Route path='/changepassword' element={<Changepassword/>} />
        <Route path='/Diwali1' element={<Diwali/>} />
        <Route path='/Holi' element={<Holi/>} /> 
        <Route path='/Ramzan' element={<Ramzan/>} />
        <Route path='/Christmas' element={<Christmas/>} /> 
        <Route path='/FestivalCalender' element={<FestivalCalendar/>} /> 
        <Route path='/Myprofile' element={<MyProfile/>} />
        <Route path='/Tajmahal' element={<TajMahal/>} />
        <Route path='/RedFort' element={<RedFort/>} />
        <Route path='/JamaMasjid' element={<JamaMasjid/>} />
        <Route path='/ViewAll' element={<ViewAll/>} />
        <Route path='/BasilicaOfBomJesus' element={<BasilicaOfBomJesus/>} />
        <Route path='/andhra' element={<AP1/>}/> 
        <Route path='/aruna' element={<APP1/>}/>
        <Route path='/Bihar' element={<Bihar1/>}/>
        <Route path='/Assam' element={<Assam1/>}/>
        <Route path='/Chhattisgarh' element={<Chhattisgarh/>}/>
        <Route path='/Gujarat' element={<Gujarat/>}/>
        <Route path='/Goa' element={<Goa/>}/>
        <Route path='/HimachalPradesh' element={<HimachalPradesh/>}/>
        <Route path='/JammuAndKashmir' element={<JammuAndKashmir/>}/>
        <Route path='/Jharkhand' element={<Jharkhand/>}/>
        <Route path='/Karnataka' element={<Karnataka/>}/>
        <Route path='/Kerala' element={<Kerala/>}/>
        <Route path='/MadhyaPradesh' element={<MadhyaPradesh/>}/>
        <Route path='/Maharashtra' element={<Maharashtra/>}/>
        <Route path='/Telangana' element={<Telangana/>}/>
        <Route path='/Tamilnadu' element={<Tamilnadu/>}/>
        <Route path='/UttarPradesh' element={<UttarPradesh/>}/>
        <Route path='/Uttarakhand' element={<Uttarakhand/>}/>
        <Route path='/WestBengal' element={<WestBengal/>}/>
        <Route path='/Rajasthan' element={<Rajasthan/>}/>
        <Route path='/Punjab' element={<Punjab/>}/>
        <Route path='/Odisha' element={<Odisha/>}/>
        <Route path='/Meghalaya' element={<Meghalaya/>}/>
        <Route path='/Manipur' element={<Manipur/>}/>
        <Route path='/Hevents' element={<Hevents/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/Faqs' element={<Faqs/>}/>
        <Route path='/contemporaryEvents' element={<ContemporaryEvents/>}/>

      </Routes>
    </BrowserRouter>

    // <div className='full-height'>
    //   <Home/>
    //   <Login/>
    // </div>
  );
}

ReactDOM.render(<Website/>, document.getElementById('root'));