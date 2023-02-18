import Accordion from '../components/Accordion'

const AccordionPage = () => {

    const items = [
        {   
            id: 1,
            label: 'Header 1',
            content: 'Header 1 content'
        },
        {   
            id: 2,
            label: 'Header 2',
            content: 'Header 2 content'
        },
        {   
            id: 3,
            label: 'Header 3',
            content: 'Header 3 content'
        },
    ]

    return <Accordion items={items} />
    
}

export default AccordionPage