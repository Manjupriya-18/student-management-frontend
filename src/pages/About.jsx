import React from "react";

const About=()=>{

return(

<section

id="about"

className="py-24"

>

<div className="max-w-7xl mx-auto px-10">

<h1 className="text-5xl font-bold text-center mb-16">

About EduManage

</h1>

<div className="grid md:grid-cols-3 gap-8">

<div className="bg-blue-50 p-8 rounded-3xl">

<h2 className="text-3xl mb-4">

🎯 Mission

</h2>

<p>

Simplify educational administration.

</p>

</div>

<div className="bg-green-50 p-8 rounded-3xl">

<h2 className="text-3xl mb-4">

⚡ Goal

</h2>

<p>

Reduce manual work and save time.

</p>

</div>

<div className="bg-purple-50 p-8 rounded-3xl">

<h2 className="text-3xl mb-4">

🌍 Vision

</h2>

<p>

Build a smarter digital campus.

</p>

</div>

</div>

</div>

</section>

);

};

export default About;