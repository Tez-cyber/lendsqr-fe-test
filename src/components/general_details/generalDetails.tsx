import { EducationDetails } from "./educationDetails"
import { PersonalDetails } from "./personalDetails"

export const GeneralDetails = () => {
    return (
        <div className="generalDetails">
            <PersonalDetails />
            <span className="generalDetails_seperator"></span>
            <EducationDetails />
            <span className="generalDetails_seperator"></span>
            <div className="generalDetails_social">
                <div className="generalDetails_head">Socials</div>
                <div className="generalDetails_details">
                    <div className="generalDetails_details_info">
                        <p className="generalDetails_details_info_minihead">twitter</p>
                        <p className="generalDetails_details_info_minidetails">@grace_effiom</p>
                    </div>
                    <div className="generalDetails_details_info">
                        <p className="generalDetails_details_info_minihead">facebook</p>
                        <p className="generalDetails_details_info_minidetails">Grace Effiom</p>
                    </div>
                    <div className="generalDetails_details_info">
                        <p className="generalDetails_details_info_minihead">instagram</p>
                        <p className="generalDetails_details_info_minidetails">@grace_effiom</p>
                    </div>
                </div>
            </div>
            <span className="generalDetails_seperator"></span>
            <div className="generalDetails_guarantor">
                <div className="generalDetails_head">Guarantor</div>
                <div className="generalDetails_details">
                    <div className="generalDetails_details_info">
                        <p className="generalDetails_details_info_minihead">full name</p>
                        <p className="generalDetails_details_info_minidetails">Debby Ogana</p>
                    </div>
                    <div className="generalDetails_details_info">
                        <p className="generalDetails_details_info_minihead">phone number</p>
                        <p className="generalDetails_details_info_minidetails">07060780922</p>
                    </div>
                    <div className="generalDetails_details_info">
                        <p className="generalDetails_details_info_minihead">email address</p>
                        <p className="generalDetails_details_info_minidetails">debby@gmail.com</p>
                    </div>
                    <div className="generalDetails_details_info">
                        <p className="generalDetails_details_info_minihead">relationship</p>
                        <p className="generalDetails_details_info_minidetails">Sister</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
