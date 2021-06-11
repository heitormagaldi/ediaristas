import React from 'react';
import { PageTitleContainer, PageTitleStyled, PageSubTitleStyled } from './PageTitle.style';


interface PageTitleProps {
    title: string;
    subtitle?: string | JSX.Element; //opcional ? <- esse é o marcador
}
const PageTitle: React.FC<PageTitleProps> = (props) => {
    return (
        <div>
            <PageTitleContainer>
                <PageTitleStyled>{props.title}</PageTitleStyled>
                <PageSubTitleStyled>{props.subtitle}</PageSubTitleStyled>
            </PageTitleContainer>


        </div>
    );
}

export default PageTitle;