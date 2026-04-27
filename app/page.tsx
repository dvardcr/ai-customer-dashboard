"use client";

import {useEffect, useState} from "react";
import type {Session} from "@supabase/supabase-js";
import {supabase} from "@/lib/supabase";
import {AuthForm} from "@/components/AuthForm";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Loader2, Brain} from "lucide-react";

interface Customer {
	id: string;
	email: string;
	name: string;
	total_spent: number;
	last_active: string;
	support_tickets: number;
}

interface AIAnalysis {
	risk_score: number;
	reason: string;
	action_items: string[];
}

export default function Home() {
	const [session, setSession] = useState<Session | null>(null);
	const [customers, setCustomers] = useState<Customer[]>([]);
	const [loading, setLoading] = useState(true);
	const [analyzing, setAnalyzing] = useState<string | null>(null);
	const [analysisResults, setAnalysisResults] = useState<
		Record<string, AIAnalysis>
	>({});

	useEffect(() => {
		supabase.auth.getSession().then(({data: {session}}) => {
			setSession(session);
			if (session) fetchCustomers();
			setLoading(false);
		});

		const {
			data: {subscription},
		} = supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
			if (session) fetchCustomers();
		});

		return () => subscription.unsubscribe();
	}, []);

	const fetchCustomers = async () => {
		const {data, error} = await supabase
			.from("customers")
			.select("*")
			.order("total_spent", {ascending: false});

		if (!error && data) setCustomers(data);
	};

	const handleLogout = async () => {
		await supabase.auth.signOut();
		setSession(null);
		setCustomers([]);
		setAnalysisResults({});
	};

	const analyzeCustomer = async (customer: Customer) => {
		setAnalyzing(customer.id);

		try {
			const response = await fetch("/api/ai/churn-risk", {
				method: "POST",
				headers: {"Content-Type": "application/json"},
				body: JSON.stringify({customer}),
			});

			const analysis = await response.json();
			setAnalysisResults((prev) => ({...prev, [customer.id]: analysis}));
		} catch (error) {
			console.error("Analysis failed:", error);
		} finally {
			setAnalyzing(null);
		}
	};

	const getRiskColor = (score: number) => {
		if (score >= 7) return "text-red-600 bg-red-50";
		if (score >= 4) return "text-yellow-600 bg-yellow-50";
		return "text-green-600 bg-green-50";
	};

	if (loading)
		return (
			<div className='flex justify-center items-center h-screen'>
				Loading...
			</div>
		);

	if (!session) return <AuthForm />;

	return (
		<div className='p-8'>
			<div className='flex justify-between items-center mb-8'>
				<div>
					<h1 className='text-3xl font-bold'>Customer Success Dashboard</h1>
					<p className='text-gray-500 mt-1'>AI-powered churn risk analysis</p>
				</div>
				<Button onClick={handleLogout} variant='outline'>
					Logout
				</Button>
			</div>

			<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
				{customers.map((customer) => {
					const analysis = analysisResults[customer.id];
					const isAnalyzing = analyzing === customer.id;

					return (
						<Card key={customer.id} className='flex flex-col'>
							<CardHeader>
								<CardTitle>{customer.name}</CardTitle>
								<div className='text-sm text-gray-500'>{customer.email}</div>
							</CardHeader>
							<CardContent className='flex-1'>
								<div className='space-y-3'>
									{/* Customer Stats */}
									<div className='flex justify-between'>
										<span className='font-semibold'>Total Spent:</span>
										<span>${customer.total_spent.toLocaleString()}</span>
									</div>
									<div className='flex justify-between'>
										<span className='font-semibold'>Last Active:</span>
										<span>
											{new Date(customer.last_active).toLocaleDateString()}
										</span>
									</div>
									<div className='flex justify-between'>
										<span className='font-semibold'>Support Tickets:</span>
										<span>{customer.support_tickets}</span>
									</div>

									{/* AI Analysis Section */}
									<div className='mt-4 pt-4 border-t'>
										{!analysis && !isAnalyzing && (
											<Button
												onClick={() => analyzeCustomer(customer)}
												variant='outline'
												className='w-full'
											>
												<Brain className='w-4 h-4 mr-2' />
												Run AI Risk Analysis
											</Button>
										)}

										{isAnalyzing && (
											<Button disabled className='w-full'>
												<Loader2 className='w-4 h-4 mr-2 animate-spin' />
												Analyzing...
											</Button>
										)}

										{analysis && (
											<div className='space-y-3'>
												<div
													className={`p-3 rounded-lg ${getRiskColor(analysis.risk_score)}`}
												>
													<div className='font-bold'>
														Risk Score: {analysis.risk_score}/10
													</div>
													<div className='text-sm mt-1'>{analysis.reason}</div>
												</div>
												<div>
													<div className='font-semibold mb-2'>
														Action Items:
													</div>
													<ul className='list-disc list-inside space-y-1 text-sm'>
														{analysis.action_items?.map((item, idx) => (
															<li key={idx}>{item}</li>
														))}
													</ul>
												</div>
											</div>
										)}
									</div>
								</div>
							</CardContent>
						</Card>
					);
				})}
			</div>
		</div>
	);
}
