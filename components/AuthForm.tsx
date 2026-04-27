"use client";

import {useState} from "react";
import {supabase} from "@/lib/supabase";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export function AuthForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [isLogin, setIsLogin] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError(null);

		let result;
		if (isLogin) {
			result = await supabase.auth.signInWithPassword({email, password});
		} else {
			result = await supabase.auth.signUp({
				email,
				password,
				options: {emailRedirectTo: `${window.location.origin}/auth/callback`},
			});
		}

		if (result.error) {
			setError(result.error.message);
		} else if (!isLogin && result.data.user) {
			setError("Check your email to confirm your account!");
		}

		setLoading(false);
	};

	return (
		<div className='flex min-h-screen items-center justify-center bg-gray-50'>
			<Card className='w-[400px]'>
				<CardHeader>
					<CardTitle>{isLogin ? "Login" : "Sign Up"}</CardTitle>
					<CardDescription>
						{isLogin
							? "Access your customer success dashboard"
							: "Create an account to get started"}
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className='space-y-4'>
						<div>
							<Input
								type='email'
								placeholder='Email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>
						<div>
							<Input
								type='password'
								placeholder='Password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>
						{error && <div className='text-red-500 text-sm'>{error}</div>}
						<Button type='submit' className='w-full' disabled={loading}>
							{loading ? "Loading..." : isLogin ? "Login" : "Sign Up"}
						</Button>
						<div className='text-center text-sm'>
							<button
								type='button'
								onClick={() => setIsLogin(!isLogin)}
								className='text-blue-600 hover:underline'
							>
								{isLogin
									? "Don't have an account? Sign Up"
									: "Already have an account? Login"}
							</button>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
