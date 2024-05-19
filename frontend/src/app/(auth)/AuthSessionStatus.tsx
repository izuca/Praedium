const AuthSessionStatus = ({ status, className, ...props }: any) => {
	return (
		<>
			{status && (
				<div
					className={`${className} font-medium text-center text-sm text-orange`}
					{...props}
				>
					{status}
				</div>
			)}
		</>
	);
};

export default AuthSessionStatus;
