import * as S from "./EasterEgg.styles";
import { useRef, useState } from "react";
import toothlessDancing from "./../../assets/image/toothless-dancing.gif";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import toothlessDancingSong from "./../../assets/image/toothless-dancing.mp4";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

export const EasterEgg: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement>(null); // 오디오 요소를 위한 ref

    const [isEasterEggOpen, setIsEasterEggOpen] = useState(false);
    const [isVolumeOn, setIsVolumeOn] = useState(false);

    const toggleVolume = () => {
        setIsVolumeOn((prev) => !prev);

        if (audioRef.current) {
            if (isVolumeOn) {
                audioRef.current.muted = true;
            } else {
                if (audioRef.current.paused) {
                    audioRef.current.play(); // 오디오 재생 시도
                }
                audioRef.current.muted = false;
            }
        }
    };

    return (
        <S.MainWrapper isOpen={isEasterEggOpen}>
            <LiveHelpIcon
                onClick={() => {
                    setIsEasterEggOpen(true);
                }}
            />
            <S.ImageWrapper>
                <img
                    src={toothlessDancing}
                    onClick={() => {
                        setIsEasterEggOpen(false);
                    }}
                    alt="Dancing Toothless"
                />
                <S.ButtonWrapper onClick={toggleVolume}>
                    {isVolumeOn ? <VolumeUpIcon /> : <VolumeOffIcon />}
                </S.ButtonWrapper>
                <audio ref={audioRef} src={toothlessDancingSong} autoPlay loop muted={!isVolumeOn} />
            </S.ImageWrapper>
        </S.MainWrapper>
    );
};
