import styled from 'styled-components/macro'
import Logo from 'components/logo'

export default function Layout(props) {
    return (
        <StyledLayout>
            <header>
                <Logo />
            </header>
            <main>
                {props.children}
            </main>
            <footer>
                Copyright {new Date().getFullYear()}
            </footer>
        </StyledLayout>
    )
}

const StyledLayout = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    > header {
        flex: 0 0;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 1px 2px 2px rgba(0,0,0,0.2);
        padding: 10px 0;
    }
    > main {
        flex: 1 0;
        padding: 10px 0;
    }
    > footer {
        flex: 0 0;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: -1px -2px 2px rgba(0,0,0,0.1);
    }
`