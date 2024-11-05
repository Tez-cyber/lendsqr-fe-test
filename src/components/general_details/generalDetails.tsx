import { User } from "../../utils/users"
import { EducationDetails } from "./educationDetails"
import { PersonalDetails } from "./personalDetails"


interface GeneralDetailsProps {
    userData: User | null
}
export const GeneralDetails = ({ userData }: GeneralDetailsProps) => {
    return (
        <div className="generalDetails">
            <PersonalDetails userData={userData} />
            <span className="generalDetails_seperator"></span>
            <EducationDetails userData={userData} />
            <span className="generalDetails_seperator"></span>
            <div className="generalDetails_social">
                <div className="generalDetails_head">Socials</div>
                <div className="generalDetails_details">
                    <div className="generalDetails_details_info">
                        <p className="generalDetails_details_info_minihead">twitter</p>
                        <p className="generalDetails_details_info_minidetails">{userData?.twitter}</p>
                    </div>
                    <div className="generalDetails_details_info">
                        <p className="generalDetails_details_info_minihead">facebook</p>
                        <p className="generalDetails_details_info_minidetails">{userData?.facebook}</p>
                    </div>
                    <div className="generalDetails_details_info">
                        <p className="generalDetails_details_info_minihead">instagram</p>
                        <p className="generalDetails_details_info_minidetails">{userData?.instagram}</p>
                    </div>
                </div>
            </div>
            <span className="generalDetails_seperator"></span>
            <div className="generalDetails_guarantor">
                <div className="generalDetails_head">Guarantor</div>
                <div className="generalDetails_details">
                    <div className="generalDetails_details_info">
                        <p className="generalDetails_details_info_minihead">full name</p>
                        <p className="generalDetails_details_info_minidetails">{userData?.guarantorName}</p>
                    </div>
                    <div className="generalDetails_details_info">
                        <p className="generalDetails_details_info_minihead">phone number</p>
                        <p className="generalDetails_details_info_minidetails">{userData?.guarantorMobile}</p>
                    </div>
                    <div className="generalDetails_details_info">
                        <p className="generalDetails_details_info_minihead">email address</p>
                        <p className="generalDetails_details_info_minidetails">{userData?.guarantorMail}</p>
                    </div>
                    <div className="generalDetails_details_info">
                        <p className="generalDetails_details_info_minihead">relationship</p>
                        <p className="generalDetails_details_info_minidetails">{userData?.guarantorRelationship}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
