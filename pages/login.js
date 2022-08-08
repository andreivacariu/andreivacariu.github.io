import Head from "next/head";
import { useRouter } from 'next/router';

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import { userService, alertService } from '../services';

export default Login;

function Login() {

    const router = useRouter();

    // form validation rules 
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit({ username, password }) {
        return userService.login(username, password)
            .then(() => {
                // get return url from query parameters or default to '/'
                const returnUrl = router.query.returnUrl || '/';
                router.push(returnUrl);
            })
            .catch(alertService.error);
    }
  return (
    <div className="pt-16">
      <Head>
        <link rel="icon" href="/Eternals.ico" />
        <meta property="og:title" content="Eternals Capes & Cosmetics" />
        <meta property="og:description" content="The free system for Minecraft Capes & Cosmetics, made for you." />
        <meta property="og:url" content="https://eternalscapes.com/" />
        <meta property="og:image" content="https://media.discordapp.net/attachments/537702731486330903/956533020796534784/da5c3c39bd9a2ef3097847270f6bf7bc.png" />
        <title>Login | Eternals Capes</title>
          </Head>
          <div className="container mx-auto px-4 h-full">
              <div className="flex content-center items-center justify-center h-full">
                  <div className="w-full lg:w-4/12 px-4">
                      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                              <div className="text-gray-500 text-center mb-3 font-bold">
                                  <normal>Or sign in with credentials</normal>
                              </div>
                              <form onSubmit={handleSubmit(onSubmit)}>
                                  <div className="relative w-full mb-3">
                                      <label
                                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                          htmlFor="grid-password"
                                      >
                                          Email
                                      </label>
                                      <input
                                          className={"border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" + `form-control ${errors.username ? 'is-invalid' : ''}`}
                                          name="username" type="text" {...register('username')} 
                                          style={{ transition: "all .15s ease" }}
                                          placeholder="BobTheBuilder"
                                          
                                      />
                                      <div className="invalid-feedback">{errors.username?.message}</div>
                                  </div>

                                  <div className="relative w-full mb-3">
                                      <label
                                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                          htmlFor="grid-password"
                                      >
                                          Password
                                      </label>
                                      <input
                                          type="password" {...register('password')}
                                          className={"border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" + `form-control ${errors.password ? 'is-invalid' : ''}`}
                                          placeholder="123 456"
                                          style={{ transition: "all .15s ease" }}
                                      />
                                      <div className="invalid-feedback">{errors.password?.message}</div>
                                  </div>
                                  <div>
                                      <label className="inline-flex items-center cursor-pointer">
                                          <input
                                              id="customCheckLogin"
                                              type="checkbox"
                                              className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                                              style={{ transition: "all .15s ease" }}
                                          />
                                          <span className="ml-2 text-sm font-semibold text-gray-700">
                                              Remember me
                                          </span>
                                      </label>
                                  </div>

                                  <div className="text-center mt-6">
                                      <button disabled={formState.isSubmitting}
                                          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                                          type="button"
                                          style={{ transition: "all .15s ease" }}
                                      >
                                          {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                          Sign In
                                      </button>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </div>

  );
}
