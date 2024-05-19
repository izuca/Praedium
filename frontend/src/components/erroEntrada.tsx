const ErroEntrada = ({ messages = [], className = '' }:any) => (
    <>
        {messages.length > 0 && (
            <>
                {messages.map((message:any, index:any) => (
                    <p
                        className={`${className} text-sm text-orange w-60`}
                        key={index}>
                        {message}
                    </p>
                ))}
            </>
        )}
    </>
)

export default ErroEntrada
