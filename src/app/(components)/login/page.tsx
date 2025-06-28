import Link from 'next/link'
import React from 'react'

function LoginPage() {
    return (
        <>
            <main className="min-h-screen flex items-center justify-center bg-neutral-100 px-4">
                <div className="w-full max-w-sm">
                    <h1 className="text-2xl font-semibold text-neutral-900 mb-6">Sign In</h1>

                    <form className="flex flex-col gap-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="px-3 py-2 border border-neutral-300 bg-white text-sm focus:outline-none focus:border-black"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="px-3 py-2 border border-neutral-300 bg-white text-sm focus:outline-none focus:border-black"
                        />
                        <button
                            type="submit"
                            className="bg-black text-white py-2 text-sm hover:bg-neutral-800 transition-colors"
                        >
                            Login
                        </button>
                    </form>

                    <p className="text-xs text-neutral-600 mt-4 text-center">
                        Don’t have an account? <Link href="/reg" className="underline">
                            Sign up
                        </Link>
                    </p>
                </div>
            </main>

        </>
    )
}

export default LoginPage