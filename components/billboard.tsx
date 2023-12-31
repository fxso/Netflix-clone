import React, { useCallback } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

import useBillboard from "@/hooks/useBillboard";
import PlayButton from "./playbutton";
import useInfoModal from "@/hooks/useInfoModal";

const Billboard = () => {

    const { data } = useBillboard();
    const { openModal } = useInfoModal();

    const handleOpen = useCallback(() => {
        openModal(data?.id);
    }, [openModal, data?.id]);

    return (
        <div className="relative h-[56.25vw]">
            <video
                className="
                    w-full
                    h-[56.25vw]
                    object-cover
                    brightness-[60%]
                " 
                autoPlay 
                muted 
                loop 
                poster={data?.thumbnailUrl} 
                src={data?.videoUrl}
            ></video>
            <div className="absolute top-[30%] ml-4 md:ml-16 md:top-[40%] ">
                <p className="text-white text-[25px] md:text-4xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
                    {data?.title}
                </p>
                <p className="text-white text-[10px] md:text-[15px] mt-3 md:mt-5 w-[70%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
                    {data?.description}
                </p>
                <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
                    <PlayButton movieId={data?.id} />
                    <button onClick={handleOpen} className="
                        bg-white
                        text-white
                        bg-opacity-30
                        rounded-md
                        py-1 md:py-2
                        px-2 md:px-4
                        w-auto
                        text-xs lg:text-lg
                        font-semibold
                        flex
                        flex-row
                        items-center
                        hover:bg-opacity-20
                        transition
                    ">
                        <AiOutlineInfoCircle className="mr-1" size={25} />
                        More Info
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Billboard;