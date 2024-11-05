import { User } from "../../utils/users"

interface PersonalDetailsProps {
    userData: User | null
}
export const PersonalDetails = ({ userData }: PersonalDetailsProps) => {
    return (
        <div className="generalDetails_personal">
            <div className="generalDetails_head">Personal Information</div>
            <div className="generalDetails_details">
                <div className="generalDetails_details_info">
                    <p className="generalDetails_details_info_minihead">full name</p>
                    <p className="generalDetails_details_info_minidetails">{userData?.fullname}</p>
                </div>
                <div className="generalDetails_details_info">
                    <p className="generalDetails_details_info_minihead">phone number</p>
                    <p className="generalDetails_details_info_minidetails">07060780922</p>
                </div>
                <div className="generalDetails_details_info">
                    <p className="generalDetails_details_info_minihead">email address</p>
                    <p className="generalDetails_details_info_minidetails">grace@gmail.com</p>
                </div>
                <div className="generalDetails_details_info">
                    <p className="generalDetails_details_info_minihead">bvn</p>
                    <p className="generalDetails_details_info_minidetails">07060780922</p>
                </div>
                <div className="generalDetails_details_info">
                    <p className="generalDetails_details_info_minihead">gender</p>
                    <p className="generalDetails_details_info_minidetails">Female</p>
                </div>
                <div className="generalDetails_details_info">
                    <p className="generalDetails_details_info_minihead">marital status</p>
                    <p className="generalDetails_details_info_minidetails">Single</p>
                </div>
                <div className="generalDetails_details_info">
                    <p className="generalDetails_details_info_minihead">Children</p>
                    <p className="generalDetails_details_info_minidetails">None</p>
                </div>
                <div className="generalDetails_details_info">
                    <p className="generalDetails_details_info_minihead">type of residence</p>
                    <p className="generalDetails_details_info_minidetails">Parent’s Apartment</p>
                </div>
            </div>
        </div>
    )
}
