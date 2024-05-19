import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from 'react';
import { useAuth } from '@/hooks/auth';

interface AuthContextType {
	user: any;
	isAuthenticated: boolean;
	login: (props: any) => Promise<void>;
	logout: () => Promise<void>;
	register: (props: any) => Promise<void>;
	forgotPassword: (props: any) => Promise<void>;
	resetPassword: (props: any) => Promise<void>;
	resendEmailVerification: (props: any) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const {user,login,logout,register,forgotPassword,resetPassword,resendEmailVerification} = useAuth();
    const [isAuthenticated, setIsAuthenticated] = useState(!!user);

    useEffect(() =>{
        setIsAuthenticated(!!user);
    },[user])

    return(
        <AuthContext.Provider value={{user, isAuthenticated, login, logout, register, forgotPassword, resetPassword, resendEmailVerification }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthContext(): AuthContextType {
    const context = useContext(AuthContext);
    if(context === undefined){
        throw new Error('useAuthContext deve ser usado com um AuthProvider');
    }
    return context;
}