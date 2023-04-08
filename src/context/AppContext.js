import React, {createContext, useMemo, useContext, useState, useEffect} from 'react';

const ApiContext = createContext({})

export const ApiProvider = ({children}) => {


    const sendData = (data) => {

        

    }

    const memo = useMemo(() => ({
        sendData
    }), [])

    return <ApiContext.Provider value={memo}>
        {children}
    </ApiContext.Provider>
}

export default function useApi() {
    return useContext(ApiContext)
}