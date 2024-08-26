
import {CIcon} from "@coreui/icons-react";
import {useTranslation} from 'react-i18next'
import {
    cilLanguage,
    cifGb,
    cifLk,
} from '@coreui/icons'
import {Dropdown} from "react-bootstrap";
export default function LanguageSelect() {
    const {i18n, t} = useTranslation()

    return(
        <div>
            <Dropdown className={'px-1'}>
                <Dropdown.Toggle variant="success" id="dropdown-basic" className={'pe-3'}>
                    <CIcon icon={cilLanguage} size="lg"/>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item
                        active={i18n.language === 'en'}
                        className="d-flex align-items-center"
                        as="button"
                        onClick={() => i18n.changeLanguage('en')}>
                        <CIcon className="me-2" icon={cifGb} size="lg"/>
                        English
                    </Dropdown.Item>
                    <Dropdown.Item
                        active={i18n.language === 'si'}
                        className="d-flex align-items-center"
                        as="button"
                        onClick={() => i18n.changeLanguage('si')}>
                        <CIcon className="me-2" icon={cifLk} size="lg"/> සිංහල
                    </Dropdown.Item>
                    <Dropdown.Item
                        active={i18n.language === 'ta'}
                        className="d-flex align-items-center"
                        as="button"
                        onClick={() => i18n.changeLanguage('ta')}>
                        <CIcon className="me-2" icon={cifLk} size="lg"/> தமிழ்
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )

}