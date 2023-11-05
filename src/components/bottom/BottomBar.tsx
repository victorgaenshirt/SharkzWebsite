import {Checkliste} from "./Checkliste.tsx";
import {FAQ} from "./FAQ.tsx";
import {Ablauf} from "./Ablauf.tsx";
import {Impressum} from "./Impressum.tsx";
import {Datenschutz} from "./Datenschutz.tsx";
import {AGB} from "./AGB.tsx";

interface BottomBarProps {
    wrapperClasses? : string;
}

export const BottomBar: React.FC<BottomBarProps> = (props) => {
    const {wrapperClasses} = props;
    return (
        <div className={wrapperClasses}>
            <Checkliste />
            <FAQ />
            <Ablauf />
            <Impressum />
            <Datenschutz />
            <AGB />
        </div>
    )
}