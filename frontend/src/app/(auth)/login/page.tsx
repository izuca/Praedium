'use client'

import Button from "@/components/button"
import Hero from "@/components/hero"

export default function Login(){
    return(
        
        <div className="bg-white p-8 w-96">
        <h1 className="text-2xl font-serif mb-4">Faça login</h1>
        <form>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded"/>
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
                <input type="password" id="password" name="password" className="mt-1 p-2 w-full border"/>
            </div>
            <button type="submit" className="bg-orange text-white-900 px-4 py-2 hover:bg-black">Entrar</button>
        </form>

        
    </div>
    )
}