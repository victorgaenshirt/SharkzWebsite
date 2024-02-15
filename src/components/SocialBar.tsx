import React from "react";
import {Link} from "react-router-dom";
import {InstagramOutlined, LinkedinOutlined, TikTokOutlined, YoutubeOutlined} from "@ant-design/icons";


export const SocialBar: React.FC = () => {
    return (
        <div className={"bg-primary"}>
            <ul className={"grid grid-cols-4 py-5 justify-center"}>
                <Link to={"/"}
                      className={"text-dimWhite justify-self-center"}>
                    <InstagramOutlined className={"text-2xl sm:text-4xl"}/>
                </Link>
                <Link to={"/"}
                      className={"text-dimWhite justify-self-center"}>
                    <TikTokOutlined className={"text-2xl sm:text-4xl"}/>
                </Link>
                <Link to={"/"}
                      className={"text-dimWhite justify-self-center"}>
                    <LinkedinOutlined className={"text-2xl sm:text-4xl"}/>
                </Link>
                <Link to={"/"}
                      className={"text-dimWhite justify-self-center"}>
                    <YoutubeOutlined className={"text-2xl sm:text-4xl"}/>
                </Link>
            </ul>
        </div>
    )
}