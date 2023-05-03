import styled from 'styled-components'


const UlFooter = styled.ul`
@media(min-width: 1115px){
    max-width: 450px;
}
`


const LiFooter = styled.li`
padding-top: 10px;
text-decoration:none;
list-style:none;
p{
    font-size: 14px;
    cursor: pointer;
}
`

const UlSearch = styled.ul`
        position: absolute;
        @media(max-width: 992px) {
            top: 240px;
            left: 16px;
        }
        top: 70px;
        width: 280px;

        padding: 15px;
        background-color: white;
        border-radius: 3px;
        right: 12px;
        border: 1px solid gray;

        &:empty {
            display: none;
        }
        li {
            padding: 5px;
            list-style: none !important;
            cursor: pointer;

            &:hover {
                background-color: aliceblue;
            }
        }
`


export { UlFooter, LiFooter, UlSearch }


