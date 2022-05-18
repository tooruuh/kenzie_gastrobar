import { ModalHead } from './style';

import Button from '../Button';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { ModalContext } from '../../Providers/modal';

function ModalHeader () {
    const {setModalDelete} = useContext(ModalContext)
    const token = localStorage.getItem('@token')
    const history = useHistory()

    const handleNavigation = (path) => {
        localStorage.clear()
        return history.push(path)
    }

    return (
        <ModalHead>
            <Button onClick={() => handleNavigation('/login')} className={'button-exit button'}>Sair</Button>
            {
                token && <Button onClick={() => setModalDelete(true)} className={'button-header button'}>Funcionario</Button>
            }
        </ModalHead>
    )
}

export default ModalHeader