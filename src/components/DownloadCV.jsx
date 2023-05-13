import ExampleDoc from '../assets/files/denizsarikas_2023_cv.pdf'

import { useTranslation } from 'react-i18next'

const DownloadCV = () => {

    const {t} = useTranslation()


    return (
        <div className="container align-items-center text-center">
            <h1>
            {t('titleDownloadCV')}
            </h1>
            <div>
                <a href={ExampleDoc} download="MyExampleDoc" target='_blank' rel='noreferrer'>
                    <button type="button" className="btn btn-success">Download CV</button>
                </a>
            </div>
        </div>
    )
}

export default DownloadCV