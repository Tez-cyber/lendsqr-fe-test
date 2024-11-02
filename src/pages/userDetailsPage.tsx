import { Link } from "react-router-dom"

export const UserDetailsPage = () => {
    return (
        <div className="userDetails">
            <div className="userDetails_backLink">
                <img src="/icons/back.png" alt="Go back icon" />
                <Link to="/">
                    <p>Back to Users</p>
                </Link>
            </div>
            <div className="userDetails_heading">
                <p>
                    user details
                </p>
                <div className="userDetails_heading_btn">
                    <button className="btn btn_blacklist">blacklist user</button>
                    <button className="btn btn_activate">activate user</button>
                </div>
            </div>
            <div className="userDetails_profileHead">
                <div className="userDetails_profileHead_topSection">
                    <div className="profile_wrapper">
                        <img src="/icons/profile-img.png" alt="" />
                        <div className="">
                            <p className="profile_wrapper_name">Grace Effiom</p>
                            <p className="profile_wrapper_id">LSQFf587g90</p>
                        </div>
                    </div>
                    <span className="profile_bar"></span>
                    <div className="tier_wrapper">
                        <div className="tier_wrapper_tier">
                            <p>User's tier</p>
                            <div className="stars_wrapper">

                            </div>
                        </div>
                        <span className="profile_bar"></span>
                        <div className="bank_wrapper">
                            <p className="bank_wrapper_amt">#200,000.00</p>
                            <p className="bank_wrapper_details">
                                9912345678/Providus Bank
                            </p>
                        </div>
                    </div>
                </div>
                <div className="userDetails_profileHead_topBottom">

                </div>
            </div>
        </div>
    )
}
