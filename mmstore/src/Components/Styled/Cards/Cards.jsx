import styled from 'styled-components'



const divContainerSearch = styled.div`
width: 100%;
height: 300px;

.row{
    border: 2px solid black;
    width: 100%;
    display: flex;
    flex-direction: row;

    .left{
        width: 30%;
        img{
        width: 100%;
        width: 100%;
        }
    }
    .right{
        width: 70%;
        display: flex;
        flex-direction: row;
        .titles{
            width: 70%;
        }
        .options{
            width: 30%;
        }
    }
}


`


export {divContainerSearch}