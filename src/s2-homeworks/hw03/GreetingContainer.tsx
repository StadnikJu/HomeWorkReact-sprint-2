import React, { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[]; 
    addUserCallback: (name: string) => void;
}

export const pureAddUser = (
    name: UserType["name"], 
    setError: Dispatch<SetStateAction<string>>, 
    setName: Dispatch<SetStateAction<string>>,
    addUserCallback: (name: string) => void) => {
    
    if(name.length === 0) {
        setError("Name empty");
    } else {
        addUserCallback(name);
        setName("");
    }
   
}

export const pureOnBlur = (name: UserType["name"], setError:  Dispatch<SetStateAction<string>>) => { 
    if(name.length === 0) {
        setError("Name empty");
    }
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: () => void) => { 
    if(e.key === "enter") {
        addUser();
    }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('');
    const [error, setError] = useState<string>('');

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { 
        const trimmName = e.currentTarget.value.trim();
        if(trimmName) {
            setName(trimmName);
        } else {
            error && setError('');
        }
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback);
    }

    const onBlur = () => {
        pureOnBlur(name, setError);
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length;
    const lastUserName = users.length !== 0 ? users[users.length-1].name : error;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
