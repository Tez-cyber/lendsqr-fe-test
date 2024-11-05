import { User } from "../../utils/users"

interface EducaDetailsProps {
    userData: User | null
}
export const EducationDetails = ({ userData }: EducaDetailsProps) => {
    return (
        <div className="generalDetails_education">
            <div className="generalDetails_head">Education and Employment</div>
            <div className="generalDetails_details">
                <div className="generalDetails_details_info">
                    <p className="generalDetails_details_info_minihead">level of education</p>
                    <p className="generalDetails_details_info_minidetails">{userData?.edLvl}</p>
                </div>
                <div className="generalDetails_details_info">
                    <p className="generalDetails_details_info_minihead">employment status</p>
                    <p className="generalDetails_details_info_minidetails">{userData?.employmentStatus}</p>
                </div>
                <div className="generalDetails_details_info">
                    <p className="generalDetails_details_info_minihead">sector of employment</p>
                    <p className="generalDetails_details_info_minidetails">{userData?.employmentSector}</p>
                </div>
                <div className="generalDetails_details_info">
                    <p className="generalDetails_details_info_minihead">duration of employment</p>
                    <p className="generalDetails_details_info_minidetails">{userData?.employmentDuration}</p>
                </div>
                <div className="generalDetails_details_info">
                    <p className="generalDetails_details_info_minihead">office email</p>
                    <p className="generalDetails_details_info_minidetails">{userData?.officeMail}</p>
                </div>
                <div className="generalDetails_details_info">
                    <p className="generalDetails_details_info_minihead">monthly income</p>
                    <p className="generalDetails_details_info_minidetails">{userData?.monthlyIncome}</p>
                </div>
                <div className="generalDetails_details_info">
                    <p className="generalDetails_details_info_minihead">loan repayment</p>
                    <p className="generalDetails_details_info_minidetails">{userData?.loanRepay}</p>
                </div>
            </div>
        </div>
    )
}
