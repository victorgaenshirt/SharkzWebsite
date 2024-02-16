import React from "react";
import {Link} from "react-router-dom";
import {InstagramOutlined, LinkedinOutlined, TikTokOutlined, YoutubeOutlined} from "@ant-design/icons";

export const SocialBar: React.FC = () => {
    return (
        <div className={"bg-primary pb-8"}>
            <ul className={"flex flex-1 justify-center"}>
                <Link to={"https://www.instagram.com/sharkzmedia/"}
                      className={"text-dimWhite justify-self-center hover:text-offBlue"}>
                    <InstagramOutlined className={"text-2xl sm:text-4xl px-4"}/>
                </Link>
                <Link to={"https://www.tiktok.com/@sharkz.media"}
                      className={"text-dimWhite justify-self-center hover:text-offBlue"}>
                    <TikTokOutlined className={"text-2xl sm:text-4xl px-4"}/>
                </Link>
                <Link to={"https://www.linkedin.com/company/sharkz-media/"}
                      className={"text-dimWhite justify-self-center hover:text-offBlue"}>
                    <LinkedinOutlined className={"text-2xl sm:text-4xl px-4"}/>
                </Link>
                <Link to={"https://www.youtube.com/@Sharkz-Media"}
                      className={"text-dimWhite justify-self-center hover:text-offBlue"}>
                    <YoutubeOutlined className={"text-2xl sm:text-4xl px-4"}/>
                </Link>
            </ul>
        </div>
    )
}
