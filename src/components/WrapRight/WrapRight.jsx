import LinkInternal from "@/components/LinkInternal/LinkInternal";
import LinkLiterasi from "@/components/LinkLiterasi/LinkLiterasi";
import Profil from "@/components/Profil/Profil";

const WrapRight = (any) => {
    return(
        <div className="wrap-right">
            <div className="wrap-profil">
                <h2>Ka. UPT PUSTAKA</h2>
                <Profil/>
                <p>Dr. Muhammad, S.T., M.Sc </p>
            </div>

            <div className="wrap-internal">

            <div className="text-link">
                <h2>Link Internal</h2>
            </div>
            <div className="wrap-2">
                <LinkInternal/>
            </div>
            </div>

            <div className="wrap-literasi">
            <div className="text-link">
                <h2>Link Literasi</h2>
            </div>
            <div className="wrap-2">
                <LinkLiterasi/>
            </div>
            
        </div>
    </div>  
    )
}

export default WrapRight;