import { useTranslation } from 'react-i18next'
import Accordion from 'react-bootstrap/Accordion';

const FrequentlyAskedQuestions = () => {

    const { t } = useTranslation()

    // 
    // 

    return (
        <div className="container align-items-center text-center" data-aos="flip-right">
            <h1> {t('titleFAQ')}</h1>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        {t('FAQquestion1')}
                    </Accordion.Header>
                    <Accordion.Body>
                        {t('FAQAnswer1')}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                    {t('FAQquestion2')}
                    </Accordion.Header>
                    <Accordion.Body>
                    {t('FAQAnswer2')}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default FrequentlyAskedQuestions