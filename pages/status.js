import Head from "next/head";
import React, { useState } from 'react';
import { useSession, signIn } from "next-auth/react";



export default Login;

function Login() {

    const { data: profile } = useSession()

    const [data, setData] = useState({
        username: "",
        otp: ""
    })

    const { username, otp } = data;

    const changeHandler = e => {
        setData({ ...data, [e.target.name]: [e.target.value] });
    }
    const submitHandler = e => {
        e.preventDefault();
        fetch('http://129.151.135.15/api/v2/supersecretsection/' + data.username + '/' + data.otp)
            .then(response => response.json())
            .then(response => console.log(response))
            .then(response => {
                if (response)
                    console.log("suuccess");
                else
                    console.log("not ggs");
            });
    }


    return (
        <div className="pt-16">
            <Head>
                <link rel="icon" href="/Eternals.ico" />
                <meta property="og:title" content="Eternals Capes & Cosmetics" />
                <meta property="og:description" content="The free system for Minecraft Capes & Cosmetics, made for you." />
                <meta property="og:url" content="https://eternalscapes.com/" />
                <meta property="og:image" content="https://media.discordapp.net/attachments/537702731486330903/956533020796534784/da5c3c39bd9a2ef3097847270f6bf7bc.png" />
                <title>Link MC | Eternals Capes</title>
            </Head>

            <section class="w-full px-8 py-16 xl:px-8">
                <div class="max-w-5xl mx-auto">
                    <div class="flex flex-col items-center md:flex-row">

                        <div class="w-full space-y-5 md:w-3/5 md:pr-16">
                            <p class="font-medium text-blue-500 uppercase"></p>
                            <h2 class="text-2xl font-extrabold leading-none text-white sm:text-3xl md:text-5xl">Systems Status</h2>
                            <p class="text-xl text-gray-100 md:pr-16">Check if any of our servers are offline.</p>
                        </div>

                        <div class="w-full mt-16 md:mt-0 md:w-2/5">
                            <div class="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                                <h3 class="mb-6 text-2xl font-medium text-center">System status</h3>
                                <h2 class="mb-6 text-2xl font-medium">Server 1 ONLINE</h2>
                                <h2 class="mb-6 text-2xl font-medium">Server 2 ONLINE</h2>
                                        <div class="block">
                                            <button class="w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg">Report downtime</button>
                                        </div>
                                        <br/>
                                    </div>
                            </div>

                        </div>
                    </div>
            </section>


        </div>
    );

}
