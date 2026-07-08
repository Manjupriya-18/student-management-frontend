import React from "react";

import {

FaUserGraduate,

FaBuilding,

FaUserShield,

FaChartBar,

FaSearch,

FaLock

}

from "react-icons/fa";

const features=[

{

icon:<FaUserGraduate size={40}/>,

title:"Student Management",

desc:"Add, update and manage student records."

},

{

icon:<FaBuilding size={40}/>,

title:"Department Management",

desc:"Organize departments efficiently."

},

{

icon:<FaUserShield size={40}/>,

title:"Admin Management",

desc:"Admins can create and manage other admins."

},

{

icon:<FaChartBar size={40}/>,

title:"Analytics Dashboard",

desc:"Monitor academic performance."

},

{

icon:<FaSearch size={40}/>,

title:"Smart Search",

desc:"Find students instantly."

},



];

const Features=()=>{

return(

<section

id="features"

className="py-24 bg-gray-50"

>

<div className="max-w-7xl mx-auto px-10">

<h1 className="text-5xl font-bold text-center mb-4">

Features

</h1>

<p className="text-center text-gray-500 mb-16">

Everything you need to manage your institution.

</p>

<div className="grid md:grid-cols-3 gap-8">

{

features.map((item,index)=>(

<div

key={index}

className="bg-white p-8 rounded-3xl shadow hover:-translate-y-2 transition"

>

<div className="text-blue-600 mb-6">

{item.icon}

</div>

<h2 className="text-2xl font-bold mb-4">

{item.title}

</h2>

<p className="text-gray-500">

{item.desc}

</p>

</div>

))

}

</div>

</div>

</section>

);

};

export default Features;