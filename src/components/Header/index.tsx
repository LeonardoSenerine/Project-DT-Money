import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImg from '../../assets/Logo.png'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransaction } from "../NewTransaction";



export function Header(){
    return ( 
        <HeaderContainer>

            <HeaderContent>
                <img src={logoImg} alt="" />

                <Dialog.Root>

                    <Dialog.Trigger asChild>

                        <NewTransactionButton>Nova Transação</NewTransactionButton>

                    </Dialog.Trigger>

                    <NewTransaction/>

                </Dialog.Root>

            </HeaderContent>

        </HeaderContainer>
    )
}