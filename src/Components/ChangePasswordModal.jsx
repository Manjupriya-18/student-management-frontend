import React from "react";

const ChangePasswordModal = ({

show,

setShow,

passwords,

setPasswords,

updatePassword

}) => {

if(!show) return null;

return(

<div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

<div className="bg-white w-[500px] rounded-2xl p-8 shadow-lg">

<h2 className="text-3xl font-bold mb-6">

Change Password

</h2>

<div className="space-y-5">

<input

type="password"

placeholder="Current Password"

value={passwords.currentPassword}

onChange={(e)=>

setPasswords({

...passwords,

currentPassword:e.target.value

})

}

className="w-full border p-4 rounded-xl"

/>

<input

type="password"

placeholder="New Password"

value={passwords.newPassword}

onChange={(e)=>

setPasswords({

...passwords,

newPassword:e.target.value

})

}

className="w-full border p-4 rounded-xl"

/>

<input

type="password"

placeholder="Confirm Password"

value={passwords.confirmPassword}

onChange={(e)=>

setPasswords({

...passwords,

confirmPassword:e.target.value

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

onClick={updatePassword}

className="bg-blue-600 text-white px-5 py-2 rounded-xl"

>

Update

</button>

</div>

</div>

</div>

</div>

);

};

export default ChangePasswordModal;