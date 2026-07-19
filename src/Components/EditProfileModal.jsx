import React from "react";

const EditProfileModal = ({

show,

setShow,

profile,

setProfile,

updateProfile

}) => {

if(!show) return null;

return(

<div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

<div className="bg-white w-[500px] rounded-2xl p-8 shadow-lg">

<h2 className="text-3xl font-bold mb-6">

Edit Profile

</h2>

<div className="space-y-5">

<input

type="text"

placeholder="Name"

value={profile.name}

onChange={(e)=>

setProfile({

...profile,

name:e.target.value

})

}

className="w-full border p-4 rounded-xl"

/>
<input

type="text"

placeholder="Email"

value={profile.email}

onChange={(e)=>

setProfile({

...profile,

email:e.target.value

})

}

className="w-full border p-4 rounded-xl"

/>

<input

type="text"

placeholder="Phone Number"

value={profile.phoneNumber}

onChange={(e)=>

setProfile({

...profile,

phoneNumber:e.target.value

})

}

className="w-full border p-4 rounded-xl"

/>

<textarea

rows="4"

placeholder="About Me"

value={profile.aboutMe}

onChange={(e)=>

setProfile({

...profile,

aboutMe:e.target.value

})

}

className="w-full border p-4 rounded-xl"

/>

<div className="flex justify-end gap-4">

<button

onClick={()=>setShow(false)}

className="px-5 py-2"

>

Cancel

</button>

<button

onClick={updateProfile}

className="bg-purple-600 text-white px-5 py-2 rounded-xl"

>

Save

</button>

</div>

</div>

</div>

</div>

);

};

export default EditProfileModal;