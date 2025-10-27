import React from 'react'

export default function GlobalError() {
	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="text-center">
				<h1 className="text-2xl font-semibold">Something went wrong</h1>
				<p className="mt-2 text-sm text-muted-foreground">Please refresh or try again later.</p>
			</div>
		</div>
	)
}
