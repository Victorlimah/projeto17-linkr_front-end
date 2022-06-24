import * as S from "./styles";
import { TailSpin } from "react-loader-spinner";

export default function Footer({setShowFooter, showFooter}) {
    return (
        <>
            <S.Footer id="lamp">
                {!showFooter ? <TailSpin color="#ffffff" height={30} width={30} /> : ""}
            </S.Footer>
        </>
    );
}