import Link from 'next/link'
import React from 'react'

function RegisterPage() {
    return (
        <>
            <main className="min-h-screen flex items-center justify-center bg-neutral-100 px-4">
                <div className="w-full max-w-sm">
                    <h1 className="text-2xl font-semibold text-neutral-900 mb-6">Create Account</h1>

                    <form className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Username"
                            className="px-3 py-2 border border-neutral-300 bg-white text-sm focus:outline-none focus:border-black"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            pattern='/^[\w.-]+@[\w.-]\.\w{2,}$'
                            className="px-3 py-2 border border-neutral-300 bg-white text-sm focus:outline-none focus:border-black"
                            required
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
                            Register
                        </button>
                    </form>

                    <p className="text-xs text-neutral-600 mt-4 text-center">
                        Already have an account? <Link href="/login" className="underline">
                            Sign in
                        </Link>
                    </p>
                </div>
            </main>
        </>
    )
}

export default RegisterPage