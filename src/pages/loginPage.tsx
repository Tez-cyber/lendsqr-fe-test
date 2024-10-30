


export const LoginPage = ({ type }: { type: string }) => {
    return (
        <main id={type} className="login">
            {/* =========== Left section with image */}
            <section className="login_firstSection">
                <div className="login_firstSection_content">
                    <div className="logo">
                        <img src="/logo.svg" alt="" />
                    </div>
                    <div className="login_img">
                        <img src="/login-img.svg" alt="" />
                    </div>
                </div>
            </section>
            {/* =========== Form section  ========= */}
            <section className="login_formSection">
                <div className="login_formSection_title">
                    <h2>Welcome!</h2>
                    <p>Enter details to login</p>
                </div>
                <form action="" className="login_formSection_form">
                    <div>
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Password" />
                    </div>
                    <div>
                        <span>forgot password?</span>
                    </div>
                    <div className="">
                        <button type='submit'>
                            log in
                        </button>
                    </div>
                </form>
            </section>
        </main>
    )
}
