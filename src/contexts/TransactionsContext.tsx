import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../libs/axios";

interface createTransactionInput {
    description:string;
    price:number;
    category : string;
    type : 'income' | 'outcome'
   
   }
   
interface Transaction{

        id:number;
        description: string;
        type: 'income' | 'outcome';
        price: number;
        category: string;
        createdAt: string;
    }

interface TransactionContextType{

        transactions:Transaction[];
    fetchTransactions: (query?:string) => Promise<void>;
    createTransaction: (data: createTransactionInput) => Promise<void>

}

interface TransactionsProviderProps{
    children : ReactNode;
}


// eslint-disable-next-line react-refresh/only-export-components
export const TransactionsContext = createContext({} as TransactionContextType)


export function TransactionsProvider({ children }: TransactionsProviderProps ){


    const [transactions, setTransactions] = useState<Transaction[]>([])
    
         async function fetchTransactions ( query ?: string ) {

            const response = await api.get('transaction',{
                params: {
                    _sort: 'createdAt',
                    _order: 'desc',
                    q : query,
                }   
            })
    
            setTransactions((response).data)
         }
        async function createTransaction (data: createTransactionInput) {
            const { description, price, category, type } = data;

            const response = await api.post('transaction', {
                description,
                price,
                category,
                type,
                createdAt:  new Date(), 
            })
            
            setTransactions(state => [response.data,...state ])
        }
            
         useEffect(() => {
    
            fetchTransactions();
    
         },[] )


    return(

        <TransactionsContext.Provider value={{

            transactions,
            fetchTransactions,
            createTransaction,

            
            }}>

            {children}

        </TransactionsContext.Provider>
    )
}