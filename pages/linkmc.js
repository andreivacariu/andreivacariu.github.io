import Head from "next/head";
import React, { useState } from 'react';
import { useSession, signIn } from "next-auth/react";
const { toast, snackbar } = require('tailwind-toast')


export default Login;

function Login() {
    
    const { data: profile } = useSession()
    
    const [data, setData] = useState({
        username: "",
        otp: ""
    })

    const { username, otp} = data;

    const changeHandler = e => {
        setData({ ...data, [e.target.name]: [e.target.value] });
    }
    const submitHandler = e => {
        e.preventDefault();
        fetch('http://129.151.135.15/api/v2/supersecretsection/' + data.username + '/' + data.otp)
            .then(response => response.json())
            .then(response => {
                if (response) { 
                console.log("suuccess");
            }
                else
                    toast().default('ERROR', 'Incorrect username or OTP!').with({
                        shape: 'pill',
                        duration: 4000,
                        speed: 1000,
                        positionX: 'center',
                        positionY: 'center',
                        color: 'bg-red-500',
                        fontColor: 'blue',
                        fontTone: 200
                    }).show()
                });
    }
    if (profile)
        fetch(`http://localhost:3000/api/v1/discord/${profile.profile.id}`)
            .then(response => {
                if (response)
                    response.json();
                else
                    console.log("no profile");
        })
        .then(response => console.log(response))
        .then(response => {
        });
    
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
                {!profile && (
                    <>
                        <div className="container mx-auto px-4 h-full">
                            <div className="flex content-center items-center justify-center h-full">
                                <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                            <div className="text-gray-500 text-center mb-3 font-bold">
                                                <br/>
                                                <large>Log in with Discord to access this feature!</large>
                                                <br />
                                                <small>You will be redirected to the Discord login page.</small>
                                            </div>

                                                <div className="text-center mt-6">
                                                    <button
                                                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                                                        type="button"
                                                    style={{ transition: "all .15s ease" }}
                                                    onClick={() => signIn("discord")}
                                                    >
                                                        {<span className="spinner-border spinner-border-sm mr-1"></span>}
                                                        Sign In
                                                    </button>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {profile && (
                    <>
                        <div className="container mx-auto px-4 h-full">
                            <div className="flex content-center items-center justify-center h-full">
                                <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                            <div className="text-gray-500 text-center mb-3 font-bold">
                                                <normal>Link your Minecraft Account to your Discord Account!</normal>
                                            </div>
                                            <form onSubmit={submitHandler}>
                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        Minecraft Username
                                                    </label>
                                                    <input
                                                        className={"border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"}
                                                        type="text" name="username" value={username} onChange={changeHandler}
                                                        style={{ transition: "all .15s ease" }}
                                                        placeholder="BobTheBuilder"

                                                    />
                                                </div>

                                                <div className="relative w-full mb-3">
                                                    <label
                                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                        htmlFor="grid-password"
                                                    >
                                                        One-Time-Code
                                                    </label>
                                                    <input
                                                        className={"border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"}
                                                        type="text" name="otp" value={otp} onChange={changeHandler}
                                                        placeholder="123 456"
                                                        style={{ transition: "all .15s ease" }}
                                                    />
                                                </div>

                                                <div className="text-center mt-6">
                                                    <button
                                                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                                                        type="submit" name="submit"
                                                        style={{ transition: "all .15s ease" }}
                                                    >
                                                        {<span className="spinner-border spinner-border-sm mr-1"></span>}
                                                        Sign In
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </>
                )}
                
                
            </div>
        );                                      
    
}

